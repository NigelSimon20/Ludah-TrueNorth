import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { CompassIcon } from '../components/icons';

export default function SplashScreen() {
  useEffect(() => {
    const t = setTimeout(() => router.replace('/welcome'), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <View className="flex-1 bg-primary items-center justify-center">
      <StatusBar style="light" />

      {/* Decorative rings */}
      <View style={{ position: 'absolute', width: 500, height: 500, borderRadius: 250, borderWidth: 1, borderColor: 'rgba(255,255,255,0.04)', top: -100, left: -80 }} />
      <View style={{ position: 'absolute', width: 360, height: 360, borderRadius: 180, borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)', top: -20, left: -20 }} />
      <View style={{ position: 'absolute', width: 200, height: 200, borderRadius: 100, borderWidth: 1, borderColor: 'rgba(255,255,255,0.07)', top: 60, left: 60 }} />

      <View className="items-center" style={{ gap: 16 }}>
        <View style={{ width: 80, height: 80, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'center' }}>
          <CompassIcon size={48} />
        </View>
        <View className="items-center">
          <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 36, color: '#fff', letterSpacing: -0.4 }}>TrueNorth</Text>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: 'rgba(255,255,255,0.5)', letterSpacing: 5, textTransform: 'uppercase', marginTop: 4 }}>Your daily guide</Text>
        </View>
      </View>

      <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.3)', marginTop: 64 }} />
    </View>
  );
}
