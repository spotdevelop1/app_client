import AsyncStorage from "@react-native-async-storage/async-storage"

export async function setUserIdApi(userId){
    try {
        await AsyncStorage.setItem("userId", toString(userId))
        return true;
    } catch (error) {
        return null;
    }
}

export async function getUserIdApi(){
    try {
        const token = parseInt(await AsyncStorage.getItem("userId"))
        return token
    } catch (error) {
        return null;
    }
}