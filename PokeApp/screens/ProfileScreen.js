import tw from 'twrnc'
import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, TouchableHighlight } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Profile({ navigation }) {
  return (
    <View style={styles.box}>
        <View style={tw`flex flex-col mt-20 px-6 lg:px-8`}>
          <View style={tw`sm:mx-auto sm:w-full sm:max-w-sm`}>
              <Text style={tw`text-center text-5xl font-bold leading-9 tracking-tight text-gray-900 leading-relaxed`}>La tua area</Text>
          </View>
        </View>
        <View style={tw`w-50 mt-5 mx-auto`}>
          <Pressable
              style={tw`flex w-full bg-white justify-center rounded-md border-2 border-amber-600 mt-10 px-3 py-1.5 font-semibold leading-6  
                      hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                      focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-20`}
              onPress={() => navigation.navigate('Form')}
          >
              <Text style={tw`text-black text-2xl font-bold mx-auto text-center`}>Crea la tua Poke Bowl</Text>
          </Pressable>
        </View>
    </View>    
  )
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
    }
  });