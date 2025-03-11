import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";  
const Pokemon = () => {
  return (
    <View>
      <Text>details de pokemen</Text>

      <Link href="/index">Retour a l'accueil</Link>
      
    </View>
  );
};

export default Pokemon;