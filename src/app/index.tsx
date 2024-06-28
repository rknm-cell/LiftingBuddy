import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{ 
          backgroundColor: "gainsboro", 
          padding: 10, 
          borderRadius: 8,
          gap: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

      }}>
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Poop</Text>
          <Text style={{ color: "gray", fontSize: 16, paddingTop: 5 }}>
            500 Calories, Domino's
          </Text>
        </View>
        <MaterialIcons name="add-circle-outline" size={30} color="green" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
  },
});
