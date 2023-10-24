import tw from 'twrnc'
import {React, createElement } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { Dimensions } from "react-native";
import { useForm } from 'react-hook-form';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const Submit = (data) => {
        console.log(data)
    };

    return (
        <View style={styles.box}>
            <View style={tw`flex flex-col mt-20 px-6 lg:px-8`}>
                <View style={tw`sm:mx-auto sm:w-full sm:max-w-sm`}>
                    <Text style={tw`text-center text-5xl font-bold leading-9 tracking-tight text-gray-900 leading-relaxed`}>Inserisci la tua Bowl</Text>
                </View>
            </View>

            <form onSubmit={handleSubmit(Submit)} style={tw`flex flex-col mt-10 mb-20 px-6 lg:px-8`}>
                
                <View style={tw``} id="Base">
                    <h2><b style={tw`mx-0 text-black-900`}>BASE</b></h2>
                    <p style={styles.description}>Inserisci la base del tuo Poke</p>
                    <View style={tw`grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6`}>
                        <View style={tw`sm:col-span-4`}>
                            <View style={tw`mt-2`}>
                                <TextInput  
                                style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 
                                    text-black-900 rounded-md
                                    focus:ring-0 sm:text-sm sm:leading-6 mb-5`}
                                {...register("base")}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={tw``} id="Proteine">
                    <h2><b style={tw`mx-0 text-black-900`}>PROTEINE</b></h2>
                    <p style={styles.description}>Inserisci le proteine del tuo Poke</p>
                    <View style={tw`grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6`}>
                        <View style={tw`sm:col-span-4`}>
                            <View style={tw`mt-2`}>
                                <TextInput  
                                style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 
                                    text-black-900 rounded-md
                                    focus:ring-0 sm:text-sm sm:leading-6 mb-5`}
                                {...register("proteine1")}
                                />
                                <TextInput  
                                style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 
                                    text-black-900 rounded-md
                                    focus:ring-0 sm:text-sm sm:leading-6 mb-5`}
                                {...register("proteine2")}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={tw``} id="Ingredienti">
                    <h2><b style={tw`mx-0 text-black-900`}>INGREDIENTI</b></h2>
                    <p style={styles.description}>Inserisci verdura, frutta e altre leccornie che vuoi inserire nel tuo Poke</p>
                    <View style={tw`grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6`}>
                        <View style={tw`sm:col-span-4`}>
                            <View style={tw`mt-2`}>
                                <TextInput  
                                style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 
                                    text-black-900 rounded-md
                                    focus:ring-0 sm:text-sm sm:leading-6 mb-5`}
                                {...register("ingredienti1")}
                                />
                                <TextInput  
                                style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 
                                    text-black-900 rounded-md
                                    focus:ring-0 sm:text-sm sm:leading-6 mb-5`}
                                {...register("ingredienti2")}
                                />
                                <TextInput  
                                style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 
                                    text-black-900 rounded-md
                                    focus:ring-0 sm:text-sm sm:leading-6 mb-5`}
                                {...register("ingredienti3")}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={tw``} id="Salse">
                    <h2><b style={tw`mx-0 text-black-900`}>SALSE</b></h2>
                    <p style={styles.description}>Inserisci le salse che accompagneranno il tuo Poke</p>
                    <View style={tw`grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6`}>
                        <View style={tw`sm:col-span-4`}>
                            <View style={tw`mt-2`}>
                                <TextInput  
                                style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 
                                    text-black-900 rounded-md
                                    focus:ring-0 sm:text-sm sm:leading-6 mb-5`}
                                {...register("salsa1")}
                                />
                                <TextInput  
                                style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 
                                    text-black-900 rounded-md
                                    focus:ring-0 sm:text-sm sm:leading-6 mb-5`}
                                {...register("salsa2")}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={tw`w-50 mt-5 mx-auto`}>
                    <button
                    type="submit"
                    style={tw`flex w-full bg-white justify-center rounded-md border-2 border-amber-600 px-3 py-1.5 font-semibold leading-6  
                    hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>
                        <Text style={tw`text-black text-2xl font-bold mx-auto text-center`}>Punteggio</Text>
                    </button>
                </View> 

            </form>
        </View>
    );
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

/**
 * <label htmlFor="email">Email</label>
                <input type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span>Please enter a valid email address</span>}
                <br/>
                <label htmlFor="password">Password</label>
                <input type="password" {...register('password', { required: true, minLength: 6 })} />
                {errors.password && <span>Password must be at least 6 characters</span>}
                <br/>

    <View id="Proteine" style={tw`flex rounded-md shadow-sm ring-1 ring-inset
                                    ring-black-300 focus-within:ring-2 focus-within:ring-inset 
                                    focus-within:ring-amber-900`} >
                                    <input type="text" name="proteina" 
                                    style={tw`w-80 bg-transparent border-2 border-amber-600 py-1.5 
                                        text-black-900 rounded-md
                                        focus:ring-0 sm:text-sm sm:leading-6 mb-5`}
                                    {...register('proteina1')}/>
                                    
                                </View>            
 */