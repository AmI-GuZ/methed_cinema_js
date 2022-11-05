const API_KEY = 'df21905c3b066d2433f44731d21e50eb';
const BASE_URL = 'https://api.themoviedb.org/3';
const LANGUAGE = '&language=ru-RU'

const getData = url => fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw `Ошибка ${response.status}`
    })
    .catch(err => console.error(err)); 

getData();

export const getTriends = async (type = 'all', period = 'day', page = 1) => {
    const url = `${BASE_URL}/trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
    console.log('data: ', data);
}