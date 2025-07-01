const dummyThreads = [
  {
    id: "1",
    name: "The Browntrust",
    lastMessage: "Rishan Kishor shared a post.",
    time: "Jun 25",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    unread: true,
    messages: [
      {
        fromMe: false,
        text: "This area will blur/blind a whole set of 35-40M with no money and some will still argue",
        time: "09:00",
        type: "text",
      },
      {
        fromMe: true,
        text: "This is pretty good",
        time: "09:01",
        type: "text",
      },
      {
        fromMe: false,
        text: "This is my favorite tweet",
        time: "09:02",
        type: "text",
      },
      {
        fromMe: false,
        text: "",
        time: "09:03",
        type: "image",
        image: "https://placehold.co/200x120/000/FFF?text=GenAI",
      },
      {
        fromMe: true,
        text: "anyone tried: genai cli",
        time: "09:04",
        type: "text",
      },
    ],
  },
  {
    id: "2",
    name: "Archie Sawarkar",
    lastMessage: "shared a post.",
    time: "Jun 25",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    unread: false,
    messages: [
      { fromMe: false, text: "Hey, how are you?", time: "10:00", type: "text" },
      { fromMe: true, text: "I am good, thanks!", time: "10:01", type: "text" },
      {
        fromMe: false,
        text: "Check out this photo!",
        time: "10:02",
        type: "text",
      },
      {
        fromMe: false,
        text: "",
        time: "10:03",
        type: "image",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "3",
    name: "Sedona Halliday",
    lastMessage: "Let's catch up soon!",
    time: "Jun 24",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    unread: true,
    messages: [
      {
        fromMe: false,
        text: "Let's catch up soon!",
        time: "11:00",
        type: "text",
      },
      {
        fromMe: true,
        text: "Absolutely! When are you free?",
        time: "11:01",
        type: "text",
      },
    ],
  },
  {
    id: "4",
    name: "GINKI, Meet Patel",
    lastMessage: "Shared a meme 😂",
    time: "Jun 23",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    unread: false,
    messages: [
      { fromMe: false, text: "Shared a meme 😂", time: "12:00", type: "text" },
      {
        fromMe: false,
        text: "",
        time: "12:01",
        type: "image",
        image: "https://placehold.co/150x100/222/FFF?text=Meme",
      },
      {
        fromMe: true,
        text: "Haha, that's hilarious!",
        time: "12:02",
        type: "text",
      },
    ],
  },
  {
    id: "5",
    name: "Evan Moore",
    lastMessage: "Let's meet at 5pm.",
    time: "Jun 22",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    unread: false,
    messages: [
      {
        fromMe: false,
        text: "Let's meet at 5pm.",
        time: "13:00",
        type: "text",
      },
      { fromMe: true, text: "See you then!", time: "13:01", type: "text" },
    ],
  },
];

export default dummyThreads;