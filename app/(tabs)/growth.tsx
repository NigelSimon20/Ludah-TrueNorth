import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function GrowthScreen() {
  return (
    <View className="flex-1 bg-app-bg">
      <StatusBar style="dark" />

      <View style={{ height: 44, justifyContent: 'center', paddingHorizontal: 24 }}>
        <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 12, color: '#111827' }}>9:41</Text>
      </View>

      <View style={{ paddingHorizontal: 24, paddingBottom: 16 }}>
        <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 4 }}>Your Journey</Text>
        <Text style={{ fontFamily: 'DMSans_700Bold', fontSize: 24, color: '#111827' }}>Growth Paths</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>

        {/* Active section */}
        <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 8, paddingLeft: 2 }}>Active</Text>

        {/* Active path card */}
        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 18, paddingLeft: 15, borderWidth: 0.5, borderColor: '#E5E7EB', borderLeftWidth: 3, borderLeftColor: '#002920', marginBottom: 10, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <View style={{ width: 44, height: 44, borderRadius: 14, backgroundColor: '#EAF5F0', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 20 }}>⭐</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 15, color: '#111827' }}>Discipline Builder</Text>
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#6B7280', marginTop: 1 }}>Day 3 of 30 · Beginner</Text>
            </View>
            <View style={{ backgroundColor: '#DCFCE7', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 }}>
              <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 11, color: '#15803D' }}>Active</Text>
            </View>
          </View>

          {/* Progress bar */}
          <View style={{ height: 6, backgroundColor: '#E5E7EB', borderRadius: 3, overflow: 'hidden' }}>
            <View style={{ width: '10%', height: '100%', backgroundColor: '#002920', borderRadius: 3 }} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#6B7280' }}>3 of 30 lessons</Text>
            <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 12, color: '#002920' }}>10%</Text>
          </View>

          <TouchableOpacity
            onPress={() => router.push('/path-detail')}
            style={{ height: 40, backgroundColor: '#002920', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 12 }}
          >
            <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 13, color: '#fff' }}>Continue Path →</Text>
          </TouchableOpacity>
        </View>

        {/* Browse section */}
        <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 8, marginTop: 6, paddingLeft: 2 }}>Browse Paths</Text>

        {/* Confidence Builder */}
        <TouchableOpacity
          onPress={() => router.push('/path-detail')}
          style={{ backgroundColor: '#fff', borderRadius: 16, padding: 18, borderWidth: 0.5, borderColor: '#E5E7EB', marginBottom: 10, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}
          activeOpacity={0.85}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <View style={{ width: 44, height: 44, borderRadius: 14, backgroundColor: '#EFF6FF', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 20 }}>✨</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 15, color: '#111827' }}>Confidence Builder</Text>
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#6B7280', marginTop: 1 }}>28 lessons · Beginner</Text>
            </View>
            <View style={{ backgroundColor: '#F3F4F6', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 }}>
              <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 11, color: '#6B7280' }}>Unlock</Text>
            </View>
          </View>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 13, color: '#6B7280', lineHeight: 20 }}>Own your voice, own your identity. Build the inner confidence that translates to action.</Text>
        </TouchableOpacity>

        {/* Career Starter */}
        <TouchableOpacity
          style={{ backgroundColor: '#fff', borderRadius: 16, padding: 18, borderWidth: 0.5, borderColor: '#E5E7EB', marginBottom: 8, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}
          activeOpacity={0.85}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <View style={{ width: 44, height: 44, borderRadius: 14, backgroundColor: '#FEF3C7', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 20 }}>💼</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 15, color: '#111827' }}>Career Starter</Text>
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#6B7280', marginTop: 1 }}>32 lessons · Intermediate</Text>
            </View>
            <View style={{ backgroundColor: '#FEF3C7', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 }}>
              <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 11, color: '#92400E' }}>Coming Soon</Text>
            </View>
          </View>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 13, color: '#6B7280', lineHeight: 20 }}>Direction, skills and the mindset to find and pursue meaningful work.</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}
