import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, radius, shadow } from '../theme';
import { transactions, Transaction } from '../data/mockData';
import ScreenHeader from '../components/ScreenHeader';
import Button from '../components/Button';

export default function WalletScreen() {
  const renderTx = ({ item }: { item: Transaction }) => (
    <View style={styles.txRow}>
      <View style={styles.txIcon}>
        <Ionicons name={item.icon as any} size={18} color={colors.primary} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.txTitle}>{item.title}</Text>
        <Text style={styles.txSubtitle}>{item.subtitle}</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={[styles.txAmount, { color: item.positive ? colors.success : colors.danger }]}>
          {item.positive ? '+' : '-'} Rs. {Math.abs(item.amount).toLocaleString()}
        </Text>
        <Text style={styles.txDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader title="My Wallet" />
      <View style={{ paddingHorizontal: spacing.lg }}>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Current Balance</Text>
          <Text style={styles.balanceValue}>Rs. 4,250</Text>
          <Button label="Withdraw" style={{ marginTop: spacing.md }} />
        </View>

        <Text style={styles.sectionTitle}>Transaction History</Text>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderTx}
        contentContainerStyle={{ paddingHorizontal: spacing.lg }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={
          <Pressable style={styles.viewAllBtn}>
            <Text style={styles.viewAllText}>View All Transactions</Text>
          </Pressable>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  balanceCard: {
    backgroundColor: colors.navy,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    ...shadow.card,
  },
  balanceLabel: { ...typography.body, color: '#B7C0CC' },
  balanceValue: { ...typography.h1, color: '#fff', marginTop: 4 },
  sectionTitle: { ...typography.h3, color: colors.text, marginBottom: spacing.sm },
  txRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: spacing.md, gap: spacing.md },
  txIcon: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    backgroundColor: colors.chipBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txTitle: { ...typography.h3, color: colors.text, fontSize: 14 },
  txSubtitle: { ...typography.small, color: colors.textMuted },
  txAmount: { ...typography.label },
  txDate: { ...typography.small, color: colors.textLight },
  separator: { height: 1, backgroundColor: colors.border, marginLeft: 52 },
  viewAllBtn: { alignItems: 'center', paddingVertical: spacing.lg },
  viewAllText: { ...typography.label, color: colors.primary },
});
