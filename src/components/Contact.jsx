import React, { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Github, Linkedin, Instagram, Send, Sparkles, AlertCircle } from 'lucide-react'

// --- Magnetic Hook for Socials (Optimized for Mobile) ---
const MagneticIcon = ({ children, href, label }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouse = (e) => {
    // Disable magnetic pull on small touch screens for better UX
    if (window.innerWidth < 768) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    x.set((clientX - (left + width / 2)) * 0.4);
    y.set((clientY - (top + height / 2)) * 0.4);
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      href={href} target="_blank" rel="noreferrer"
      style={{ x: springX, y: springY }}
      className="w-12 h-12 md:w-14 md:h-14 grid place-items-center bg-zinc-900 border border-zinc-800 rounded-xl md:rounded-2xl text-zinc-400 hover:border-PrimaryColor/50 hover:text-PrimaryColor transition-colors shadow-2xl"
      title={label}
    >
      {children}
    </motion.a>
  );
};

const Contact = () => {
  const [activeType, setActiveType] = useState('Web App');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    if (name === 'name' && value.length < 2) error = "Name too short";
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) error = "Invalid email";
    if (name === 'message' && value.length < 10) error = "Needs more detail";
    
    setErrors(prev => ({ ...prev, [name]: error }));
    return error === "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) validateField(name, value);
  };

  const inputStyles = (name) => `
    w-full bg-transparent border-b py-2 md:py-3 text-sm md:text-base text-zinc-100 placeholder:text-zinc-700 outline-none transition-all duration-300
    ${errors[name] ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-PrimaryColor'}
    ${formData[name] && !errors[name] ? 'border-green-500/30' : ''}
  `;

  return (
    <section id='contact' className="relative py-16 lg:py-32 overflow-hidden bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50 md:opacity-100">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-PrimaryColor/10 blur-[100px] md:blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className='container px-6 relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 items-center'>
        
        {/* Left Side: Header */}
        <div className="lg:col-span-5 mb-10 lg:mb-0">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-PrimaryColor text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
              <Sparkles size={10} /> Ready to scale?
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] md:leading-[0.85] mb-6 md:mb-8">
              LEAD THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-PrimaryColor to-zinc-400 italic">CHANGE.</span>
            </h2>
          </motion.div>

          <div className="flex items-center gap-3 md:gap-4">
            <MagneticIcon href="https://github.com/jisangayen" label="GitHub"><Github size={20} /></MagneticIcon>
            <MagneticIcon href="https://linkedin.com/in/jisan-gayen/" label="LinkedIn"><Linkedin size={20} /></MagneticIcon>
            <MagneticIcon href="https://instagram.com/jisan__hoque/" label="Instagram"><Instagram size={20} /></MagneticIcon>
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.div 
          animate={Object.values(errors).some(e => e) ? { x: [0, -3, 3, -3, 3, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7 relative"
        >
          <div className='relative bg-zinc-900/40 backdrop-blur-2xl border border-white/5 p-6 md:p-10 lg:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl'>
            <form action="https://getform.io/f/avrydwpa" method='POST' onSubmit={(e) => {
               if(!validateField('name', formData.name) || !validateField('email', formData.email) || !validateField('message', formData.message)) e.preventDefault();
            }}>
              
              {/* Chips Section */}
              <div className="mb-8">
                <p className='text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3 md:mb-4'>I'm interested in...</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {['Web App', 'Mobile App', 'UI/UX'].map((type) => (
                    <button key={type} type="button" onClick={() => setActiveType(type)}
                      className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-[11px] md:text-sm font-medium transition-all duration-300 border 
                      ${activeType === type ? 'bg-PrimaryColor border-PrimaryColor text-zinc-950' : 'bg-zinc-950/50 border-zinc-800 text-zinc-400'}`}>
                      {type}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="project_type" value={activeType} />
              </div>

              {/* Input Grid */}
              <div className='grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8'>
                <div className="relative space-y-1">
                  <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-500">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} onBlur={(e) => validateField('name', e.target.value)} placeholder='John Bravo' className={inputStyles('name')} />
                  {errors.name && <span className="absolute -bottom-4 left-0 text-red-500 text-[9px] flex items-center gap-1"><AlertCircle size={8}/>{errors.name}</span>}
                </div>

                <div className="relative space-y-1">
                  <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-500">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} onBlur={(e) => validateField('email', e.target.value)} placeholder='johnbravo@gmail.com' className={inputStyles('email')} />
                  {errors.email && <span className="absolute -bottom-4 left-0 text-red-500 text-[9px] flex items-center gap-1"><AlertCircle size={8}/>{errors.email}</span>}
                </div>
              </div>

              <div className="relative space-y-1 mb-10">
                <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-500">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} onBlur={(e) => validateField('message', e.target.value)} placeholder="Project details..." className={inputStyles('message') + ' min-h-[80px] md:min-h-[100px] resize-none'} />
                {errors.message && <span className="absolute -bottom-4 left-0 text-red-500 text-[9px] flex items-center gap-1"><AlertCircle size={8}/>{errors.message}</span>}
              </div>

              <motion.button 
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="group relative w-full h-14 md:h-16 bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-PrimaryColor to-PrimaryColor2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-center gap-2 text-zinc-950 font-bold uppercase tracking-widest text-[11px] md:text-sm">
                  <span>Send Message</span>
                  <Send size={14} className="md:size-18 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact