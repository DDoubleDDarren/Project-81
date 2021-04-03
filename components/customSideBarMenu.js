import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class customSideBarMenu extends Component{
    render(){
        return(
                <View style={{flex:1}}>
                    <DrawerItems{...this.prop}/>
                    <View style={{flex:1,justifyContent:'flex-end',padingBotton:30}}>
                        <TouchableOpacity style={{justifyContent:'center',padding:10,height:30,width:'100%'}}
                        onPress = {() => {
                            this.props.navigation.navigate('WelcomeScreen')
                            firebase.auth().signOut()
                        }}>
                            <Text>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
    }
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
