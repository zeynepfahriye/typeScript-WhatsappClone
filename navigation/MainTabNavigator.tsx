
import { FontAwesome, Fontisto, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { ColorSchemeName, Pressable, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList, RootTabScreenProps } from '../types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { color } from 'react-native-reanimated';
import ChatScreen from '../screens/ChatScreen';


const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <MainTab.Navigator
            initialRouteName="TabOne"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].background,
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme].tint
                },
                tabBarIndicatorStyle: {
                    backgroundColor: 'white',
                    height: 3,
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold'
                }
            }}>
            <MainTab.Screen
                name="Camera"
                component={ChatScreen}
                options={{
                    tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={20} />,
                    tabBarLabel: () => null
                }}

            />
            <MainTab.Screen
                name="Chats"
                component={ChatScreen}
                options={({ navigation }: RootTabScreenProps<'Chats'>) => ({
                    title: 'Chats',
                })}
            />
            <MainTab.Screen
                name="Status"
                component={ChatScreen}
                options={{
                    title: 'Status',

                }}
            />
            <MainTab.Screen
                name="Calls"
                component={ChatScreen}
                options={({ navigation }: RootTabScreenProps<'Calls'>) => ({
                    title: 'Calls',

                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('Modal')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}>
                            <FontAwesome
                                name="info-circle"
                                size={25}
                                color={Colors[colorScheme].text}
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                })}
            />
        </MainTab.Navigator>
    );
}
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
}) {
    return <FontAwesome size={10} style={{ marginBottom: -3 }} {...props} />;
}
