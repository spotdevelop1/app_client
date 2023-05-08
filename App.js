import 'react-native-gesture-handler';
import React, { useEffect, useMemo, useState } from "react";
import {Alert, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import LoginNavigations from './src/navigations/LoginNavigation';
// import SplashNavigations from './src/navigations/StackNavigation';
import AuthContext from './src/context/AuthContext'; 
import {setTokenApi, getTokenApi, removeTokenApi} from "./src/api/token"
import {setDeviceApi} from "./src/api/devices"
import {setUserIdApi} from "./src/api/userId"
import { MenuLateral } from './src/navigations/DrawerPersonalizado';

const App = () => {
  const [auth, setAuth] = useState(undefined);
  // const [animating, setAnimating] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAnimating(false);
  //     //Check if user_id is set or not
  //     //If not then send for Authentication
  //     //else send to Home Screen
  //     if (auth) {
  //       <MenuLateral/>
  //     }else{
  //       <MenuLateral/>
  //     }
  //   }, 5000);
  // }, []);
  

  useEffect(() => {
    ( async () =>{
      const token = await getTokenApi()
      if (token) {
        setAuth({
          token
        })
      }else{
        setAuth(null)
      }
    })()
  }, [])
   
  const login = (user)=>{
    const http_code = user.http_code

    if (http_code == '200') {
      setTokenApi(user.jwt)
      setDeviceApi(user.devices)
      setUserIdApi(user.userId)
      setAuth({
        token: user.jwt,
        userId: user.userId,
        devices: user.userId
      })
    }else{
      Alert.alert('Error',
      'Número o Contraseña incorrecta.',)
    }
  }

  const logout = () =>{
    if (auth) {
      removeTokenApi();
      setAuth(null)
    }
  }

  const authData = useMemo(
    () =>({
      auth,
      login,
      logout,
    }),[auth]
  );

  if(auth === undefined) return null;
  return (
    <AuthContext.Provider value={authData}>
      <NavigationContainer>        
        {auth ? <MenuLateral/> : <LoginNavigations/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF'
  },
  text: {
    color: '#000'
  }
});

export default App;
