import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, radius, shadow } from '../theme';
import { activeJob } from '../data/mockData';
import Avatar from '../components/Avatar';
import StatusStepper from '../components/StatusStepper';
import ScreenHeader from '../components/ScreenHeader';

export default function JobInProgressScreen() {
  const navigation = useNavigation<any>();
  const worker = activeJob.worker;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.headerCard}>
        <ScreenHeader title="Job in Progress" light />
        <View style={styles.workerRow}>
          <Avatar name={worker.name} color={worker.avatarColor} verified={worker.verified} size={44} />
          <View style={{ flex: 1, marginLeft: spacing.sm }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Text style={styles.workerName}>{worker.name}</Text>
              {worker.verified && <Ionicons name="checkmark-circle" size={14} color={colors.primary} />}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Ionicons name="star" size={12} color={colors.star} />
              <Text style={styles.workerMeta}>
                {worker.rating} ({worker.reviews})
              </Text>
            </View>
          </View>
          <View style={styles.iconCircle}>
            <Ionicons name="call" size={16} color="#fff" />
          </View>
          <View style={[styles.iconCircle, { marginLeft: spacing.sm }]}>
            <Ionicons name="chatbubble" size={16} color="#fff" />
          </View>
        </View>

        <View style={styles.jobDetailRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.jobTitle}>{activeJob.title}</Text>
            <Text style={styles.jobMeta}>{activeJob.location}</Text>
            <Text style={styles.jobMeta}>{activeJob.time}</Text>
          </View>
          <Text style={styles.price}>Rs. {activeJob.price.toLocaleString()}</Text>
        </View>
      </View>

      <View style={styles.mapWrap}>
        <View style={styles.mapGrid}>
          {Array.from({ length: 30 }).map((_, i) => (
            <View key={i} style={styles.mapCell} />
          ))}
        </View>
        <View style={styles.routeLine} />
        <View style={[styles.marker, { top: '22%', left: '58%' }]}>
          <Avatar name={worker.name} color={worker.avatarColor} size={32} />
        </View>
        <View style={[styles.markerPin, { bottom: '18%', left: '12%' }]}>
          <Ionicons name="location" size={28} color={colors.primary} />
        </View>

        <View style={styles.etaBanner}>
          <Ionicons name="navigate-circle" size={22} color={colors.primary} />
          <View>
            <Text style={styles.etaTitle}>Karigar is on the way</Text>
            <Text style={styles.etaSubtitle}>Arriving in {activeJob.etaMinutes} min</Text>
          </View>
        </View>
      </View>

      <View style={styles.statusWrap}>
        <StatusStepper current={activeJob.status} />
      </View>

      <Pressable style={styles.cancelBtn} onPress={() => navigation.navigate('MainTabs')}>
        <Text style={styles.cancelText}>Cancel Job</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.navy },
  headerCard: {
    backgroundColor: colors.navy,
    paddingBottom: spacing.lg,
  },
  workerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    marginTop: spacing.sm,
  },
  workerName: { ...typography.h3, color: '#fff' },
  workerMeta: { ...typography.small, color: '#B7C0CC' },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.navyLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jobDetailRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: spacing.lg,
    marginTop: spacing.md,
  },
  jobTitle: { ...typography.h3, color: '#fff' },
  jobMeta: { ...typography.small, color: '#B7C0CC' },
  price: { ...typography.h2, color: '#fff' },
  mapWrap: {
    flex: 1,
    backgroundColor: colors.background,
    overflow: 'hidden',
  },
  mapGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
  },
  mapCell: {
    width: '20%',
    height: '20%',
    borderWidth: 1,
    borderColor: '#EFEDE6',
  },
  routeLine: {
    position: 'absolute',
    top: '24%',
    left: '14%',
    width: '46%',
    height: 3,
    backgroundColor: colors.primary,
    transform: [{ rotate: '35deg' }],
  },
  marker: { position: 'absolute' },
  markerPin: { position: 'absolute' },
  etaBanner: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    ...shadow.card,
  },
  etaTitle: { ...typography.h3, color: colors.text },
  etaSubtitle: { ...typography.small, color: colors.textMuted },
  statusWrap: { backgroundColor: colors.surface, padding: spacing.lg },
  cancelBtn: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    height: 48,
    borderRadius: radius.md,
    borderWidth: 1.5,
    borderColor: colors.danger,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
  cancelText: { ...typography.h3, color: colors.danger },
});
