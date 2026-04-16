import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackIcon, CheckIcon } from '../../components/icons';

const goals = [
  { id: 'discipline', title: 'Discipline', sub: 'Build consistency and follow-through' },
  { id: 'confidence', title: 'Confidence', sub: 'Own your voice and identity' },
  { id: 'career', title: 'Career', sub: 'Direction, skills and opportunity' },
  { id: 'money', title: 'Money', sub: 'Financial habits and mindset' },
];

export default function Step3() {
  const [selected, setSelected] = useState<string[]>(['discipline']);

  const toggle = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={{ paddingHorizontal: 24, paddingTop: 12 }}>
        <View style={{ flexDirection: 'row', gap: 4, marginBottom: 20 }}>
          {[true, true, true, false].map((done, i) => (
            <View key={i} style={{ flex: 1, height: 3, borderRadius: 2, backgroundColor: done ? '#002920' : '#E5E7EB' }} />
          ))}
        </View>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ width: 40, height: 40, borderRadius: 12, borderWidth: 1, borderColor: '#E5E7EB', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}
        >
          <BackIcon color="#111827" size={20} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 16 }} showsVerticalScrollIndicator={false}>
        {/* Icon */}
        <View style={{ width: 72, height: 72, borderRadius: 20, backgroundColor: '#FEF3C7', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
          <Text style={{ fontSize: 32 }}>⭐</Text>
        </View>

        <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 28, color: '#111827', lineHeight: 34, marginBottom: 12 }}>
          What do you most want to work on?
        </Text>
        <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 15, color: '#6B7280', lineHeight: 26, marginBottom: 24 }}>
          Choose the areas that matter most to you. We'll personalise your growth path.
        </Text>

        {/* Goal cards */}
        {goals.map((goal) => {
          const sel = selected.includes(goal.id);
          return (
            <TouchableOpacity
              key={goal.id}
              onPress={() => toggle(goal.id)}
              style={{
                backgroundColor: sel ? '#EAF5F0' : '#F7F9F8',
                borderRadius: 14,
                padding: 16,
                borderWidth: 2,
                borderColor: sel ? '#002920' : 'transparent',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 14,
                marginBottom: 10,
              }}
            >
              <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: sel ? 'rgba(0,41,32,0.08)' : '#fff', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Text style={{ fontSize: 18 }}>{goal.id === 'discipline' ? '⭐' : goal.id === 'confidence' ? '✨' : goal.id === 'career' ? '💼' : '💰'}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 15, color: '#111827' }}>{goal.title}</Text>
                <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#6B7280', marginTop: 1 }}>{goal.sub}</Text>
              </View>
              {sel && (
                <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: '#22C55E', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckIcon color="#fff" size={12} />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Footer */}
      <View style={{ paddingHorizontal: 24, paddingBottom: 36, paddingTop: 12 }}>
        <TouchableOpacity
          onPress={() => router.push('/onboarding/step4')}
          style={{ width: '100%', height: 52, backgroundColor: '#002920', borderRadius: 14, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 15, color: '#fff' }}>Continue →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
