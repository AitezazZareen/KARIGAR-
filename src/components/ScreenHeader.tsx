import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography } from '../theme';

type Props = {
  title: string;
  rightIcon?: string;
  onRightPress?: () => void;
  light?: boolean;
};

export default function ScreenHeader({ title, rightIcon, onRightPress, light }: Props) {
  const navigation = useNavigation();
  const fg = light ? '#fff' : colors.text;
  return (
    <View style={styles.row}>
      <Pressable onPress={() => navigation.goBack()} hitSlop={12} style={styles.iconBtn}>
        <Ionicons name="arrow-back" size={22} color={fg} />
      </Pressable>
      <Text style={[styles.title, { color: fg }]}>{title}</Text>
      {rightIcon ? (
        <Pressable onPress={onRightPress} hitSlop={12} style={styles.iconBtn}>
          <Ionicons name={rightIcon as any} size={20} color={fg} />
        </Pressable>
      ) : (
        <View style={styles.iconBtn} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  iconBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  title: { ...typography.h3 },
});
