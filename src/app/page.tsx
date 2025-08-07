"use client";

import { MainLayout } from "@/components/main-layout";
import Image from "next/image";
import { useState, useEffect } from "react";
import { validateUrl, normalizeUrl } from "@/lib/url-validator";

export default function Home() {
  const [step, setStep] = useState(0);
  const [website, setWebsite] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [analysisResult, setAnalysisResult] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState("");
  const [urlError, setUrlError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [callSent, setCallSent] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  
  const handleNext = () => {
    // If this is the website step, validate the URL first
    if (step === 0) {
      // Validate the URL
      const { isValid, errorMessage } = validateUrl(website);
      
      if (!isValid) {
        setUrlError(errorMessage || "Invalid URL");
        return;
      }
      
      // URL is valid, normalize it
      const normalizedUrl = normalizeUrl(website);
      setWebsite(normalizedUrl);
      setUrlError("");
      
      // Immediately move to the next step
      setStep(step + 1);
      
      // Start website analysis when moving from website step
      setIsAnalyzing(true);
      setAnalysisError("");
      setAnalysisComplete(false);
      
      // Run the analysis in the background
      fetch('https://api-wsbax2crfa-uc.a.run.app/website-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          websiteUrl: normalizedUrl
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Website analysis result:', data);
        setAnalysisResult(JSON.stringify(data, null, 2));
        setAnalysisComplete(true);
      })
      .catch(error => {
        console.error('Error analyzing website:', error);
        setAnalysisError('Failed to analyze website. Please try again.');
      })
      .finally(() => {
        setIsAnalyzing(false);
      });
    }
  };
  
  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // If analysis is not complete yet, wait for it
      if (!analysisComplete && isAnalyzing) {
        // Show a message that we're waiting for analysis
        alert("Please wait while we analyze the website. This will just take a moment...");
        setIsSubmitting(false);
        return;
      }
      
      // Proceed with call initiation
      const response = await fetch('https://api-wsbax2crfa-uc.a.run.app/call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          websiteUrl: website,  // Using the parameter name expected by the backend
          name: name,          // Using the parameter name expected by the backend
          phoneNumber: phoneNumber  // Using the parameter name expected by the backend
        })
      });
      
      const data = await response.json();
      console.log('Call initiation result:', data);
      
      // Show success message on button
      setCallSent(true);
      
      // Wait 3 seconds before resetting the form
      setTimeout(() => {
        resetForm();
        setCallSent(false);
      }, 3000);
    } catch (error) {
      console.error('Error initiating call:', error);
      alert('Failed to initiate call. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
  
  // Handle website input change
  const handleWebsiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWebsite(value);
    
    // Clear error when user starts typing again
    if (urlError) {
      setUrlError("");
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
                  <div className="space-y-1">
                    <input
                      type="url"
                      value={website}
                      onChange={handleWebsiteChange}
                      placeholder="Enter Company Website (e.g., https://example.com)"
                      className={`w-full p-4 bg-white border ${urlError ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-700 text-base focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-400`}
                    />
                    {urlError && (
                      <p className="text-red-500 text-sm">{urlError}</p>
                    )}
                  </div>
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
                      disabled={!isStepComplete() || isSubmitting}
                      className={`w-2/3 p-4 rounded-lg text-white font-medium text-base transition-all relative ${isStepComplete() && !isSubmitting ? 'bg-black' : 'bg-gray-500'}`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="opacity-0">Let's Talk</span>
                          <span className="absolute inset-0 flex items-center justify-center">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </span>
                        </>
                      ) : callSent ? (
                        <>
                          <span className="flex items-center justify-center">
                            <svg className="h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Call Sent!
                          </span>
                        </>
                      ) : (
                        "Let's Talk"
                      )}
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
