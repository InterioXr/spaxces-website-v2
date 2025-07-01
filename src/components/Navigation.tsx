
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
    <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 bg-white/90 backdrop-blur-md rounded-3xl p-4 border border-slate-200/60 shadow-lg">
      <div className="flex flex-col space-y-3">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`group relative flex items-center justify-center p-4 rounded-2xl transition-all duration-200 ${
              activeSection === id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
            }`}
            title={label}
          >
            <Icon size={20} />
            <span className="absolute left-full ml-4 px-3 py-2 bg-slate-900/90 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap backdrop-blur-sm">
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
