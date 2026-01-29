import { Tabs } from 'expo-router';
import { Home, User, Newspaper } from 'lucide-react-native';
import { StyleSheet, View, Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#E11D48', // Merah Nusa Putra
        tabBarInactiveTintColor: '#94A3B8',
        
        // STYLE BARU: Standard & Clean
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: 65,
          borderTopWidth: 1,
          borderTopColor: '#F1F5F9', // Garis tipis di atas tab biar rapi
          elevation: 0, // Hapus bayangan Android yang kaku
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Berita',
          tabBarIcon: ({ color, focused }) => (
            <Newspaper color={color} size={24} strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <User color={color} size={24} strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
      />
      <Tabs.Screen name="debug" options={{ href: null }} />
    </Tabs>
  );
}