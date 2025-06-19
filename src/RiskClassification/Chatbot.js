import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Breadcrumb from "../Navigation/Breadcrumb";
import ProgressContainer from "../Components/ProgressContainer";
import TaskExpander from "../Components/TaskExpander";
import InfoBox from "../Components/InfoBox";
import DisclaimerModal from "../Components/DisclaimerModal";
import { IoSend } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRobot } from "@fortawesome/free-solid-svg-icons";
import { FaSpinner } from "react-icons/fa"; // Add spinner icon
import "./Chatbot.css";
import logo from "../assets/CAI_logo_round.png";


const Chatbot = () => {
    const sessionIdRef = useRef(null);

    useEffect(() => {
        if (!sessionIdRef.current) {
            sessionIdRef.current = uuidv4();
        }
    }, []);

    const sessionId = sessionIdRef.current;
    const [showModal, setShowModal] = useState(true);
    const location = useLocation();
    const { productId, productName } = location.state || {}; // Get the product ID if passed
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const chatContainerRef = useRef(null);

    const breadcrumbItems = [
        { name: "Home", path: "/home", state:{} },
        { name: productName, path: `/product/${productId}`, state:{}},
        { name: "Risk Classification", path: `` },
    ];

    const [messages, setMessages] = useState(
        [   
            {
                sender: "bot",
                text: 'Hello! To assist you with your usecase classification under the EU AI Act, I need to gather some baseline information about your AI system. Could you please explain in your own words: \n\n1. What does your AI system do, and what specific use cases is it intended for? \n2. Could you describe the technical infrastructure of your AI system? \n3. What is your relationship to the AI system—are you developing it, buying it, importing it, or something else? \n4. Where are you located, and where is the AI system intended to be used geographically?'
            },
        ]);

    const [progress, setProgress] = useState(0);
    const [state, setState] = useState("start");
    const infoText = {
        "start" : "Enter your usecase description to start the assessment process.",
        "question" : "Please provide more information by answering the question(s).",
        "wait" : "Currently assessing. Please wait for the bot to complete the current task.",
        "complete" : "Classification complete. Please review the results"
    }

    const tasks = ["Baseline information", "AI system", "Entity", "Prohibited", "High risk"];
    const [taskStatus, setTaskStatus] = useState({
        "Baseline information": {
          title: "Collecting baseline information...",
          active: true,
          completed: false,
          content: "Currently gathering baseline information about your usecase...",
        },
        "AI system": {
          title: "Classifying AI system...",
          active: false,
          completed: false,
          content: "Assessing whether system classifies as an AI system...",
        },
        // "Scope": {
        //   title: "Classifying Scope...",
        //   active: false,
        //   completed: false,
        //   content: "Assessing the scope of the AI system...",
        // },
        "Entity": {
          title: "Classifying Entity...",
          active: false,
          completed: false,
          content: "Assessing the entity of the AI system...",
        },
        "Prohibited": {
          title: "Classifying Prohibited...",
          active: false,
          completed: false,
          content: "Assessing whether the AI system is prohibited....",
        },
        "High risk": {
          title: "Classifying High Risk...",
          active: false,
          completed: false,
          content: "Assessing whether the AI system classifies as high risk...",
        },
        // "Transparency": {
        //   title: "Classifying Transparency...",
        //   active: false,
        //   completed: false,
        //   content: "Assessing whether the AI system is transparent...",
        // },
    });

    const updateTask = (taskName, updates) => {
        setTaskStatus((prevStatus) => ({
            ...prevStatus,
            [taskName]: {
            ...prevStatus[taskName],
            ...updates, // Apply updates to the specific task
            },
        }));
    };

    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [nextTask, setNextTask] = useState(false);
    const [sendAutoPrompt, setSendAutoPrompt] = useState(false);


    // Scroll to the bottom whenever messages change
    useEffect(() => {
        if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);


    useEffect(() => {
        if (nextTask) {
            completeTask();
            setNextTask(false);
            if (currentTaskIndex < tasks.length - 1) {
                const nextIndex = currentTaskIndex + 1;
                setCurrentTaskIndex(nextIndex);
                const task = tasks[nextIndex];
                updateTask(task, { active: true });
                setSendAutoPrompt(true);
            }
        }
    }, [nextTask]);

    useEffect(() => {
        console.log("Activating next task..." + tasks[currentTaskIndex]);
    }, [currentTaskIndex]);


    useEffect(() => {
        if (sendAutoPrompt) {
            console.log("Sending auto prompt...");
            handleSend();
        }
    }, [sendAutoPrompt]);



    const completeTask = () => {
        const task = tasks[currentTaskIndex]; // Get current task      
        console.log("Completing task: " + task);
      
        // Update progress
        if (progress <= 100) {
            setProgress(progress + (100 / tasks.length));
        }
        // Update current task to completed
        updateTask(task, { active: false, completed: true });
    };


    const chat = async (message) => {
        setMessages((prevMessages) => [...prevMessages, { sender: "user", text: message }]);
        setInputValue(""); // Clear the input after sending
        setState("wait");
        console.log(`Sending message: ${message}`);
        console.log(`Session ID: ${sessionId}`);
        // Fetch items from the backend
        const response = await fetch('http://127.0.0.1:5000/chat?session_id=' + sessionId + '&prompt=' + message, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
        const output = data.response.output;
        const final_output = data.response.final_output;

        
        if (final_output) {
            console.log(output);
            const task = tasks[currentTaskIndex];
            updateTask(task, { content: output });
            if (currentTaskIndex === tasks.length - 1) {
                setState("complete");
                setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: "Your assessment is complete!" }]);
                completeTask();
                navigate(`/product/${productId}/risk-classification-results`, {state: { productId: productId, productName: productName, sessionId: sessionId }});
                return "complete"
            }
            setState("wait");
            setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: task + " assessment complete. Moving on with the next assessment." }]);
            return "next"
        }
        else {
            setState("question");
            setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: output }]);
            return "question"
        }
    }

    const handleSend = async() => {
      if (inputValue.trim()) {
        const message = inputValue;
        const result = await chat(message);
        if (result === "next") {
            setNextTask(true);
        }
      }
      else if (sendAutoPrompt) {
        setSendAutoPrompt(false);
        const result = await chat("Use the previously provided information for this assessment.");
        if (result === "next") {
            setNextTask(true);
        }
      }
    };

    const handleCloseModal = () => {
        setShowModal(false);
      };
    
    const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
    };

    return (
        <div className='layout'>
            <Sidebar />
            <div className='main-content'>
                <Header title="CERTIF.AI Compliance Cockpit" description="Risk Classification"/>
                <Breadcrumb breadcrumbItems={breadcrumbItems} />
                <div className="chatbot-container">
                    {showModal && (
                        <DisclaimerModal
                        onClose={handleCloseModal}
                        onBack={handleGoBack}
                        title={"Disclaimer"}
                        body={
                            <>
                            <p>
                                This chatbot does not serve as legal advice, it will only help with the reasoning for a classification under the EU AI Act. CertifAI does not claim to give any legal advice with this bot or take responsibility for incorrect classifications.
                            </p>
                            <p>
                                (Use at your own risk)
                            </p>
                          </>}
                        />
                    )}
                    <div className="chat-interface">
                        <div className="chat-header">
                            <img src={logo} alt="CertifAI Logo" className="chatbot-logo"/>
                            <h2>(Preview) CertifAI Usecase Classifier Chatbot</h2>
                        </div>
                        <div className="chat-history" ref={chatContainerRef}>
                            {messages.map((message, index) => (
                                <div
                                key={index}
                                className={`chat-message-container ${
                                  message.sender === "user" ? "user-container" : "bot-container"
                                }`}
                                >
                                    <div className="chat-avatar">
                                        <FontAwesomeIcon
                                        icon={message.sender === "user" ? faUser : faRobot}
                                        className={`avatar-icon ${
                                            message.sender === "user" ? "user-avatar-icon" : "bot-avatar-icon"
                                        }`}
                                        />
                                    </div>
                                    <div
                                    className={`chat-bubble ${
                                        message.sender === "user" ? "user-bubble" : "bot-bubble"
                                    }`}
                                    >
                                    <p>{message.text}</p>
                                    </div>
                              </div>
                            ))}
                        </div>
                        <div className="text-input-container">
                        <input
                            type="text"
                            placeholder="Please enter usecase description here."
                            className="text-input"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            disabled={state === "wait"} // Disable input when state is "wait"
                        />
                        <button 
                            className="input-icon" 
                            onClick={handleSend} 
                            disabled={state === "wait"} // Disable button when state is "wait"
                        >
                            {state === "wait" ? (
                                    <FaSpinner className="spinner-icon" /> // Show spinner when disabled
                                ) : (
                                    <IoSend />
                                )}
                        </button>
                        </div>
                    </div>
                    <div className="chatbot-results">
                        <div className="expander-group-chatbot">
                            <InfoBox text={infoText[state]} />
                            <ProgressContainer title="Classifying Usecase" percentage={progress} />
                            {tasks.map((task, index) => (
                                <TaskExpander
                                    key={index}
                                    title={taskStatus[task].title}
                                    isActive={taskStatus[task].active}
                                    completed={taskStatus[task].completed}
                                    content={taskStatus[task].content}
                            />))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
