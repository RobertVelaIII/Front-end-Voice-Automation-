"use client";

import { MainLayout } from "@/components/main-layout";

export default function About() {
  return (
    <MainLayout >
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-white">About Callify</h1>
        
        <div className="bg-white/90 p-6 rounded-lg shadow-md border border-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Purpose</h2>
          <p className="mb-4 text-gray-800">
            Callify is a specialized platform designed to automate phone calls for commercial applications. 
            Our technology enables businesses to streamline communication processes, enhance customer 
            engagement, and optimize operational efficiency through intelligent voice automation.
          </p>
        </div>

        <div className="bg-white/90 p-6 rounded-lg shadow-md border border-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">About Gold Strike Media, LLC</h2>
          <p className="mb-4 text-gray-800">
            Callify is a product of Gold Strike Media, LLC, a Texas-based digital marketing firm 
            headquartered in Mission, TX with a contact address in McAllen, TX.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2 text-gray-900">Headquarters</h3>
            <p className="text-gray-800">2575 E Griffin Pkwy, Suite 5</p>
            <p className="text-gray-800">Mission, TX</p>
          </div>
        </div>
        
        <div className="bg-white/90 p-6 rounded-lg shadow-md border border-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2 text-gray-900">Brand Development</h3>
              <p className="text-gray-800">Market research, competitive positioning, and brand alignment strategies.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 text-gray-900">Responsive Website Design</h3>
              <p className="text-gray-800">UX-driven, device-optimized web solutions for modern businesses.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 text-gray-900">SEO & Google Ads</h3>
              <p className="text-gray-800">Organic search optimization and paid ad strategies, including PPC and affiliate marketing.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 text-gray-900">Proven Results</h3>
              <p className="text-gray-800">ROI improvements, reducing marketing spend and boosting return on investment through analytics.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/90 p-6 rounded-lg shadow-md border border-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Projects Portfolio</h2>
          <p className="mb-4 text-gray-800">
            Our work spans across health, tech, retail, and CBD sectors with clients including:
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-800">
            <li>Ace Mart</li>
            <li>DrDicqie.com</li>
            <li>IsoGlow™</li>
            <li>Canna Molecular</li>
            <li>VidaRite™</li>
            <li>And many more</li>
          </ul>
        </div>
        
        <div className="bg-white/90 p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Leadership</h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-medium mb-2 text-gray-900">Ryan E. Rodkey</h3>
              <p className="font-medium text-gray-700">President</p>
              <p className="mt-2 text-gray-800">
                Ryan brings extensive experience in e-strategies for brands ranging from startups to Fortune 500s.
                His leadership has been instrumental in developing innovative digital solutions that drive measurable results for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
