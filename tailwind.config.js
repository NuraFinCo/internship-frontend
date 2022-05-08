module.exports = {
        content: [
                "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
                colors:{
                        'default-white' : 'rgb(234,236,239)',
                        'white-300' : 'rgb(183,189,198)',
                        'default-gray' : 'rgb(132,142,156)',
                        'gray-b' : 'rgb(118,128,143,0.2)',
                        'gray-100' : 'rgb(43,49,57)',
                        'default-green' : 'rgb(14,203,129)',
                        'green-progressbar' : '#152b28',
                        'default-red' : 'rgb(246,70,93)',
                        'red-progressbar' : '#2c1e24',
                        'default-gold' : 'rgb(240,185,11)',
                },
                extend: {},
        },
        plugins: [
                require('tailwind-scrollbar')
        ],
}