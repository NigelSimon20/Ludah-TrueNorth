import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CompassIcon } from '../../components/icons';

export default function Step4() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#002920' }}>
      <StatusBar style="light" />

      {/* Content */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 28 }}>
        <View style={{ width: 80, height: 80, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.08)', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
          <CompassIcon size={44} />
        </View>

        <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 34, color: '#fff', lineHeight: 40, textAlign: 'center', marginBottom: 16 }}>
          {'Ready to improve\n'}
          <Text style={{ fontFamily: 'DMSerifDisplay_400Regular_Italic' }}>every single day?</Text>
        </Text>

        <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 26, textAlign: 'center', marginBottom: 12 }}>
          You've taken the first step. TrueNorth will guide you with one daily lesson and one daily action. Just show up.
        </Text>

        {/* Tags */}
        <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
          {['Discipline', '5 min/day', 'No pressure'].map((tag) => (
            <View key={tag} style={{ backgroundColor: 'rgba(255,255,255,0.08)', paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20 }}>
              <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* CTA */}
      <View style={{ paddingHorizontal: 28, paddingBottom: 40, gap: 10 }}>
        <TouchableOpacity
          onPress={() => router.push('/account')}
          style={{ width: '100%', height: 54, backgroundColor: '#fff', borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ fontFamily: 'DMSans_700Bold', fontSize: 16, color: '#002920' }}>Start My Journey</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/account')}
          style={{ alignItems: 'center', padding: 10 }}
        >
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>I'll do this later</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
