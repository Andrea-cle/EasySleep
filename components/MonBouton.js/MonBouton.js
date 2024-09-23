import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native"; //Import Composants nécessaires depuis React Native

// Création d'un composant de bouton personnalisé
// Le composant MonBouton prend 2 props : title (le tecte du bouton) et onPress (la fonction à exécuter lors du cick)

const MonBouton = ({ title, onPress }) => {
  return (
    // touchableopacity est un composant interactif qui réagit au toucher, ici il agit comme un bouton

    <TouchableOpacity style={StyleSheet.button} onPress={onPress}>
      {/* {Le texte du bouton est défini dynamiquement via la prop title} */}
      <Text style={StyleSheet.text}>{title}</Text>
    </TouchableOpacity>
  );
};
