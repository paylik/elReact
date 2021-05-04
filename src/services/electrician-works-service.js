export default class ElectricianWorksService {

    data = [
        {
            id: 1,
            name: 'Изготовление отверстия для точечного светильника в ГКЛ более 68 мм  ',
            price: 10
        },
        {
            id: 2,
            name: 'Монтаж металлических лотков  ',
            price: 34
        },
        {
            id: 3,
            name: 'Монтаж распредкоробок открытой установки  ',
            price: 57
        }
    ];

_url = 'https://swapi.co/api/people/'

   getRes = async (url) => {
       const res = await fetch(url);

       if (!res.ok) {
           throw new Error(`Could not fetch ${url}` +
               `, received ${res.status}`)
       }
       console.log(res.result)
       return await res.json();
   };

        // fetch('http://cake.nbacademy.ru/php/1.json')
        //     .then(function (response) {
        //         if (response.status !== 200) {
        //             return Promise.reject(new Error(response.statusText))
        //         }
        //         return Promise.resolve(response)
        //     })
        //     .then(function (response) {
        //         return response.json()
        //     })
        //     .then(function (data) {
        //         console.log('data', data)
        //     })
        //     .catch(function (error) {
        //         console.log('error', error)
        //     })




    getWorks = async () => {
        return await this.getRes(this._url);
}

    // getWorks() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(this.data);
    //             reject(new Error('Чёта пошло не так!'))
    //         }, 500)
    //     })
    // }

}