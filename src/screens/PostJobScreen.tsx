import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, radius } from '../theme';
import ScreenHeader from '../components/ScreenHeader';
import Button from '../components/Button';

const STEP_LABELS = ['1', '2', '3'];

export default function PostJobScreen() {
  const navigation = useNavigation<any>();
  const [title, setTitle] = useState('House Wiring Fixing');
  const [description, setDescription] = useState(
    'Need an electrician to fix wiring issues in 2 rooms and install 3 new points.'
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader title="Post a Job" />

      <View style={styles.stepRow}>
        {STEP_LABELS.map((label, i) => (
          <React.Fragment key={label}>
            <View style={[styles.stepCircle, i === 0 && styles.stepCircleActive]}>
              <Text style={[styles.stepText, i === 0 && styles.stepTextActive]}>{label}</Text>
            </View>
            {i < STEP_LABELS.length - 1 && <View style={styles.stepLine} />}
          </React.Fragment>
        ))}
      </View>

      <ScrollView contentContainerStyle={{ padding: spacing.lg, paddingBottom: 120 }}>
        <Text style={styles.formTitle}>Describe Your Job</Text>

        <Text style={styles.fieldLabel}>Service Category</Text>
        <Pressable style={styles.selectField}>
          <Text style={styles.fieldValue}>Electrician</Text>
          <Ionicons name="chevron-down" size={16} color={colors.textLight} />
        </Pressable>

        <Text style={styles.fieldLabel}>Job Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />

        <Text style={styles.fieldLabel}>Job Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <Text style={styles.fieldLabel}>Add Photos (Optional)</Text>
        <View style={styles.photoRow}>
          {[1, 2, 3].map((i) => (
            <View key={i} style={styles.photoThumb} />
          ))}
          <Pressable style={styles.photoAdd}>
            <Ionicons name="camera" size={20} color={colors.textLight} />
          </Pressable>
        </View>

        <Text style={styles.fieldLabel}>Select Date & Time</Text>
        <Pressable style={styles.selectField}>
          <Text style={styles.fieldValue}>Tomorrow, 10:00 AM</Text>
          <Ionicons name="calendar-outline" size={16} color={colors.textLight} />
        </Pressable>

        <Text style={styles.fieldLabel}>Location</Text>
        <Pressable style={styles.selectField}>
          <Text style={styles.fieldValue}>DHA Phase 2, Islamabad</Text>
          <Ionicons name="location-outline" size={16} color={colors.textLight} />
        </Pressable>
      </ScrollView>

      <View style={styles.footer}>
        <Button label="Next" onPress={() => navigation.navigate('JobOffers')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    gap: 4,
  },
  stepCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.chipBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepCircleActive: { backgroundColor: colors.primary },
  stepText: { ...typography.label, color: colors.textLight },
  stepTextActive: { color: '#fff' },
  stepLine: { width: 40, height: 2, backgroundColor: colors.border },
  formTitle: { ...typography.h2, color: colors.text, marginBottom: spacing.lg },
  fieldLabel: { ...typography.label, color: colors.textMuted, marginTop: spacing.lg, marginBottom: spacing.xs },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    height: 48,
    ...typography.body,
    color: colors.text,
    backgroundColor: colors.surface,
  },
  textArea: { height: 90, paddingTop: spacing.sm, textAlignVertical: 'top' },
  selectField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    height: 48,
    backgroundColor: colors.surface,
  },
  fieldValue: { ...typography.body, color: colors.text },
  photoRow: { flexDirection: 'row', gap: spacing.sm },
  photoThumb: {
    width: 64,
    height: 64,
    borderRadius: radius.md,
    backgroundColor: colors.chipBg,
  },
  photoAdd: {
    width: 64,
    height: 64,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing.lg,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
