import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100"> {/* Conteneur principal */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"> {/* Carte blanche */}
        <h1 className="text-2xl font-bold mb-6">Se connecter</h1> {/* Titre de la page */}
        
        <div className="mb-4"> {/* Champ d'email */}
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border rounded-lg"
            placeholder="Entrez votre email"
          />
        </div>
        
        <div className="mb-6"> {/* Champ de mot de passe */}
          <label className="block text-gray-700 mb-2" htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border rounded-lg"
            placeholder="Entrez votre mot de passe"
          />
        </div>
        
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"> {/* Bouton de connexion */}
          Se connecter
        </button>
        
        <div className="mt-4 text-sm text-gray-600 text-center"> {/* Liens supplémentaires */}
          <a href="#" className="text-blue-600 hover:text-blue-700">Mot de passe oublié ?</a> {/* Lien */}
        </div>
      </div>
    </div>
  );
};

export default Login;
