
import { data } from "../data";


export default class ElectricianWorksService {

    // getWorks() {
    //     return fetch('http://electrical.nbacademy.ru/data.json')
    //         .then((response) => response.json())
    //         .then(data => console.log(data))
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    getWorks() {
        return new Promise((resolve, reject) => {
            resolve(data);
            reject(new Error('Чёта пошло не так!'))
        })
    }

}