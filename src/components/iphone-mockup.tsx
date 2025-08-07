"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface IPhoneMockupProps {
  className?: string
}

export function IPhoneMockup({ className }: IPhoneMockupProps) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would initiate a call or API request
    console.log("Phone number submitted:", phoneNumber)
    if (phoneNumber) {
      alert(`Call initiated for ${phoneNumber}`)
    } else {
      alert("Please enter a phone number")
    }
  }

  return (
    <div className={`relative max-w-[300px] mx-auto ${className}`}>
      {/* iPhone image */}
      <div className="relative">
        <Image
          src="/images/iPhone.png"
          alt="iPhone Mockup"
          width={300}
          height={600}
          className="w-full h-auto"
          priority
        />
        
        {/* Form overlay styled like iPhone UI */}
        <form 
          className="absolute inset-0 flex flex-col items-center justify-center px-6"
          onSubmit={handleSubmit}
        >
          <div className="w-full max-w-[85%] bg-white rounded-md overflow-hidden" style={{ marginTop: '-60px' }}>
            {/* App header */}
            <div className="bg-black text-white p-3 flex items-center">
              <div className="w-6 h-6 mr-2 flex items-center justify-center">
                <span className="text-xl font-bold">B</span>
              </div>
              <div>
                <h3 className="font-medium text-sm">Call Callify's AI</h3>
                <p className="text-xs opacity-80">Make your customers happy!</p>
              </div>
            </div>
            
            {/* Phone number input */}
            <div className="p-3 space-y-3">
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Enter Phone Number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black text-sm"
              />
              
              {/* Call button */}
              <button
                type="submit"
                className="w-full bg-black text-white font-medium py-2 rounded-md text-sm transition-transform active:scale-95"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
