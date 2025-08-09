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
    console.log('handleNext called, current step:', step);
    
    // For any step, just advance
    if (step === 0) {
      // For website step, do minimal validation
      if (!website.trim()) {
        setUrlError("Please enter a website");
        return;
      }
      
      // Normalize URL if possible
      try {
        const normalizedUrl = normalizeUrl(website);
        setWebsite(normalizedUrl);
      } catch (e) {
        // Just use as-is if normalization fails
        console.error('URL normalization failed:', e);
      }
      
      setUrlError("");
      
      // Move to the next step
      console.log('Moving to step 1');
      setStep(1); // Explicitly set to 1 instead of step + 1
      
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
          websiteUrl: website.trim().startsWith('http') ? website : `https://${website.trim()}`
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
    } else if (step === 1) {
      // For name step, just advance
      console.log('Moving to step 2');
      setStep(2); // Explicitly set to 2
    }
  };
  
  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  
  // Add state for call progress
  const [callStatus, setCallStatus] = useState<'idle' | 'in-progress' | 'sent'>('idle');

  // Function to initiate the call
  const initiateCall = async () => {
    try {
      // Proceed with call initiation
      const response = await fetch('https://api-wsbax2crfa-uc.a.run.app/call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          websiteUrl: website,
          name: name,
          phoneNumber: phoneNumber
        })
      });
      
      const data = await response.json();
      console.log('Call initiation result:', data);
      
      // Update call status to sent and show success message on button
      setCallStatus('sent');
      setCallSent(true);
      
      // Wait 3 seconds before resetting just the call status (not the entire form)
      setTimeout(() => {
        // Don't reset the form, just reset the call status
        setCallSent(false);
        setCallStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error initiating call:', error);
      setCallStatus('idle');
      alert('Failed to initiate call. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form submission
  // Use a ref to track if a call is pending to avoid duplicate calls
  const [pendingCall, setPendingCall] = useState(false);

  // Use an effect to trigger the call when analysis completes
  useEffect(() => {
    // If analysis is complete and we have a pending call, make the call
    if (analysisComplete && pendingCall) {
      console.log('Analysis complete detected, initiating call...');
      initiateCall();
      setPendingCall(false);
    }
  }, [analysisComplete, pendingCall]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setCallStatus('in-progress'); // Show "Call in progress" immediately
    
    try {
      // If analysis is not complete yet, set pendingCall flag
      if (!analysisComplete && isAnalyzing) {
        console.log('Analysis not complete yet, setting pending call flag...');
        setPendingCall(true);
        // The useEffect will handle initiating the call when analysis completes
      } else {
        // Analysis is already complete, proceed with the call immediately
        console.log('Analysis already complete, initiating call immediately...');
        initiateCall();
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      setCallStatus('idle');
      setIsSubmitting(false);
      setPendingCall(false);
      alert('Failed to process your request. Please try again.');
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
      case 0: {
        // Use the same validation logic as handleNext
        const { isValid } = validateUrl(website);
        return isValid;
      }
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
    <MainLayout >
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
                      placeholder="https://yourcompanywebsite.com"
                      className={`w-full p-4 bg-white border ${urlError ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-700 text-base focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-400`}
                    />
                    {urlError && (
                      <p className="text-red-500 text-sm">{urlError}</p>
                    )}
                  </div>
                  <button
                    onClick={handleNext}
                    className="w-full p-4 rounded-lg text-white font-medium text-base transition-all bg-black"
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
                      className="w-2/3 p-4 rounded-lg text-white font-medium text-base transition-all bg-black"
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
                      disabled={isSubmitting}
                      className="w-2/3 p-4 rounded-lg text-white font-medium text-base transition-all relative bg-black"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="opacity-0">Let's Talk</span>
                          <span className="absolute inset-0 flex items-center justify-center">
                            <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {callStatus === 'in-progress' ? 'Call in progress...' : ''}
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
