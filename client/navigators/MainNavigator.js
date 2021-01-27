import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AntDesign } from "@expo/vector-icons";

import { HistoryScreen, TimerScreen, NewWorkoutScreen } from "../screens";

export default function MainNavigator() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        showIcon: true,
      }}
      tabBarPosition="bottom"
    >
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <AntDesign name={"linechart"} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Timer"
        component={TimerScreen}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <AntDesign name={"clockcircle"} size={20} color={color} />
            ) : (
              <AntDesign name={"clockcircleo"} size={20} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="New Workout"
        component={NewWorkoutScreen}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <AntDesign name={"pluscircle"} size={20} color={color} />
            ) : (
              <AntDesign name={"pluscircleo"} size={20} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
