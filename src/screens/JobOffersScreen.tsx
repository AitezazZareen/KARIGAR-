import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, radius, shadow } from '../theme';
import { workers, Worker, activeJob } from '../data/mockData';
import ScreenHeader from '../components/ScreenHeader';
import Avatar from '../components/Avatar';
import Button from '../components/Button';

const TABS = ['All Offers', 'Best Match', 'Near Me'];

export default function JobOffersScreen() {
  const navigation = useNavigation<any>();
  const [tab, setTab] = useState(0);

  const renderOffer = ({ item }: { item: Worker }) => (
    <View style={styles.card}>
      {item.bestMatch && (
        <View style={styles.bestMatch}>
          <Ionicons name="checkmark-circle" size={14} color={colors.success} />
          <Text style={styles.bestMatchText}>Best Match</Text>
        </View>
      )}
      <View style={styles.cardTop}>
        <Avatar name={item.name} color={item.avatarColor} verified={item.verified} />
        <View style={{ flex: 1, marginLeft: spacing.sm }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Text style={styles.workerName}>{item.name}</Text>
            {item.verified && <Ionicons name="checkmark-circle" size={14} color={colors.primary} />}
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Ionicons name="star" size={12} color={colors.star} />
            <Text style={styles.meta}>
              {item.rating} ({item.reviews})
            </Text>
            <Text style={styles.metaDot}>·</Text>
            <Text style={styles.meta}>{item.distanceKm} km away</Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.price}>Rs. {item.estimate.toLocaleString()}</Text>
          <Text style={styles.estimateLabel}>Estimated</Text>
        </View>
      </View>

      <Text style={styles.availability}>
        Can complete the work tomorrow at {item.availability.replace('tomorrow at ', '')}
      </Text>

      <View style={styles.actionRow}>
        <Button
          label="View Profile"
          variant="outline"
          style={{ flex: 1 }}
          onPress={() => navigation.navigate('WorkerProfile', { workerId: item.id })}
        />
        <Pressable
          style={styles.selectBtn}
          onPress={() => navigation.navigate('JobInProgress', { workerId: item.id })}
        >
          <Text style={styles.selectBtnText}>Select</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader title="Job Offers" />

      <View style={{ paddingHorizontal: spacing.lg }}>
        <View style={styles.jobSummary}>
          <View style={styles.jobIcon}>
            <Ionicons name="flash" size={18} color={colors.primary} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.jobTitle}>{activeJob.title}</Text>
            <Text style={styles.jobMeta}>{activeJob.location}</Text>
            <Text style={styles.jobMeta}>{activeJob.time}</Text>
          </View>
          <Pressable>
            <Text style={styles.editLink}>Edit</Text>
          </Pressable>
        </View>

        <View style={styles.tabsRow}>
          <Text style={styles.offersCount}>All Offers ({workers.length})</Text>
        </View>
        <View style={styles.pillsRow}>
          {TABS.map((t, i) => (
            <Pressable key={t} onPress={() => setTab(i)} style={[styles.pill, tab === i && styles.pillActive]}>
              <Text style={[styles.pillText, tab === i && styles.pillTextActive]}>{t}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <FlatList
        data={workers}
        keyExtractor={(item) => item.id}
        renderItem={renderOffer}
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  jobSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  jobIcon: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    backgroundColor: colors.chipBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jobTitle: { ...typography.h3, color: colors.text },
  jobMeta: { ...typography.small, color: colors.textMuted },
  editLink: { ...typography.label, color: colors.primary },
  tabsRow: { marginBottom: spacing.sm },
  offersCount: { ...typography.h3, color: colors.text },
  pillsRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.sm },
  pill: {
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.pill,
    backgroundColor: colors.chipBg,
  },
  pillActive: { backgroundColor: colors.navy },
  pillText: { ...typography.small, color: colors.textMuted },
  pillTextActive: { color: '#fff', fontWeight: '700' },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    ...shadow.card,
  },
  bestMatch: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: spacing.sm },
  bestMatchText: { ...typography.small, color: colors.success, fontWeight: '700' },
  cardTop: { flexDirection: 'row', alignItems: 'center' },
  workerName: { ...typography.h3, color: colors.text },
  meta: { ...typography.small, color: colors.textMuted },
  metaDot: { color: colors.textLight },
  price: { ...typography.h3, color: colors.text },
  estimateLabel: { ...typography.small, color: colors.textLight },
  availability: { ...typography.small, color: colors.textMuted, marginTop: spacing.sm },
  actionRow: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.md },
  selectBtn: {
    flex: 1,
    height: 52,
    borderRadius: radius.md,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectBtnText: { ...typography.h3, color: colors.navy },
});
