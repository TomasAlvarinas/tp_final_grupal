import { imgcanastas } from "../assets"

const productos = [
    {
        id: 'sku001',
        title: 'Bandejas e individuales',
        text:  'Lorem ipsum',
        img: './img/planta.jpeg',
        categorie: 'cat01',
        url: 'https://www.canva.com/design/DAE8e10OqA4/pHJ3ld7sJOOhVf-1XPE2uQ/view?utm_content=DAE8e10OqA4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#6'
    },
    {
        id: 'sku002',
        title: 'Aromatizantes',
        text:  'Lorem ipsum',
        img: './img/aromatizantes.jpg',
        categorie: 'cat02',
        url: 'https://www.canva.com/design/DAE8e10OqA4/pHJ3ld7sJOOhVf-1XPE2uQ/view?utm_content=DAE8e10OqA4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#5'
    },
    {
        id: 'sku003',
        title: 'Canastas',
        text:  'Lorem ipsum',
        img: './img/canastas.jpg',
        categorie: 'cat01',
        url: 'https://www.canva.com/design/DAE8e10OqA4/pHJ3ld7sJOOhVf-1XPE2uQ/view?utm_content=DAE8e10OqA4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#8'
    },
    {
        id: 'sku004',
        title: 'Jarrones',
        text:  'Lorem ipsum',
        img: './img/jarrones.jpg',
        categorie: 'cat02',
        url: 'https://www.canva.com/design/DAE8e10OqA4/pHJ3ld7sJOOhVf-1XPE2uQ/view?utm_content=DAE8e10OqA4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#9'
    },
    {
        id: 'sku005',
        title: 'Textiles',
        text:  'Lorem ipsum',
        img: './img/textiles.jpg',
        categorie: 'cat01',
        url: 'https://www.canva.com/design/DAE8e10OqA4/pHJ3ld7sJOOhVf-1XPE2uQ/view?utm_content=DAE8e10OqA4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#12'
    },
    {
        id: 'sku006',
        title: 'Ceramicas',
        text:  'Lorem ipsum',
        img: './img/ceramicas.jpg',
        categorie: 'cat01',
        url: 'https://www.canva.com/design/DAE8e10OqA4/pHJ3ld7sJOOhVf-1XPE2uQ/view?utm_content=DAE8e10OqA4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#11'
    },
]

const navButtos =[
    {
        link: 'https://google.com',
        text: 'Home',
    },
    {
        link: '#',
        text: 'Shop',
    },
    {
        link: './components/Footer/Footer.js',
        text: 'Contacto',
    },
]

export {
    productos,
    navButtos

}