import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { BackIcon } from '../../components/icons';

export default function Step1() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Header */}
      <View style={{ paddingHorizontal: 24, paddingTop: 48, paddingBottom: 0 }}>
        <View style={{ flexDirection: 'row', gap: 4, marginBottom: 20 }}>
          {[true, false, false, false].map((done, i) => (
            <View key={i} style={{ flex: 1, height: 3, borderRadius: 2, backgroundColor: done ? '#002920' : '#E5E7EB' }} />
          ))}
        </View>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ width: 40, height: 40, borderRadius: 12, borderWidth: 1, borderColor: '#E5E7EB', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}
        >
          <BackIcon color="#111827" size={20} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 16 }} showsVerticalScrollIndicator={false}>
        {/* Icon */}
        <View style={{ width: 72, height: 72, borderRadius: 20, backgroundColor: '#F0FDF4', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
          <View style={{ width: 36, height: 36, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 28, height: 28, borderRadius: 14, borderWidth: 1.5, borderColor: '#002920', opacity: 0.3, position: 'absolute' }} />
            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#002920', opacity: 0.5 }} />
          </View>
        </View>

        <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 28, color: '#111827', lineHeight: 34, marginBottom: 12 }}>
          Feel stuck or unsure about life?
        </Text>
        <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 15, color: '#6B7280', lineHeight: 26, marginBottom: 32 }}>
          Most people know they want to improve — but don't know where to start. Without direction, effort goes in circles.
        </Text>

        {/* Pain points */}
        {[
          'Scrolling endlessly but feeling unproductive',
          'Starting habits but never sticking to them',
          'Wanting clarity but feeling overwhelmed',
        ].map((text, i) => (
          <View key={i} style={{ backgroundColor: '#F7F9F8', borderRadius: 14, padding: 16, flexDirection: 'row', gap: 12, alignItems: 'flex-start', marginBottom: 10 }}>
            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#EF4444', marginTop: 6, flexShrink: 0 }} />
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#6B7280', lineHeight: 22, flex: 1 }}>{text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={{ paddingHorizontal: 24, paddingBottom: 36, paddingTop: 12, gap: 10 }}>
        <TouchableOpacity
          onPress={() => router.push('/onboarding/step2')}
          style={{ width: '100%', height: 52, backgroundColor: '#002920', borderRadius: 14, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 15, color: '#fff' }}>That sounds like me →</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/onboarding/step2')}
          style={{ alignItems: 'center', padding: 8 }}
        >
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#6B7280' }}>Skip intro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
