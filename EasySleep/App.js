import React, { useState } from "react"; // Importation de React et du hook useState
import { Switch, Text, View, Animated } from "react-native"; // Importation des composants nécessaires
import MonBouton from "./components/MonBouton/MonBouton.js"; // Importation du module bouton
import globalStyles from "./styles/globalStyles.js"; // Assurez-vous que le chemin est correct

export default function App() {
  // État pour stocker le nombre d'heures de sommeil
  const [sleepHours, setSleepHours] = useState(0); // Initialisation de sleepHours à 0
  // État pour le mode sombre
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Valeur d'animation pour le bouton
  const [scaleValue] = useState(new Animated.Value(1)); // Remplacer par "Animated.Value"
  // État pour indiquer si le suivi a commencé
  const [isTracking, setIsTracking] = useState(false);

  const [progressValue] = useState(new Animated.Value(0));

  // Fonction pour démarrer le suivi du sommeil
  const startSleepTracking = () => {
    // Incrémente le nombre d'heures de sommeil
    setSleepHours((prevSleepHours) => prevSleepHours + 1);
    console.log("Heures de sommeil:", sleepHours + 1); // Verifie l'incrémentation

    // Met à jour l'état du suivi
    setIsTracking(true); // Mettre à jour l'état isTracking
    console.log("suivi démarré:", isTracking); // Verifie le statut de suivi

    // Animation d'agrandissement et de retour à la taille normale
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.1,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();

    // Animation pour l'indicateur circulaire
    Animated.loop(
      Animated.timing(progressValue, {
        toValue: 1,
        duration: 1000, // Durée de l'animation
        useNativeDriver: false,
      })
    ).start();
  };

  return (
    <View
      style={isDarkMode ? globalStyles.darkContainer : globalStyles.container}
    >
      <Switch
        value={isDarkMode}
        onValueChange={() => setIsDarkMode((prevState) => !prevState)}
      />
      {/* Conteneur principal de l'application qui changera selon le mode activé */}
      <Text style={isDarkMode ? globalStyles.darkText : globalStyles.text}>
        Heures de sommeil : {sleepHours}
      </Text>

      {/* Indicateur de suivi en cours, s'affiche seulement quand isTracking est vrai */}
      {isTracking && (
        <Text style={isDarkMode ? globalStyles.darkText : globalStyles.text}>
          Suivi en cours...
        </Text>
      )}

      {/* Utilisation de l'animation du bouton */}
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        {/* Affiche le nombre d'heures de sommeil */}
        <MonBouton
          title="Démarrer le suivi du sommeil"
          onPress={startSleepTracking}
        />
      </Animated.View>

      {/* Indicateur visuel de suivi */}
      {isTracking && (
        <Animated.View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            borderWidth: 5,
            borderColor: isDarkMode ? "#fff" : "#000",
            opacity: progressValue,
            backgroundColor: isDarkMode
              ? "rgba(255,255,255,0.5)"
              : "rgba(0,0,0,0.5)",
            marginTop: 20,
          }}
        />
      )}
    </View>
  );
}
