import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BackIcon } from '../components/icons';

export default function LessonScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="light" />

      {/* Hero */}
      <View style={{ backgroundColor: '#002920', paddingHorizontal: 24, paddingTop: insets.top + 8, paddingBottom: 28 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 44 }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'center' }}
          >
            <BackIcon color="#fff" size={18} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Day 3</Text>
            <View style={{ width: 1, height: 12, backgroundColor: 'rgba(255,255,255,0.2)' }} />
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>5 min read</Text>
          </View>
        </View>

        <View style={{ marginTop: 12 }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>Today's Lesson</Text>
          <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 26, color: '#fff', lineHeight: 32, marginBottom: 6 }}>Building Trust Through Consistency</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>Discipline Builder</Text>
            <Text style={{ color: 'rgba(255,255,255,0.3)' }}>·</Text>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>Foundations</Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 24 }} showsVerticalScrollIndicator={false}>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 10 }}>The Core Idea</Text>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 15, color: '#111827', lineHeight: 26 }}>
            Trust isn't built in a single moment. It's the product of dozens of small, consistent actions repeated over time. When you say you'll do something and you do it — again and again — people notice.
          </Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 15, color: '#111827', lineHeight: 26 }}>
            Consistency communicates reliability. It tells the world:{' '}
            <Text style={{ fontFamily: 'DMSans_400Regular_Italic' }}>"I mean what I say."</Text>
            {' '}This applies to your work, your relationships, and most importantly — to yourself.
          </Text>
        </View>

        {/* Key takeaway */}
        <View style={{ backgroundColor: '#EAF5F0', borderRadius: 14, padding: 16, borderLeftWidth: 3, borderLeftColor: '#002920', marginBottom: 24 }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#002920', opacity: 0.6, marginBottom: 8 }}>Key Takeaway</Text>
          <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 14, color: '#002920', lineHeight: 22 }}>
            You don't need grand gestures. One reliable small action repeated daily builds more trust than any single impressive act.
          </Text>
        </View>

        {/* Action step */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#6B7280', marginBottom: 10 }}>Your Action Step</Text>
          <View style={{ backgroundColor: '#F7F9F8', borderRadius: 14, padding: 16, flexDirection: 'row', gap: 12, alignItems: 'flex-start' }}>
            <View style={{ width: 28, height: 28, borderRadius: 8, backgroundColor: '#002920', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Text style={{ fontFamily: 'DMSans_700Bold', fontSize: 13, color: '#fff' }}>1</Text>
            </View>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#111827', lineHeight: 22, flex: 1 }}>
              Identify one commitment you've been avoiding. Decide: either fulfil it today, or communicate clearly that you won't.
            </Text>
          </View>
        </View>

      </ScrollView>

      {/* Footer */}
      <View style={{ paddingHorizontal: 24, paddingBottom: insets.bottom + 20, paddingTop: 16 }}>
        <TouchableOpacity
          onPress={() => router.push('/complete')}
          style={{ height: 52, backgroundColor: '#002920', borderRadius: 14, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 15, color: '#fff' }}>Mark as Done →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
