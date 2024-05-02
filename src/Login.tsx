import React, { useState } from 'react';
import TextInput from './components/TextInput';
import Button from './components/Button';
import LanguageDropdown from './components/LanguageMenu';
import { FaGoogle, FaApple } from 'react-icons/fa';

const Login: React.FC = () => {
  // Etats pour les champs de saisie
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('fr_FR');
  const [isLanguageDropdownVisible, setIsLanguageDropdownVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Comportements 
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) && email.length >= 3 && email.length <= 128;
  };
    
  const validatePhoneNumber = (phone: string) => {
    const regex = /^\+?[\d\s()-]*$/;
    return regex.test(phone) && phone.length >= 3 && phone.length <= 128;
  };
  
  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleToggleDropdown = () => {
    setIsLanguageDropdownVisible((prev) => !prev);
  };

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLanguage(langCode);
    setIsLanguageDropdownVisible(false);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Saisissez une adresse e-mail ou un numéro de téléphone.');
    } else if (!validateEmail(email) && !validatePhoneNumber(email)) {
      setEmailError('Saisissez un nom d’utilisateur valide.');
    } else if (email.length < 3 || email.length > 128) {
      setEmailError('Les adresses e-mail et les numéros de téléphone portable doivent comporter entre 3 et 128 caractères.');
    } else if (!password) {
      setPasswordError('Entrez un mot de passe.');
      return;
    }

    console.log('Connexion en cours...', { email, password });
  };

  const openModal = (url: string, windowFeatures: string) => {
    window.open(url, "_blank", windowFeatures);
  };
  
  const handleOpenGoogleModal = () => {
    const googleUrl = "https://accounts.google.com/gsi/select?client_id=990339570472-k6nqn1tpmitg8pui82bfaun3jrpmiuhs.apps.googleusercontent.com&auto_select=false&ux_mode=popup&ui_mode=card&context=signin&as=ZdCOkTWTO8lhNwQ7oAMxRw&channel_id=63607da80752ec85e3e429bd305ffe9453a8318a1a06ef10bd30e1ea4c4f6bba&origin=https%3A%2F%2Fwww.linkedin.com";
    const windowFeatures = "width=600,height=600,scrollbars=yes,resizable=yes,left=" + ((screen.width - 600) / 2) + ",top=" + ((screen.height - 600) / 2);
    openModal(googleUrl, windowFeatures);
  };
  
  const handleOpenAppleModal = () => {
    const appleUrl = "https://appleid.apple.com/auth/authorize?client_id=com.linkedin.LinkedIn.service&redirect_uri=https%3A%2F%2Fwww.linkedin.com%2Fredirect&response_type=code%20id_token&scope=name%20email&response_mode=web_message&frame_id=b6d9ecd3-74ef-4995-8d5f-b95636310afd&m=11&v=1.5.3";
    const windowFeatures = "width=600,height=600,scrollbars=yes,resizable=yes,left=" + ((screen.width - 600) / 2) + ",top=" + ((screen.height - 600) / 2);
    openModal(appleUrl, windowFeatures);
  };

  const languages = [
    { code: 'ar_AE', label: 'العربية (Arabic)' },
    { code: 'cs_CZ', label: 'Čeština (Czech)' },
    { code: 'da_DK', label: 'Dansk (Danish)' },
    { code: 'de_DE', label: 'Deutsch (German)' },
    { code: 'en_US', label: 'English (English)' },
    { code: 'es_ES', label: 'Español (Spanish)' },
    { code: 'fr_FR', label: 'Français (French)' },
    { code: 'hi_IN', label: 'हिंदी (Hindi)' },
    { code: 'in_ID', label: 'Bahasa Indonesia (Indonesian)' },
    { code: 'it_IT', label: 'Italiano (Italian)' },
    { code: 'ja_JP', label: '日本語 (Japanese)' },
    { code: 'ko_KR', label: '한국어 (Korean)' },
    { code: 'others', label: 'Autres' },
  ];

  // affichage
  return (
    // Conteneur principal
    <div className="flex flex-col items-center font-system">

      {/* Logo LinkedIn en haut à gauche */}
      <div className="absolute top-8 left-14">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img src="/images/Linkedin-logo.png" alt="LinkedIn Logo" className="w-[112px] h-[28px]" />
        </a>
      </div>

      {/* Carte blanche du formulaire */}
      <div className="max-w-sm bg-white p-7 mt-14 rounded-lg shadow-xl">
        <h1 className="text-4xl leading-tight font-semibold text-black-900 pb-1">S'identifier</h1>
        <p className="text-sm pb-5">
          Tenez-vous au courant des évolutions de votre monde professionnel
        </p>

        <form onSubmit={handleLogin}>
          <TextInput
            label="E-mail ou téléphone"
            value={email}
            type="text"
            error={emailError}
            isFocused={isEmailFocused}
            onChange={handleEmailChange}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(email.length > 0)}
          />

          <TextInput
            label="Mot de passe"
            value={password}
            type={isPasswordVisible ? 'text' : 'password'}
            error={passwordError}
            isFocused={isPasswordFocused}
            onChange={handlePasswordChange}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(password.length > 0)}
          >
            <span
              id="password-visibility-toggle"
              tabIndex={0}
              className="absolute right-3 top-2 cursor-pointer text-linkedinBlue
              hover:bg-linkedinBlueHover rounded-full px-2 py-1
              focus:border-linkedinBlue focus:border-2"
              onClick={handleTogglePasswordVisibility}
            >
              {isPasswordVisible ? 'masquer' : 'afficher'}
            </span>
          </TextInput>

          {/* Mot de passe oublié */}
          <div className="text-left text-sm pb-5">
            <a
              href="https://www.linkedin.com/checkpoint/rp/request-password-reset?trk=guest_homepage-basic_nav-header-signin"
              className="text-linkedinBlue font-semibold hover:bg-linkedinBlueHover hover:underline rounded-full px-2 py-1"
            >
              Mot de passe oublié ?
            </a>
          </div>
          
          {/* Bouton de connexion */}
          <Button
            className="w-full bg-linkedinBlue text-white font-semibold py-3 rounded-full
            hover:bg-dark transition duration-300"
            type="submit"
          >
            S'identifier
          </Button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500 text-sm">ou</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="text-xs text-left">
          En cliquant sur Continuer, vous acceptez les{' '}
          <a href="https://fr.linkedin.com/legal/user-agreement?"
            className="text-blue-600 visited:text-purple-600 hover:underline" target="_blank"
          >
            Conditions d’utilisation
          </a>
          , la{' '}
          <a href="https://fr.linkedin.com/legal/privacy-policy?"
            className="text-blue-600 hover:underline" target="_blank"
          >
            Politique de confidentialité
          </a>
          , et la{' '}
          <a href="https://fr.linkedin.com/legal/cookie-policy?"
            className="text-blue-600 hover:underline" target="_blank"
          >
            Politique relative aux cookies
          </a>
          {' '} de LinkedIn.
        </div>
        
        {/* Boutons de connexion avec Google et Apple */}
        <div className="font-semibold text-gray-500 mt-6">
          <Button
            className="flex items-center justify-center rounded-full border border-gray-600 p-2 hover:bg-gray-100 w-full"
            onClick={() => handleOpenGoogleModal()}
          >
            <FaGoogle className="text-red-600 mr-3" />
            S'identifier avec Google
          </Button>

          <Button
            className="flex items-center justify-center bg-white rounded-full border border-gray-600 p-2 hover:bg-gray-100 w-full mt-4"
            onClick={() => handleOpenAppleModal()}
          >
            <FaApple className="text-black mr-3 mb-1 scale-150" />
            S'identifier avec Apple
          </Button>
        </div>
      </div>

      {/* En-dessous de la carte blanche du formulaire */}
      <div className="pt-8">
        Vous débutez sur LinkedIn ?{' '}
        <a
          href="/signup"
          className="text-blue-500 font-bold hover:underline hover:bg-linkedinBlueHover hover:rounded-full p-3"
        >
          S'inscrire
        </a>
      </div>

      {/* Footer */}
      <footer className="text-gray-500 pt-16 pr-32">
        <div className="flex space-x-4">
          <div className="flex pr-5 text-xs text-black max-w-[100px]">
            <img
              src="/images/Linkedin-logo-black.png"
              alt="LinkedIn Logo"
              className="relative w-18 h-16 bottom-5"
            />
            <p>©</p>
            <span className='relative top-5 right-16'>2024</span>
          </div>

          {/* Liens du footer */}             
          <ul className="flex flex-wrap space-x-2 text-[12px] max-w-[900px]">
            <li className="pb-3">
              <a
                href="https://fr.linkedin.com/legal/user-agreement?trk=d_checkpoint_lg_consumerLogin_ft_user_agreement"
                className="hover:underline"
              >
                Conditions générales d’utilisation de LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://fr.linkedin.com/legal/privacy-policy?trk=d_checkpoint_lg_consumerLogin_ft_privacy_policy"
                className="hover:underline"
              >
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/help/linkedin/answer/a403269/?lang=en&trk=d_checkpoint_lg_consumerLogin_ft_community_guidelines"
                className="hover:underline"
              >
                Directives de la communauté
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/legal/cookie-policy?trk=d_checkpoint_lg_consumerLogin_ft_cookie_policy"
                className="hover:underline"
              >
                Politique relative aux cookies
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/legal/copyright-policy?trk=d_checkpoint_lg_consumerLogin_ft_copyright_policy"
                className="hover:underline"
              >
                Politique de copyright
              </a>
            </li>
            <li className="relative right-2">
              <a
                href="https://www.linkedin.com/help/linkedin?trk=d_checkpoint_lg_consumerLogin_ft_send_feedback&lang=en"
                className="hover:underline"
                target="_blank"
              >
                Envoyer un feedback
              </a>
            </li>

            <li>
              <LanguageDropdown
                isVisible={isLanguageDropdownVisible}
                onToggle={handleToggleDropdown}
                languages={languages}
                selectedLanguage={selectedLanguage}
                onSelect={handleLanguageSelect}
              />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Login;