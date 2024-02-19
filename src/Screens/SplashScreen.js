import React from 'react';
import {View, StyleSheet, Text, Touchable, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';


const SplashScreen = ({navigation}) => {
const handlebtn = () =>{
    navigation.navigate('Home')
}

    return (
        <View style={styles.container}>
             <LottieView 
             style={{
                width: 400,
                height: 400
             }}
             source={require("../Animations/animationss.json")} autoPlay loop />
        <TouchableOpacity onPress={handlebtn} style={styles.textstyle}>
            <Text style={{fontSize: 20, fontWeight: "700" }}>Start Shopping</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    textstyle:{
        marginTop: 50,
        backgroundColor:"Gray",
        
    }
})

export default SplashScreen;
