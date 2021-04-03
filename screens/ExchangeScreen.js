import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';

export default class ExchangeScreen extends Component{
    constructor(){
        super();
        this.state={
            username : firebase.auth().currentuser.email,
            itemname : '',
            description : ''
        }
    }
    addItem = (itemName, description)=>{
        var userName = this.state.userName
        db.collection("exchange_requests").add({
            "username" : userName,
            "item_name" : itemName,
            "description" : description
        })
        this.setState({
            itemName : '',
            description : ''
        })
        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {text: 'OK', onPress: () => {
                    this.props.navigation.navigate('HomeScreen')
                }}
            ]
        );
    }
    renderItem =  ({item, i})=>{
        console.log(item.item_name);
        return(
            <ListItem>
                key={i}
                title={item.item_name}
                subTitle={item.description}
                titleSyle={{color:'black',fonWeight:'bold'}}
                rightElement={
                    <TouchableOpacity>
                        <Text style={{color:'#ffff'}}>Exchange</Text>
                    </TouchableOpacity>
                }
            bottomDivider
            </ListItem>
        )
    }
}
