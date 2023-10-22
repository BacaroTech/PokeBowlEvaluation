import tw from 'twrnc'
import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { Dimensions } from "react-native";
import Home from './screens/home';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function App() {
  return (
    <Home/>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgb(251, 191, 36)',
    width: width,
  }
});