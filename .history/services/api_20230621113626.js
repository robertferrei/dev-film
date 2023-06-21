import axios  from "axios";
//importação servidor
const api = axios.create({ 
    baseURL:'https://api.themoviedb.org/3/',
    params:{
            api_key: 'be5227cc3307f36713d0ae8900e768f4',
            language: 'pt-BR',
            page: 1



     }
})



export default api