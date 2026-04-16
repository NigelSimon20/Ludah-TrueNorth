import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const situations = [
  { emoji: '🧭', title: 'Feeling Lost', sub: 'When life feels directionless', bg: '#EAF5F0' },
  { emoji: '⚡', title: 'Lack of Discipline', sub: "Can't seem to stick to things", bg: '#EFF6FF' },
  { emoji: '😬', title: 'Low Confidence', sub: 'Doubting your voice', bg: '#FEF3C7' },
  { emoji: '😔', title: 'Dealing with Rejection', sub: "When things don't go your way", bg: '#FEE2E2' },
  { emoji: '😮‍💨', title: 'Burnout', sub: 'Running on empty', bg: '#F5F3FF' },
  { emoji: '🎯', title: 'Finding Purpose', sub: 'What am I even doing?', bg: '#F0FDF4' },
];

const topics = ['Discipline', 'Confidence', 'Focus', 'Relationships', 'Money', 'Career'];

export default function ExploreScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F9F8' }} edges={['top', 'left', 'right']}>
      <StatusBar style="dark" />

      <View style={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 16 }}>
        <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 4 }}>Find your footing</Text>
        <Text style={{ fontFamily: 'DMSans_700Bold', fontSize: 24, color: '#111827' }}>Explore</Text>
        <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#6B7280', marginTop: 2 }}>What are you dealing with today?</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>

        <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 8 }}>Situations</Text>

        {/* 2-column grid */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
          {situations.map((s, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => router.push('/situation')}
              style={{ width: '48%', backgroundColor: s.bg, borderRadius: 16, padding: 20, paddingHorizontal: 16, gap: 8, minHeight: 120 }}
              activeOpacity={0.85}
            >
              <Text style={{ fontSize: 24 }}>{s.emoji}</Text>
              <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 15, color: '#111827', lineHeight: 20 }}>{s.title}</Text>
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 11, color: '#6B7280' }}>{s.sub}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 8, marginTop: 4 }}>Topics</Text>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          {topics.map((topic) => (
            <TouchableOpacity
              key={topic}
              style={{ paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, borderWidth: 1.5, borderColor: '#E5E7EB', backgroundColor: '#fff' }}
              activeOpacity={0.85}
            >
              <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 13, color: '#6B7280' }}>{topic}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
