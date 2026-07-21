import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, radius } from '../theme';
import { activeJob } from '../data/mockData';

const TABS = ['Active', 'Completed', 'Cancelled'];

const HISTORY = [
  { id: 'h1', title: 'Fan Installation', worker: 'Ali Raza', date: '10 May, 2024', price: 900, status: 'Completed' },
  { id: 'h2', title: 'AC Gas Refill', worker: 'Bilal Ahmad', date: '02 May, 2024', price: 2200, status: 'Completed' },
];

export default function MyJobsScreen() {
  const navigation = useNavigation<any>();
  const [tab, setTab] = useState(0);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.header}>My Jobs</Text>
      <View style={styles.pillsRow}>
        {TABS.map((t, i) => (
          <Pressable key={t} onPress={() => setTab(i)} style={[styles.pill, tab === i && styles.pillActive]}>
            <Text style={[styles.pillText, tab === i && styles.pillTextActive]}>{t}</Text>
          </Pressable>
        ))}
      </View>

      {tab === 0 ? (
        <Pressable style={styles.activeCard} onPress={() => navigation.navigate('JobInProgress')}>
          <View style={styles.rowBetween}>
            <Text style={styles.activeTitle}>{activeJob.title}</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusBadgeText}>On the Way</Text>
            </View>
          </View>
          <Text style={styles.meta}>{activeJob.location}</Text>
          <Text style={styles.meta}>{activeJob.time}</Text>
          <View style={styles.rowBetween}>
            <Text style={styles.workerName}>{activeJob.worker.name}</Text>
            <Text style={styles.price}>Rs. {activeJob.price.toLocaleString()}</Text>
          </View>
        </Pressable>
      ) : (
        <FlatList
          data={HISTORY}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: spacing.lg, gap: spacing.md }}
          renderItem={({ item }) => (
            <View style={styles.historyCard}>
              <View style={styles.rowBetween}>
                <Text style={styles.activeTitle}>{item.title}</Text>
                <Ionicons name="checkmark-circle" size={18} color={colors.success} />
              </View>
              <Text style={styles.meta}>{item.worker}</Text>
              <View style={styles.rowBetween}>
                <Text style={styles.meta}>{item.date}</Text>
                <Text style={styles.price}>Rs. {item.price.toLocaleString()}</Text>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { ...typography.h1, color: colors.text, paddingHorizontal: spacing.lg, paddingTop: spacing.sm },
  pillsRow: { flexDirection: 'row', gap: spacing.sm, paddingHorizontal: spacing.lg, marginVertical: spacing.md },
  pill: { paddingHorizontal: spacing.md, paddingVertical: 6, borderRadius: radius.pill, backgroundColor: colors.chipBg },
  pillActive: { backgroundColor: colors.navy },
  pillText: { ...typography.small, color: colors.textMuted },
  pillTextActive: { color: '#fff', fontWeight: '700' },
  activeCard: {
    margin: spacing.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: 4,
  },
  historyCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: 4,
  },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  activeTitle: { ...typography.h3, color: colors.text },
  meta: { ...typography.small, color: colors.textMuted },
  workerName: { ...typography.label, color: colors.text },
  price: { ...typography.h3, color: colors.text },
  statusBadge: { backgroundColor: colors.chipBg, paddingHorizontal: spacing.sm, paddingVertical: 4, borderRadius: radius.pill },
  statusBadgeText: { ...typography.small, color: colors.primary, fontWeight: '700' },
});
