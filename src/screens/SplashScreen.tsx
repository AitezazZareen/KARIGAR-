import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import { colors, spacing, typography, radius } from '../theme';

const LANGS = [
  { code: 'ur', label: 'اردو' },
  { code: 'pa', label: 'پنجابی' },
  { code: 'en', label: 'English' },
];

export default function SplashScreen() {
  const navigation = useNavigation<any>();
  const [lang, setLang] = useState('en');

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.hero}>
        <View style={styles.logoRow}>
          <Text style={styles.logoK}>K</Text>
          <Text style={styles.logoRest}>arigar</Text>
        </View>
        <Text style={styles.tagline}>Har Kaam. Asaan. Bharosemand.</Text>

        <View style={styles.illustration}>
          <Ionicons name="people" size={96} color={colors.primary} />
        </View>
      </View>

      <View style={styles.footer}>
        <Button label="Get Started" onPress={() => navigation.navigate('MainTabs')} />
        <Button
          label="Login / Sign Up"
          variant="outline"
          onPress={() => navigation.navigate('MainTabs')}
          style={{ marginTop: spacing.md }}
        />

        <View style={styles.langRow}>
          {LANGS.map((l, i) => (
            <React.Fragment key={l.code}>
              <Pressable onPress={() => setLang(l.code)}>
                <Text style={[styles.langText, lang === l.code && styles.langActive]}>
                  {l.label}
                </Text>
              </Pressable>
              {i < LANGS.length - 1 && <Text style={styles.dot}> · </Text>}
            </React.Fragment>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, paddingHorizontal: spacing.xl },
  hero: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  logoRow: { flexDirection: 'row', alignItems: 'flex-end' },
  logoK: { fontSize: 52, fontWeight: '900', color: colors.primary },
  logoRest: { fontSize: 40, fontWeight: '800', color: colors.navy },
  tagline: { ...typography.body, color: colors.textMuted, marginTop: spacing.sm },
  illustration: {
    width: 220,
    height: 220,
    borderRadius: radius.xl,
    backgroundColor: colors.chipBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.xxl,
  },
  footer: { paddingBottom: spacing.xl },
  langRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.lg,
  },
  langText: { ...typography.body, color: colors.textLight },
  langActive: { color: colors.primary, fontWeight: '700' },
  dot: { color: colors.textLight },
});
