import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckIcon, BellIcon, StarIcon } from '../components/icons';

export default function NotificationsScreen() {
  const [cleared, setCleared] = useState(false);

  const handleClearAll = () => {
    Alert.alert('Clear All', 'Remove all notifications?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Clear', style: 'destructive', onPress: () => setCleared(true) },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F9F8' }}>
      <StatusBar style="dark" />

      <View style={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontFamily: 'DMSans_700Bold', fontSize: 24, color: '#111827' }}>Notifications</Text>
        {!cleared && (
          <TouchableOpacity onPress={handleClearAll}>
            <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 13, color: '#6B7280' }}>Clear all</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>

        {cleared ? (
          <View style={{ alignItems: 'center', paddingTop: 60, gap: 10 }}>
            <Text style={{ fontSize: 40 }}>🔔</Text>
            <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 16, color: '#111827' }}>All caught up</Text>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#6B7280' }}>No notifications right now.</Text>
          </View>
        ) : (
          <>
            <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 8 }}>New</Text>

            {/* Featured notification */}
            <TouchableOpacity
              onPress={() => router.push('/lesson')}
              style={{ backgroundColor: '#002920', borderRadius: 16, padding: 16, marginBottom: 10, flexDirection: 'row', alignItems: 'flex-start', gap: 12 }}
              activeOpacity={0.85}
            >
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#22C55E', marginTop: 3, flexShrink: 0 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 14, color: '#fff', marginBottom: 3 }}>Your next step is ready</Text>
                <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 20 }}>
                  Day 3 lesson and challenge are waiting for you. It takes just 5 minutes.
                </Text>
                <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>Just now</Text>
              </View>
            </TouchableOpacity>

            {/* Streak milestone */}
            <TouchableOpacity
              onPress={() => router.push('/complete')}
              style={{ backgroundColor: '#fff', borderRadius: 14, padding: 14, paddingHorizontal: 16, marginBottom: 8, flexDirection: 'row', alignItems: 'flex-start', gap: 12, borderWidth: 0.5, borderColor: '#E5E7EB' }}
              activeOpacity={0.85}
            >
              <View style={{ width: 36, height: 36, borderRadius: 12, backgroundColor: '#DCFCE7', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CheckIcon color="#16A34A" size={18} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 14, color: '#111827' }}>Streak milestone unlocked</Text>
                <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#6B7280', marginTop: 2, lineHeight: 18 }}>You completed your 3rd day in a row. Keep going!</Text>
                <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 11, color: '#9CA3AF', marginTop: 3 }}>2 hours ago</Text>
              </View>
            </TouchableOpacity>

            <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 8, marginTop: 12 }}>Earlier</Text>

            {/* Don't break streak */}
            <TouchableOpacity
              onPress={() => router.push('/lesson')}
              style={{ backgroundColor: '#fff', borderRadius: 14, padding: 14, paddingHorizontal: 16, marginBottom: 8, flexDirection: 'row', alignItems: 'flex-start', gap: 12, borderWidth: 0.5, borderColor: '#E5E7EB' }}
              activeOpacity={0.85}
            >
              <View style={{ width: 36, height: 36, borderRadius: 12, backgroundColor: '#EAF5F0', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <BellIcon color="#002920" size={18} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 14, color: '#111827' }}>Don't break your streak</Text>
                <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#6B7280', marginTop: 2, lineHeight: 18 }}>Your daily lesson is waiting. Only 5 minutes needed.</Text>
                <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 11, color: '#9CA3AF', marginTop: 3 }}>Yesterday · 8:00 AM</Text>
              </View>
            </TouchableOpacity>

            {/* Week completed */}
            <TouchableOpacity
              onPress={() => router.push('/complete')}
              style={{ backgroundColor: '#fff', borderRadius: 14, padding: 14, paddingHorizontal: 16, marginBottom: 8, flexDirection: 'row', alignItems: 'flex-start', gap: 12, borderWidth: 0.5, borderColor: '#E5E7EB', opacity: 0.7 }}
              activeOpacity={0.85}
            >
              <View style={{ width: 36, height: 36, borderRadius: 12, backgroundColor: '#F3F4F6', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <StarIcon color="#6B7280" size={18} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 14, color: '#6B7280' }}>Week 1 completed</Text>
                <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#9CA3AF', marginTop: 2, lineHeight: 18 }}>Great work finishing your first week on TrueNorth.</Text>
                <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 11, color: '#9CA3AF', marginTop: 3 }}>Mar 24</Text>
              </View>
            </TouchableOpacity>
          </>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}
