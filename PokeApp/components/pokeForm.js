import React, { Component } from 'react';
import { View, Text, TextInput,Pressable ,StyleSheet } from 'react-native';
import tw from 'twrnc'

class PokeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: '',
      proteine1: '',
      proteine2: '',
      ing1: '',
      ing2: '',
      ing3: '',
      salsa1: '',
      salsa2: '',
    };
  }

  handleBaseChange = (text) => {
    this.setState({ base: text });
  }

  handleProteine1Change = (text) => {
    this.setState({ proteine1: text });
  }

  handleProteine2Change = (text) => {
    this.setState({ proteine2: text });
  }

  handleIng1Change = (text) => {
    this.setState({ ing1: text });
  }

  handleIng2Change = (text) => {
    this.setState({ ing2: text });
  }

  handleIng3Change = (text) => {
    this.setState({ ing3: text });
  }

  handleSalse1Change = (text) => {
    this.setState({ salsa1: text });
  }

  handleSalse2Change = (text) => {
    this.setState({ salsa2: text });
  }

  submitFormData = () => {
    console.log(this.state)
  }

  render() {
    return (
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
          value={this.state.base}
          onChangeText={this.handleBaseChange}
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
          value={this.state.proteine1}
          onChangeText={this.handleProteine1Change}
          style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
          placeholder="Proteina 1"
        />
        <TextInput
          value={this.state.proteine2}
          onChangeText={this.handleProteine2Change}
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
          value={this.state.ing1}
          onChangeText={this.handleIng1Change}
          style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
          placeholder="Ingrediente 1"
        />
        <TextInput
          value={this.state.ing2}
          onChangeText={this.handleIng2Change}
          style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
          placeholder="Ingrediente 2"
        />
        <TextInput
          value={this.state.ing3}
          onChangeText={this.handleIng3Change}
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
          value={this.state.salsa1}
          onChangeText={this.handleSalse1Change}
          style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
          placeholder="Salsa 1"
        />
        <TextInput
          value={this.state.salsa2}
          onChangeText={this.handleSalse2Change}
          style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 rounded-md
                            block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                            text-xl font-medium mb-5`}
          placeholder="Salse 2"
        />

        {/* Submit */}
        <View style={tw`w-50 mt-5 mx-auto`}>
            <Pressable
            style={tw`flex w-full bg-white justify-center rounded-md border-2 border-amber-600 px-3 py-1.5 font-semibold leading-6  
            hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-20`}
            onPress={this.submitFormData}
            >
            <Text style={tw`text-black text-2xl font-bold mx-auto text-center`}>Calcola Punteggio</Text>
            </Pressable>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    description: {
        margin: 0,
        marginBottom: 8,
        marginTop:8,
        color: "black",
        fontSize: "1.25rem",
        height: 'auto'
    }
});

export default PokeForm;