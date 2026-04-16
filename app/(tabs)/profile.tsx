import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-app-bg">
      <StatusBar style="dark" />

      <View style={{ height: 44, justifyContent: 'center', paddingHorizontal: 24 }}>
        <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 12, color: '#111827' }}>9:41</Text>
      </View>

      {/* Profile header */}
      <View style={{ paddingHorizontal: 24, paddingBottom: 16, flexDirection: 'row', alignItems: 'center', gap: 14 }}>
        <View style={{ width: 64, height: 64, borderRadius: 20, backgroundColor: '#002920', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 24, color: '#fff' }}>T</Text>
        </View>
        <View>
          <Text style={{ fontFamily: 'DMSans_700Bold', fontSize: 20, color: '#111827' }}>Tapiwa</Text>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 13, color: '#6B7280', marginTop: 2 }}>Member since March 2026</Text>
          <View style={{ flexDirection: 'row', gap: 6, marginTop: 8 }}>
            <View style={{ backgroundColor: '#DCFCE7', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 }}>
              <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 11, color: '#15803D' }}>Discipline</Text>
            </View>
            <View style={{ backgroundColor: '#EFF6FF', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 }}>
              <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 11, color: '#1D4ED8' }}>Confidence</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>

        {/* Active Path */}
        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 18, borderWidth: 0.5, borderColor: '#E5E7EB', marginBottom: 10, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 12 }}>Active Path</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: '#EAF5F0', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 18 }}>⭐</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 14, color: '#111827' }}>Discipline Builder</Text>
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#6B7280', marginTop: 1 }}>Day 3 of 30</Text>
            </View>
          </View>
          <View style={{ height: 6, backgroundColor: '#E5E7EB', borderRadius: 3, overflow: 'hidden', marginTop: 10 }}>
            <View style={{ width: '10%', height: '100%', backgroundColor: '#002920', borderRadius: 3 }} />
          </View>
        </View>

        {/* Settings */}
        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 18, borderWidth: 0.5, borderColor: '#E5E7EB', marginBottom: 10, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 4 }}>Settings</Text>

          {/* Daily Reminder with toggle */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 14, borderBottomWidth: 0.5, borderBottomColor: '#E5E7EB' }}>
            <View>
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 15, color: '#111827' }}>Daily Reminder</Text>
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#6B7280' }}>8:00 AM</Text>
            </View>
            <View style={{ width: 44, height: 24, borderRadius: 12, backgroundColor: '#002920', justifyContent: 'center', alignItems: 'flex-end', paddingHorizontal: 3 }}>
              <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: '#fff' }} />
            </View>
          </View>

          {[
            { label: 'Notification Sound', value: 'On ›' },
            { label: 'Reminder Time', value: '8:00 AM ›' },
            { label: 'Language', value: 'English ›' },
          ].map((s, i) => (
            <TouchableOpacity
              key={s.label}
              style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 14, borderBottomWidth: i < 2 ? 0.5 : 0, borderBottomColor: '#E5E7EB' }}
              activeOpacity={0.7}
            >
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 15, color: '#111827' }}>{s.label}</Text>
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#6B7280' }}>{s.value}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Legal / sign out */}
        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 18, borderWidth: 0.5, borderColor: '#E5E7EB', marginBottom: 8, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}>
          {[
            { label: 'Privacy Policy', value: '›', red: false },
            { label: 'Terms of Use', value: '›', red: false },
            { label: 'Sign Out', value: '', red: true },
          ].map((s, i) => (
            <TouchableOpacity
              key={s.label}
              style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 14, borderBottomWidth: i < 2 ? 0.5 : 0, borderBottomColor: '#E5E7EB' }}
              activeOpacity={0.7}
            >
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 15, color: s.red ? '#EF4444' : '#111827' }}>{s.label}</Text>
              {s.value ? <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#6B7280' }}>{s.value}</Text> : null}
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </View>
  );
}
