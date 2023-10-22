import tw from 'twrnc'
import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Form() {
    return (
        <View style={tw`flex flex-col mt-20 px-6 lg:px-8`}>
            <View style={tw`sm:mx-auto sm:w-full sm:max-w-sm`}>
                <Text style={tw`text-center text-5xl font-bold leading-9 tracking-tight text-gray-900 leading-relaxed`}>Evaluate your<br/>Poke Bowl</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
      backgroundColor: 'rgb(251, 191, 36)',
      width: width,
    }
  });