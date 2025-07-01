
import { useState, useEffect } from 'react';
import { Home, Building2, Users, Mail } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'spaxces', label: 'Spaxces', icon: Building2 },
    { id: 'collaborate', label: 'Collaborate', icon: Users },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/10">
      <div className="flex flex-col space-y-4">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`group relative flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
              activeSection === id
                ? 'bg-sky-500 text-white shadow-lg animate-pulse-glow'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
            title={label}
          >
            <Icon size={20} />
            <span className="absolute left-full ml-3 px-2 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
