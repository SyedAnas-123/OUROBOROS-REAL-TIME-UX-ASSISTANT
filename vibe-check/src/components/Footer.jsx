export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0">
          <h3 className="text-white font-bold text-lg">Ouroboros Inc.</h3>
          <p className="text-sm mt-1">Building the future of AI debugging.</p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Support</a>
        </div>

      </div>
      <div className="text-center text-xs mt-8 border-t border-slate-800 pt-4">
        &copy; {new Date().getFullYear()} Ouroboros Hackathon. All rights reserved.
      </div>
    </footer>
  );
}