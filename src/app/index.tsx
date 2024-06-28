import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

import FoodListItem from "./components/FoodListItem";

const foodItems = [
  {label: 'Poop', calories: 500, brand: 'Dominos'},
  {label: 'Diarrhea', calories: 346, brand: 'Popeyes'},
  {label: 'Huge Shit', calories: 35, brand: 'Starbucks'}
]

// function handleFoodItemRender(foodItems){
//   foodItems.map((foodItem) => (
//     <FoodListItem item={{label: foodItem.label, calories: foodItem.calories, brand: foodItem.brand}}
//   ))
// }

export default function App() {
  return <View style={styles.container}>

    <FlatList 
    data={foodItems}
    renderItem={({item}) => <FoodListItem item={item} />}
    contentContainerStyle={{gap: 7}}
    
    />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    gap: 7,
  },
});
