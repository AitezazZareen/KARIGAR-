import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography } from '../theme';

const STEPS = [
  { key: 'accepted', label: 'Accepted', icon: 'checkmark' },
  { key: 'onTheWay', label: 'On the Way', icon: 'navigate' },
  { key: 'inProgress', label: 'In Progress', icon: 'person' },
  { key: 'completed', label: 'Completed', icon: 'checkmark-done' },
];

export default function StatusStepper({ current }: { current: string }) {
  const currentIndex = STEPS.findIndex((s) => s.key === current);

  return (
    <View style={styles.row}>
      {STEPS.map((step, i) => {
        const done = i <= currentIndex;
        return (
          <View key={step.key} style={styles.step}>
            <View style={[styles.circle, done ? styles.circleDone : styles.circlePending]}>
              <Ionicons
                name={step.icon as any}
                size={16}
                color={done ? '#fff' : colors.textLight}
              />
            </View>
            <Text style={[styles.label, done && { color: colors.text }]}>{step.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  step: { alignItems: 'center', flex: 1 },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  circleDone: { backgroundColor: colors.success },
  circlePending: { backgroundColor: colors.chipBg },
  label: { ...typography.small, color: colors.textLight, textAlign: 'center' },
});
