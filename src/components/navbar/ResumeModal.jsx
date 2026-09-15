import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ExternalLink, X } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md cursor-pointer"
          />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 p-8 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] dark:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto"
          >
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
              aria-label="Close resume popup"
            >
              <X size={20} />
            </button>
            <div className="relative z-10 text-center">
              <div className="w-14 h-14 bg-zinc-100 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-zinc-200 dark:border-zinc-700/50 shadow-inner">
                <FileText className="text-zinc-800 dark:text-zinc-200" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white tracking-[0.05em] uppercase mb-1.5">View Resume</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs px-2 mb-6 leading-relaxed">Access my professional experience or download a copy for offline viewing.</p>
              <div className="grid gap-3">
                <a 
                  href="/Jisan_Hoque_Gayen.pdf" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 py-3.5 rounded-xl font-medium tracking-wider text-xs hover:bg-zinc-800 dark:hover:bg-zinc-100 active:scale-[0.98] transition-all duration-200 shadow-md"
                >
                  View Online <ExternalLink size={14} />
                </a>
                <a 
                  href="/Jisan_Hoque_Gayen.pdf" 
                  download 
                  className="flex items-center justify-center gap-2.5 w-full bg-zinc-100 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200 py-3.5 rounded-xl font-medium tracking-wider text-xs border border-zinc-200 dark:border-zinc-700/40 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  Download PDF <Download size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

ResumeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ResumeModal;
