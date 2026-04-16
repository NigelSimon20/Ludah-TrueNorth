import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LockIcon } from '../../components/icons';

// Activity grid data – 3 rows × 7 cols
const activityData = [
  ['l4','l2','l4','l0','l3','l0','l4'],
  ['l2','l4','l0','l3','l2','l0','l1'],
  ['l0','l2','l4','l1','l0','l3','l2'],
];

const activityColors: Record<string, string> = {
  l0: '#F3F4F6',
  l1: '#BBF7D0',
  l2: '#4ADE80',
  l3: '#16A34A',
  l4: '#002920',
};

export default function ProgressScreen() {
  return (
    <View className="flex-1 bg-app-bg">
      <StatusBar style="dark" />

      <View style={{ height: 44, justifyContent: 'center', paddingHorizontal: 24 }}>
        <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 12, color: '#111827' }}>9:41</Text>
      </View>

      <View style={{ paddingHorizontal: 24, paddingBottom: 16 }}>
        <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 4 }}>Your Progress</Text>
        <Text style={{ fontFamily: 'DMSans_700Bold', fontSize: 24, color: '#111827' }}>How you're doing</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>

        {/* Stats row */}
        <View style={{ flexDirection: 'row', gap: 8, marginBottom: 16 }}>
          {[
            { num: '3', label: 'Day Streak 🔥' },
            { num: '12', label: 'Lessons Done' },
            { num: '9', label: 'Challenges' },
          ].map((s) => (
            <View key={s.label} style={{ flex: 1, backgroundColor: '#fff', borderRadius: 14, padding: 14, borderWidth: 0.5, borderColor: '#E5E7EB', alignItems: 'center' }}>
              <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 28, color: '#111827' }}>{s.num}</Text>
              <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 11, color: '#6B7280', marginTop: 2, textAlign: 'center', lineHeight: 16 }}>{s.label}</Text>
            </View>
          ))}
        </View>

        {/* Weekly Activity */}
        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 18, borderWidth: 0.5, borderColor: '#E5E7EB', marginBottom: 10, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 14, color: '#111827' }}>Weekly Activity</Text>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#6B7280' }}>Mar 24–30</Text>
          </View>

          {/* Day labels */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
            {['M','T','W','T','F','S','S'].map((d, i) => (
              <Text key={i} style={{ fontFamily: 'DMSans_400Regular', fontSize: 11, color: '#9CA3AF', flex: 1, textAlign: 'center' }}>{d}</Text>
            ))}
          </View>

          {/* Activity grid */}
          {activityData.map((row, ri) => (
            <View key={ri} style={{ flexDirection: 'row', gap: 3, marginBottom: 3 }}>
              {row.map((cell, ci) => (
                <View key={ci} style={{ flex: 1, aspectRatio: 1, borderRadius: 4, backgroundColor: activityColors[cell] }} />
              ))}
            </View>
          ))}

          {/* Legend */}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 10, justifyContent: 'flex-end' }}>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 11, color: '#9CA3AF' }}>Less</Text>
            {['#F3F4F6','#BBF7D0','#4ADE80','#002920'].map((c) => (
              <View key={c} style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: c }} />
            ))}
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 11, color: '#9CA3AF' }}>More</Text>
          </View>
        </View>

        {/* Milestones */}
        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 18, borderWidth: 0.5, borderColor: '#E5E7EB', marginBottom: 8, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 14, color: '#111827', marginBottom: 14 }}>Milestones</Text>

          {[
            { icon: '🔥', title: 'First Streak', sub: 'Completed 3 days in a row', earned: true },
            { icon: '📚', title: 'First Lesson', sub: 'Completed your first lesson', earned: true },
            { icon: '🏆', title: '7-Day Champion', sub: 'Complete 7 days in a row', earned: false },
          ].map((m, i) => (
            <View key={i} style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12, borderBottomWidth: i < 2 ? 0.5 : 0, borderBottomColor: '#E5E7EB', opacity: m.earned ? 1 : 0.5 }}>
              <View style={{ width: 36, height: 36, borderRadius: 12, backgroundColor: m.earned ? '#EAF5F0' : '#F3F4F6', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 16 }}>{m.icon}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 14, color: '#111827' }}>{m.title}</Text>
                <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#6B7280' }}>{m.sub}</Text>
              </View>
              <View style={{ marginLeft: 'auto' }}>
                {m.earned
                  ? <View style={{ backgroundColor: '#DCFCE7', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 }}><Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 11, color: '#15803D' }}>Earned</Text></View>
                  : <LockIcon color="#9CA3AF" size={16} />
                }
              </View>
            </View>
          ))}
        </View>

      </ScrollView>
    </View>
  );
}
