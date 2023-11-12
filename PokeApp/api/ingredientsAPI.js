import axios from 'axios';

async function getProteine(){
    try {
        const response = await axios.get('http://localhost:3000/ingredient/proteine');
        console.log(response)
        return response;
    } catch (error) {
        console.error('Errore nella chiamata API:', error);
    }
};

async function getBasi(){
    try {
        const response = await axios.get('http://localhost:3000/ingredient/basi');
        console.log(response)
        return response;
    } catch (error) {
        console.error('Errore nella chiamata API:', error);
    }
};

async function getIngredienti(){
    try {
        const response = await axios.get('http://localhost:3000/ingredient/ingredienti');
        console.log(response)
        return response;
    } catch (error) {
        console.error('Errore nella chiamata API:', error);
    }
};

async function getSalse(){
    try {
        const response = await axios.get('http://localhost:3000/ingredient/salse');
        console.log(response)
        return response;
    } catch (error) {
        console.error('Errore nella chiamata API:', error);
    }
};

async function getAll(){
    try {
        const response = await axios.get('http://localhost:3000/ingredient/all');
        console.log(response)
        return response;
    } catch (error) {
        console.error('Errore nella chiamata API:', error);
    }
};

async function getSingleIngredient(ingredient){
    let formdata = new FormData();
    formdata.append("Nome", ingredient);
    try {
        const response = await axios.get('http://localhost:3000/ingredient/all', formdata);
        console.log(response)
        return response;
    } catch (error) {
        console.error('Errore nella chiamata API:', error);
    }
};


export { getProteine, getBasi, getIngredienti, getSalse, getAll, getSingleIngredient };
