import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography, radius } from '../theme';
import { conversations, Conversation } from '../data/mockData';
import Avatar from '../components/Avatar';

const TABS = ['All', 'Customers', 'Karigars'];

export default function MessagesScreen() {
  const [tab, setTab] = useState(0);

  const renderItem = ({ item }: { item: Conversation }) => (
    <Pressable style={styles.row}>
      <Avatar name={item.name} color={item.avatarColor} verified={item.verified} />
      <View style={{ flex: 1, marginLeft: spacing.md }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {item.message}
        </Text>
      </View>
      <View style={{ alignItems: 'flex-end', gap: 6 }}>
        <Text style={styles.time}>{item.time}</Text>
        {item.unread ? (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unread}</Text>
          </View>
        ) : null}
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.header}>Messages</Text>
      <View style={styles.tabsRow}>
        {TABS.map((t, i) => (
          <Pressable key={t} onPress={() => setTab(i)} style={styles.tabBtn}>
            <Text style={[styles.tabText, tab === i && styles.tabTextActive]}>{t}</Text>
            {tab === i && <View style={styles.tabIndicator} />}
          </Pressable>
        ))}
      </View>
      <FlatList
        data={conversations}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: spacing.lg }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { ...typography.h1, color: colors.text, paddingHorizontal: spacing.lg, paddingTop: spacing.sm },
  tabsRow: {
    flexDirection: 'row',
    gap: spacing.lg,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tabBtn: { paddingBottom: spacing.sm, alignItems: 'center' },
  tabText: { ...typography.label, color: colors.textMuted },
  tabTextActive: { color: colors.text },
  tabIndicator: { height: 2, width: '100%', backgroundColor: colors.primary, marginTop: 6, borderRadius: radius.pill },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: spacing.md },
  name: { ...typography.h3, color: colors.text, fontSize: 15 },
  message: { ...typography.small, color: colors.textMuted, marginTop: 2 },
  time: { ...typography.small, color: colors.textLight },
  unreadBadge: {
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  unreadText: { color: '#fff', fontSize: 10, fontWeight: '700' },
  separator: { height: 1, backgroundColor: colors.border, marginLeft: 52 },
});
