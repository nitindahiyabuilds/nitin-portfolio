import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Resumefax({ onClose }) {
  // Lock background scroll when the modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex flex-col items-center overflow-y-auto py-16 px-4 cursor-none"
      onClick={onClose}
    >
      {/* Scrollable container */}
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl flex flex-col items-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating action controls */}
        <div className="w-full flex justify-between items-center mb-6 px-1">
          <div>
            <h2 className="text-white font-bold text-lg tracking-tight uppercase">Sujal Garg</h2>
            <p className="text-[10px] text-white/40 font-mono tracking-widest uppercase mt-0.5">// Developer_Resume</p>
          </div>
          <div className="flex gap-3">
            <a 
              href="/resume/SujalGarg_Resume.pdf" 
              download 
              className="text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 hover:bg-white hover:text-black transition-colors duration-300 px-4 py-2 rounded-sm cursor-none"
            >
              Download PDF
            </a>
            <button 
              onClick={onClose}
              className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white border border-white/10 hover:border-white/30 transition-colors duration-300 px-4 py-2 rounded-sm cursor-none bg-white/5"
            >
              Close
            </button>
          </div>
        </div>

        {/* The Resume Image */}
        <div className="w-full border border-white/10 rounded-sm overflow-hidden bg-white shadow-2xl">
          <img 
            src="/resume/SujalGarg_Resume.png" 
            alt="Sujal Garg Resume" 
            className="w-full h-auto object-contain block select-none"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}