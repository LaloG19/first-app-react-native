import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'search-circle-outline' } color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          title: 'Sobre Nosotros',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'people-circle-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notices"
        options={{
          title: 'Noticias',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'apps-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Policies"
        options={{
          title: 'Políticas',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'book-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Main"
        options={{
          title: 'Main',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'albums-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Contact"
        options={{
          title: 'Contacto',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'mail-outline' } color={color} />
          ),
        }}
      />

    </Tabs>
  );
}
