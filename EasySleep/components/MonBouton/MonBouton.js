import React, { useRef } from "react";
import { Animated, TouchableOpacity, Text } from "react-native"; //Import Composants nécessaires depuis React Native
import styles from "./StyleMonBouton";

// Création d'un composant de bouton personnalisé
// Le composant MonBouton prend 2 props : title (le texte du bouton) et onPress (la fonction à exécuter lors du cick)

const MonBouton = ({ title, onPress }) => {
  // Déclare une animation pour le bouton
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.1, // grossit le bouton
        duration: 100, // Durée de 100ms
        useNativeDriver: true, // Utilisation du Native Drivers pour des performances optimales
      }),

      Animated.timing(scaleValue, {
        toValue: 1, // Retourne  à sa taille initiale
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    // touchableopacity est un composant interactif qui réagit au toucher, ici il agit comme un bouton
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        {/* {Le texte du bouton est défini dynamiquement via la prop title} */}
        <Text style={styles.buttonText}>{title}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default MonBouton;
