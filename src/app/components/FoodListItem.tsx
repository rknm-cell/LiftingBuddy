import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";

const FoodListItem = ({item}) => {
    return (
        <View
          style={styles.container}
        >
          <View style={{ flex: 1, gap: 5 }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.label}</Text>
            <Text style={{ color: "gray", fontSize: 16 }}>
              {item.calories} Calories, {item.brand}
            </Text>
          </View>
          <MaterialIcons name="add-circle-outline" size={30} color="green" />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gainsboro",
    padding: 10,
    borderRadius: 8,
    gap: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
})

export default FoodListItem