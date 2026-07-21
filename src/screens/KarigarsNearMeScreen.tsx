import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, radius, shadow } from '../theme';
import { workers, services, Worker } from '../data/mockData';
import ScreenHeader from '../components/ScreenHeader';
import Avatar from '../components/Avatar';

const FILTERS = [{ id: 'all', name: 'All', icon: 'apps' }, ...services.filter((s) => s.id !== 'more')];

// Fixed pixel positions so the mock map pins don't reshuffle on every render.
const PIN_LAYOUT: { top: `${number}%`; left: `${number}%` }[] = [
  { top: '18%', left: '22%' },
  { top: '30%', left: '68%' },
  { top: '55%', left: '15%' },
  { top: '62%', left: '78%' },
  { top: '75%', left: '45%' },
  { top: '15%', left: '52%' },
];

export default function KarigarsNearMeScreen() {
  const navigation = useNavigation<any>();
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    const list = filter === 'all' ? workers : workers.filter((w) => w.serviceId === filter);
    return [...list].sort((a, b) => a.distanceKm - b.distanceKm);
  }, [filter]);

  const mapPins = filtered.slice(0, PIN_LAYOUT.length);

  const renderWorker = ({ item }: { item: Worker }) => (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('WorkerProfile', { workerId: item.id })}
    >
      <View style={styles.cardTop}>
        <Avatar name={item.name} color={item.avatarColor} verified={item.verified} />
        <View style={{ flex: 1, marginLeft: spacing.sm }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Text style={styles.workerName}>{item.name}</Text>
            {item.verified && <Ionicons name="checkmark-circle" size={13} color={colors.primary} />}
          </View>
          <Text style={styles.profession}>{item.profession}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 2 }}>
            <Ionicons name="star" size={11} color={colors.star} />
            <Text style={styles.meta}>
              {item.rating} ({item.reviews})
            </Text>
            <Text style={styles.metaDot}>·</Text>
            <Text style={styles.meta}>{item.distanceKm} km</Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.price}>Rs. {item.estimate.toLocaleString()}</Text>
          <View style={styles.statusRow}>
            <View style={[styles.dot, { backgroundColor: item.availableNow ? colors.success : colors.textLight }]} />
            <Text style={[styles.statusText, item.availableNow && { color: colors.success }]}>
              {item.availableNow ? 'Available now' : 'Offline'}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader title="Karigars Near You" />

      <View style={styles.mapWrap}>
        <View style={styles.mapGrid}>
          {Array.from({ length: 24 }).map((_, i) => (
            <View key={i} style={styles.mapCell} />
          ))}
        </View>
        <View style={styles.youPin}>
          <View style={styles.youDot} />
        </View>
        {mapPins.map((w, i) => (
          <View key={w.id} style={[styles.mapPin, PIN_LAYOUT[i]]}>
            <Avatar name={w.name} color={w.avatarColor} size={30} />
          </View>
        ))}
        <View style={styles.mapCaption}>
          <Ionicons name="location" size={14} color={colors.primary} />
          <Text style={styles.mapCaptionText}>{filtered.length} karigars near DHA Phase 2, Islamabad</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRow}
      >
        {FILTERS.map((f) => (
          <Pressable
            key={f.id}
            style={[styles.filterChip, filter === f.id && styles.filterChipActive]}
            onPress={() => setFilter(f.id)}
          >
            <Ionicons name={f.icon as any} size={14} color={filter === f.id ? '#fff' : colors.textMuted} />
            <Text style={[styles.filterChipText, filter === f.id && styles.filterChipTextActive]}>{f.name}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderWorker}
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.md, paddingTop: spacing.sm }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No karigars found nearby for this category yet.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  mapWrap: {
    height: 170,
    marginHorizontal: spacing.lg,
    borderRadius: radius.lg,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: spacing.md,
  },
  mapGrid: { flexDirection: 'row', flexWrap: 'wrap', height: '100%' },
  mapCell: { width: '16.6%', height: '25%', borderWidth: 1, borderColor: colors.border, backgroundColor: colors.chipBg },
  youPin: { position: 'absolute', top: '46%', left: '46%' },
  youDot: {
    width: 16, height: 16, borderRadius: 8, backgroundColor: colors.navy, borderWidth: 3, borderColor: '#fff',
  },
  mapPin: { position: 'absolute' },
  mapCaption: {
    position: 'absolute', bottom: 8, left: 8, right: 8,
    flexDirection: 'row', alignItems: 'center', gap: 6,
    backgroundColor: colors.surface, borderRadius: radius.pill, paddingHorizontal: 12, paddingVertical: 6,
    ...shadow.card,
  },
  mapCaptionText: { ...typography.small, color: colors.text, fontWeight: '600' },
  filterRow: { paddingHorizontal: spacing.lg, gap: spacing.sm, paddingBottom: spacing.sm },
  filterChip: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    paddingHorizontal: spacing.md, paddingVertical: 8, borderRadius: radius.pill, backgroundColor: colors.chipBg,
  },
  filterChipActive: { backgroundColor: colors.navy },
  filterChipText: { ...typography.small, color: colors.textMuted, fontWeight: '600' },
  filterChipTextActive: { color: '#fff' },
  card: {
    backgroundColor: colors.surface, borderRadius: radius.lg, borderWidth: 1, borderColor: colors.border,
    padding: spacing.md, ...shadow.card,
  },
  cardTop: { flexDirection: 'row', alignItems: 'center' },
  workerName: { ...typography.h3, color: colors.text },
  profession: { ...typography.small, color: colors.textMuted, marginTop: 1 },
  meta: { ...typography.small, color: colors.textMuted },
  metaDot: { color: colors.textLight },
  price: { ...typography.h3, color: colors.text },
  statusRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 },
  dot: { width: 6, height: 6, borderRadius: 3 },
  statusText: { ...typography.small, color: colors.textLight, fontWeight: '600' },
  emptyText: { ...typography.body, color: colors.textMuted, textAlign: 'center', marginTop: spacing.xl },
});
