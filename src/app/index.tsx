import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, TextInput, Button, ActivityIndicator } from "react-native";
import { useState } from "react";

import FoodListItem from "./components/FoodListItem";
import {gql, useLazyQuery} from '@apollo/client';

const query = gql`
query search($ingr: String) {
  search(ingr: $ingr) {
    text
    hints {
      food {
        brand
        label
        foodId
        nutrients {
          ENERC_KCAL
        }
      }
    }
  }
}
`


const foodItems = [
  { label: "Poop", calories: 500, brand: "Dominos" },
  { label: "Diarrhea", calories: 346, brand: "Popeyes" },
  { label: "Huge Shit", calories: 35, brand: "Starbucks" },
];

// function handleFoodItemRender(foodItems){
//   foodItems.map((foodItem) => (
//     <FoodListItem item={{label: foodItem.label, calories: foodItem.calories, brand: foodItem.brand}}
//   ))
// }

export default function SearchScreen() {
  const [search, setSearch] = useState("");

  const [runSearch, {data, loading, error}] = useLazyQuery(query, {variables: {ingr: 'Pizza'}});

  const performSearch = () => {
    runSearch({variables: {ingr: search}});
    setSearch('');
  }
  
console.log(error)
  if (error) {
    return <Text>Failed to search</Text>
  };

 const items = data?.search?.hints || [];

  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="search"
        style={styles.input}
      />
      {search && <Button title="Search" onPress={performSearch}/>}

      {loading && <ActivityIndicator />}
      <FlatList
        data={items}
        renderItem={({ item }) => <FoodListItem item={item} />}
        ListEmptyComponent={() => <Text>Search a food here</Text>}
        contentContainerStyle={{ gap: 7 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    gap: 7,
  },
  input: {
    backgroundColor: "gainsboro",
    borderRadius: 15,
    padding: 10,
  },
});
