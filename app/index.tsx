import React from "react";
import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";

const HomePage = () => {
  return (
    <View>
      <Text>Home Page</Text>
      <Link href="/pokemon">Pokemon</Link>
    </View>
  );
};

export default HomePage;