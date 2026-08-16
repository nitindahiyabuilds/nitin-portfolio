import React, { useState } from 'react';
import { motion } from 'framer-motion';

const apiBase = import.meta.env.VITE_API_URL ?? ''

const ContactTerminal = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  // Update state dynamically as user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch(`${apiBase || 'http://localhost:3001'}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: 'Message sent successfully!', error: null });
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
      } else {
        setStatus({ loading: false, success: null, error: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ loading: false, success: null, error: 'Failed to connect to the server.' });
    }
  };

  const socialLinks = [
    { name: 'GITHUB', href: 'https://github.com/nitindahiyabuilds' },
    { name: 'X / TWITTER', href: 'https://x.com/nitin_builds?s=11' },
    { name: 'MEDIUM', href: 'https://medium.com/@nitin_dahiya' },
    { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/nitin-dahiya-9848b3258/' },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Terminal Header Bar */}
        <div className="bg-[#111] border border-white/10 rounded-t-md p-3 flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 bg-red-500/50 rounded-full" />
            <div className="w-2.5 h-2.5 bg-yellow-500/50 rounded-full" />
            <div className="w-2.5 h-2.5 bg-green-500/50 rounded-full" />
          </div>
          <span className="text-white/20 text-[9px] font-mono tracking-[0.3em] uppercase">
            transmission_protocol.sh
          </span>
          <div className="w-10" />
        </div>

        {/* Terminal Body */}
        <div className="bg-[#080808] border-x border-b border-white/10 rounded-b-md p-8 font-mono relative">
          
          <div className="mb-8 text-white/40 text-[11px] leading-relaxed">
            <span className="text-accent">root@nitin:~$</span> ./initiate_contact <br />
            Status: Secure Channel Established <br />
            Encryption: AES-256 Enabled <br />
            ------------------------------------------
          </div>

          <div className="mb-8 border border-white/10 bg-white/[0.02] p-4">
            <p className="text-[10px] uppercase tracking-[0.26em] text-white/40 mb-2">REMOTE — OPEN TO WORKING WITH PEOPLE EVERYWHERE</p>
            <p className="text-sm text-white/70 leading-relaxed">
              Always open to interesting conversations, ideas and people building things.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.24em] text-white/70 border-b border-white/15 pb-1 transition-colors hover:text-white hover:border-accent"
              >
                {link.name}
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Input */}
            <div className="group">
              <label className="text-white/30 text-[10px] uppercase tracking-widest block mb-2 group-focus-within:text-white transition-colors">
                01_Identify_User (Name)
              </label>
              <div className="flex items-center gap-3">
                <span className="text-accent">{`>`}</span>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent border-none outline-none text-white w-full text-sm" 
                  placeholder="enter_alias..."
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="group">
              <label className="text-white/30 text-[10px] uppercase tracking-widest block mb-2 group-focus-within:text-white transition-colors">
                02_Return_Coordinates (Email)
              </label>
              <div className="flex items-center gap-3">
                <span className="text-accent">{`>`}</span>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border-none outline-none text-white w-full text-sm" 
                  placeholder="user@domain.com"
                  required
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="group">
              <label className="text-white/30 text-[10px] uppercase tracking-widest block mb-2 group-focus-within:text-white transition-colors">
                03_Payload_Details (Message)
              </label>
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">{`>`}</span>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-transparent border-none outline-none text-white w-full text-sm resize-none" 
                  placeholder="type_your_message_here..."
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end">
              <div className="text-[9px] text-white/10 uppercase tracking-widest font-mono">
                System_Time: {new Date().toLocaleTimeString()}
              </div>
              <div className="flex flex-col items-end gap-2">
                {status.error && (
                  <p className="text-[9px] text-red-400/90 font-mono uppercase tracking-widest max-w-xs text-right">
                    {status.error}
                  </p>
                )}
                <motion.button
                  whileHover={{ scale: status.loading ? 1 : 1.05 }}
                  whileTap={{ scale: status.loading ? 1 : 0.95 }}
                  type="submit"
                  disabled={status.loading}
                  className="bg-white text-black px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-colors disabled:opacity-50 disabled:pointer-events-none"
                >
                  {status.loading ? 'Transmitting…' : 'Execute_Transfer'}
                </motion.button>
              </div>
            </div>
          </form>

          {/* Success State Overlay */}
          {status.success && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center z-20 text-center p-6"
            >
              <div className="w-12 h-12 border border-accent rounded-full flex items-center justify-center mb-4">
                <div className="w-2 h-2 bg-accent animate-ping" />
              </div>
              <h4 className="text-white font-mono text-sm uppercase tracking-[0.5em] mb-2">Transmission_Sent</h4>
              <p className="text-white/40 text-[10px] uppercase font-mono tracking-widest">Payload received. standby for response.</p>
              <button 
                type="button"
                onClick={() => setStatus({ loading: false, success: null, error: null })}
                className="mt-8 text-[9px] text-accent underline uppercase tracking-widest"
              >
                Send_New_Packet
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactTerminal;