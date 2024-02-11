import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import exercises from "./assets/data/exercises.json";

export default function App() {
  // console.log(exercises[0]);
  const exercise = exercises[0];
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>{exercise.name}</Text>
      <Text>{exercise.type}</Text>
      <Text>{exercise.muscle}</Text>
      <Text>{exercise.equipment}</Text>
      <Text>{exercise.difficulty}</Text>
      <Text>{exercise.instructions}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
