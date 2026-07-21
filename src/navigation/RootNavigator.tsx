import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import MainTabs from './MainTabs';
import SelectServiceScreen from '../screens/SelectServiceScreen';
import PostJobScreen from '../screens/PostJobScreen';
import JobOffersScreen from '../screens/JobOffersScreen';
import JobInProgressScreen from '../screens/JobInProgressScreen';
import WorkerProfileScreen from '../screens/WorkerProfileScreen';
import WalletScreen from '../screens/WalletScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="SelectService" component={SelectServiceScreen} />
        <Stack.Screen name="PostJob" component={PostJobScreen} />
        <Stack.Screen name="JobOffers" component={JobOffersScreen} />
        <Stack.Screen name="JobInProgress" component={JobInProgressScreen} />
        <Stack.Screen name="WorkerProfile" component={WorkerProfileScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
