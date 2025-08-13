"use client";

import React, { useState, useEffect } from "react";
import Container from "../common/Container";
import Button from "../ui/Button";
import { FaArrowRight } from "react-icons/fa";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-11">

      <div className="z-[-1] h-full w-full bg-white absolute top-0 left-0">
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>




      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-transparent to-brand-accent/5 pointer-events-none"></div>
      <div
        className="h-full w-full absolute inset-0"
        style={{
          backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.15) 0%, transparent 60%), 
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 60%),
          radial-gradient(circle at 60% 80%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)
        `,
        }}
      ></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-96 xl:h-96 bg-brand-purple/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] bg-brand-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <Container size="xl">
        <div className="grid gap-6 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center relative z-10 py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-24 lg:grid-cols-2">
          {/* Hero Text - Enhanced Responsive */}
          <div
            className={`text-center lg:text-left transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <div className="inline-flex items-center px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-brand-purple-dark text-xs sm:text-sm lg:text-base font-semibold mb-4 sm:mb-6 lg:mb-8 xl:mb-10 animate-bounce hover:animate-none transition-all duration-300 hover:scale-105 cursor-pointer">
              ✨ AI-Powered Studio OS
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-extrabold leading-tight text-neutral-900 mb-3 sm:mb-4 lg:mb-6 xl:mb-8 font-serif tracking-tight">
              Your Studio Runs{" "}
              <span className="bg-gradient-to-r from-brand-purple via-purple-500 to-brand-accent bg-clip-text text-transparent animate-pulse">
                Itself
              </span>
            </h1>

            <p className="text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed text-neutral-800 mb-4 sm:mb-6 lg:mb-8 xl:mb-10 max-w-full lg:max-w-2xl xl:max-w-3xl mx-auto lg:mx-0">
              Stop drowning in admin. Our AI workforce handles bookings, retention, and growth while you focus on coaching.
            </p>

            <div className="flex flex-row xs:flex-row gap-3 sm:gap-4 lg:gap-5 xl:gap-6 items-center justify-center lg:justify-start mb-4 sm:mb-6 lg:mb-8 xl:mb-10">
              <Button
                variant="primary"
                size="lg"
                className="w-[150px] sm:w-[200px] text-sm sm:text-md xs:w-auto min-w-40 sm:min-w-48 lg:min-w-52 xl:min-w-56 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 active:scale-95"
              >
                <div className="flex flex-row flex-nowrap items-center gap-2">
                  <span className="whitespace-nowrap">Watch Demo</span>
                  <FaArrowRight />
                </div>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-[150px] sm:w-[200px] text-sm sm:text-md bg-black/40 hover:bg-black/70 !text-neutral-900 xs:w-auto min-w-40 sm:min-w-48 lg:min-w-52 xl:min-w-56 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 active:scale-95"
              >
                How it works
              </Button>
            </div>

            {/* Enhanced Social Proof Stats */}
            <div className="hidden lg:flex">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0">
                <div className="text-center lg:text-left transform transition-all duration-500 hover:scale-105 cursor-pointer p-2 sm:p-3 lg:p-4 rounded-xl hover:bg-white/10 hover:shadow-lg">
                  <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-brand-purple mb-1 leading-none">
                    200+
                  </div>
                  <div className="text-neutral-800 font-medium text-xs sm:text-sm lg:text-base leading-tight">
                    Studios transformed
                  </div>
                </div>
                <div
                  className="text-center lg:text-left transform transition-all duration-500 hover:scale-105 cursor-pointer p-2 sm:p-3 lg:p-4 rounded-xl hover:bg-white/10 hover:shadow-lg"
                  style={{ transitionDelay: "100ms" }}
                >
                  <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-brand-purple mb-1 leading-none">
                    £2.3M+
                  </div>
                  <div className="text-neutral-800 font-medium text-xs sm:text-sm lg:text-base leading-tight">
                    Extra revenue generated
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Visual  */}
          <div className="flex justify-center items-center w-full">
            <div
              className={`relative flex justify-center w-fit items-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="bg-white/85 backdrop-blur-xl border border-white/30 rounded-2xl sm:rounded-3xl lg:rounded-3xl xl:rounded-4xl p-0 shadow-2xl w-full max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-3xl hover:bg-white/70 group cursor-pointer">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between px-3 xs:px-4 sm:px-5 lg:px-6 xl:px-8 py-2.5 xs:py-3 sm:py-3.5 lg:py-4 xl:py-5 bg-neutral-50/80 backdrop-blur-sm border-b border-neutral-200/50 transition-all duration-300 group-hover:bg-neutral-50/90">
                  <div className="flex gap-1 xs:gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-red-400 transition-all duration-300 group-hover:scale-110"></span>
                    <span
                      className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-yellow-400 transition-all duration-300 group-hover:scale-110"
                      style={{ transitionDelay: "50ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-brand-success transition-all duration-300 group-hover:scale-110"
                      style={{ transitionDelay: "100ms" }}
                    ></span>
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base lg:text-lg font-semibold text-text-secondary transition-all duration-300 group-hover:text-brand-purple">
                    Wondrous Studio
                  </div>
                </div>

                {/* Enhanced Dashboard Content */}
                <div className="p-3 xs:p-4 sm:p-5 lg:p-6 xl:p-8">
                  {/* Metric Cards with Enhanced Hover Effects */}
                  <div className="border border-neutral-100 bg-gradient-to-r from-bg-secondary/60 to-bg-secondary/40 backdrop-blur-sm p-3 xs:p-3.5 sm:p-4 lg:p-5 xl:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl mb-3 xs:mb-3.5 sm:mb-4 lg:mb-5 flex items-center justify-between transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-brand-purple/10 hover:to-brand-accent/10 group/card cursor-pointer">
                    <div>
                      <div className="text-base xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-brand-purple transition-all duration-300 group-hover/card:scale-110">
                        £14,247
                      </div>
                      <div className="text-xs xs:text-sm lg:text-base text-neutral-700 mt-0.5 xs:mt-1">
                        Monthly Revenue
                      </div>
                    </div>
                    <div className="text-xs xs:text-sm sm:text-base lg:text-lg text-brand-success font-semibold transition-all duration-300 group-hover/card:scale-110 group-hover/card:text-brand-purple">
                      +32% ↗
                    </div>
                  </div>

                  <div
                    className="border border-neutral-100 bg-gradient-to-r from-bg-secondary/60 to-bg-secondary/40 backdrop-blur-sm p-3 xs:p-3.5 sm:p-4 lg:p-5 xl:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl mb-3 xs:mb-3.5 sm:mb-4 lg:mb-5 flex items-center justify-between transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-brand-accent/10 hover:to-brand-purple/10 group/card cursor-pointer"
                    style={{ transitionDelay: "100ms" }}
                  >
                    <div>
                      <div className="text-base xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-brand-purple transition-all duration-300 group-hover/card:scale-110">
                        94%
                      </div>
                      <div className="text-xs xs:text-sm lg:text-base text-neutral-700 mt-0.5 xs:mt-1">
                        Retention
                      </div>
                    </div>
                    <div className="text-xs xs:text-sm sm:text-base lg:text-lg text-brand-success font-semibold transition-all duration-300 group-hover/card:scale-110 group-hover/card:text-brand-accent">
                      +12% ↗
                    </div>
                  </div>

                  {/* Enhanced Activity Feed */}
                  <div className="mt-3 xs:mt-3.5 sm:mt-4 lg:mt-5 space-y-1.5 xs:space-y-2 sm:space-y-2.5 lg:space-y-3">
                    <div className="flex items-center gap-2 xs:gap-2.5 lg:gap-3 xl:gap-4 py-2 xs:py-2.5 lg:py-3 xl:py-4 border-b border-neutral-200/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-purple/5 hover:to-transparent hover:scale-102 rounded-lg px-2 cursor-pointer group/item">
                      <div className="text-sm xs:text-base lg:text-xl xl:text-2xl transition-all duration-300 group-hover/item:scale-125 group-hover/item:rotate-12">
                        🤖
                      </div>
                      <div className="flex-1 text-xs xs:text-sm lg:text-base xl:text-lg text-neutral-500">
                        <strong className="text-text-primary font-semibold transition-all duration-300 group-hover/item:text-brand-purple">
                          AI booked
                        </strong>{" "}
                        Sarah's PT session
                      </div>
                      <div className="text-xs lg:text-sm text-neutral-500">
                        2m ago
                      </div>
                    </div>
                    <div className="flex items-center gap-2 xs:gap-2.5 lg:gap-3 xl:gap-4 py-2 xs:py-2.5 lg:py-3 xl:py-4 border-b border-neutral-200/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-accent/5 hover:to-transparent hover:scale-102 rounded-lg px-2 cursor-pointer group/item">
                      <div className="text-sm xs:text-base lg:text-xl xl:text-2xl transition-all duration-300 group-hover/item:scale-125 group-hover/item:rotate-12">
                        💝
                      </div>
                      <div className="flex-1 text-xs xs:text-sm lg:text-base xl:text-lg text-neutral-700">
                        <strong className="text-text-primary font-semibold transition-all duration-300 group-hover/item:text-brand-accent">
                          Retention AI
                        </strong>{" "}
                        re-engaged James
                      </div>
                      <div className="text-xs lg:text-sm text-neutral-500">
                        5m ago
                      </div>
                    </div>
                    <div className="flex items-center gap-2 xs:gap-2.5 lg:gap-3 xl:gap-4 py-2 xs:py-2.5 lg:py-3 xl:py-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-purple/5 hover:to-transparent hover:scale-102 rounded-lg px-2 cursor-pointer group/item">
                      <div className="text-sm xs:text-base lg:text-xl xl:text-2xl transition-all duration-300 group-hover/item:scale-125 group-hover/item:rotate-12">
                        📊
                      </div>
                      <div className="flex-1 text-xs xs:text-sm lg:text-base xl:text-lg text-neutral-700">
                        <strong className="text-text-primary font-semibold transition-all duration-300 group-hover/item:text-brand-purple">
                          Insights
                        </strong>{" "}
                        suggest Tuesday 7pm slots
                      </div>
                      <div className="text-xs lg:text-sm text-neutral-500">
                        12m ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements - Desktop Only with better positioning */}
              <div className="absolute inset-0 pointer-events-none hidden xl:block 2xl:block">
                <div className="absolute top-1/4 -right-4 xl:-right-6 2xl:-right-8 flex items-center gap-1.5 xl:gap-2 2xl:gap-3 px-3 xl:px-4 2xl:px-5 py-2 xl:py-3 bg-neutral-400/10 backdrop-blur-xl border border-white/40 rounded-lg xl:rounded-xl text-sm xl:text-base font-semibold text-text-primary shadow-lg animate-float transition-all duration-500 hover:scale-105 hover:bg-white/40">
                  <span className="text-lg xl:text-xl 2xl:text-2xl">📈</span>
                  ⚡ 18hrs saved weekly
                </div>
                <div
                  className="absolute top-1/2 -left-6 xl:-left-8 2xl:-left-12 flex items-center gap-1.5 xl:gap-2 2xl:gap-3 px-3 xl:px-4 2xl:px-5 py-2 xl:py-3 bg-neutral-400/10 backdrop-blur-xl border border-white/40 rounded-lg xl:rounded-xl text-sm xl:text-base font-semibold text-text-primary shadow-lg animate-float transition-all duration-500 hover:scale-105 hover:bg-white/40"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-lg xl:text-xl 2xl:text-2xl">🤖</span>
                  🎯 Zero missed bookings
                </div>
                <div
                  className="absolute bottom-1/4 right-6 xl:right-8 2xl:right-12 flex items-center gap-1.5 xl:gap-2 2xl:gap-3 px-3 xl:px-4 2xl:px-5 py-2 xl:py-3 bg-neutral-400/10 backdrop-blur-xl border border-white/40 rounded-lg xl:rounded-xl text-sm xl:text-base font-semibold text-text-primary shadow-lg animate-float transition-all duration-500 hover:scale-105 hover:bg-white/40"
                  style={{ animationDelay: "2s" }}
                >
                  <span className="text-lg xl:text-xl 2xl:text-2xl">⚡</span>
                  💎 Premium member experience
                </div>
              </div>

              {/* Tablet Floating Elements - More visible positioning */}
              <div className="absolute inset-0 pointer-events-none hidden md:block lg:block xl:hidden">
                <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-2 bg-white/35 backdrop-blur-xl border border-white/50 rounded-lg text-sm font-semibold text-text-primary shadow-lg animate-float transition-all duration-300 hover:scale-105">
                  <span className="text-base">📈</span>
                  +£2K Revenue
                </div>
                <div
                  className="absolute top-1/2 -translate-y-1/2 left-6 flex items-center gap-2 px-3 py-2 bg-white/35 backdrop-blur-xl border border-white/50 rounded-lg text-sm font-semibold text-text-primary shadow-lg animate-float transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-base">🤖</span>
                  AI Working
                </div>
                <div
                  className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-2 bg-white/35 backdrop-blur-xl border border-white/50 rounded-lg text-sm font-semibold text-text-primary shadow-lg animate-float transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: "2s" }}
                >
                  <span className="text-base">⚡</span>
                  Auto-pilot
                </div>
              </div>

              {/* Mobile Floating Elements - Simplified and More Visible */}
              <div className="absolute inset-0 pointer-events-none block md:hidden">
                <div className="absolute top-10 md:top-4 right-4 flex items-center gap-1.5 px-3 py-2 bg-white/40 backdrop-blur-xl border border-white/60 rounded-lg text-xs font-semibold text-text-primary shadow-lg animate-float transition-all duration-300 hover:scale-105 z-10">
                  <span className="text-sm">📈</span>
                  +£2K
                </div>
                <div
                  className="absolute top-1/2 -translate-y-1/2 left-4 flex items-center gap-1.5 px-3 py-2 bg-white/40 backdrop-blur-xl border border-white/60 rounded-lg text-xs font-semibold text-text-primary shadow-lg animate-float transition-all duration-300 hover:scale-105 z-10"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-sm">🤖</span>
                  AI ON
                </div>
                <div
                  className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-2 bg-white/40 backdrop-blur-xl border border-white/60 rounded-lg text-xs font-semibold text-text-primary shadow-lg animate-float transition-all duration-300 hover:scale-105 z-10"
                  style={{ animationDelay: "2s" }}
                >
                  <span className="text-sm">⚡</span>
                  Auto
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:hidden">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left transform transition-all duration-500 hover:scale-105 cursor-pointer p-2 sm:p-3 lg:p-4 rounded-xl hover:bg-white/10 hover:shadow-lg">
                <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-brand-purple mb-1 leading-none">
                  200+
                </div>
                <div className="text-neutral-800 font-medium text-xs sm:text-sm lg:text-base leading-tight">
                  Studios transformed
                </div>
              </div>
              <div
                className="text-center lg:text-left transform transition-all duration-500 hover:scale-105 cursor-pointer p-2 sm:p-3 lg:p-4 rounded-xl hover:bg-white/10 hover:shadow-lg"
                style={{ transitionDelay: "100ms" }}
              >
                <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-brand-purple mb-1 leading-none">
                  £2.3M+
                </div>
                <div className="text-neutral-800 font-medium text-xs sm:text-sm lg:text-base leading-tight">
                  Extra revenue generated
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
