import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

type Props = {
  name: string;
  color?: string;
  size?: number;
  verified?: boolean;
};

export default function Avatar({ name, color = colors.primary, size = 48, verified }: Props) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <View style={{ width: size, height: size }}>
      <View
        style={[
          styles.circle,
          { width: size, height: size, borderRadius: size / 2, backgroundColor: color },
        ]}
      >
        <Text style={[styles.initials, { fontSize: size * 0.36 }]}>{initials}</Text>
      </View>
      {verified && (
        <View style={[styles.badge, { right: -2, bottom: -2 }]}>
          <Ionicons name="checkmark-circle" size={size * 0.32} color={colors.primary} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  circle: { alignItems: 'center', justifyContent: 'center' },
  initials: { color: '#fff', fontWeight: '700' },
  badge: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 20,
  },
});
