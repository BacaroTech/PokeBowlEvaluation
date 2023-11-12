import tw from 'twrnc'
import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { Dimensions } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { postInsetUser } from '../api/userAPI'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height



export default function Register() {
    const [user, setUser] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function insertUserAndGoHome(){
        try{
            if(validateEmail){
                postInsetUser({name: user, email: email, password: password});
                navigation.navigate('Home');
            }
        }catch(error){
            console.log("error call api, message: " + error);
        }
    }

    function validateEmail(text){
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
        }
        else {
            console.log("Email is Correct");
        }
        return reg.test(text);
      }

    return (
        <View style={styles.box}>
            <View style={tw`flex flex-col mt-20 px-6 lg:px-8`}>
                <View style={tw`sm:mx-auto sm:w-full sm:max-w-sm`}>
                    <Text style={tw`text-center text-5xl font-bold leading-9 tracking-tight text-gray-900 leading-relaxed`}>Registrati e crea le tue super Poke Bowl!</Text>
                </View>
            </View>

            <SafeAreaView style={tw`mx-5`}> 
                <Text
                    style={styles.description}
                >Nome utente
                </Text>
                <TextInput
                    style={tw`block flex-1 border-2 border-amber-600 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6`}
                    onChangeText={setUser}
                    value={user}
                /> 

                <Text
                    style={styles.description}
                >Email
                </Text>
                <TextInput
                    style={tw`block flex-1 border-2 border-amber-600 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6`}
                    onChangeText={setEmail}
                    value={email}
                /> 

                <Text
                    style={styles.description}
                >Password
                </Text>
                <TextInput
                    style={tw`block flex-1 border-2 border-amber-600 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6`}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                />  

                <View style={tw`w-50 mt-5 mx-auto`}>
                    <Pressable
                        style={tw`flex w-full bg-white justify-center rounded-md border-2 border-amber-600 mt-10 px-3 py-1.5 font-semibold leading-6  
                                hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                                focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-20`}
                        onPress={() => insertUserAndGoHome()}
                    >
                        <Text style={tw`text-black text-2xl font-bold mx-auto text-center`}>Registrati</Text>
                    </Pressable>
                </View>
            <input type='email'></input>
            </SafeAreaView>
    
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'rgb(251, 191, 36)',
        width: width,
        height: height,
        maxHeight: height,
        fontFamily: "Verdana, Arial, Helvetica, sans-serif"
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    description: {
        margin: 0,
        marginTop: 25,
        marginBottom: 5,
        color: "black",
        fontSize: "1.25rem",
        height: 'auto',
        width: 350,
        fontWeight: "bold"
    }
});

