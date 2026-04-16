import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [actionDone, setActionDone] = useState(false);

  const now = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const dateLabel = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}`;
  const hour = now.getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F9F8' }} edges={['top', 'left', 'right']}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={{ paddingHorizontal: 24, paddingTop: 12, paddingBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 10, color: '#6B7280', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 2 }}>{dateLabel}</Text>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 22, color: '#111827', lineHeight: 28 }}>{greeting}, Tapiwa</Text>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#6B7280', marginTop: 2 }}>Let's focus on today</Text>
        </View>
        <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: '#002920', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 16, color: '#fff' }}>T</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16, gap: 10 }}>

        {/* Today's Lesson Card */}
        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 18, borderWidth: 0.5, borderColor: '#E5E7EB', shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <View style={{ width: 32, height: 32, borderRadius: 10, backgroundColor: '#EAF5F0', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 14 }}>📖</Text>
              </View>
              <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280' }}>Today's Lesson</Text>
            </View>
            <View style={{ backgroundColor: '#EAF5F0', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 }}>
              <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 11, color: '#002920' }}>Day 3</Text>
            </View>
          </View>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 16, color: '#111827', marginBottom: 6 }}>Building Trust Through Consistency</Text>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 13, color: '#6B7280', lineHeight: 20, marginBottom: 14 }}>
            Learn how showing up reliably over time builds deep professional trust — and how to start today, even in small ways.
          </Text>
          <TouchableOpacity
            onPress={() => router.push('/lesson')}
            style={{ height: 44, backgroundColor: '#002920', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 14, color: '#fff' }}>Start Lesson</Text>
          </TouchableOpacity>
        </View>

        {/* Today's Action Card */}
        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 18, borderWidth: 0.5, borderColor: '#E5E7EB', shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <View style={{ width: 32, height: 32, borderRadius: 10, backgroundColor: '#FFF3E0', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 14 }}>✅</Text>
              </View>
              <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280' }}>Today's Action</Text>
            </View>
            <TouchableOpacity
              onPress={() => setActionDone(true)}
              style={{
                width: 24, height: 24, borderRadius: 7,
                borderWidth: actionDone ? 0 : 1.5,
                borderColor: '#E5E7EB',
                backgroundColor: actionDone ? '#22C55E' : 'transparent',
                alignItems: 'center', justifyContent: 'center'
              }}
            >
              {actionDone && <Text style={{ fontSize: 12, color: '#fff' }}>✓</Text>}
            </TouchableOpacity>
          </View>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 15, color: '#111827', marginBottom: 5 }}>Send one message of appreciation</Text>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 13, color: '#6B7280', lineHeight: 20, marginBottom: 14 }}>
            Reach out to a colleague, mentor, or peer and thank them for something specific they did this week.
          </Text>
          <TouchableOpacity
            onPress={() => router.push('/complete')}
            style={{ height: 44, borderRadius: 10, borderWidth: 1.5, borderColor: '#22C55E', alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 14, color: '#22C55E' }}>Mark as Complete</Text>
          </TouchableOpacity>
        </View>

        {/* Streak Card */}
        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 14, paddingHorizontal: 18, borderWidth: 0.5, borderColor: '#E5E7EB', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Text style={{ fontSize: 22 }}>🔥</Text>
            <View>
              <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 15, color: '#111827' }}>3 Day Streak</Text>
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#6B7280' }}>Discipline Builder • Day 3</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
            {[true, true, true, false, false, false, false].map((active, i) => (
              <View key={i} style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: active ? '#22C55E' : '#E5E7EB' }} />
            ))}
          </View>
        </View>

        {/* Reflection Card */}
        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 16, paddingHorizontal: 18, borderWidth: 0.5, borderColor: '#E5E7EB' }}>
          <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 13, color: '#6B7280', textAlign: 'center', marginBottom: 10 }}>
            Did you complete today's challenge?
          </Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <TouchableOpacity
              onPress={() => router.push('/complete')}
              style={{ flex: 1, height: 40, borderRadius: 10, backgroundColor: '#002920', borderWidth: 1.5, borderColor: '#002920', alignItems: 'center', justifyContent: 'center' }}
            >
              <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 13, color: '#fff' }}>Yes, I did!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, height: 40, borderRadius: 10, borderWidth: 1.5, borderColor: '#E5E7EB', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 13, color: '#6B7280' }}>Not yet</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
