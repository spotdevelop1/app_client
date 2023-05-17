import React, { useEffect, useState } from 'react'
import {Text, StyleSheet, View, Pressable, ScrollView, Image } from 'react-native'
import { globalStyle } from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import Consumos from '../components/Consumos';
import DownloadDailyConsumption from '../components/DownloadDailyConsumption';
import { useNavigation } from '@react-navigation/native';
import NumberPicker from '../components/NumberPicker';

function EstadoCuenta(  ) {
    const navigation = useNavigation(); 
    const [Wifiactive, setWifiactive] = useState(true);    
    const [Callactive, setCallactive] = useState(false);    
    const [MSJactive, setMSJactive] = useState(false);    
    const [Type, setType] = useState('Voz');    
    const [selectedValue, setSelectedValue] = useState();

    const handleClick = (type) => {        
        setWifiactive(false)
        setCallactive(false)
        setMSJactive(false)
        switch (type) {
            case 'Datos': 
                setWifiactive(!Wifiactive)
                // setType(3)
                break;
            case 'Voz':
                setCallactive(!Callactive)
                // setType(2)
                break;
            case 'SMS': 
                setMSJactive(!MSJactive)
                // setType(1)
                break;        
            default:
                break;
        }
        setType(type)
    };

    // useEffect(() => {
    //     console.log('====================================');
    //     console.log(selectedValue);
    //     console.log('====================================');
    // }, [selectedValue])

    return ( 
        
        <View style={styles.container}>
            <View style={styles.ContentBanner}>
                <Pressable onPress={() => navigation.navigate('Panel')}>
                    <Icon style={styles.IconButtonsWhite} name='angle-double-left'/>
                </Pressable >       
                <Image style={styles.ConsumosLogo} source={require('../../assets/img/Consumos.png')}/>
            </View>
            <View style={styles.ContentBanner}>
                <NumberPicker
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                />
            </View>

            <View style={styles.seccionButtonsContainerMain}>
                <View style={styles.seccionButtonsContainer}>
                    <View style={styles.line}></View>
                    <Pressable onPress={()=>handleClick('Datos')} style={[styles.seccionButtons, Wifiactive ? styles.seccionButtonsBorderActivate : styles.seccionButtonsBorderDisable]}>
                        <Icon style={[styles.IconButtons, Wifiactive ? styles.seccionButtonsActivate : styles.seccionButtonsDisable]} name='wifi'/>
                        <Text style={[styles.TextWhitIcon, Wifiactive ? styles.seccionButtonsActivate : styles.seccionButtonsDisable]}>Internet</Text>
                    </Pressable >
                    <Pressable onPress={()=>handleClick('Voz')} style={[styles.seccionButtons, Callactive ? styles.seccionButtonsBorderActivate : styles.seccionButtonsBorderDisable]}>
                        <Icon style={[styles.IconButtons, Callactive ? styles.seccionButtonsActivate : styles.seccionButtonsDisable]}  name='phone'/>
                        <Text style={[styles.TextWhitIcon, Callactive ? styles.seccionButtonsActivate : styles.seccionButtonsDisable]}>Llamadas</Text>
                    </Pressable>
                    <Pressable onPress={()=>handleClick('SMS')} style={[styles.seccionButtons, MSJactive ? styles.seccionButtonsBorderActivate : styles.seccionButtonsBorderDisable]}>
                        <Icon style={[styles.IconButtons, MSJactive ? styles.seccionButtonsActivate : styles.seccionButtonsDisable]}  name='commenting-o'/>
                        <Text style={[styles.TextWhitIcon, MSJactive ? styles.seccionButtonsActivate : styles.seccionButtonsDisable]}>Mensajes</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.containerConsumos}>
                <View style={styles.contentOptions}>         
                    <DownloadDailyConsumption type={Type} 
                        phone={selectedValue}
                        dateStart={"2023-03-03"}
                        dateEnd={"2023-03-03"}
                    />
                </View>
                <ScrollView style={styles.contentConsumos}> 
                    <Consumos type={10} 
                        phone={selectedValue}
                        dateStart={"2023-03-03"}
                        dateEnd={"2023-03-03"}
                    />
                </ScrollView>
            </View>
        </View>
    );

    
}

