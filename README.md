## À propos du projet

Ce projet est une copie de la page de connexion de LinkedIn, utilisée pour des simulations de phishing et des tests de cybersécurité. Le but est d'imiter l'identité visuelle de la page de connexion LinkedIn pour évaluer la sécurité des collaborateurs d'entreprise.

## Installation

Pour installer le projet localement, suivez ces étapes :

1. Clonez le dépôt :
   ''' terminal
   git clone : https://github.com/nin-faz/test-react-login-linkedIn.git
2. Installez les dépendances :
   ''' terminal
   npm install

3. Différentes installations dans le notion (node.js, yarn, tailwind, créer sa template avec projet ViteJs) :
  https://www.notion.so/Stage-Loaker-b758cb2279ac451ca23941cd810cc9f1

## Utilisation
Pour lancer le serveur de développement, utilisez la commande suivante :
   ''' terminal
    npm run dev

Le serveur démarre sur http://localhost:5174/. Accédez à cette URL pour voir la page de connexion clonée. Le projet utilise des icônes de FontAwesome pour l'aspect visuel et Tailwind CSS pour le style.

## Branches
Le projet contient deux branches développés à partir de la branche develop :
  1. git checkout feature/login : branche pour le développement de la page de connexion.
  2. git checkout feature/login_refacto : : branche pour la refactorisation de la page de connexion en utilisant des composants avec children et props.

## Contribuer
Nous encourageons la contribution de la communauté ! Si vous souhaitez contribuer, veuillez suivre les directives suivantes :

1. Fork le projet
2. Créez votre branche de fonctionnalités à partir de la branche develop (git checkout develop puis git checkout -b feature/AmazingFeature)
3. Commit vos changements (git add. puis git commit -m 'Add some AmazingFeature')
4. Push sur la branche (git push -u origin feature/AmazingFeature)
5. Ouvrez une Pull Request

## Licence
Ce projet est sous licence MIT. Consultez le fichier LICENCE pour plus de détails.
