import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MyJobsScreen from '../screens/MyJobsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BottomTabBar from '../components/BottomTabBar';

const Tab = createBottomTabNavigator();

// Placeholder: the "Post a Job" tab never actually renders — its tabPress
// listener below redirects to the root stack's PostJob screen instead.
function PostJobPlaceholder() {
  return <View />;
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyJobs" component={MyJobsScreen} />
      <Tab.Screen
        name="PostJob"
        component={PostJobPlaceholder}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.getParent()?.navigate('PostJob');
          },
        })}
      />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
