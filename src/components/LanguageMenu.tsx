import React, { useRef, useEffect } from 'react';

interface LanguageDropdownProps {
  isVisible: boolean;
  onToggle: () => void;
  languages: { code: string; label: string }[];
  selectedLanguage: string;
  onSelect: (code: string) => void;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  isVisible,
  onToggle,
  languages,
  selectedLanguage,
  onSelect,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onToggle(); // Fermer le menu si on clique à l'extérieur
      }
    };

    if (isVisible) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isVisible]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={onToggle} className="hover:text-langue">
        Langue
        <i className="relative left-11 bottom-4">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
            <path d="M8 9l5.93-4L15 6.54l-6.15 4.2a1.5 1.5 0 01-1.69 0L1 6.54 2.07 5z" />
          </svg>
        </i>
      </button>

      <div
        className={`absolute bottom-10 bg-white shadow-lg w-56 text-center text-underLangue max-w-[150px] ${
          isVisible ? '' : 'hidden'
        }`}
      >
        <ul className="p-2">
          {languages.map((lang, index) => (
            <li
              key={index}
              className={`hover:bg-underLangue hover:text-white ${
                selectedLanguage === lang.code ? 'underline text-white bg-underLangue' : ''
              }`}
            >
              <button type="button" onClick={() => onSelect(lang.code)}>
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageDropdown;
