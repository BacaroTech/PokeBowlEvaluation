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

export { getProteine };
