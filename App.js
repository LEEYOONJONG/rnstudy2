// In App.js in a new project

import * as React from 'react';
import { StyleSheet, Button, View, Text, ScrollView } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from './CustomButton';
import MenuButton from './MenuButton';
import Icon from 'react-native-vector-icons/Ionicons';

// import {IntroScreen} from './IntroScreen';
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
function SettingsScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={[styles.topbar,{marginBottom: 10}]}>
        <Text style={styles.topbartext}>Settings</Text>
        <Icon style={styles.topbarmenu} name="close" onPress={()=>{navigation.navigate('My')}}/>
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.scroll}>
          <MenuButton
            title="본인 정보 수정"
            onPress={() => { }}
            titleColor='black'
            iconName='pencil'
          />
          <MenuButton
            title="교회 등록"
            onPress={() => { }}
            titleColor='black'
            iconName='add'
          />
          <MenuButton
            title="로그아웃"
            onPress={() => { }}
            titleColor='black'
            iconName='log-out'
            onPress={()=>{navigation.navigate('Intro');}}
          />

        </ScrollView>
      </View>
      
    </View>
  );
}

function MyScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.topbartext}>My</Text>
        <Icon style={styles.topbarmenu} name="cog" onPress={() => { navigation.navigate('Settings') }} />
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.scroll}>
          <View style={[styles.myblock, { backgroundColor: '#9403fc' }]}>
            <View>
              <Text style={styles.myblocktitle}>오늘의 말씀</Text>
              <Text style={styles.myblocksubtitle}>이근</Text>
            </View>
            <View style={styles.myblocktextview}>
              <Text style={styles.myblocktext}>너 인성 문제있어?</Text>
            </View>
          </View>
          <View style={[styles.myblock, { backgroundColor: '#6b26ff', height: 280 }]}>
            <View style={styles.myblocktitleview}>
              <Text style={styles.myblocktitle}>오늘의 Q.T</Text>

              <TouchableOpacity style={[styles.myblockbutton, { backgroundColor: '#8263ff' }]}><Text style={styles.myblockbuttontext}>작성</Text></TouchableOpacity>
            </View>
          </View>
          <View style={[styles.myblock, { backgroundColor: '#2651ff', height: 280 }]}>
            <View style={styles.myblocktitleview}>
              <Text style={styles.myblocktitle}>오늘의 기도</Text>
              <TouchableOpacity style={[styles.myblockbutton, { backgroundColor: '#5778ff' }]}><Text style={styles.myblockbuttontext}>작성</Text></TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
function GroupScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.topbartext}>Group</Text>
        <Icon style={styles.topbarmenu} name="pencil" />
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.scroll}>
          <View style={styles.groupvertical}>
            <View style={styles.grouphorizontal}>
              <View style={[styles.groupblockL, { backgroundColor: '#ff3d3d' }]}>
                <Text style={styles.groupblocktitle}>2020 찬양팀</Text>
                <View style={styles.groupblockmenubar}><Icon style={styles.groupblockmenu} name="cog" /></View>
              </View>
              <View style={[styles.groupblockR, { backgroundColor: '#ff5a3d' }]}>
                <Text style={styles.groupblocktitle}>2020 미디어팀</Text>
                <View style={styles.groupblockmenubar}><Icon style={styles.groupblockmenu} name="cog" /></View>
              </View>
            </View>
            <View style={styles.grouphorizontal}>
              <View style={[styles.groupblockL, { backgroundColor: '#ff3d64' }]}>
                <Text style={styles.groupblocktitle}>사랑마을</Text>
                <View style={styles.groupblockmenubar}><Icon style={styles.groupblockmenu} name="cog" /></View>
              </View>
              <View style={[styles.groupblockR, { backgroundColor: '#ff6e2b' }]}>
                <Text style={styles.groupblocktitle}>이윤종의 드럼교실</Text>
                <View style={styles.groupblockmenubar}><Icon style={styles.groupblockmenu} name="cog" /></View>
              </View>
            </View>
            <View style={styles.grouphorizontal}>
              <View style={[styles.groupblockL, { backgroundColor: '#e82382' }]}>
                <Text style={styles.groupblocktitle}>사랑마을 형제모임</Text>
                <View style={styles.groupblockmenubar}><Icon style={styles.groupblockmenu} name="cog" /></View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>

  );
}
function ChurchScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={[styles.topbar,{marginBottom: 10}]}>
        <Text style={styles.topbartext}>Church</Text>
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.scroll}>
          <MenuButton
            title="교회 소식"
            onPress={() => { }}
            titleColor='black'
            iconName='easel'
          />
          <MenuButton
            title="청년부 중요 공지"
            onPress={() => { }}
            titleColor='black'
            iconName='star'
          />
          <MenuButton
            title="청년부 소식"
            onPress={() => { }}
            titleColor='black'
            iconName='bookmarks'
            
          />
          <MenuButton
            title="목사님 칼럼"
            onPress={() => { }}
            titleColor='black'
            iconName='book'
            
          />
          <View style={styles.separator}/>
          <MenuButton
            title="43기 공지방"
            onPress={() => { }}
            titleColor='black'
            iconName='bookmarks'
          />
          <MenuButton
            title="43기 잡담방"
            onPress={() => { }}
            titleColor='black'
            iconName='chatbubble-ellipses'
          />

        </ScrollView>
      </View>
    </View>
  );
}
function CommunityScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.topbartext}>Community</Text>
      </View>
      <View style={styles.content}>
      </View>
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
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false, title: '설정', headerTintColor: '#a312a3', headerTitleStyle: { color: 'black' } }}/>
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
    paddingLeft: 30,
    paddingTop:30,
    paddingRight:30,
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
    justifyContent: 'flex-start',
    // paddingBottom: 30,
    // backgroundColor: 'green',
  },
  footer: {
    width: '100%',
    height: '20%',
  },
  topbar: {
    width: '100%',
    height: 100,
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
    // backgroundColor:'blue',
  },
  topbarmenu: {

    // backgroundColor:'green',
    fontSize: 30,
    marginBottom: 5,
  },
  scroll:{
    width: '100%',
    height: '100%',
    flex: 1,
    // backgroundColor: 'green',
  },
  myblock:{
    width:'100%',
    height: 150,
    // backgroundColor: 'orange',
    borderRadius: 15,
    marginTop: 15,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  myblocktitleview:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    // backgroundColor:'green',
    justifyContent: 'space-between',
    
  },
  myblocktitle:{
    marginTop: 10,
    marginLeft: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  myblockbutton:{
    backgroundColor: 'green',
    color: 'white',
    marginRight: 10,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal:15,
    paddingVertical:5,
  },
  myblockbuttontext:{
    color: 'white',
    fontSize: 16,
    fontWeight:'bold',
  },

  myblocksubtitle:{
    fontSize: 18,
    color: 'white',
    marginLeft: 25,
    marginTop: 10,
    fontWeight:'bold',
  },
  myblocktextview:{
    flex:1,width:'100%',alignItems: 'center', justifyContent:'center',
  },
  myblocktext:{
    color:'white',
    fontSize: 18,
    
  },

  groupvertical:{
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    
  },
  grouphorizontal:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupblockL:{
    flex:0.5,
    height:150,
    backgroundColor:'green',
    marginTop: 15,
    marginRight:15,
    borderRadius:10,
    justifyContent:'space-between',
  },
  groupblockR:{
    flex:0.5,
    height:150,
    backgroundColor:'green',
    marginTop: 15,
    borderRadius:10,
    justifyContent:'space-between',
  },
  groupblocktitle:{
    marginTop: 10,
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  groupblockmenubar:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  groupblockmenu:{
    fontSize: 25,
    color: 'white',
    marginBottom: 5,
    marginRight:5,    
  },
  separator: {
    marginVertical: 4,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
