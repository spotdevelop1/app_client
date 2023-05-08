import React, { useEffect, useState } from 'react'
import {Text,StyleSheet,View, Alert, TouchableOpacity, Image, TextInput, ImageBackground, Pressable} from 'react-native'
import { globalStyle } from '../styles/';
import useAuth from '../hooks/useAuth';
import Icon  from 'react-native-vector-icons/Ionicons';

function Profile() {
    const [showPass, setShowPass] = useState(true)
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {logout} = useAuth();
    const prueba = () =>{
        setShowPass(!showPass)
    }

    const saveData = () => {
        Alert.alert(
            "Guardar datos",
            "¿Esta seguro de guardar los cambios?",
            
            [
                {
                    text: "No"
                },
                {
                    text: 'Si',
                    onPress: logout
                }
            ],
            {cancelable: false}
        )
    }
    const logoutConfirm = () =>{
        Alert.alert(
            "Cerrar Sesión",
            "¿Desea cerrar su sesión?",
            [
                {
                    text: "No"
                },
                {
                    text: 'Si',
                    onPress: logout
                }
            ],
            {cancelable: false}
        )
    }
   
    return ( 
        <View style={styles.container}>
           <View style={styles.header}>
                <ImageBackground style={styles.imgHeader} source={require('../../assets/img/FONDO-PERFIL.png')}/>
           </View>
           <View style={styles.body}>
                {/* <Image style={styles.imgProfile} source={require('../../assets/img/profile.png')}/> */}
                <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
                    <Text style={{color: 'black'}}>Carlos Banda</Text>
                </View>
                <View style={{marginHorizontal:'10%'}}>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', marginBottom:30}}>
                        <View >
                            <TextInput style = {{borderBottomWidth : 1.0, borderBottomColor:'#2D4C89', color: 'grey', }} placeholderTextColor="grey" placeholder='Nombre(s)' keyboardType='default' value={name} onChangeText={setName}/>
                        </View>
                        <View >
                            <TextInput style = {{borderBottomWidth : 1.0, borderBottomColor:'#2D4C89', color: 'grey', }} placeholderTextColor="grey" placeholder='Apellido(s)' keyboardType='default' value={lastName} onChangeText={setLastName}/>
                        </View>
                    </View>
                    <View>
                        <View style={{marginBottom:30}}>
                            <TextInput style = {{borderBottomWidth : 1.0, borderBottomColor:'#2D4C89', color: 'grey'}} placeholderTextColor="grey" placeholder='Correo'  keyboardType='email-address' value={email} onChangeText={setEmail}/>
                        </View>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                secureTextEntry ={showPass}
                                placeholder="Password"
                                placeholderTextColor="grey"
                                value={password} onChangeText={setPassword}
                                />
                            <Pressable onPress={() => prueba()}>
                                <Icon
                                    name='eye-outline'
                                    color='#000'
                                    size={20}
                                />
                            </Pressable>
                        </View>
                        <View style={{alignItems:'center', marginTop: 30}}>
                            <TouchableOpacity style={styles.btnUpdate} onPress={saveData}>
                                <Text style={styles.textBtn}>Guardar <Icon color={'white'} name={'save-outline'} size={20}/></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{alignItems:'center', marginTop: '20%'}}>
                        <TouchableOpacity style={styles.btnClose} onPress={logoutConfirm}>
                            <Text style={styles.textBtn}>Cerrar Sesión <Icon color={'white'} name={'exit-outline'} size={20}/></Text>
                        </TouchableOpacity>
                    </View>
                </View>
           </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    textBtn:{
        color: 'white'
    },
    header:{
        flex:1,
        // backgroundColor:'red'
    },
    body:{
        flex: 3,
        marginTop: 15
        // backgroundColor: 'green'
    },
    imgHeader:{
        flex:1
    },
    imgProfile: {
        width: 120, 
        height: 120, 
        borderRadius: 200 / 2,
        marginTop: -60,
        justifyContent:'center',
        marginHorizontal: 140
    },
    btnClose: {
        backgroundColor: 'red',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal:10
    },
    btnUpdate: {
        backgroundColor: 'blue',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal:10
    },
    passwordContainer: {
        flexDirection: 'row',
      },
      inputStyle: {
        flex: 1,
        borderBottomWidth : 1.0, 
        borderBottomColor:'#2D4C89',
        color: 'grey'
      },
})
export default Profile;