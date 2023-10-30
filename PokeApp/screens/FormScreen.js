import tw from 'twrnc'
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Image, SafeAreaView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { Dimensions } from "react-native";
import { getProteine } from "../api/ingredientsAPI"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Form({ navigation }) {

    //form field
    const [base, handleBaseChange] = React.useState('');
    const [proteine1, handleProteine1Change] = React.useState('');
    const [proteine2, handleProteine2Change] = React.useState('');
    const [ing1, handleIng1Change] = React.useState('');
    const [ing2, handleIng2Change] = React.useState('');
    const [ing3, handleIng3Change] = React.useState('');
    const [salsa1, handleSalse1Change] = React.useState('');
    const [salsa2, handleSalse2Change] = React.useState('');

    let responseProteine;
    useEffect(() => {
        const loadData = async () => {
            responseProteine = ((await getProteine()).data).map(x => x.Nome);
            console.log(responseProteine);
        }
        loadData();
    }, [])


    return (
        <View 
        style={styles.box}>
            <View style={tw`flex flex-col mt-20 px-6 lg:px-8`}>
                <View style={tw`sm:mx-auto sm:w-full sm:max-w-sm`}>
                    <Text style={tw`text-center text-5xl font-bold leading-9 tracking-tight text-gray-900 leading-relaxed`}>Crea la tua Poke Bowl</Text>
                </View>
            </View>

            <Image
                source={require("../media/woke-logo.svg")}
                style={tw`mx-auto w-100 h-80`} />
            <SafeAreaView style={tw`mx-5`}>
                {/* Base */}
                <Text
                    style={tw`mx-0 text-black-900 text-2xl font-bold`}
                >BASE
                </Text>
                <Text
                    style={styles.description}
                >Inserisci la base del tuo Poke
                </Text>
                <TextInput
                    value={base}
                    onChangeText={handleBaseChange}
                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md 
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-black-200 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
                    
                />

                {/* Proteine*/}
                <Text s
                    style={tw`mx-0 text-black-900 text-2xl font-bold`}
                >PROTEINE
                </Text>
                <Text
                    style={styles.description}
                >Inserisci le proteine del tuo Poke
                </Text>
                <SelectDropdown
                    data={responseProteine}
                    onSelect={(selectedItem) => {
                        console.log(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                /> 
                
                {/*<TextInput
                    value={proteine1}
                    onChangeText={handleProteine1Change}
                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
                    
                />
                <TextInput
                    value={proteine2}
                    onChangeText={handleProteine2Change}
                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
                    
                />*/}

                {/* Ingredienti*/}
                <Text s
                    style={tw`mx-0 text-black-900 text-2xl font-bold`}
                >INGREDIENTI
                </Text>
                <Text
                    style={styles.description}
                >Inserisci le verdure, la frutta e tutte le altre liccorine che comporranno il tuo Poke
                </Text>
                <TextInput
                    value={ing1}
                    onChangeText={handleIng1Change}
                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
                    
                />
                <TextInput
                    value={ing2}
                    onChangeText={handleIng2Change}
                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
                    
                />
                <TextInput
                    value={ing3}
                    onChangeText={handleIng3Change}
                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
                    
                />

                {/* Salse*/}
                <Text s
                    style={tw`mx-0 text-black-900 text-2xl font-bold`}
                >SALSE
                </Text>
                <Text
                    style={styles.description}
                >Inserisci le salse che vuoi mettere nel tuo Poke
                </Text>
                <TextInput
                    value={salsa1}
                    onChangeText={handleSalse1Change}
                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
                    
                />
                <TextInput
                    value={salsa2}
                    onChangeText={handleSalse2Change}
                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
                    
                />

                {/* Submit */}
                <View style={tw`w-50 mt-5 mx-auto`}>
                    <Pressable
                        style={tw`flex w-full bg-white justify-center rounded-md border-2 border-amber-600 px-3 py-1.5 font-semibold leading-6  
                                    hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-20`}
                        onPress={() => navigation.navigate('Punteggio', {paramState: {
                            base: base,
                            proteine1: proteine1,
                            proteine2: proteine2,
                            ing1: ing1,
                            ing2: ing2,
                            ing3: ing3,
                            salsa1: salsa1,
                            salsa2: salsa2
                        }})}
                    >
                        <Text style={tw`text-black text-2xl font-bold mx-auto text-center`}>Calcola Punteggio</Text>
                    </Pressable>
                </View>

            </SafeAreaView>
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
        width: 350
    }
});

/*
<SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            /> */