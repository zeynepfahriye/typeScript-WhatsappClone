/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<MainTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  ChatRoom: undefined;
  Contact: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type MainTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Camera: undefined;
  Status: undefined;
  Calls: undefined;
  Chats: undefined;

};

export type RootTabScreenProps<Screen extends keyof MainTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
export type Message = {
  id: String;
  content: String;
  createdAt: String;
  user: User;
};
export type User = {
  id: String;
  name: String;
  imageUri: String;
};
export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
  name: String;
};
