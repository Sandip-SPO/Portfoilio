import type { JSX } from "react/jsx-runtime";
import { FaGithub,FaLinkedin} from "react-icons/fa";

export default function Contact():JSX.Element{
    return(
        
  <section id="contact" className="py-20 bg-transparent">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left side - contact info */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm font-medium border border-white/30 mb-4">
            <i className="fas fa-paper-plane"></i> <span>Let's connect</span>
          </div>
          <h3 className="text-3xl font-bold text-white">Have a project in mind?</h3>
          <p className="text-white/80 mt-3 mb-5">
            Let's turn your idea into a high-performance web solution. I'm available for freelance and full‑time collaborations.
          </p>
          <div className="flex flex-col gap-3">
            
            <div className="flex items-center gap-3 text-white/80 cursor-pointer">
              
              <FaGithub className="fab fa-github w-5 text-white"/>
              <a href="https://github.com/Sandip-SPO">https://github.com/Sandip-SPO</a>
              
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <FaLinkedin className="fab fa-linkedin w-5 text-blue-300"/>
              <a href="https://www.linkedin.com/in/sandip-porey-45ab02323/">https://www.linkedin.com/in/sandip</a>
              
            </div>
          </div>
        </div>

        {/* Right side - form */}
        <div className="flex-1 w-full">
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your name" 
              className="w-full px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <input type="text" 
              placeholder="Purpose of connect" 
              className="w-full px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            ></input>
            <textarea 
              rows={3} 
              placeholder="Tell me about your project..." 
              className="w-full px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            ></textarea>
            <button 
              type="button" 
              className="bg-white/20 backdrop-blur-sm text-white w-full py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 shadow-md border border-white/30 flex items-center justify-center gap-2"
            >
              Send message <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}