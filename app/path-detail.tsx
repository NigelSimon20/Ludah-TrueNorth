import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { BackIcon, CheckIcon, LockIcon } from '../components/icons';

const lessons = [
  { num: 1, title: 'What is Discipline?', sub: 'Day 1 · 5 min', status: 'done' },
  { num: 2, title: 'The Power of Routine', sub: 'Day 2 · 5 min', status: 'done' },
  { num: 3, title: 'Building Trust Through Consistency', sub: 'Day 3 · 5 min', status: 'active' },
  { num: 4, title: 'Starting Before You\'re Ready', sub: 'Day 4 · 5 min', status: 'locked' },
  { num: 5, title: 'Overcoming Resistance', sub: 'Day 5 · 5 min', status: 'locked' },
  { num: 6, title: 'The Two-Minute Rule', sub: 'Day 6 · 5 min', status: 'locked' },
];

export default function PathDetailScreen() {
  return (
    <View className="flex-1 bg-app-bg">
      <StatusBar style="light" />

      {/* Hero */}
      <View style={{ backgroundColor: '#002920', paddingHorizontal: 24, paddingTop: 48, paddingBottom: 24 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 44 }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'center' }}
          >
            <BackIcon color="#fff" size={18} />
          </TouchableOpacity>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>30 lessons</Text>
        </View>

        <View style={{ marginTop: 8 }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>Growth Path</Text>
          <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 26, color: '#fff', marginBottom: 8 }}>Discipline Builder</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>Day 3 of 30</Text>
            <View style={{ width: 1, height: 12, backgroundColor: 'rgba(255,255,255,0.2)' }} />
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>10% complete</Text>
          </View>
          <View style={{ height: 6, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 3, overflow: 'hidden' }}>
            <View style={{ width: '10%', height: '100%', backgroundColor: '#22C55E', borderRadius: 3 }} />
          </View>
        </View>
      </View>

      {/* Lessons list */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }} showsVerticalScrollIndicator={false}>
        <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 10 }}>Lessons</Text>

        {lessons.map((lesson) => {
          const isActive = lesson.status === 'active';
          const isDone = lesson.status === 'done';
          const isLocked = lesson.status === 'locked';
          return (
            <View
              key={lesson.num}
              style={{
                backgroundColor: '#fff',
                borderRadius: 14,
                padding: 14,
                paddingHorizontal: 16,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
                marginBottom: 8,
                borderWidth: isActive ? 1.5 : 0.5,
                borderColor: isActive ? '#002920' : '#E5E7EB',
              }}
            >
              <View style={{
                width: 32, height: 32, borderRadius: 10, alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                backgroundColor: isDone ? '#EAF5F0' : isActive ? '#002920' : '#F3F4F6',
              }}>
                {isDone
                  ? <CheckIcon color="#002920" size={14} />
                  : <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 13, color: isActive ? '#fff' : '#6B7280' }}>{lesson.num}</Text>
                }
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 14, color: '#111827' }}>{lesson.title}</Text>
                <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#6B7280', marginTop: 1 }}>{lesson.sub}</Text>
              </View>
              {isDone && (
                <View style={{ backgroundColor: '#DCFCE7', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 }}>
                  <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 11, color: '#15803D' }}>Done</Text>
                </View>
              )}
              {isActive && (
                <View style={{ backgroundColor: '#EAF5F0', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 }}>
                  <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 11, color: '#002920' }}>Today</Text>
                </View>
              )}
              {isLocked && (
                <View style={{ opacity: 0.35 }}>
                  <LockIcon color="#9CA3AF" size={16} />
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>

      {/* Continue CTA */}
      <View style={{ paddingHorizontal: 16, paddingBottom: 24, paddingTop: 4 }}>
        <TouchableOpacity
          onPress={() => router.push('/lesson')}
          style={{ height: 52, backgroundColor: '#002920', borderRadius: 14, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 15, color: '#fff' }}>Continue → Day 3 →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
