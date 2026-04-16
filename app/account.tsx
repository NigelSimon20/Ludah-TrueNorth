import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackIcon, CheckIcon } from '../components/icons';

export default function AccountScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={{ paddingHorizontal: 24, paddingTop: 12 }}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ width: 40, height: 40, borderRadius: 12, borderWidth: 1, borderColor: '#E5E7EB', alignItems: 'center', justifyContent: 'center' }}
        >
          <BackIcon color="#111827" size={20} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 24 }}>
        {/* Title */}
        <View style={{ marginTop: 20, marginBottom: 32 }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 10 }}>Quick setup</Text>
          <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 30, color: '#111827', lineHeight: 36, marginBottom: 8 }}>
            What should we call you?
          </Text>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#6B7280', lineHeight: 22 }}>
            This helps personalise your experience. You can always change it later.
          </Text>
        </View>

        {/* Input */}
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 13, color: '#111827', marginBottom: 6 }}>Your first name</Text>
          <TextInput
            defaultValue="Tapiwa"
            placeholder="e.g. Tapiwa"
            style={{
              height: 52, borderRadius: 12, borderWidth: 1.5, borderColor: '#E5E7EB',
              backgroundColor: '#F9FAFB', paddingHorizontal: 16,
              fontSize: 15, color: '#111827', fontFamily: 'DMSans_400Regular'
            }}
          />
        </View>

        {/* Privacy note */}
        <View style={{ backgroundColor: '#F7F9F8', borderRadius: 14, padding: 16, flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
          <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: '#EAF5F0', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
            <CheckIcon color="#002920" size={11} />
          </View>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 13, color: '#6B7280', lineHeight: 20, flex: 1 }}>
            We never share your name. It's only used to personalise your daily greeting.
          </Text>
        </View>

        {/* Footer */}
        <View style={{ marginTop: 'auto', paddingBottom: 32, gap: 10, paddingTop: 24 }}>
          <TouchableOpacity
            onPress={() => router.push('/setup')}
            style={{ width: '100%', height: 54, backgroundColor: '#002920', borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 15, color: '#fff' }}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push('/setup')}
            style={{ alignItems: 'center', padding: 8 }}
          >
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#6B7280' }}>Skip for now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
