import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { colors, radius, typography } from '../theme';

type Props = {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'outline' | 'danger';
  style?: StyleProp<ViewStyle>;
};

export default function Button({ label, onPress, variant = 'primary', style }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        variant === 'primary' && styles.primary,
        variant === 'outline' && styles.outline,
        variant === 'danger' && styles.danger,
        pressed && { opacity: 0.8 },
        style,
      ]}
    >
      <Text
        style={[
          styles.label,
          variant === 'primary' && styles.labelPrimary,
          variant === 'outline' && styles.labelOutline,
          variant === 'danger' && styles.labelDanger,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 52,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  primary: { backgroundColor: colors.primary },
  outline: { backgroundColor: colors.surface, borderWidth: 1.5, borderColor: colors.border },
  danger: { backgroundColor: colors.surface, borderWidth: 1.5, borderColor: colors.danger },
  label: { ...typography.h3 },
  labelPrimary: { color: colors.navy },
  labelOutline: { color: colors.text },
  labelDanger: { color: colors.danger },
});
