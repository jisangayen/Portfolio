import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  AlertCircle, 
  Mail, 
  User, 
  MessageSquare, 
  ShieldCheck,
  Loader2,
  CheckCircle2
} from 'lucide-react';

const projectTypes = [
  "Full-Stack Web App",
  "React / Frontend",
  "Backend & API",
  "Consultation",
  "Other"
];

const Contact = () => {
  const [activeType, setActiveType] = useState('Full-Stack Web App');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (name, value) => {
    let error = "";
    if (name === 'name' && value.trim().length < 2) error = "Please enter your name";
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) error = "Please enter a valid email address";
    if (name === 'message' && value.trim().length < 10) error = "Please provide more details (min 10 characters)";

    setErrors(prev => ({ ...prev, [name]: error }));
    return error === "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isMsgValid = validateField('message', formData.message);

    if (!isNameValid || !isEmailValid || !isMsgValid) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('message', formData.message);
      formPayload.append('project_type', activeType);

      const response = await fetch("https://getform.io/f/avrydwpa", {
        method: "POST",
        body: formPayload,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setSubmitStatus('success');
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-8 sm:py-10 overflow-hidden bg-zinc-100/70 dark:bg-[#070709] transition-colors duration-300 select-none"
    >
      {/* Dynamic Ambient Mesh Glows */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-PrimaryColor/15 dark:bg-PrimaryColor/20 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-40 w-[500px] h-[500px] bg-PrimaryColor2/15 dark:bg-PrimaryColor2/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-800 to-transparent" />

      <div className="container px-6 mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ========================================================= */}
          {/* --- LEFT COLUMN: IMPACT HEADLINE & INTRO NARRATIVE --- */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Availability Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-300/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm mb-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-zinc-700 dark:text-zinc-300 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                Available for New Projects
              </span>
            </motion.div>

            {/* Impact Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tight leading-[1.02]"
            >
              Let's Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-PrimaryColor via-PrimaryColor2 to-emerald-500 italic">
                Extraordinary.
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed"
            >
              Whether you have an upcoming project, a contract role, or an architecture inquiry, my inbox is always open. Let's discuss how we can bring your vision to life with clean, scalable, and high-performance engineering.
            </motion.p>

          </div>

          {/* ========================================================= */}
          {/* --- RIGHT COLUMN: LUXURY INTERACTIVE CONTACT FORM --- */}
          {/* ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl bg-white/95 dark:bg-zinc-900/85 border border-zinc-200/90 dark:border-zinc-800/90 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-2xl overflow-hidden">
              
              {/* Ambient internal light orb */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-PrimaryColor/15 blur-3xl rounded-full pointer-events-none" />

              <form 
                action="https://getform.io/f/avrydwpa" 
                method="POST" 
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
              >
                {/* 1. Project Interest Pill Selector */}
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3">
                    I'm interested in...
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => {
                      const isSelected = activeType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setActiveType(type)}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 border ${
                            isSelected
                              ? "bg-PrimaryColor text-white border-PrimaryColor shadow-md scale-102"
                              : "bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700/60 hover:border-zinc-300 dark:hover:border-zinc-600"
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                  <input type="hidden" name="project_type" value={activeType} />
                </div>

                {/* 2. Form Inputs Grid */}
                <div className="grid sm:grid-cols-2 gap-5">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                      Your Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                        <User size={15} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={(e) => validateField('name', e.target.value)}
                        placeholder="John Doe"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border text-xs sm:text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none transition-all ${
                          errors.name
                            ? "border-red-500/70 focus:ring-2 focus:ring-red-500/20"
                            : "border-zinc-200 dark:border-zinc-700/70 focus:border-PrimaryColor focus:ring-2 focus:ring-PrimaryColor/20"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-[10px] flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle size={10} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                      Your Email *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                        <Mail size={15} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={(e) => validateField('email', e.target.value)}
                        placeholder="john@example.com"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border text-xs sm:text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none transition-all ${
                          errors.email
                            ? "border-red-500/70 focus:ring-2 focus:ring-red-500/20"
                            : "border-zinc-200 dark:border-zinc-700/70 focus:border-PrimaryColor focus:ring-2 focus:ring-PrimaryColor/20"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-[10px] flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle size={10} /> {errors.email}
                      </p>
                    )}
                  </div>

                </div>

                {/* 3. Message Textarea */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                    Project Message / Scope *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-zinc-400">
                      <MessageSquare size={15} />
                    </div>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={(e) => validateField('message', e.target.value)}
                      placeholder="Tell me about your project goals, timeline, or key technical requirements..."
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border text-xs sm:text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none resize-none transition-all ${
                        errors.message
                          ? "border-red-500/70 focus:ring-2 focus:ring-red-500/20"
                          : "border-zinc-200 dark:border-zinc-700/70 focus:border-PrimaryColor focus:ring-2 focus:ring-PrimaryColor/20"
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-[10px] flex items-center gap-1 mt-1 font-mono">
                      <AlertCircle size={10} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* 4. Magnetic Submit Button */}
                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative w-full h-12 sm:h-14 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold text-xs sm:text-sm uppercase tracking-wider overflow-hidden shadow-xl flex items-center justify-center gap-2 transition-all ${
                    isSubmitting ? "opacity-80 cursor-not-allowed" : "active:scale-98 cursor-pointer"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-PrimaryColor via-PrimaryColor2 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Status Feedback Messages */}
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono flex items-center gap-2 justify-center text-center"
                  >
                    <CheckCircle2 size={15} className="shrink-0 text-emerald-500" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-mono flex items-center gap-2 justify-center text-center"
                  >
                    <AlertCircle size={15} className="shrink-0 text-red-500" />
                    <span>Oops! Something went wrong. Please try again.</span>
                  </motion.div>
                )}

                {/* Privacy Badge */}
                <div className="flex items-center justify-center gap-1.5 text-zinc-400 dark:text-zinc-500 text-[10px] font-mono">
                  <ShieldCheck size={12} className="text-emerald-500" />
                  <span>Privacy protected • No spam, ever</span>
                </div>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;