import * as React from 'react';
import { StyleSheet, Button, View, Text, ScrollView } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from './buttons/CustomButton';
import MenuButton from './buttons/MenuButton';
import Icon from 'react-native-vector-icons/Ionicons';

export function GroupScreen({ navigation, route }) {


  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.topbartext}>Group</Text>
        <View style={{ flexDirection: "row" }}>
          <Icon style={styles.topbarmenu} name="add" />
          <Icon style={styles.topbarmenu} name="filter" />
        </View>
      </View>

      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={styles.content}>
          <View style={styles.box}>
            <View style={[styles.inner,{backgroundColor:'#ff3d3d'}]}>
              <Text style={styles.groupblocktitle}>2020 미디어팀</Text>
              <View style={styles.groupblockmenubar}>
                <Icon style={[styles.groupblockmenu,{color:"yellow"}]} name="star"/>
                <Icon style={styles.groupblockmenu} name="cog"/>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={[styles.inner,{backgroundColor:'#ff5a3d'}]}>
              <Text style={styles.groupblocktitle}>2020 홍보팀</Text>
              <View style={styles.groupblockmenubar}>
                {/* <Icon style={[styles.groupblockmenu,{color:"yellow"}]} name="star"/> */}
                <Icon style={styles.groupblockmenu} name="cog"/>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={[styles.inner,{backgroundColor:'#ff3d64'}]}>
              <Text style={styles.groupblocktitle}>이윤종의 드럼교실</Text>
              <View style={styles.groupblockmenubar}>
                {/* <Icon style={[styles.groupblockmenu,{color:"yellow"}]} name="star"/> */}
                <Icon style={styles.groupblockmenu} name="cog"/>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingTop: 30,
    paddingRight: 30,
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
    paddingTop: 10,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  box:{
    width: '50%',
    height: 180,
    padding: 5,
  },
  inner:{
    flex:1,
    backgroundColor: '#eee',
    alignItems: 'flex-start',
    justifyContent:'flex-start',
    borderRadius: 10,
    justifyContent: 'space-between',
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
    marginLeft: 15,
  },
  scroll: {
    width: '100%',
    height: '100%',
    flex: 1,
    // backgroundColor: 'green',
  },
  

  groupblocktitle: {
    marginTop: 10,
    marginHorizontal: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  groupblockmenubar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // backgroundColor:'green',
  },
  groupblockmenu: {
    fontSize: 25,
    color: 'white',
    marginBottom: 5,
    marginRight: 5,
  },
  separator: {
    marginVertical: 4,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

