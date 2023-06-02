import React, { useState, useEffect } from 'react'
import { TextInput, StyleSheet, View ,Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {Picker} from '@react-native-picker/picker';
import { globalStyle } from '../styles/'
import { Loading } from '../components/Loading';
import { getAllRates } from "../api/rates"

export function PayRecharge ({closeModal}){
    const [selectedValue, setSelectedValue] = useState("Planes Disponibles");
    const [loader, setLoader] = useState([]);
    const [rates, setRates] = useState([]);

    var offerts = [];

    {
        if (rates['offers'] != undefined) {
            for (let index = 0; index < rates['offers'].length; index++) {
                offerts.push(
                    <Picker.Item label={`${rates['offers'][index].name } $${rates['offers'][index].price_sale }.00`} value={rates['offers'][index].offerID} />
                )
            }
        }
    }
   
    useEffect(() => {
        console.log(tajeta);
    }, [selectedValue])

    
    // const createPay = () => {
    //     setLoader(<Loading/>)
    //     setTimeout(() => {
    //         setLoader([])
    //         Alert.alert('Exito!!','Pago realizado.');
    //     }, 3000);
    // }

    return (
        <View style={styles.modalPaymentRecharge}>
            <View style={styles.ContentBanner}>
                <Text style={styles.textBanner}>Planes Disponibles</Text>
            </View>
            <View style={styles.containerPayment}>
                <View style={styles.container}>
                    <Picker
                        style={[styles.text, styles.select]}
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedValue(itemValue)
                        }>

                        {offerts}
                    </Picker>
                </View>
            </View>
            <Text style={styles.textCenter}>Datos de la tarjeta</Text>
            <View style={styles.containerCreditCard}>
                <TextInput maxLength={12} style={styles.input} placeholderTextColor="#000" keyboardType='default'
                             placeholder='0000-0000-0000'/>
                <TextInput maxLength={5} style={styles.input} placeholderTextColor="#000" keyboardType='default'
                            placeholder='00/00'/>
                <TextInput maxLength={5} style={styles.input} placeholderTextColor="#000" keyboardType='default'
                            placeholder='000'/>
            </View>
            <View style={styles.btns}>
                <Icon.Button style={[styles.btnsPay, styles.btnsPayDanger]} name='arrow-back-outline' onPress={() => closeModal()}>Regresar</Icon.Button>
                <Icon.Button  style={[styles.btnsPay, styles.btnsPayPrimary]} name='cart-outline' onPress={() => createPay()}>Recargar</Icon.Button>
            </View>   
            {loader}
        </View>
    );
}

const styles = StyleSheet.create({
    containerCreditCard:{
        marginHorizontal: 40,
        marginVertical:20,
        marginTop:0,
        flexDirection:'row',
        justifyContent:'center'
    },
    input:{
        padding: 10,
        paddingHorizontal:30,
        color: '#000',
        marginTop: 10,
        fontSize: 16
    },
    textCenter:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',

    },
    ContentBanner:{
        backgroundColor:'#2f3541',
        height:80,
        justifyContent:'center',
        paddingHorizontal:20,
        position:'relative',
        marginTop:60
    },
    textBanner:{
        color:'white',
        fontSize:22,
        textAlign:'center',
        fontWeight:'bold',
    },
    containerPayment:{
        marginHorizontal: 40,
        marginVertical:10,
    },
    container:{
        marginVertical:10,
        borderColor: '#7b6cc8',
        borderWidth: 3,
        borderRadius: 20,        
    },
    text:{
        color: 'black'
    },
    modalPaymentRecharge:{
        flex: 1,
        alignContent:'center',
        backgroundColor:'white'
    },
    btns:{
        ...globalStyle.btnsModal,
        justifyContent:'space-around'
    },
    btnsPay:{
        width:150,
        justifyContent:'center'
    },
    btnsPayDanger:{
        backgroundColor:'red',
    },
    btnsPayPrimary:{
        backgroundColor:'blue'
    },
    select:{
        borderColor: '#7b6cc8',
        borderWidth: 1,
        color:'#506a7b',
    }
})