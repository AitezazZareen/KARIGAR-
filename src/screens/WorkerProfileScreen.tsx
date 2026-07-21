import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { colors, spacing, typography, radius } from '../theme';
import { workers } from '../data/mockData';
import Avatar from '../components/Avatar';
import ScreenHeader from '../components/ScreenHeader';
import Button from '../components/Button';

export default function WorkerProfileScreen() {
  const route = useRoute<any>();
  const worker = workers.find((w) => w.id === route.params?.workerId) ?? workers[0];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader title="Worker Profile" />
      <ScrollView contentContainerStyle={{ padding: spacing.lg, paddingBottom: 120 }}>
        <View style={styles.profileRow}>
          <Avatar name={worker.name} color={worker.avatarColor} verified={worker.verified} size={72} />
          <View style={{ marginLeft: spacing.md, flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Text style={styles.name}>{worker.name}</Text>
              {worker.verified && <Ionicons name="checkmark-circle" size={16} color={colors.primary} />}
            </View>
            <Text style={styles.profession}>{worker.profession}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Ionicons name="star" size={13} color={colors.star} />
              <Text style={styles.meta}>
                {worker.rating} ({worker.reviews} Reviews)
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Ionicons name="location-outline" size={13} color={colors.textMuted} />
              <Text style={styles.meta}>Islamabad, Pakistan</Text>
            </View>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{worker.completedJobs}</Text>
            <Text style={styles.statLabel}>Completed Jobs</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{worker.rating}</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{worker.yearsExp}</Text>
            <Text style={styles.statLabel}>Years Exp.</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.about}>{worker.about}</Text>

        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.chipRow}>
          {worker.skills.map((skill) => (
            <View key={skill} style={styles.chip}>
              <Text style={styles.chipText}>{skill}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Portfolio</Text>
        <View style={styles.portfolioGrid}>
          {[1, 2, 3].map((i) => (
            <View key={i} style={styles.portfolioThumb} />
          ))}
          <View style={styles.portfolioMore}>
            <Text style={styles.portfolioMoreText}>+8</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button label="Message" variant="outline" style={{ flex: 1 }} />
        <Button label="Call" style={{ flex: 1, marginLeft: spacing.md }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  profileRow: { flexDirection: 'row', marginBottom: spacing.lg },
  name: { ...typography.h2, color: colors.text },
  profession: { ...typography.body, color: colors.textMuted },
  meta: { ...typography.small, color: colors.textMuted },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.md,
    marginBottom: spacing.xl,
  },
  statBox: { flex: 1, alignItems: 'center' },
  statValue: { ...typography.h2, color: colors.text },
  statLabel: { ...typography.small, color: colors.textMuted },
  sectionTitle: { ...typography.h3, color: colors.text, marginBottom: spacing.sm, marginTop: spacing.sm },
  about: { ...typography.body, color: colors.textMuted, lineHeight: 20, marginBottom: spacing.xl },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginBottom: spacing.xl },
  chip: {
    backgroundColor: colors.chipBg,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.pill,
  },
  chipText: { ...typography.small, color: colors.text },
  portfolioGrid: { flexDirection: 'row', gap: spacing.sm },
  portfolioThumb: { width: 72, height: 72, borderRadius: radius.md, backgroundColor: colors.chipBg },
  portfolioMore: {
    width: 72,
    height: 72,
    borderRadius: radius.md,
    backgroundColor: colors.navy,
    alignItems: 'center',
    justifyContent: 'center',
  },
  portfolioMoreText: { color: '#fff', fontWeight: '700' },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: spacing.lg,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
