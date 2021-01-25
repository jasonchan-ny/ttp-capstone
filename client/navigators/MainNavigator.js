import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HistoryScreen, TimerScreen, NewWorkoutScreen } from '../screens';

export default function MainNavigator() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name='History' component={HistoryScreen} />
            <Tab.Screen name='Timer' component={TimerScreen} />
            <Tab.Screen name='NewWorkout' component={NewWorkoutScreen} />
        </Tab.Navigator>
    )
}
