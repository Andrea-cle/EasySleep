import React, { useState } from "react"; //Importation de React et du hook useState
import { StyleSheet, Text, View } from "react-native"; //Importation des composants nécessaires
import MonBouton from "./components/MonBouton.js"; // Importation du module Button

export default function App() {
  //Etat pour stocker le nombre d'heures de sommeil
  const [sleepHours, setSleepHours] = useState(0); //Initialisation de sleepHours à 0

  //  Fonction pour démarrer le suivi du sommeil
  const startSleepTracking = () => {
    // Losque le bouton est pressé, on incrémente le nombre d'heure de sommeil
    setSleepHours(sleepHours + 1); //On met à jour l'état avec le nouveau nombre d'heures
  };

  return (
    <View style={styles.container}>
      {/* {conteneur principal de l'application} */}
      <Text style={styles.text}>Heures de sommeil : {sleepHours}</Text>{" "}
      {/* {Affiche le nombre d'heures de sommeil}*/}
      <MonBouton
        title="Démarrer le suivi du sommeil"
        onPress={startSleepTracking}
      />{" "}
      {/* {utilisation du module de bouton} */}
    </View>
  );
}
// Styles de l'application
const styles = StyleSheet.create({
  container: {
    flex: 1, //Permet au conteneur de s'étendre sur toute la hauteur disponible
    backgroundColor: "#fff", //Définit la couleur de fond du conteneur
    alignItems: "center", //Centre les éléments horizontalement
    justifyContent: "center", //Centre les éléments verticalement
  },

  text: {
    fontSize: 20, //Taille de la police pour le texte
    marginBottom: 20, //Espace en bas du texte
  },
});
