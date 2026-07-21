import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, radius } from '../theme';
import { services, ServiceCategory } from '../data/mockData';
import ScreenHeader from '../components/ScreenHeader';

export default function SelectServiceScreen() {
  const navigation = useNavigation<any>();

  const renderItem = ({ item }: { item: ServiceCategory }) => (
    <Pressable style={styles.row} onPress={() => navigation.navigate('PostJob', { serviceId: item.id })}>
      <View style={styles.iconBox}>
        <Ionicons name={item.icon as any} size={22} color={colors.primary} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.textLight} />
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader title="Select a Service" />
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={colors.textLight} />
        <Text style={styles.searchPlaceholder}>Search a service...</Text>
      </View>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: spacing.lg, paddingBottom: spacing.xl }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
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
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  searchPlaceholder: { ...typography.body, color: colors.textLight },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingVertical: spacing.sm },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: colors.chipBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: { ...typography.h3, color: colors.text },
  desc: { ...typography.small, color: colors.textMuted, marginTop: 2 },
  separator: { height: 1, backgroundColor: colors.border, marginLeft: 56 },
});
