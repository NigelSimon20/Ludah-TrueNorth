import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BackIcon } from '../components/icons';

const steps = [
  'Stop planning. Start observing. Spend 3 days noticing what activities make you lose track of time.',
  'Ask one trusted person what they think you\'re uniquely good at. Their answer may surprise you.',
  'Choose the smallest possible action in the direction of something that interests you. Just one.',
];

export default function SituationScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="light" />

      {/* Hero */}
      <View style={{ backgroundColor: '#002920', paddingHorizontal: 24, paddingTop: insets.top + 8, paddingBottom: 28 }}>
        <View style={{ height: 44, justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'center' }}
          >
            <BackIcon color="#fff" size={18} />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 8 }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Situation Guide</Text>
          <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 28, color: '#fff', lineHeight: 34, marginBottom: 6 }}>Feeling Lost in Life</Text>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>5 min read · Direction</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 24 }} showsVerticalScrollIndicator={false}>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 10 }}>The Situation</Text>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 15, color: '#111827', lineHeight: 26 }}>
            That hollow feeling — when you're doing things, but nothing seems to mean anything. You're not failing exactly, but you're not going anywhere either.
          </Text>
        </View>

        {/* Perspective card */}
        <View style={{ backgroundColor: '#F7F9F8', borderRadius: 14, padding: 16, marginBottom: 24 }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 8 }}>A Different Perspective</Text>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#111827', lineHeight: 24 }}>
            Feeling lost is often a sign of{' '}
            <Text style={{ fontFamily: 'DMSans_700Bold' }}>transition</Text>
            , not failure. It means your current chapter is ending and a new one hasn't begun yet. That in-between space is uncomfortable — but it's also full of possibility.
          </Text>
        </View>

        {/* Practical steps */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 10 }}>Practical Steps</Text>

          {steps.map((step, i) => (
            <View key={i} style={{ flexDirection: 'row', gap: 12, alignItems: 'flex-start', paddingVertical: 12, borderBottomWidth: i < steps.length - 1 ? 0.5 : 0, borderBottomColor: '#E5E7EB' }}>
              <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: '#002920', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                <Text style={{ fontFamily: 'DMSans_700Bold', fontSize: 11, color: '#fff' }}>{i + 1}</Text>
              </View>
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#111827', lineHeight: 22, flex: 1 }}>{step}</Text>
            </View>
          ))}
        </View>

      </ScrollView>

      {/* CTA */}
      <View style={{ paddingHorizontal: 24, paddingBottom: insets.bottom + 20, paddingTop: 4 }}>
        <TouchableOpacity
          style={{ height: 52, backgroundColor: '#002920', borderRadius: 14, alignItems: 'center', justifyContent: 'center' }}
          onPress={() => router.push('/path-detail')}
        >
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 15, color: '#fff' }}>Start the Discipline Builder Path</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
