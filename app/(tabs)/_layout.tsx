import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: '#000000',
    }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Recherche',
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="search" size={size} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen 
        name="pokemon" 
        options={{ 
          headerShown: false,
          title: 'Pokemon',
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="person" size={size} color={color} focused={focused} />
          )
        }} />
    </Tabs>
  );
};

export default TabsLayout;