import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text, View,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MenuButton extends Component {

    static defaultProps = {
        title: 'untitled', 
        buttonColor: 'blue', 
        titleColor: 'black', 
        onPress: () => null,
    }
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.props.onPress}>
                <View style={styles.buttoncontainer}>
                    <Icon name={this.props.iconName} size={20} color={'black'} />
                    <Text style={[styles.title, { color: this.props.titleColor }]}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginVertical: 5,
        // backgroundColor:'green',

        maxHeight: 60,
    },
    buttoncontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 20,
    },
});