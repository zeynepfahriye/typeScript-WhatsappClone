
import { FontAwesome, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, View } from 'react-native';

import Colors from '../constants/Colors';
import NotFoundScreen from '../screens/NotFoundScreen';

import { RootStackParamList, MainTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import MainTabNavigator from './MainTabNavigator'
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactScreen from '../screens/ContactScren';
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          elevation: 0,
        },
      }}>
      <Stack.Screen name="Root" component={MainTabNavigator} options={{
        title: "WhatsAap", headerTintColor: 'white', headerRight: () => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 60, marginRight: 8 }}>
            <Octicons name="search" size={24} color="white" />
            <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
          </View>
        )
      }} />
      <Stack.Screen name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route.params.name, headerTintColor: 'white',
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 3, justifyContent: 'space-between', width: 100 }}>
              <MaterialIcons name='call' size={20} color={'white'} />
              <FontAwesome5 name='video' size={20} color={'white'} />
              <MaterialCommunityIcons name='dots-vertical' size={20} color={'white'} />
            </View>
          )
        })}
      />
      <Stack.Screen name="Contact" component={ContactScreen} options={{ headerTintColor: 'white' }} />

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />

    </Stack.Navigator>
  );
}


// const BottomTab = createBottomTabNavigator<RootTabParamList>();

// function BottomTabNavigator() {
//   const colorScheme = useColorScheme();

//   return (
//     <BottomTab.Navigator
//       initialRouteName="TabOne"
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme].tint,
//       }}>
//       <BottomTab.Screen
//         name="TabOne"
//         component={TabOneScreen}
//         options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
//           title: 'Tab One',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//           headerRight: () => (
//             <Pressable
//               onPress={() => navigation.navigate('Modal')}
//               style={({ pressed }) => ({
//                 opacity: pressed ? 0.5 : 1,
//               })}>
//               <FontAwesome
//                 name="info-circle"
//                 size={25}
//                 color={Colors[colorScheme].text}
//                 style={{ marginRight: 15 }}
//               />
//             </Pressable>
//           ),
//         })}
//       />
//       <BottomTab.Screen
//         name="TabTwo"
//         component={TabTwoScreen}
//         options={{
//           title: 'Tab Two',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }
