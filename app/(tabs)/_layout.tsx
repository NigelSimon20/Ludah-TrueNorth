import { Tabs } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { HomeIcon, GrowthIcon, ExploreIcon, ProgressBarIcon, ProfileIcon } from '../../components/icons';

const TAB_ITEMS = [
  { name: 'index', label: 'Home', icon: HomeIcon },
  { name: 'growth', label: 'Growth', icon: GrowthIcon },
  { name: 'explore', label: 'Explore', icon: ExploreIcon },
  { name: 'progress', label: 'Progress', icon: ProgressBarIcon },
  { name: 'profile', label: 'Profile', icon: ProfileIcon },
];

function CustomTabBar({ state, navigation }: any) {
  return (
    <View style={{ height: 72, backgroundColor: '#fff', borderTopWidth: 0.5, borderTopColor: '#E5E7EB', flexDirection: 'row', alignItems: 'flex-start', paddingTop: 8 }}>
      {TAB_ITEMS.map((tab, index) => {
        const focused = state.index === index;
        const Icon = tab.icon;
        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => navigation.navigate(tab.name)}
            style={{ flex: 1, alignItems: 'center', gap: 3, paddingHorizontal: 4 }}
            activeOpacity={0.7}
          >
            <View style={{
              width: 32, height: 28,
              alignItems: 'center', justifyContent: 'center',
              borderRadius: 8,
              backgroundColor: focused ? '#EAF5F0' : 'transparent',
            }}>
              <Icon color={focused ? '#002920' : '#6B7280'} size={20} />
            </View>
            <Text style={{
              fontSize: 10,
              fontFamily: focused ? 'DMSans_600SemiBold' : 'DMSans_500Medium',
              color: focused ? '#002920' : '#6B7280',
            }}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="growth" />
      <Tabs.Screen name="explore" />
      <Tabs.Screen name="progress" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
