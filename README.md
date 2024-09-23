# EasySleep

**EasySleep** est une application de suivi du sommeil développée en React Native. Elle permet aux utilisateurs de suivre leurs heures de sommeil et d'augmenter progressivement leurs habitudes de repos.

## Fonctionnalités

- Suivi des heures de sommeil via un simple bouton.
- Interface utilisateur minimaliste et facile à utiliser.
- Composants modulaires pour une meilleure maintenance du code.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/en/) (v14 ou supérieur)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (pour faciliter le développement et l'émulation)
- Un émulateur Android ou iOS, ou l'application [Expo Go](https://expo.dev/client) installée sur votre appareil physique.

## Installation

Suivez ces étapes pour installer et exécuter l'application sur votre machine locale :

1. Clonez le dépôt :

```bash
git clone [https://github.com/ton-utilisateur/easysleep.git](https://github.com/Andrea-cle/EasySleep)

2. Accédez au dossier du projet :

```bash
cd EsaySleep

3. Installer les dépêndances :

```bash
npm install

4. Démarrez le projet Expo : :

```bash
npm start

5. Ouvrez l'application dans un émulateur ou scannez le QR code avec l'application Expo Go sur votre téléphone

## Structure du dossier

EasySleep/
│
├── components/                # Composants modulaires de l'application
│   ├── MonBouton/
│   │   ├── MonBouton.js        # Composant de bouton personnalisé
│   │   └── MonBoutonStyles.js  # Styles du bouton
│
├── styles/                    # Dossier contenant les styles globaux
│   └── globalStyles.js         # Styles communs pour toute l'application
│
├── App.js                     # Composant principal de l'application
├── package.json                # Fichier de configuration du projet
└── README.md                   # Documentation du projet

## Comment utiliser

1. Ouvrez l'application EasySleep sur votre téléphone ou émulateur.
2. Cliquez sur le bouton Démarrer le suivi du sommeil pour ajouter une heure de sommeil.
3. Le nombre d'heures de sommeil s'affiche dynamiquement à l'écran.

### Points clés :
- Le fichier présente les fonctionnalités de base de l'application.
- Il guide l'utilisateur à travers l'installation, l'utilisation, et la structure du projet.


