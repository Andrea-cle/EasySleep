import { StyleSheet } from "react-native";

// Tous les styles globaux sont ici
const globalStyles = StyleSheet.create({
  container: {
    flex: 1, //Permet au conteneur de s'étendre sur tout l'espace dispo
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  // Mode sombre
  darkContainer: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 20,
    marginBottom: 20,
    color: "#000", //Couleur de texte clair
  },

  // Couleur de texte en mode sombre
  darkText: {
    fontSize: 20,
    marginBottom: 20,
    color: "#fff", // Couleur de texte sombre
  },
});

export default globalStyles;
