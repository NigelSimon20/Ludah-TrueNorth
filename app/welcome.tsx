import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#002920', overflow: 'hidden' }}>
      <StatusBar style="light" />

      {/* Decorative rings */}
      <View style={{ position: 'absolute', width: 340, height: 340, borderRadius: 170, borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)', top: -80, right: -80 }} />
      <View style={{ position: 'absolute', width: 240, height: 240, borderRadius: 120, borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)', top: -30, right: -30 }} />

      {/* Top label */}
      <View style={{ height: 60, justifyContent: 'flex-end', paddingHorizontal: 28, paddingBottom: 8 }}>
        <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 5, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>TrueNorth</Text>
      </View>

      {/* Hero content */}
      <View style={{ flex: 1, paddingHorizontal: 28, paddingTop: 20 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 4, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: 16 }}>Welcome</Text>
          <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 40, color: '#fff', lineHeight: 46, marginBottom: 18 }}>
            {'Build discipline.\n'}
            <Text style={{ fontFamily: 'DMSerifDisplay_400Regular_Italic', color: 'rgba(255,255,255,0.75)' }}>Gain direction.</Text>
          </Text>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 26 }}>
            Daily lessons and focused actions to help you grow — one step at a time. No noise, no overwhelm.
          </Text>

          {/* Stats */}
          <View style={{ flexDirection: 'row', gap: 20, marginTop: 32, alignItems: 'center' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 28, color: '#fff' }}>3K+</Text>
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>learners</Text>
            </View>
            <View style={{ width: 1, height: 36, backgroundColor: 'rgba(255,255,255,0.1)' }} />
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 28, color: '#fff' }}>90+</Text>
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>daily lessons</Text>
            </View>
            <View style={{ width: 1, height: 36, backgroundColor: 'rgba(255,255,255,0.1)' }} />
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 28, color: '#fff' }}>5min</Text>
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>per day</Text>
            </View>
          </View>
        </View>
      </View>

      {/* CTA */}
      <View style={{ paddingHorizontal: 28, paddingBottom: 40 }}>
        <TouchableOpacity
          onPress={() => router.push('/onboarding/step1')}
          style={{ width: '100%', height: 54, backgroundColor: '#fff', borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ fontFamily: 'DMSans_700Bold', fontSize: 15, color: '#002920' }}>Get Started</Text>
        </TouchableOpacity>
        <Text style={{ fontFamily: 'DMSans_400Regular', textAlign: 'center', marginTop: 14, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
          Already have an account?{' '}
          <Text style={{ fontFamily: 'DMSans_600SemiBold', color: 'rgba(255,255,255,0.75)' }}>Sign in</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
