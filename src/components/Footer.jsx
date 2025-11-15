export default function Footer(){
  return (
    <footer className="bg-black border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white/50 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Accrue Flow. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <span className="hover:text-white cursor-pointer transition">Security</span>
          <span className="hover:text-white cursor-pointer transition">Privacy</span>
          <span className="hover:text-white cursor-pointer transition">Terms</span>
        </div>
      </div>
    </footer>
  )
}
