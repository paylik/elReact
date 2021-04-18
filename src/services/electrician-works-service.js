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

    getWorks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
                reject(new Error('Чёта пошло не так!'))
            }, 500)
        })
    }
    
}