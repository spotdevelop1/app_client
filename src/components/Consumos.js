import React, {useState, useEffect} from 'react'
import {Text, StyleSheet, View, Image, Button, Pressable, Modal} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { consultCdrs } from "../api/consultCdrs"


function Consumos({type, phone, dateStart, dateEnd}) {

  // consultCdrs(type, phone, dateStart, dateEnd).then((res) => {
  //   console.log(res)
  // })
  // .catch((e) => {
  //   console.log(e.message)
  // })

console.log(type);
  let  a = [];
  {for (let index = 0; index < type; index++) {
    a.push(
      <View style={styles.contentOptions}>
        <View style={[styles.consumosContainer]}>
          <View style={[styles.consumosHeader]}>
            <View style={[styles.consumosHeaderContainers]}>
              <Icon style={[styles.consumosIconPrimary]} name='calendar'/>
              <Text style={[styles.consumosText]}>12 Ene</Text>
            </View>
            <View style={[styles.line]}></View>
            <View style={[styles.consumosHeaderContainers]}>
              <Text style={[styles.consumosText]}>
                {type}
              </Text>
              <Icon style={[styles.consumosIcon, styles.consumosIconActive]} name='angle-double-down'/>
            </View>
          </View>
        </View>
      </View>
    )
  }}

  return (
    <View>
      {a}
    </View>
  );

}

const styles = StyleSheet.create({
  line:{
    position:'absolute',
    top:'-72%',
    height:'242%',
    left: '15%',
    width: 3,
    backgroundColor:'#aaaaaa'
  },
  contentOptions:{
    position:'relative',
    flex: 1,    
    color:'#848484',    
    justifyContent: 'space-evenly', 
    padding: 15,
    borderColor: '#aaaaaa',        
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    marginVertical:10,
    paddingHorizontal:15,
  },
  consumosHeader:{
    flexDirection:'row',
    justifyContent:'space-between',    
  },
  consumosHeaderContainers:{
    flexDirection:'row',
    justifyItems:'center',
    alignItems:'center',
  },
  consumosIconActive:{
    color:'blue'
  }, 
  consumosText:{
    color:'#848484',
    fontSize: 15,
    fontWeight:'bold',
    marginHorizontal:10
  },
  consumosIcon:{
    color:'#848484',
    fontSize:15
  },
  consumosIconPrimary:{
    color:'#848484',
    fontSize:23,
    paddingRight:19
  },
  
})

export default Consumos