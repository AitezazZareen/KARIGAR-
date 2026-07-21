import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, typography } from '../theme';

type Props = {
  icon: string;
  label: string;
  onPress?: () => void;
};

export default function ServiceIcon({ icon, label, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.wrap}>
      <View style={styles.iconBox}>
        <Ionicons name={icon as any} size={24} color={colors.primary} />
      </View>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', width: 76 },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: radius.lg,
    backgroundColor: colors.chipBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  label: { ...typography.small, color: colors.text, textAlign: 'center' },
});
