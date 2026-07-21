import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, radius } from '../theme';
import Avatar from '../components/Avatar';

const MENU = [
  { icon: 'wallet-outline', label: 'My Wallet', route: 'Wallet' },
  { icon: 'briefcase-outline', label: 'My Jobs', route: 'MyJobs' },
  { icon: 'chatbubble-outline', label: 'Messages', route: 'Messages' },
  { icon: 'shield-checkmark-outline', label: 'Verification Status', route: null },
  { icon: 'language-outline', label: 'Language (English)', route: null },
  { icon: 'notifications-outline', label: 'Notification Settings', route: null },
  { icon: 'help-circle-outline', label: 'Help & Support', route: null },
  { icon: 'log-out-outline', label: 'Logout', route: null },
];

export default function ProfileScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={{ paddingBottom: spacing.xl }}>
        <Text style={styles.header}>Profile</Text>
        <View style={styles.profileRow}>
          <Avatar name="Aitezaz Zareen" size={64} />
          <View style={{ marginLeft: spacing.md }}>
            <Text style={styles.name}>Aitezaz Zareen</Text>
            <Text style={styles.email}>aitezazzareen@gmail.com</Text>
          </View>
        </View>

        <View style={styles.menu}>
          {MENU.map((item, i) => (
            <Pressable
              key={item.label}
              style={[styles.menuRow, i === MENU.length - 1 && { borderBottomWidth: 0 }]}
              onPress={() => item.route && navigation.navigate(item.route)}
            >
              <Ionicons name={item.icon as any} size={20} color={colors.textMuted} />
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Ionicons name="chevron-forward" size={16} color={colors.textLight} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { ...typography.h1, color: colors.text, paddingHorizontal: spacing.lg, paddingTop: spacing.sm },
  profileRow: { flexDirection: 'row', alignItems: 'center', padding: spacing.lg },
  name: { ...typography.h2, color: colors.text },
  email: { ...typography.small, color: colors.textMuted },
  menu: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  menuLabel: { ...typography.body, color: colors.text, flex: 1 },
});
