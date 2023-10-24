import tw from 'twrnc'
import { React, createElement } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native';
import { Dimensions } from "react-native";
import { useForm } from 'react-hook-form';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

let state = {
    base: '',
    proteine1: '',
    proteine2: '',
    ing1: '',
    ing2: '',
    ing3: '',
    salsa1: '',
    salsa2: '',
};

const handleBaseChange = (text) => {
    setState({ base: text });
}
const handleProteine1Change = (text) => {
    setState({ proteine1: text });
}

const handleProteine2Change = (text) => {
    setState({ proteine2: text });
}

const handleIng1Change = (text) => {
    setState({ ing1: text });
}

const handleIng2Change = (text) => {
    setState({ ing2: text });
}

const handleIng3Change = (text) => {
    setState({ ing3: text });
}

const handleSalse1Change = (text) => {
    setState({ salsa1: text });
}

const handleSalse2Change = (text) => {
    setState({ salsa2: text });
}

export default function Form({ navigation }) {

    return (
        <View style={styles.box}>
            <View style={tw`flex flex-col mt-20 px-6 lg:px-8`}>
                <View style={tw`sm:mx-auto sm:w-full sm:max-w-sm`}>
                    <Text style={tw`text-center text-5xl font-bold leading-9 tracking-tight text-gray-900 leading-relaxed`}>Crea la tua Poke Bowl</Text>
                </View>
            </View>

            <Image
                source={require("../media/woke-logo.svg")}
                style={tw`mx-auto w-100 h-80`} />
            <View style={tw`mx-5`}>
                {/* Base */}
                <Text s
                    style={tw`mx-0 text-black-900 text-2xl font-bold`}
                >BASE
                </Text>
                <Text
                    style={styles.description}
                >Inserisci la base del tuo Poke
                </Text>
                <TextInput
                    value={state.base}
                    onChangeText={handleBaseChange}
                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md 
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-black-200 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
                    placeholder="Base del Poke"
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
                <TextInput
                    value={state.proteine1}
                    onChangeText={handleProteine1Change}
                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
                    placeholder="Proteina 1"
                />
                <TextInput
                    value={state.proteine2}
                    onChangeText={handleProteine2Change}
                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
                    placeholder="Proteina 2"
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
                <TextInput
                    value={state.ing1}
                    onChangeText={handleIng1Change}
                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
                    placeholder="Ingrediente 1"
                />
                <TextInput
                    value={state.ing2}
                    onChangeText={handleIng2Change}
                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
                    placeholder="Ingrediente 2"
                />
                <TextInput
                    value={state.ing3}
                    onChangeText={handleIng3Change}
                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
                    placeholder="Ingrediente 3"
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
                    value={state.salsa1}
                    onChangeText={handleSalse1Change}
                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
                    placeholder="Salsa 1"
                />
                <TextInput
                    value={state.salsa2}
                    onChangeText={handleSalse2Change}
                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
                    placeholder="Salse 2"
                />

                {/* Submit */}
                <View style={tw`w-50 mt-5 mx-auto`}>
                    <Pressable
                        style={tw`flex w-full bg-white justify-center rounded-md border-2 border-amber-600 px-3 py-1.5 font-semibold leading-6  
                                    hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-20`}
                        onPress={() => navigation.navigate('Punteggio', {
                            paramState: state
                        })}
                    >
                        <Text style={tw`text-black text-2xl font-bold mx-auto text-center`}>Calcola Punteggio</Text>
                    </Pressable>
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
        height: 'auto'
    }
});
