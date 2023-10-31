import tw from 'twrnc'
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Image, SafeAreaView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { Dimensions } from "react-native";
import { getProteine, getBasi, getIngredienti, getSalse } from "../api/ingredientsAPI"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Form({ navigation }) {

    //form field
    const [base, setBase] = React.useState();
    const [proteine1, setProteine1] = React.useState();
    const [proteine2, setProteine2] = React.useState();
    const [ing1, setIng1] = React.useState();
    const [ing2, setIng2] = React.useState();
    const [ing3, setIng3] = React.useState();
    const [salsa1, setSalsa1] = React.useState();
    const [salsa2, setSalsa2] = React.useState();

    //call api when page is loaded
    const [responseProteine, setResponseProteine] = React.useState();
    const [responseBase, setResponseBase] = React.useState();
    const [responseIngredienti, setResponseIngredienti] = React.useState();
    const [responseSalse, setResponseSalse] = React.useState();
    useEffect(() => {
        const loadData = async () => {
            setResponseProteine(((await getProteine()).data).map(x => x.Nome));
            setResponseBase(((await getBasi()).data).map(x => x.Nome));
            setResponseIngredienti(((await getIngredienti()).data).map(x => x.Nome));
            setResponseSalse(((await getSalse()).data).map(x => x.Nome));
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
                <SelectDropdown
                    data={responseBase}
                    defaultButtonText="Seleziona la tua base"
                    buttonStyle={tw`bg-transparent border-2 border-amber-600 block w-full rounded-md py-1.5 shadow-sm 
                    ring-1 ring-inset ring-gray-300 mb-10`}
                    buttonTextStyle={tw`text-black block text-xl font-medium leading-6`}
                    dropdownStyle={tw`block w-93 bg-white`}
                    rowStyle={tw`py-2 text-sm text-gray-700 dark:text-gray-200`}
                    rowTextStyle={tw`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                    onSelect={(selectedItem) => {
                        console.log(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem) => {
                        setBase(selectedItem)
                        return selectedItem
                    }}
                    rowTextForSelection={(item) => {
                        console.log(item)
                        return item
                    }}
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
                    defaultButtonText="Seleziona la tua prima proteina"
                    buttonStyle={tw`bg-transparent border-2 border-amber-600 block w-full rounded-md py-1.5 shadow-sm 
                    ring-1 ring-inset ring-gray-300 mb-10`}
                    buttonTextStyle={tw`text-black block text-xl font-medium leading-6`}
                    dropdownStyle={tw`block w-93 bg-white`}
                    rowStyle={tw`py-2 text-sm text-gray-700 dark:text-gray-200`}
                    rowTextStyle={tw`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                    onSelect={(selectedItem) => {
                        console.log(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem) => {
                        setProteine1(selectedItem)
                        return selectedItem
                    }}
                    rowTextForSelection={(item) => {
                        console.log(item)
                        return item
                    }}
                /> 

                <SelectDropdown
                    defaultButtonText="Seleziona la tua seconda proteina"
                    buttonStyle={tw`bg-transparent border-2 border-amber-600 block w-full rounded-md py-1.5 shadow-sm 
                    ring-1 ring-inset ring-gray-300 mb-10`}
                    buttonTextStyle={tw`text-black block text-xl font-medium leading-6`}
                    dropdownStyle={tw`block w-93 bg-white`}
                    rowStyle={tw`py-2 text-sm text-gray-700 dark:text-gray-200`}
                    rowTextStyle={tw`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                    data={responseProteine}
                    onSelect={(selectedItem) => {
                        console.log(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem) => {
                        setProteine2(selectedItem)
                        return selectedItem
                    }}
                    rowTextForSelection={(item) => {
                        console.log(item)
                        return item
                    }}
                /> 

                {/* Ingredienti*/}
                <Text s
                    style={tw`mx-0 text-black-900 text-2xl font-bold`}
                >INGREDIENTI
                </Text>
                <Text
                    style={styles.description}
                >Inserisci le verdure, la frutta e tutte le altre liccorine che comporranno il tuo Poke
                </Text>
                <SelectDropdown
                    defaultButtonText="Seleziona il tuo primo ingrediente"
                    buttonStyle={tw`bg-transparent border-2 border-amber-600 block w-full rounded-md py-1.5 shadow-sm 
                    ring-1 ring-inset ring-gray-300 mb-10`}
                    buttonTextStyle={tw`text-black block text-xl font-medium leading-6`}
                    dropdownStyle={tw`block w-93 bg-white`}
                    rowStyle={tw`py-2 text-sm text-gray-700 dark:text-gray-200`}
                    rowTextStyle={tw`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                    data={responseIngredienti}
                    onSelect={(selectedItem) => {
                        console.log(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem) => {
                        setIng1(selectedItem)
                        return selectedItem
                    }}
                    rowTextForSelection={(item) => {
                        console.log(item)
                        return item
                    }}
                /> 
                <SelectDropdown
                    defaultButtonText="Seleziona il tuo secondo ingrediente"
                    buttonStyle={tw`bg-transparent border-2 border-amber-600 block w-full rounded-md py-1.5 shadow-sm 
                    ring-1 ring-inset ring-gray-300 mb-10`}
                    buttonTextStyle={tw`text-black block text-xl font-medium leading-6`}
                    dropdownStyle={tw`block w-93 bg-white`}
                    rowStyle={tw`py-2 text-sm text-gray-700 dark:text-gray-200`}
                    rowTextStyle={tw`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                    data={responseIngredienti}
                    onSelect={(selectedItem) => {
                        console.log(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem) => {
                        setIng2(selectedItem)
                        return selectedItem
                    }}
                    rowTextForSelection={(item) => {
                        console.log(item)
                        return item
                    }}
                />
                <SelectDropdown
                    defaultButtonText="Seleziona il tuo terzo ingrediente"
                    buttonStyle={tw`bg-transparent border-2 border-amber-600 block w-full rounded-md py-1.5 shadow-sm 
                    ring-1 ring-inset ring-gray-300 mb-10`}
                    buttonTextStyle={tw`text-black block text-xl font-medium leading-6`}
                    dropdownStyle={tw`block w-93 bg-white`}
                    rowStyle={tw`py-2 text-sm text-gray-700 dark:text-gray-200`}
                    rowTextStyle={tw`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                    data={responseIngredienti}
                    onSelect={(selectedItem) => {
                        console.log(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem) => {
                        setIng3(selectedItem)
                        return selectedItem
                    }}
                    rowTextForSelection={(item) => {
                        console.log(item)
                        return item
                    }}
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
                <SelectDropdown
                    defaultButtonText="Seleziona la tua prima salsa"
                    buttonStyle={tw`bg-transparent border-2 border-amber-600 block w-full rounded-md py-1.5 shadow-sm 
                    ring-1 ring-inset ring-gray-300 mb-10`}
                    buttonTextStyle={tw`text-black block text-xl font-medium leading-6`}
                    dropdownStyle={tw`block w-93 bg-white`}
                    rowStyle={tw`py-2 text-sm text-gray-700 dark:text-gray-200`}
                    rowTextStyle={tw`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                    data={responseSalse}
                    onSelect={(selectedItem) => {
                        console.log(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem) => {
                        setSalsa1(selectedItem)
                        return selectedItem
                    }}
                    rowTextForSelection={(item) => {
                        console.log(item)
                        return item
                    }}
                /> 
                <SelectDropdown
                    defaultButtonText="Seleziona la tua seconda salsa"
                    buttonStyle={tw`bg-transparent border-2 border-amber-600 block w-full rounded-md py-1.5 shadow-sm 
                    ring-1 ring-inset ring-gray-300 mb-10`}
                    buttonTextStyle={tw`text-black block text-xl font-medium leading-6`}
                    dropdownStyle={tw`block w-93 bg-white`}
                    rowStyle={tw`py-2 text-sm text-gray-700 dark:text-gray-200`}
                    rowTextStyle={tw`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                    data={responseSalse}
                    onSelect={(selectedItem) => {
                        console.log(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem) => {
                        setSalsa2(selectedItem)
                        return selectedItem
                    }}
                    rowTextForSelection={(item) => {
                        console.log(item)
                        return item
                    }}
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