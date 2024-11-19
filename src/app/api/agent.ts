import axios, { AxiosError, AxiosResponse } from "axios";
//import { toast } from "react-toastify";
//import { router } from "../router/Routes";


const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

//axios.defaults.baseURL = import.meta.env.VITE_API_URL; // 'https://localhost:7224/api/';
axios.defaults.baseURL =  'https://localhost:7114/api/';

//axios.defaults.withCredentials = true;


const responseBody = (response: AxiosResponse) => response.data;

// axios.interceptors.request.use(config => {
//     const token = store.getState().account.user?.token;
//     if (token) config.headers.Authorization = 'Bearer ${token}';
//     return config;
// })



axios.interceptors.response.use( async response => {

    if (import.meta.env.DEV)    await sleep();
        return response
}, (error: AxiosError) => {
    //console.log('caught by interceptor'); 
    
    
    // const {data, status} = error.response!;  // as AxiosResponse;
    //         switch (status) {
    //             case 400:  
    //                 if (data.errors)                  
    //                 {
    //                     const modelStateErrors: string[] = [];
    //                     for (const key in data.errors)
    //                     {
    //                         if(data.errors[key])
    //                             {
    //                                 modelStateErrors.push(data.errors[key])
    //                             }
    //                     }
    //                     throw modelStateErrors.flat();

    //                 }
    //                 toast.error(data.title)
    //                 break;
    //             case 401:
    //                 toast.error(data.title)
    //                 break;
    //             case 500:
    //                 router.navigate('/server-error', {state: {error: data}} );
    //                 break;
    //             default:
    //                 break;
    //         }
            
    return Promise.reject(error.response);
})





const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string ) => axios.post(url).then(responseBody),
    put: (url: string ) => axios.put(url).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),

}

const Catalog = {
    list: () => requests.get('products'),
    details: (id: number) => requests.get(`products/${id}`)
}


const TestErrors =  {
    get400Error: () => requests.get('buggy/bad-request'),
    get401Error: () => requests.get('buggy/unauthorised'),
    get404Error: () => requests.get('buggy/not-found'),
    get500Error: () => requests.get('buggy/server-error'),
    getValidationError: () => requests.get('buggy/validation-error')

}

const agent = {
    Catalog,
    TestErrors
}

export default agent;   