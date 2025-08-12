"use client"

export default function CommunityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section id="hero" className="bg-neutral-50 dark:bg-neutral-800 py-20 px-4 rounded-xl flex items-center mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl text-neutral-900 dark:text-neutral-100 mb-6">Join Our Community</h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl mx-auto">
            We're a small, passionate team working around the clock to build something amazing. Your feedback shapes our future, and together we're creating the next generation of call management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-neutral-900 dark:bg-neutral-200 text-white dark:text-neutral-900 px-8 py-3 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-300 transition-colors">
              <i className="fa-solid fa-comments mr-2"></i>
              Share Feedback
            </button>
            <button className="border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-200 px-8 py-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
              <i className="fa-solid fa-bug mr-2"></i>
              Report Bug
            </button>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section id="team-values" className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 mb-4">Built by People, For People</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Every line of code, every feature, every improvement comes from our dedication to serving you better.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800">
              <div className="w-16 h-16 bg-neutral-800 dark:bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-clock text-white dark:text-neutral-800 text-xl"></i>
              </div>
              <h3 className="text-xl text-neutral-900 dark:text-neutral-100 mb-3">Always Working</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Our small team is constantly pushing updates, fixing bugs, and implementing your suggestions. We never stop improving.
              </p>
            </div>
            
            <div className="text-center p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800">
              <div className="w-16 h-16 bg-neutral-800 dark:bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-heart text-white dark:text-neutral-800 text-xl"></i>
              </div>
              <h3 className="text-xl text-neutral-900 dark:text-neutral-100 mb-3">Your Voice Matters</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Every piece of feedback is reviewed daily. Your experience and suggestions directly influence our roadmap.
              </p>
            </div>
            
            <div className="text-center p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800">
              <div className="w-16 h-16 bg-neutral-800 dark:bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-rocket text-white dark:text-neutral-800 text-xl"></i>
              </div>
              <h3 className="text-xl text-neutral-900 dark:text-neutral-100 mb-3">Exciting Future</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                We're building something revolutionary. Join us on this journey as we transform how you manage your calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Platforms Section */}
      <section id="community-platforms" className="bg-neutral-50 dark:bg-neutral-800 py-16 px-4 rounded-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 mb-4">Connect With Us</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
            Join our growing community across multiple platforms. Share ideas, get help, and connect with other users.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-lg border border-neutral-200 dark:border-neutral-600 hover:border-neutral-300 dark:hover:border-neutral-500 transition-colors group cursor-pointer">
              <div className="w-16 h-16 bg-neutral-800 dark:bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-black dark:group-hover:bg-neutral-800">
                <i className="fa-brands fa-discord text-white text-2xl"></i>
              </div>
              <h3 className="text-xl text-neutral-900 dark:text-neutral-100 mb-2">Discord</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">Real-time discussions, support, and community events</p>
              <span className="text-neutral-900 dark:text-neutral-200">Join Discord →</span>
            </div>
            
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-lg border border-neutral-200 dark:border-neutral-600 hover:border-neutral-300 dark:hover:border-neutral-500 transition-colors group cursor-pointer">
              <div className="w-16 h-16 bg-neutral-800 dark:bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-black dark:group-hover:bg-neutral-800">
                <i className="fa-brands fa-whatsapp text-white text-2xl"></i>
              </div>
              <h3 className="text-xl text-neutral-900 dark:text-neutral-100 mb-2">WhatsApp</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">Quick updates, tips, and direct communication</p>
              <span className="text-neutral-900 dark:text-neutral-200">Join WhatsApp →</span>
            </div>
            
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-lg border border-neutral-200 dark:border-neutral-600 hover:border-neutral-300 dark:hover:border-neutral-500 transition-colors group cursor-pointer">
              <div className="w-16 h-16 bg-neutral-800 dark:bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-black dark:group-hover:bg-neutral-800">
                <i className="fa-brands fa-telegram text-white text-2xl"></i>
              </div>
              <h3 className="text-xl text-neutral-900 dark:text-neutral-100 mb-2">Telegram</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">Announcements, beta features, and community polls</p>
              <span className="text-neutral-900 dark:text-neutral-200">Join Telegram →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Process Section */}
      <section id="feedback-process" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 mb-4">How We Handle Your Feedback</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Transparency in our process - here's exactly how your input reaches us and gets implemented.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-neutral-900 dark:bg-neutral-200 text-white dark:text-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4 text-lg">1</div>
              <h3 className="text-neutral-900 dark:text-neutral-100 mb-2">Submit</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Share your feedback through any of our channels</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-neutral-900 dark:bg-neutral-200 text-white dark:text-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4 text-lg">2</div>
              <h3 className="text-neutral-900 dark:text-neutral-100 mb-2">Daily Review</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Our team reviews every submission within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-neutral-900 dark:bg-neutral-200 text-white dark:text-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4 text-lg">3</div>
              <h3 className="text-neutral-900 dark:text-neutral-100 mb-2">Prioritize</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">We categorize and prioritize based on impact and feasibility</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-neutral-900 dark:bg-neutral-200 text-white dark:text-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4 text-lg">4</div>
              <h3 className="text-neutral-900 dark:text-neutral-100 mb-2">Implement</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Updates are pushed regularly with your improvements</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-neutral-900 dark:bg-neutral-800 py-16 px-4 rounded-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-white dark:text-neutral-100 mb-4">Ready to Shape the Future?</h2>
          <p className="text-lg text-neutral-300 dark:text-neutral-400 mb-8">
            Your input today becomes tomorrow's features. Join thousands of users helping us build the perfect call management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white dark:bg-neutral-200 text-neutral-900 dark:text-neutral-800 px-8 py-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-300 transition-colors">
              <i className="fa-solid fa-paper-plane mr-2"></i>
              Send Feedback Now
            </button>
            <button className="border border-neutral-600 dark:border-neutral-500 text-white dark:text-neutral-200 px-8 py-3 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors">
              <i className="fa-solid fa-users mr-2"></i>
              Join Community
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}