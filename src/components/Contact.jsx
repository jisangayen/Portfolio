import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Send } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com/jisangayen', icon: <Github size={20} />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/jisan-gayen/', icon: <Linkedin size={20} />, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/jisan__hoque/', icon: <Instagram size={20} />, label: 'Instagram' },
];

const Contact = () => {
  return (
    <section id='contact' className="relative py-24 lg:py-32 overflow-hidden bg-zinc-950">
      
      {/* --- BACKGROUND GLOW --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-PrimaryColor/10 blur-[120px] rounded-full -z-10" />

      <div className='container px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-start'>
        
        {/* LEFT SIDE: CONTENT */}
        <div className="mb-12 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              Let&apos;s build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-PrimaryColor to-PrimaryColor2">
                together.
              </span>
            </h2>
            <p className='text-zinc-400 text-lg max-w-md leading-relaxed mb-10'>
              Have a project in mind or just want to say hi? My inbox is always open. 
              Let&apos;s turn your vision into a <span className="text-white">digital reality</span>.
            </p>
          </motion.div>

          {/* SOCIAL LINKS WITH MAGNETIC EFFECT */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon, label }, key) => (
              <motion.a
                key={key}
                href={href}
                target='_blank'
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className='w-14 h-14 grid place-items-center bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-400 transition-all hover:border-PrimaryColor/50 hover:text-PrimaryColor group'
                title={label}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: GLASS FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Form Decorative Border Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-PrimaryColor/20 to-PrimaryColor2/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <form
            action="https://getform.io/f/avrydwpa"
            method='POST'
            className='relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 p-8 lg:p-12 rounded-[2rem]'
          >
            <div className='grid md:grid-cols-2 gap-6 mb-6'>
              <div className="space-y-2">
                <label htmlFor="name" className='text-xs font-bold uppercase tracking-widest text-zinc-500'>Name</label>
                <input 
                  type="text" name="name" id='name' required
                  placeholder='Jisan Hoque'
                  className='w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-4 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-PrimaryColor/50 transition-all'
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className='text-xs font-bold uppercase tracking-widest text-zinc-500'>Email</label>
                <input 
                  type="email" name="email" id='email' required
                  placeholder='hello@jisan.dev'
                  className='w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-4 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-PrimaryColor/50 transition-all'
                />
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label htmlFor="message" className='text-xs font-bold uppercase tracking-widest text-zinc-500'>Your Message</label>
              <textarea 
                name="message" id="message" required
                placeholder="Tell me about your project..."
                className='w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-4 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-PrimaryColor/50 transition-all min-h-[150px] resize-none'
              />
            </div>

            <motion.button 
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full bg-gradient-to-r from-PrimaryColor to-PrimaryColor2 py-4 rounded-xl text-zinc-950 font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Send Message <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact