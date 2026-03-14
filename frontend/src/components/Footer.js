import { useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import FAQModal from "./FAQModal";

export default function Footer(){

  const [faqOpen,setFaqOpen] = useState(false);

  return (
    <footer className="border-t border-white/10 bg-black pb-16 md:pb-0">

      <div className="max-w-6xl mx-auto px-4 h-8 flex items-center justify-between text-xs text-zinc-400">

        <button
          onClick={()=>setFaqOpen(true)}
          className="hover:text-white transition"
        >
          GYIK
        </button>

        <span className="text-[11px] text-zinc-500">
          © 2026 Tuning Találkozó
        </span>

        <div className="flex items-center gap-4">

          <a href="https://www.facebook.com/groups/4334237516897172/?ref=share&mibextid=wwXIfr&rdid=Wt00ZOegN3ALIY2U&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1AkwWT4jbW%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <Facebook size={14}/>
          </a>

          <a href="https://www.instagram.com/danika_77" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <Instagram size={14}/>
          </a>

          <a href="https://tiktok.com/@daniika_77" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            TikTok
          </a>

        </div>

      </div>

      <FAQModal open={faqOpen} onClose={()=>setFaqOpen(false)} />

    </footer>
  );
}