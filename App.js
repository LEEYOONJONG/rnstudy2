// In App.js in a new project

import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from './CustomButton';

function HomeScreen({ navigation, route }) {
 
  return (
    <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.title}>
          <Text style={{fontSize:30}}>우리, 여기에서</Text>
          <Text style={{fontSize:40, fontWeight: 'bold'}}>모일래?</Text>
        </View>
        <View style={styles.content} />
        <View style={styles.footer}>
          <CustomButton buttonColor={'#7c5b62'} title={'회원가입'} titleColor='white' onPress={()=>navigation.navigate('signup')} />
          <CustomButton buttonColor={'#846584'} title={'로그인'} titleColor='white' onPress={()=>navigation.navigate('login')}/>
        </View>
      </View>
  );
}
function signupScreen({navigation, route}){
  return (
    <View style={styles.container}>
      <View style={styles.header}/>
      <View style={styles.title}>
        <Text style={{fontSize:30, margin:5}}>모일래에</Text>
        <Text style={{fontSize:30, margin:5, fontWeight: 'bold'}}>처음오셨나요?</Text>
      </View>
      <View style={styles.content}>
        <TextInput placeholder="사용할 아이디를 입력하세요." style={{ fontSize:20, padding: 10, margin:10}}/>
        <TextInput placeholder="사용할 비밀번호를 입력하세요." style={{ fontSize:20, padding: 10, margin:10}}/>
      </View>
      <Button
                title="Done"
                onPress={() => {
                    navigation.navigate('Home');
                }}
            />
    </View>
  );
}
function loginScreen({navigation, route}){
  return (
    <View style={styles.container}>
      <View style={styles.header}/>
      <View style={styles.title}>
        <Text style={{fontSize:30, margin:5}}>모일래에 오신 것을</Text>
        <Text style={{fontSize:30, margin:5, fontWeight: 'bold'}}>환영합니다!</Text>
      </View>
      <View style={styles.content}>
        <TextInput placeholder="아이디를 입력하세요." style={{ fontSize:20, padding: 10, margin:10}}/>
        <TextInput placeholder="비밀번호를 입력하세요." style={{ fontSize:20, padding: 10, margin:10}}/>
      </View>
      <Button
                title="Done"
                onPress={() => {
                    navigation.navigate('Home');
                }}
            />
    </View>
  );
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="signup" component={signupScreen}/>
        <Stack.Screen name="login" component={loginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'white',
  },
  header: {
    width:'100%',
    height:'10%',
    backgroundColor: 'white',
  },
  title: {
    width:'100%',
    height:'18%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: 'black',
    fontSize: 40,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:30,
    backgroundColor: 'white',
  },
  footer: {
    width:'100%',
    height:'20%',
    //backgroundColor: '#1ad657',
  },
});