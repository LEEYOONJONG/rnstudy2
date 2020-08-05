import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomButton} from './CustomButton';

export function IntroScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.title}>
        <Text style={{ fontSize: 30 }}>우리, 여기에서</Text>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>모일래?</Text>
      </View>
      <View style={styles.content} />
      <View style={styles.footer}>
        <CustomButton buttonColor={'#7c5b62'} title={'회원가입'} titleColor='white' onPress={() => navigation.navigate('signup')} />
        <CustomButton buttonColor={'#846584'} title={'로그인'} titleColor='white' onPress={() => navigation.navigate('login')} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 120,
    // backgroundColor: 'yellow',
  },
  title: {
    width: '100%',
    height: 100,
    alignItems: 'flex-start',
    justifyContent: 'center',
    // backgroundColor: 'blue',
    color: 'black',
    fontSize: 40,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
    backgroundColor: 'white',
  },
  footer: {
    width: '100%',
    height: '20%',
  },
  topbar: {
    width: '100%',
    height: 80,

    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderBottomColor: '#dbdbdb',
    borderBottomWidth: 0.5,
    padding: 5,
  },
  topbartext: {

    height: 50,
    fontSize: 40,
    fontWeight: 'bold',


  },
  topbarsetting: {


    fontSize: 30,
  }
});
