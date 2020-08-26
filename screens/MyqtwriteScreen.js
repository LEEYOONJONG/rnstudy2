import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from './buttons/CustomButton';
import MenuButton from './buttons/MenuButton';
import Icon from 'react-native-vector-icons/Ionicons';


export function Note(props) {
    return (
        <View style={[styles.myblock, {backgroundColor:props.val.color}]}>
            <View style={{alignItems:'flex-start'}}>
                <View style={{borderBottomWidth:1,borderColor:'white',marginBottom:5}}>
                    <Text style={[styles.myblocktitle]}>{props.val.date}</Text>
                </View>
                <Text style={styles.myblocktext}>{props.val.note}</Text>
            </View>
            <View style={{width: '100%' ,flexDirection:'row',justifyContent:'flex-end'}}>
                <TouchableOpacity style={{marginTop:5,marginLeft:10}} >
                    <Text style={styles.myblockbuttontext}>수정</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.deleteMethod} style={{marginTop:5,marginLeft:10}} >
                    <Text style={styles.myblockbuttontext}>삭제</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

export function MyqtwriteScreen({ navigation, route }) {

    const [noteArray, setNoteArray] = useState([]);
    const [noteText, setNoteText] = useState('');

    let rdcolor = 'hsl('+Math.random()*255+','+ Math.random()*(60)+10+'%, 82%)';

    let notes = noteArray.map((val, key) => {
        console.log('start');
        return <Note key={key} keyval={key} val={val}
            deleteMethod={() => deleteNote(key)} />
    });
    const addNote = () => {
        if (noteText) {
            var d = new Date();
            noteArray.unshift({
                'date': d.getFullYear() +
                    "년 " + (d.getMonth() + 1) +
                    "월 " + d.getDate() + "일 " + d.getHours() + "시 " + d.getMinutes()+"분",
                'note': noteText,
                'color': rdcolor,
            });
            setNoteArray(noteArray);
            setNoteText('');
            // alert('큐티 입력을 완료했습니다.');
        }
        else {
            alert('큐티를 입력하세요');
        }
    };
    const deleteNote = (key) => {
        const newArray = [...noteArray];
        newArray.splice(key, 1);
        setNoteArray(newArray);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topbar}>
                <Text style={styles.topbartext}>오늘의 큐티</Text>
                <Icon style={styles.topbarmenu} name="close" onPress={() => { navigation.navigate('My') }} />
            </View>
            <View style={styles.qtinputblock}>
                <TextInput
                    onChangeText={(noteText) => setNoteText(noteText)}
                    value={noteText}
                    placeholder='큐티를 입력하세요'
                    placeholderTextColor='gray'
                    multiline={true}
                    style={styles.qtinputtext}
                />
                <TouchableOpacity onPress={addNote} style={styles.myblockbutton}>
                    <Text style={styles.myblockbuttontext}>추가</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scroll}>
                <View style={{alignItems:'flex-start'}}>
                    {notes}
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


    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // paddingBottom: 30,
        // backgroundColor: 'green',
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
    scroll: {
        width: '100%',
        height: '100%',
        flex: 1,
        // backgroundColor: 'green',
    },
    myblock: {
        width: '100%',
        // backgroundColor: 'orange',
        borderRadius: 15,
        marginTop: 15,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 15,
    },
    myblocktitleview: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        // backgroundColor:'green',
        justifyContent: 'space-between',

    },
    myblocktitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 3,
    },
    myblockbutton: {
        backgroundColor: '#247fff',
        color: 'white',
        // marginRight: 10,
        // marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: 60,
        alignItems: 'center'
    },
    myblockbuttontext: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    myblocksubtitle: {
        fontSize: 18,
        color: 'white',
        marginLeft: 25,
        marginTop: 10,
        fontWeight: 'bold',
    },
    myblocktextview: {
        flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center',
    },
    myblocktext: {
        color: 'black',
        fontSize: 16,
        marginTop: 3,

    },
    qtinputblock:{
        flexDirection: 'row', 
        backgroundColor:'#dbdbdb',
        alignItems:'center',
        padding: 10,
        borderRadius: 10,
        marginVertical:10,
    },
    qtinputtext: {
        flex: 1,
        fontSize: 18,
        paddingHorizontal:10,
    },

});