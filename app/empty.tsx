import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function EmptyScreen() {
  return (
    <View className="flex-1 bg-app-bg">
      <StatusBar style="dark" />

      <View style={{ height: 44, justifyContent: 'center', paddingHorizontal: 24 }}>
        <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 12, color: '#111827' }}>9:41</Text>
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 28 }}>
        {/* Illustration */}
        <View style={{ width: 120, height: 120, borderRadius: 32, backgroundColor: '#EAF5F0', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
          <Text style={{ fontSize: 56 }}>🧭</Text>
        </View>

        <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 26, color: '#111827', textAlign: 'center', lineHeight: 32, marginBottom: 10, paddingHorizontal: 8 }}>
          You don't need to be perfect. Just continue today.
        </Text>

        <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#6B7280', textAlign: 'center', lineHeight: 22, paddingHorizontal: 16, marginBottom: 40 }}>
          Consistency over perfection. Every day you show up, you're building something real.
        </Text>

        <TouchableOpacity
          onPress={() => router.replace('/(tabs)')}
          style={{ width: 240, height: 52, backgroundColor: '#002920', borderRadius: 14, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 15, color: '#fff' }}>Continue Today's Lesson</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.replace('/(tabs)')}
          style={{ marginTop: 8, padding: 8 }}
        >
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#6B7280' }}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
