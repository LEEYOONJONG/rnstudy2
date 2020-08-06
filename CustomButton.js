import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

export default class CustomButton extends Component {

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
                style={[styles.button, { backgroundColor: this.props.buttonColor }]}
                onPress={this.props.onPress}>
                <Text style={[styles.title, { color: this.props.titleColor }]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 5,
        maxHeight: 60,
    },
    title: {
        fontSize: 15,
    },
});