import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { colors, typography } from '../theme';

const ICONS: Record<string, string> = {
  Home: 'home',
  MyJobs: 'briefcase',
  PostJob: 'add',
  Messages: 'chatbubble-ellipses',
  Profile: 'person',
};

const LABELS: Record<string, string> = {
  Home: 'Home',
  MyJobs: 'My Jobs',
  PostJob: 'Post a Job',
  Messages: 'Messages',
  Profile: 'Profile',
};

export default function BottomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrap, { paddingBottom: Math.max(insets.bottom, 10) }]}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const isCenter = route.name === 'PostJob';

        if (isCenter) {
          return (
            <Pressable
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={styles.fab}
            >
              <Ionicons name="add" size={28} color="#fff" />
            </Pressable>
          );
        }

        return (
          <Pressable
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tab}
          >
            <Ionicons
              name={ICONS[route.name] as any}
              size={22}
              color={focused ? colors.primary : colors.textLight}
            />
            <Text style={[styles.label, focused && { color: colors.primary }]}>
              {LABELS[route.name]}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  tab: { flex: 1, alignItems: 'center', gap: 2 },
  label: { ...typography.small, color: colors.textLight },
  fab: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -24,
    boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
    elevation: 4,
  },
});
