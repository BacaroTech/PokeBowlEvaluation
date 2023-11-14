import axios from 'axios';

async function postInsetUser(user){
    try {
        const response = await axios.post('http://localhost:3000/user/register', {
            Nome: user.name,
            Mail: user.email,
            Password: user.password
        });
        console.log(response)
        return response;
    } catch (error) {
        console.error('Errore nella chiamata API:', error);
    }
};

async function LoginUser(user){
    try {
        const response = await axios.post('http://localhost:3000/user/login', {
            Mail: user.email,
            Password: user.password
        });
        console.log(response)
        return response;
    } catch (error) {
        console.error('Errore nella chiamata API:', error);
    }
};

export { postInsetUser, LoginUser }