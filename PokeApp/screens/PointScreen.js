import tw from 'twrnc'
import {React, createElement, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Point() {
    const route = useRoute()
    const paramState = route.params?.paramState //param mpassed by prev form
    console.log(paramState)

    return (
        <View style={styles.box}>
            <View style={tw`flex flex-col mt-20 px-6 lg:px-8`}>
                <View style={tw`sm:mx-auto sm:w-full sm:max-w-sm`}>
                    <Text style={tw`text-center text-5xl font-bold leading-9 tracking-tight text-gray-900 leading-relaxed`}>Punteggio</Text>
                </View>
            </View> 
        </View>
    ) 
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'rgb(251, 191, 36)',
        width: width,
        fontFamily: "Verdana, Arial, Helvetica, sans-serif"
    },
    description: {
        margin: 0,
        marginBottom: 5,
        color: "black",
        fontSize: "1.25rem",
        height: 'auto',
        minHeight: height
    }
});
