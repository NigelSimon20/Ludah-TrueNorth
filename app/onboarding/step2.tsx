import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackIcon, ClockIcon, StarIcon, GrowthIcon } from '../../components/icons';

const features = [
  { icon: <ClockIcon color="#002920" size={18} />, title: '5 minutes per day', sub: 'Structured, focused, purposeful' },
  { icon: <StarIcon color="#002920" size={18} />, title: 'Daily challenges', sub: 'Actionable steps that build momentum' },
  { icon: <GrowthIcon color="#002920" size={18} />, title: 'Track your growth', sub: 'Streaks and milestones keep you going' },
];

export default function Step2() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={{ paddingHorizontal: 24, paddingTop: 12 }}>
        <View style={{ flexDirection: 'row', gap: 4, marginBottom: 20 }}>
          {[true, true, false, false].map((done, i) => (
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
        <View style={{ width: 72, height: 72, borderRadius: 20, backgroundColor: '#EAF5F0', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
          <View style={{ width: 32, height: 32, borderRadius: 4, borderWidth: 1.5, borderColor: '#002920', opacity: 0.4, transform: [{ rotate: '45deg' }], position: 'absolute' }} />
        </View>

        <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 28, color: '#111827', lineHeight: 34, marginBottom: 12 }}>
          One lesson, one action — every day.
        </Text>
        <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 15, color: '#6B7280', lineHeight: 26, marginBottom: 28 }}>
          TrueNorth removes the noise. Each day you get exactly what you need to move forward — nothing more, nothing less.
        </Text>

        {/* Feature cards */}
        {features.map((f, i) => (
          <View key={i} style={{ backgroundColor: '#EAF5F0', borderRadius: 14, padding: 16, flexDirection: 'row', gap: 12, alignItems: 'center', marginBottom: 10 }}>
            <View style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {f.icon}
            </View>
            <View>
              <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 14, color: '#111827' }}>{f.title}</Text>
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#6B7280', marginTop: 1 }}>{f.sub}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={{ paddingHorizontal: 24, paddingBottom: 36, paddingTop: 12 }}>
        <TouchableOpacity
          onPress={() => router.push('/onboarding/step3')}
          style={{ width: '100%', height: 52, backgroundColor: '#002920', borderRadius: 14, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 15, color: '#fff' }}>This is what I need →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
