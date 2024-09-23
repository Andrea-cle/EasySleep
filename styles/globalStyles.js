import { StyleSheet } from "react-native";

// Tous les styles partagés sont ici
const styles = StyleSheet.create({
  container: {
    flex: 1, //Permet au conteneur de s'étendre sur toute la hauteur dispo
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default globalStyles;
