const zaoProducts = [
    {
        id: 1,
        description: 'MACAQUINHO ALFAIATARIA LEVE BOTÃO',
        price: '69,90',
        image: './img/001.png'
    },
    {
        id: 2,
        description: 'REGATA BASIC VISCOSE',
        price: '49,90',
        image: './img/002.png'
    },
    {
        id: 3,
        description: 'VESTIDO CURTO ALCINHA ALFAIATARIA LEVE',
        price: '159,90',
        image: './img/003.png'
    },
    {
        id: 4,
        description: 'SHORTS CURTO ALFAIATARIA',
        price: '89,90',
        image: './img/004.png'
    },
    {
        id: 5,
        description: 'VESTIDO MALHA BASIC',
        price: '89,90',
        image: './img/005.png'
    },
    {
        id: 6,
        description: 'REGATA BÁSICA ESTONADA',
        price: '69,90',
        image: './img/006.png'
    },
];

(!localStorage.getItem('zaoStoreProducts')) && localStorage.setItem('zaoStoreProducts', JSON.stringify(zaoProducts));