import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, radius, shadow } from '../theme';
import { popularServices } from '../data/mockData';
import ServiceIcon from '../components/ServiceIcon';

const STEPS = [
  { n: 1, icon: 'create-outline', label: 'Describe\nYour Job' },
  { n: 2, icon: 'people-outline', label: 'Get Offers from\nYour Karigar' },
  { n: 3, icon: 'checkmark-circle-outline', label: 'Choose & Track\nYour Karigar' },
  { n: 4, icon: 'card-outline', label: 'Pay & Rate\nthe Work' },
];

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: spacing.xl }}>
        <View style={styles.topBar}>
          <Pressable style={styles.locationRow}>
            <Text style={styles.locationText}>Islamabad</Text>
            <Ionicons name="chevron-down" size={16} color={colors.text} />
          </Pressable>
          <Pressable hitSlop={10}>
            <Ionicons name="notifications-outline" size={22} color={colors.text} />
          </Pressable>
        </View>

        <View style={{ paddingHorizontal: spacing.lg }}>
          <Text style={styles.greeting}>Assalam o Alaikum,</Text>
          <Text style={styles.question}>How can we help you today?</Text>

          <Pressable
            style={styles.searchBar}
            onPress={() => navigation.navigate('SelectService')}
          >
            <Ionicons name="search" size={18} color={colors.textLight} />
            <Text style={styles.searchPlaceholder}>Search for a service...</Text>
          </Pressable>

          <Pressable style={styles.nearMeCard} onPress={() => navigation.navigate('KarigarsNearMe')}>
            <View style={styles.nearMeIcon}>
              <Ionicons name="navigate" size={20} color={colors.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.nearMeTitle}>Karigars Near You</Text>
              <Text style={styles.nearMeSubtitle}>See who's available right now</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={colors.textLight} />
          </Pressable>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Services</Text>
            <Pressable onPress={() => navigation.navigate('SelectService')}>
              <Text style={styles.viewAll}>View all</Text>
            </Pressable>
          </View>

          <View style={styles.servicesGrid}>
            {popularServices.map((s) => (
              <ServiceIcon
                key={s.id}
                icon={s.icon}
                label={s.name}
                onPress={() => navigation.navigate('SelectService')}
              />
            ))}
          </View>

          <View style={styles.banner}>
            <View style={{ flex: 1 }}>
              <View style={styles.bannerBadge}>
                <Ionicons name="shield-checkmark" size={16} color={colors.primary} />
                <Text style={styles.bannerBadgeText}>Verified Workers</Text>
              </View>
              <Text style={styles.bannerTitle}>Trusted Services</Text>
              <Text style={styles.bannerSubtitle}>for your peace of mind</Text>
            </View>
            <Ionicons name="hand-left" size={44} color={colors.primary} />
          </View>

          <Text style={styles.sectionTitle}>How it works</Text>
          <View style={styles.stepsRow}>
            {STEPS.map((step) => (
              <View key={step.n} style={styles.stepItem}>
                <View style={styles.stepBadge}>
                  <Text style={styles.stepNumber}>{step.n}</Text>
                </View>
                <Ionicons name={step.icon as any} size={22} color={colors.navy} />
                <Text style={styles.stepLabel}>{step.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  locationText: { ...typography.h3, color: colors.text },
  greeting: { ...typography.body, color: colors.textMuted, marginTop: spacing.sm },
  question: { ...typography.h1, color: colors.text, marginTop: 2 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    height: 48,
    marginTop: spacing.lg,
  },
  searchPlaceholder: { ...typography.body, color: colors.textLight },
  nearMeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: radius.md,
    padding: spacing.md,
    marginTop: spacing.md,
  },
  nearMeIcon: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    backgroundColor: colors.chipBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nearMeTitle: { ...typography.h3, color: colors.text },
  nearMeSubtitle: { ...typography.small, color: colors.textMuted, marginTop: 1 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },
  sectionTitle: { ...typography.h2, color: colors.text },
  viewAll: { ...typography.label, color: colors.primary },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: spacing.lg,
    justifyContent: 'space-between',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.navy,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginTop: spacing.xl,
    marginBottom: spacing.xl,
    ...shadow.card,
  },
  bannerBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 },
  bannerBadgeText: { ...typography.small, color: colors.primary, fontWeight: '700' },
  bannerTitle: { ...typography.h2, color: '#fff' },
  bannerSubtitle: { ...typography.body, color: '#D8DEE6' },
  stepsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  stepItem: { alignItems: 'center', width: 76, gap: 4 },
  stepBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumber: { color: '#fff', fontSize: 11, fontWeight: '700' },
  stepLabel: { ...typography.small, color: colors.textMuted, textAlign: 'center' },
});
