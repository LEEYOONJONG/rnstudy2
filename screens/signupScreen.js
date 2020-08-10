import * as React from 'react';
import { StyleSheet, Button, View, Text, ScrollView } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from './buttons/CustomButton';
import MenuButton from './buttons/MenuButton';
import Icon from 'react-native-vector-icons/Ionicons';

export function signupScreen({ navigation, route }) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 30, margin: 5 }}>모일래에</Text>
          <Text style={{ fontSize: 30, margin: 5, fontWeight: 'bold' }}>처음오셨나요?</Text>
        </View>

        <View style={styles.content}>
          <TextInput placeholder="이름" style={styles.inputbox} />
          <View style={{flexDirection: 'row'}}>
          <TextInput placeholder="휴대전화번호" style={styles.inputbox} />
          </View>
          <TextInput placeholder="사용할 아이디를 입력하세요." style={styles.inputbox} />
          <TextInput placeholder="사용할 비밀번호를 입력하세요." style={styles.inputbox} />
        </View>
        <View style={styles.footer}>
          <CustomButton
            buttonColor={'#7c5b62'}
            title="확인"
            titleColor='white'
            onPress={() => {
              navigation.navigate('Intro');
            }}
          />
        </View>
        
        
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingTop:30,
    paddingRight:30,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  }, 
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingBottom: 30,
    // backgroundColor: 'green',
  },
  footer: {
    width: '100%',
    height: '20%',
  },
  inputbox: {
    width: '100%',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    padding: 10,
    marginVertical: 5,
  }
});