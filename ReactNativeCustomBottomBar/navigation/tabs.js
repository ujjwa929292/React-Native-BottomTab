import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import ChatScreen from '../src/screens/ChatScreen';
import FindScreen from '../src/screens/FindScreen';
import AddScreen from '../src/screens/AddScreen';
import SettingScreen from '../src/screens/SettingScreen';


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItemn: 'center',
            ...style.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#2e64e5'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 62,
                },
                headerShown: false
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image
                                source={require('../src/images/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#2e64e5' : '#748c94'
                                }}
                            />
                            <Text style={{ color: focused ? '#2e64e5' : '#748c94', fontSize: 12 }}>Home</Text>
                        </View>
                    ),
                }} />


            <Tab.Screen name='Find' component={FindScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image
                                source={require('../src/images/find.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#2e64e5' : '#748c94'
                                }}
                            />
                            <Text style={{ color: focused ? '#2e64e5' : '#748c94', fontSize: 12 }}>Find</Text>
                        </View>
                    ),
                }} />

            <Tab.Screen name='Add' component={AddScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../src/images/add.png')}
                            resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: '#ffffff',
                                }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
            />

            <Tab.Screen name='Chat' component={ChatScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image
                                source={require('../src/images/chat.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#2e64e5' : '#748c94'
                                }}
                            />
                            <Text style={{ color: focused ? '#2e64e5' : '#748c94', fontSize: 12 }}>Chat</Text>
                        </View>
                    ),
                }} />


            <Tab.Screen name='Settings' component={SettingScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image
                                source={require('../src/images/settings.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#2e64e5' : '#748c94'
                                }}
                            />
                            <Text style={{ color: focused ? '#2e64e5' : '#748c94', fontSize: 12 }}>Settings</Text>
                        </View>
                    ),
                }} />
        </Tab.Navigator>
    )
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#FFFFFF',
        shadowOffset: {
            weidth: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,

    }
})

export default Tabs;
