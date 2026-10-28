import { useState, useEffect } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleDocClick = () => setThemeDropdownOpen(false);
    if (themeDropdownOpen) {
      document.addEventListener('click', handleDocClick);
      return () => document.removeEventListener('click', handleDocClick);
    }
  }, [themeDropdownOpen]);

  const navLinks = [
    { name: 'About', sectionId: 'about' },
    { name: 'Experience', sectionId: 'experience' },
    { name: 'Skills', sectionId: 'skills' },
    { name: 'Projects', sectionId: 'projects' },
    { name: 'Contact', sectionId: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm'
          : 'bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('about')}
              className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            >
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform duration-200">
                CC
              </span>
              <div className="flex flex-col">
                <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Chitra Chauhan
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                  Senior Developer
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-800/60 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-700/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.sectionId)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Area: Theme Toggle & Quick CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Menu */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setThemeDropdownOpen(!themeDropdownOpen);
                }}
                aria-label="Toggle theme settings"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200/60 dark:border-slate-700/60 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {resolvedTheme === 'dark' ? (
                  <MoonIcon className="w-5 h-5 text-blue-400" />
                ) : (
                  <SunIcon className="w-5 h-5 text-amber-500" />
                )}
              </button>

              {themeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white dark:bg-slate-850 p-1.5 shadow-xl border border-slate-200 dark:border-slate-700 z-50 animate-fade-in text-xs font-medium">
                  <button
                    onClick={() => setTheme('light')}
                    className={`flex items-center gap-2 w-full px-2.5 py-1.5 rounded-lg transition-colors ${
                      theme === 'light'
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <SunIcon className="w-4 h-4 text-amber-500" /> Light
                  </button>
                  <button
                    onClick={() => setTheme('dark')}
                    className={`flex items-center gap-2 w-full px-2.5 py-1.5 rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <MoonIcon className="w-4 h-4 text-blue-400" /> Dark
                  </button>
                  <button
                    onClick={() => setTheme('system')}
                    className={`flex items-center gap-2 w-full px-2.5 py-1.5 rounded-lg transition-colors ${
                      theme === 'system'
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <ComputerDesktopIcon className="w-4 h-4 text-slate-500" /> System
                  </button>
                </div>
              )}
            </div>

            {/* Quick Contact CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-sm hover:shadow transition-all duration-200"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile menu and theme toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle light/dark theme"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800"
            >
              {resolvedTheme === 'dark' ? (
                <MoonIcon className="w-5 h-5 text-blue-400" />
              ) : (
                <SunIcon className="w-5 h-5 text-amber-500" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all">
          <div className="px-4 pt-3 pb-5 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.sectionId)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-center py-2.5 px-4 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
