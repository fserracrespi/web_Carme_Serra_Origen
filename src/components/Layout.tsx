import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Mail, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

import { Language, translations } from '../i18n';

export const Header = ({ lang, setLang, setView, isSubpage = false }: { lang: Language; setLang: (l: Language) => void; setView?: (v: 'home' | 'philosophy' | 'upcycling' | 'collection' | 'contact') => void; isSubpage?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#home', view: 'home' as const },
    { name: t.lookboard, href: '#lookboard', view: 'home' as const },
    { name: t.collections, href: '#collections', view: 'home' as const },
    { name: t.texture, href: '#texture', view: 'home' as const },
    { name: t.about, href: '#about', view: 'home' as const },
    { name: t.contact, href: '#', view: 'contact' as const },
  ];

  const handleNavClick = (e: React.MouseEvent, view: 'home' | 'philosophy' | 'upcycling' | 'collection' | 'contact') => {
    if (view !== 'home') {
      e.preventDefault();
    }
    if (setView) setView(view);
    setIsMobileMenuOpen(false);
  };

  const showDarkHeader = isScrolled || isSubpage;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12',
        showDarkHeader ? 'bg-brand-beige/80 backdrop-blur-md py-2 text-brand-dark shadow-sm' : 'bg-transparent py-6 text-white'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 hidden lg:flex gap-8 items-center">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.view)}
              className="text-[12px] uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex justify-center min-w-[120px]"
        >
          <AnimatePresence>
            {showDarkHeader && (
              <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                src="/brand/firma_negra.png" 
                alt="Carme Serra" 
                className="h-[54px] md:h-[68px] object-contain" 
                referrerPolicy="no-referrer" 
              />
            )}
          </AnimatePresence>
        </button>

        <div className="flex-1 flex justify-end items-center gap-8">
          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.view)}
                className="text-[12px] uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-2 ml-4 items-center">
              <button 
                onClick={() => setLang('en')}
                className={cn("text-[12px] tracking-widest uppercase", lang === 'en' ? "opacity-100 font-bold underline underline-offset-4" : "opacity-40")}
              >
                EN
              </button>
              <span className="opacity-20 text-[18px]">/</span>
              <button 
                onClick={() => setLang('es')}
                className={cn("text-[11px] tracking-widest uppercase", lang === 'es' ? "opacity-100 font-bold underline underline-offset-4" : "opacity-40")}
              >
                ES
              </button>
            </div>
          </div>
          
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-beige border-t border-brand-dark/5 p-8 lg:hidden text-brand-dark"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.view)}
                  className="text-sm uppercase tracking-[0.2em]"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-brand-dark/5">
                <button onClick={() => { setLang('en'); setIsMobileMenuOpen(false); }} className={cn("text-xs tracking-widest uppercase", lang === 'en' ? "font-bold" : "opacity-40")}>EN</button>
                <button onClick={() => { setLang('es'); setIsMobileMenuOpen(false); }} className={cn("text-xs tracking-widest uppercase", lang === 'es' ? "font-bold" : "opacity-40")}>ES</button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang].hero;
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-beige">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/home/hero.jpg"
          alt={t.subtitle}
          className="w-full h-full object-cover object-[center_70%] grayscale-[20%]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/20" />
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="block text-[13px] tracking-[0.2em] uppercase text-white mb-0 font-sans font-medium"
        >
          {t.subtitle}
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="my-4 md:my-8 flex justify-center"
        >
          <img 
            src="/brand/firma_blanca.png" 
            alt="Carme Serra Signature" 
            className="h-[190px] md:h-[310px] w-auto max-w-[90vw] md:max-w-[640px] object-contain opacity-90" 
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8"
        >
          <a 
            href="#collections"
            className="inline-flex items-center gap-2 text-white text-[12px] uppercase tracking-[0.2em] border-b border-white/30 pb-1 hover:border-white transition-colors"
          >
            {t.explore} <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

interface CollectionCardProps {
  title: string;
  year: string;
  images: string[];
  index: number;
  viewLabel?: string;
}

export const Lightbox = ({ 
  isOpen, 
  image, 
  onClose,
  onNext,
  onPrev
}: { 
  isOpen: boolean; 
  image: string | null; 
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-brand-dark/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={onClose}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-8 right-8 text-brand-beige hover:opacity-50 transition-opacity z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X size={32} />
          </motion.button>

          {onPrev && (
            <button
              className="absolute left-4 md:left-8 text-brand-beige/60 hover:text-brand-beige transition-colors p-4 z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={44} />
            </button>
          )}

          {onNext && (
            <button
              className="absolute right-4 md:right-8 text-brand-beige/60 hover:text-brand-beige transition-colors p-4 z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight size={44} />
            </button>
          )}
          
          <motion.img
            key={image}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            src={image ? encodeURI(image) : ''}
            alt="Enlarged view"
            className="max-w-[85vw] max-h-[85vh] md:max-w-[75vw] md:max-h-[85vh] object-contain shadow-2xl cursor-default select-none pointer-events-none"
            referrerPolicy="no-referrer"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const CollectionCard: React.FC<CollectionCardProps> = ({ title, year, images, index, viewLabel }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-6">
        <img
          src={images[0] ? encodeURI(images[0]) : ''}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-1000 ${
            index === 1 
              ? '[object-position:center_180%] scale-[1.25] group-hover:scale-[1.35]' 
              : 'object-center scale-100 group-hover:scale-105'
          }`}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/5 transition-colors duration-500 flex items-center justify-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-white border border-white/40 px-6 py-2 backdrop-blur-sm"
          >
            {viewLabel || "Ver Colección"}
          </motion.span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-baseline gap-2 px-0">
        <h3 className="text-[14.2px] font-sans font-light uppercase tracking-[0.14em]">{title}</h3>
        <span className="text-[12px] font-sans font-light uppercase tracking-[0.14em] text-brand-muted">{year}</span>
      </div>
    </motion.div>
  );
};


export const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang].footer;
  return (
    <footer className="bg-brand-dark text-brand-beige py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-[17.6px] md:text-[30.4px] mb-8 font-sans font-light uppercase tracking-[0.14em]">{t.contact}</h2>
            <p className="text-brand-muted max-w-md leading-relaxed font-avenir font-thin tracking-wide text-[16px]">
              {t.description}
            </p>
          </div>
          <div className="flex flex-col justify-end gap-8">
            <a href="mailto:carmeserracrespi@gmail.com" className="text-xl md:text-2xl hover:italic transition-all flex items-center gap-4 font-avenir font-thin tracking-wide text-[16px]">
              <Mail size={20} /> carmeserracrespi@gmail.com
            </a>
            <a href="https://www.instagram.com/carmeserra.origen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-xl md:text-2xl hover:italic transition-all flex items-center gap-4 font-avenir font-thin tracking-wide text-[16px]">
              <Instagram size={20} /> @carmeserra.origen
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-beige/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-50 flex items-center gap-4">
            © {new Date().getFullYear()} <img src="/brand/firma_blanca.png" alt="Carme Serra" className="h-10 opacity-70" />. {t.rights}
          </span>
          <div className="flex gap-8">
            <a href="https://www.instagram.com/carmeserra.origen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-[10px] uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition-opacity">Instagram</a>
            <a href="https://es.linkedin.com/in/carme-serra-crespí-84bb56334" className="text-[10px] uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition-opacity">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
