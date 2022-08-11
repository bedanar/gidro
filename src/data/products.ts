import bag from '../assets/bag.png'
import jacket from '../assets/jacket.png'
import binocular from '../assets/binocular.png'
import safety from '../assets/safety.png'

export const products = [
    {
        id: 1,
        title: 'Водонепроницаемый Рюкзак',
        image: bag,
        sale: false,
        price: 5699,
        available: true, 
        favourite: false
    },
    {
        id: 2,
        title: "Спасательный жилет BRP Men's Airflow PFD",
        image: jacket,
        sale: false,
        price: 5699,
        available: false, 
        favourite: false
    },
    {
        id: 3,
        title: 'BRP Audio-Premium Lux System',
        image: binocular,
        sale: false,
        price: 5699,
        available: true, 
        favourite: true
    },
    {
        id: 4,
        title: 'Спасательное снаряжение',
        image: safety,
        sale: true,
        price: 5699,
        available: true, 
        favourite: false
    },
]