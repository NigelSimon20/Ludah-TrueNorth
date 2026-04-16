import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckIcon, BellIcon } from '../components/icons';

const setupCards = [
  { label: 'Growth Path', value: 'Discipline Builder', sub: '30 days · Beginner' },
  { label: 'Day 1 Lesson', value: 'What is Discipline?', sub: '5 min read · Foundations' },
  { label: 'Day 1 Challenge', value: 'Write 3 priorities for today', sub: 'Action · 5 min' },
];

export default function SetupScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#002920' }}>
      <StatusBar style="light" />

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 24 }} showsVerticalScrollIndicator={false}>
        {/* Title */}
        <View style={{ marginBottom: 28 }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 10 }}>Almost ready</Text>
          <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 30, color: '#fff', lineHeight: 36, marginBottom: 6 }}>
            {'Your path is ready,\nTapiwa.'}
          </Text>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 22 }}>
            Here's what we've set up for you based on your goals.
          </Text>
        </View>

        {/* Setup cards */}
        {setupCards.map((card) => (
          <View key={card.label} style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 16, padding: 18, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', marginBottom: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View>
                <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 6 }}>{card.label}</Text>
                <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 16, color: '#fff' }}>{card.value}</Text>
                <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>{card.sub}</Text>
              </View>
              <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: '#22C55E', alignItems: 'center', justifyContent: 'center' }}>
                <CheckIcon color="#fff" size={12} />
              </View>
            </View>
          </View>
        ))}

        {/* Notification note */}
        <View style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 14, padding: 16, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <BellIcon color="rgba(255,255,255,0.5)" size={20} />
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 20, flex: 1 }}>
            Daily reminder set for{' '}
            <Text style={{ fontFamily: 'DMSans_600SemiBold', color: 'rgba(255,255,255,0.8)' }}>8:00 AM</Text>
            . You can change this anytime.
          </Text>
        </View>
      </ScrollView>

      {/* CTA */}
      <View style={{ paddingHorizontal: 24, paddingBottom: 40, paddingTop: 20 }}>
        <TouchableOpacity
          onPress={() => router.replace('/(tabs)')}
          style={{ width: '100%', height: 54, backgroundColor: '#fff', borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ fontFamily: 'DMSans_700Bold', fontSize: 15, color: '#002920' }}>Let's Begin →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
