// In App.js in a new project

import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from './CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';

function IntroScreen({ navigation, route }) {

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
function signupScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.title}>
        <Text style={{ fontSize: 30, margin: 5 }}>모일래에</Text>
        <Text style={{ fontSize: 30, margin: 5, fontWeight: 'bold' }}>처음오셨나요?</Text>
      </View>
      <View style={styles.content}>
        <TextInput placeholder="사용할 아이디를 입력하세요." style={{ fontSize: 20, padding: 10, margin: 10 }} />
        <TextInput placeholder="사용할 비밀번호를 입력하세요." style={{ fontSize: 20, padding: 10, margin: 10 }} />
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
function loginScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.title}>
        <Text style={{ fontSize: 30, margin: 5 }}>모일래에 오신 것을</Text>
        <Text style={{ fontSize: 30, margin: 5, fontWeight: 'bold' }}>환영합니다!</Text>
      </View>
      <View style={styles.content}>
        <TextInput placeholder="아이디를 입력하세요" style={{ fontSize: 20, padding: 10, margin: 10 }} />
        <TextInput placeholder="비밀번호를 입력하세요" style={{ fontSize: 20, padding: 10, margin: 10 }} />
      </View>
      <View style={styles.footer}>
        <CustomButton
          buttonColor={'#846584'}
          title="확인"
          titleColor='white'
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
}

function MyScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.topbartext}>My</Text>
        <Icon style={styles.topbarsetting} name="cog" onPress={()=>{navigation.navigate('Intro')}} />
      </View>
      <View style={styles.content}>
      </View>


    </View>

  );
}
function GroupScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>second!</Text>
      <Icon name="bluetooth-outline" size={30} color="blue" />
    </View>
  );
}
function ChurchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>third!</Text>
    </View>
  );
}
function CommunityScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>fourth!</Text>
    </View>
  );
}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={signupScreen} options={{ title: '회원가입', headerTintColor: '#a30527', headerTitleStyle: { color: 'black' } }} />
        <Stack.Screen name="login" component={loginScreen} options={{ title: '로그인', headerTintColor: '#a312a3', headerTitleStyle: { color: 'black' } }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'My') {
            iconName = focused
              ? 'person'
              : 'person-outline'
          }
          else if (route.name === 'Group') {
            iconName = focused
              ? 'people'
              : 'people-outline'
          }
          else if (route.name === 'Church') {
            iconName = focused
              ? 'grid'
              : 'grid-outline'
          }
          else if (route.name === 'Community') {
            iconName = focused
              ? 'globe'
              : 'globe-outline'
          }
          return <Icon name={iconName} size={size} color={color} />;

        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}

    >
      <Tab.Screen name="My" component={MyScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Group" component={GroupScreen} options={{ headerShown: true }} />
      <Tab.Screen name="Church" component={ChurchScreen} options={{ headerShown: true }} />
      <Tab.Screen name="Community" component={CommunityScreen} options={{ headerShown: true }} />
    </Tab.Navigator>

  )
}
export default App;


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
  topbar:{
    width: '100%',
    height: 80,
    
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderBottomColor: '#dbdbdb',
    borderBottomWidth: 0.5,
    padding: 5,
  },
  topbartext:{
    
    height: 50,
    fontSize: 40,
    fontWeight: 'bold',
    
    
  },
  topbarsetting:{
    
    
    fontSize: 30,
  }
});
