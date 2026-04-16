import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function CompleteScreen() {
  return (
    <View className="flex-1 bg-primary items-center justify-center">
      <StatusBar style="light" />

      {/* Main content */}
      <View style={{ alignItems: 'center', paddingHorizontal: 28 }}>
        {/* Complete icon */}
        <View style={{ width: 96, height: 96, borderRadius: 32, backgroundColor: 'rgba(34,197,94,0.2)', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
          <Text style={{ fontSize: 48 }}>✅</Text>
        </View>

        <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 32, color: '#fff', marginBottom: 8, textAlign: 'center' }}>
          Challenge Complete!
        </Text>
        <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 26, textAlign: 'center' }}>
          You showed up today. That matters more than you know.
        </Text>

        {/* Streak card */}
        <View style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 14, padding: 14, paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 28, marginBottom: 28, width: 280 }}>
          <Text style={{ fontSize: 26 }}>🔥</Text>
          <View>
            <Text style={{ fontFamily: 'DMSans_700Bold', fontSize: 16, color: '#fff' }}>4 Day Streak</Text>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>Discipline Builder · Day 3</Text>
          </View>
          <View style={{ marginLeft: 'auto', backgroundColor: 'rgba(34,197,94,0.2)', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 }}>
            <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 12, color: '#22C55E' }}>+1</Text>
          </View>
        </View>

        {/* Quote */}
        <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: 'rgba(255,255,255,0.55)', textAlign: 'center', lineHeight: 22, width: 280 }}>
          "Small disciplines repeated with consistency every day lead to great achievements gained slowly over time." — John Maxwell
        </Text>
      </View>

      {/* Bottom CTAs */}
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, paddingHorizontal: 24, paddingBottom: 36, gap: 10 }}>
        <TouchableOpacity
          onPress={() => router.replace('/(tabs)')}
          style={{ height: 52, backgroundColor: '#fff', borderRadius: 14, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ fontFamily: 'DMSans_700Bold', fontSize: 15, color: '#002920' }}>Back to Today</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/lesson')}
          style={{ height: 48, borderRadius: 14, borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>Review Lesson</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
