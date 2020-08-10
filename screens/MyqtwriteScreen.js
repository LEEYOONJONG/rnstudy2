import * as React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from './buttons/CustomButton';
import MenuButton from './buttons/MenuButton';
import Icon from 'react-native-vector-icons/Ionicons';


export function MyqtwriteScreen({ navigation, route }) {
    const [value, onChangeText] = React.useState('Useless Placeholder');
    return (
        <View>
        <Text>오늘 나의 QT</Text>
        <TextInput 
        style={{height:40, borderColor: 'gray', borderWidth:1}}
        onChangeText={text=>onChangeText(text)}
        value={value}
        />
        </View>
    );
}