const styles = StyleSheet.create({
    line:{
        position:'absolute',
        backgroundColor:'#a7a7a7',
        bottom:1,
        height:3,
        width:'100%'
    },
    ContentBanner:{
        backgroundColor:'#2f3541',
        height:100,
        justifyContent:'center',
        paddingHorizontal:20,
        position:'relative'
    },
    IconButtonsWhite:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
    },
    ConsumosLogo:{
        width:200,
        height:70,
        resizeMode: 'stretch',
        position:'absolute',
        top:20,
        right:100
    },
    container:{
        flex: 1,
        backgroundColor: '#e6e6e6',        
    },
    TextWhitIcon:{        
        alignItems:'center',
        fontSize:13,
        textAlign:'center'
    },
    IconWhitText:{
        alignSelf: 'center',
        alignItems:'center',
        fontSize:40
    },
    IconButtons:{        
        fontSize:27,
    },
    seccionButtonsActivate:{
        color:'#004e93',
    },
    seccionButtonsBorderActivate:{
        paddingBottom: 6,
        borderBottomWidth: 6,
        borderBottomColor: '#2304db',
    },
    seccionButtonsBorderDisable:{

    },
    seccionButtonsDisable:{
        color:'#8C8C8C'
    },
    seccionButtonsContainerMain:{
        paddingHorizontal:50,
        paddingBottom:60,
        paddingTop:30,
    },
    seccionButtonsContainer:{
        position:'relative',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
    },
    seccionButtons:{
        width:70,
        // marginHorizontal:20,    
        justifyItems:'center',
        alignItems:'center'
    },
    contentOptions:{
        color:'#818181',    
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'#fdfdfd',        
        // backgroundColor:'red',
        borderRadius: 10,        
        position:'absolute',
        justifyItems:'center',
        alignItems:'center',
        top:'-12%',
        left: '35%',
        padding: 20,
        zIndex: 3,
    },
    containerConsumos:{
        flex:1,
        marginTop:3,        
        position:'relative',
        backgroundColor:'white',
    },
    contentConsumos:{
        paddingHorizontal:50,
        marginTop:50,
    },
    contentOptionsText:{
        color:'#818181', 
    },
    contentOptionsIcons:{
        color:'#818181', 
    },
    textDateReference:{
        color:'#818181',
        fontWeight:'bold',
        textAlign:'center',        
        fontSize:17,
        marginVertical:15
    },
    input:{
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        borderColor: '#d5d9dc',
        borderWidth: 2,
        color: '#000',
        marginTop: 10,
        marginBottom: 30,
        fontSize: 15,
        marginHorizontal: 10
    },
    textTitle:{
        marginTop: 20,
        fontSize: 15,
        marginHorizontal: 80,
        fontWeight: 'bold'
    },
    textNum:{
        marginLeft: 20,
        marginTop: 20
    },
    text:{
        color: 'black'
    },

    body:{
        flex: 8,
        width:'100%',
        marginVertical: 100,
        height: 400,
        alignContent: 'center',
        // backgroundColor:'red'
    },
    addDevice:{
        flex:1,
        marginHorizontal:35,
        alignItems:'flex-start',
        marginBottom: -50,
        marginTop: 10,
    },
    btnAddDevice:{
        padding: 5,
        color:'black',
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        borderColor: '#F5232D',
        marginTop: 10
    },
    modalAdd:{
        flex: 1,
        backgroundColor:'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyModal:{
        borderRadius: 10,
        width: 300,
        height: 250,
        backgroundColor: 'white',
        // alignItems: 'center',
    },

    btns:{
        ...globalStyle.btnsModal
    }
})
export default EstadoCuenta;