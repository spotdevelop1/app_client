import React, { useState } from 'react'
import { Text, StyleSheet, View, Image, Pressable, ScrollView, TextInput, Alert } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons';
import { registerApi } from '../api/registe';

const RegisterPrueba = () => {
    const [showPass, setShowPass] = useState(true)
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [loading, setLoading] = useState(false)
    const isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handRegistro = async () => {
        if([name, email, phone, password, passwordConfirm].includes('')){
            Alert.alert(
                "Error",
                "Todos los campos son obligatorios"
              )
            return
        }

        if(password != passwordConfirm){
            Alert.alert(
                "Error",
                "La contraseña debe coincidir"
              )
            return
        }
        if(password.length < 8 ){
            Alert.alert(
                "Error",
                "La contraseña debe tener 8 caracteres"
              )
            return
        }

        if (!isValidEmail.test(email)) {
            Alert.alert(
                "Error",
                "Ingresa un correo electrónico válido"
              )
            return
          }

          let fullName = name+' '+lastname;
          const data = await registerApi(fullName ,email, phone, password, passwordConfirm)
          console.log(data.dataDB)
          setName(nombre)
          setLastname(lastname)
          setEmail(correo)
          setPhone(telefono)
          setPassword(contrasenia)
          return false
    }

    const prueba = () =>{
        setShowPass(!showPass)
    }
  return (
        <View style={{flex: 1}} >
            <View style={[styles.header,{flex:1, alignItems: 'center', backgroundColor: 'red'}]}>
            <Image style={styles.header} source={require('../../assets/img/girl-oscura.jpg')}/>
            </View>
            <View style={{flex:2}}>
                <ScrollView>
                        <View style={{alignItems: 'center', marginVertical:20}}>
                            <View>
                                <Text style={styles.textBIenvenida}>Crear Cuenta</Text>
                            </View>
                            <View>
                                <Text style={styles.textBIenvenida2}>Estamos contentos de verte.</Text>
                            </View>
                        </View>
                        
                        <View style={{marginHorizontal: 50, marginVertical: 20}}>
                            <View style={{marginBottom: 10}}>
                                <Text style={{color: 'black'}}>Nombre</Text>
                                <TextInput style = {{borderBottomWidth : 1.0, borderBottomColor:'#2D4C89', color: 'grey'}} placeholderTextColor="grey" placeholder='Carlos' value={name} onChangeText={setName} keyboardType='default'/>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={{color: 'black'}}>Apellido</Text>
                                <TextInput style = {{borderBottomWidth : 1.0, borderBottomColor:'#2D4C89', color: 'grey'}} placeholderTextColor="grey" placeholder='Banda' value={lastname} onChangeText={setLastname} keyboardType='default'/>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={{color: 'black'}}>Correo electronico</Text>
                                <TextInput style = {{borderBottomWidth : 1.0, borderBottomColor:'#2D4C89', color: 'grey'}} placeholderTextColor="grey" placeholder='carlos.morales@spotuno.mx' value={email} onChangeText={setEmail} keyboardType='email-address'/>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={{color: 'black'}}>Número</Text>
                                <TextInput style = {{borderBottomWidth : 1.0, borderBottomColor:'#2D4C89', color: 'grey'}} placeholderTextColor="grey" placeholder='9613601404' value={phone} onChangeText={setPhone} keyboardType='number-pad' maxLength={10}/>
                            </View>
                        </View >
                        <View style={{marginLeft:50 , marginRight: 30, marginBottom: 20}}>
                            <Text style={{color: 'black'}}>Contraseña</Text>
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
                        </View>
                        <View style={{marginLeft:50 , marginRight: 30, }}>
                            <Text style={{color: 'black'}}>Confirmar contraseña</Text>
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    style={styles.inputStyle}
                                    secureTextEntry ={showPass}
                                    placeholder="Password"
                                    placeholderTextColor="grey"
                                    value={passwordConfirm} onChangeText={setPasswordConfirm}
                                    />
                                <Pressable onPress={() => prueba()}>
                                    <Icon
                                        name='eye-outline'
                                        color='#000'
                                        size={20}
                                    />
                                </Pressable>
                            </View>
                        </View>
                        <View style={{marginVertical: 30, marginHorizontal: 70}}>
                            <Pressable style={[styles.btn,{backgroundColor:'#2D4C89', alignContent:'center'}]} onPress={handRegistro}>
                                <Text style={{color:'white', alignItems:'center', fontSize:18}}>Registrar</Text>
                            </Pressable>
                        </View>
                </ScrollView>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    passwordContainer: {
        flexDirection: 'row',
      },
      inputStyle: {
        flex: 1,
        borderBottomWidth : 1.0, 
        borderBottomColor:'#2D4C89',
        color: 'grey'
      },
    textBIenvenida: {
        color: '#2D4C89',
        fontSize: 30,
        fontWeight: 'bold',
    },
    textBIenvenida2: {
        color: '#2D4C89',
        fontSize: 20,
    },
    logo:{
        width: 190,
        height: 105,
        marginBottom:40
    },
    btn:{
        paddingHorizontal: 4,
        paddingVertical:5,
        borderRadius: 20,
        alignItems:'center',
    },
    header:{
        width:' 100%',
        height: '100%'
    }
})

export default RegisterPrueba
