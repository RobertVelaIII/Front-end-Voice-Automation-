"use client";

import { MainLayout } from "@/components/main-layout";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [website, setWebsite] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };
  
  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Call initiated for ${name} (${phoneNumber}) from ${website}`);
  };
  
  const resetForm = () => {
    setWebsite("");
    setName("");
    setPhoneNumber("");
    setStep(0);
  };
  
  // Determine if the current step is complete
  const isStepComplete = () => {
    switch (step) {
      case 0: return website.trim() !== "";
      case 1: return name.trim() !== "";
      case 2: return phoneNumber.trim() !== "";
      default: return false;
    }
  };

  return (
    <MainLayout showSidebar={false}>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/videos/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay to ensure content remains visible */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative w-full max-w-md mx-auto z-10">
          {/* Notification Container */}
          <div className="absolute z-10 top-[25%] left-1/2 transform -translate-x-1/2 w-[85%] overflow-hidden shadow-xl rounded-xl">
            {/* Notification header - lighter section */}
            <div className="p-4 flex items-start bg-gray-200/80">
              {/* App icon */}
              <div className="w-12 h-12 mr-3 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/152logo.png"
                  alt="Callify Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* App info */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-base text-black">Try Callify's AI</h3>
                  <span className="text-xs text-gray-600">9:41 AM</span>
                </div>
                <p className="text-sm text-gray-700 mt-0.5">Natural feelings conversations!</p>
              </div>
            </div>
            
            {/* Form content - changes based on step */}
            <div className="px-4 pt-6 pb-4 bg-gray-400/70">
              {step === 0 && (
                <div className="space-y-4">
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="Enter Company Website"
                    className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-700 text-base focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-400"
                  />
                  <button
                    onClick={handleNext}
                    disabled={!isStepComplete()}
                    className={`w-full p-4 rounded-lg text-white font-medium text-base transition-all ${isStepComplete() ? 'bg-black' : 'bg-gray-500'}`}
                  >
                    Next
                  </button>
                </div>
              )}
              
              {step === 1 && (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name"
                    className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-700 text-base focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-400"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={handlePrevious}
                      className="w-1/3 p-4 bg-gray-400 rounded-lg text-black font-medium text-base transition-all"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!isStepComplete()}
                      className={`w-2/3 p-4 rounded-lg text-white font-medium text-base transition-all ${isStepComplete() ? 'bg-black' : 'bg-gray-500'}`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-4">
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter Phone Number"
                    className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-700 text-base focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-400"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={handlePrevious}
                      className="w-1/3 p-4 bg-gray-400 rounded-lg text-black font-medium text-base transition-all"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!isStepComplete()}
                      className={`w-2/3 p-4 rounded-lg text-white font-medium text-base transition-all ${isStepComplete() ? 'bg-black' : 'bg-gray-500'}`}
                    >
                      Let's Talk
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* iPhone Image */}
          <div className="relative w-full">
            <Image
              src="/images/iPhone.png"
              alt="iPhone Mockup"
              width={500}
              height={1000}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
