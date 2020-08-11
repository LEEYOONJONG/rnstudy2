import * as React from 'react';
import { StyleSheet, Button, View, Text, ScrollView } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from './buttons/CustomButton';
import MenuButton from './buttons/MenuButton';
import Icon from 'react-native-vector-icons/Ionicons';


export function loginScreen({ navigation, route }) {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.title}>
          <Text style={{ fontSize: 30, margin: 5 }}>모일래에 오신 것을</Text>
          <Text style={{ fontSize: 30, margin: 5, fontWeight: 'bold' }}>환영합니다!</Text>
        </View>
        <View style={styles.content}>
          <TextInput placeholder="아이디를 입력하세요" style={styles.inputbox} />
          <TextInput placeholder="비밀번호를 입력하세요" style={styles.inputbox}  />
        </View>
        <View style={styles.footer}>
          <CustomButton
            buttonColor={'#846584'}
            title="로그인"
            titleColor='white'
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.5 }}>
              <CustomButton
                buttonColor={'#ffdd00'}
                title="카카오 로그인"
                titleColor='black'
                onPress={() => {
                  navigation.navigate('Home');
                }}
              />
            </View>
            <View style={{ flex: 0.5, marginLeft:10}}>
              <CustomButton
                buttonColor={'#3eeb13'}
                title="네이버 로그인"
                titleColor='black'
                onPress={() => {
                  navigation.navigate('Home');
                }}
              />
            </View>

          </View>
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
    // backgroundColor: 'green',
  },
  footer: {
    width: '100%',
    height: '30%',
  },
  inputbox: {
    height: 45,
    width: '100%',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    padding: 10,
    marginVertical: 5,
  }
  });