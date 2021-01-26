import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';

import { HistoryScreen, TimerScreen, NewWorkoutScreen } from "../screens";

export default function MainNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "History") {
            iconName = "linechart";
          } else if (route.name === "Timer") {
            iconName = focused ? "clockcircle" : "clockcircleo";
          } else if (route.name === "New Workout") {
            iconName = focused ? "pluscircle" : "pluscircleo";
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Timer" component={TimerScreen} />
      <Tab.Screen name="New Workout" component={NewWorkoutScreen} />
    </Tab.Navigator>
  );
}
