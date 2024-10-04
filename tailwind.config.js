/** @type {import('tailwindcss').Config} */
export default {
    content: [ 
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}', 
    ], 
    theme: { 
    extend: {
      fontFamily: {
        'New-Amsterdam': ['New Amsterdam', 'sans-serif'],
        'Rhodium-Libre': ['Rhodium Libre', 'serif'],
      },
      borderWidth: {
        '40': "40px"
      },
      backgroundImage: {
        'hero': "url('src/assets/background (1).jpg')",
        'dropdown': "url('../assets/more-horizontal.svg')",
      },
      colors: {
        'light-blue':   '#0FA6FA',
        'light-orange': '#FA940F',
        'brown':        '#62431A',
        'dark-blue':    '#0796C0',
        'grey':         '#312F2B',
        'dark':         '#242424',
        'white':        '#FFF',
      },
    }, 

    }, 
    plugins: [
    "prettier-plugin-tailwindcss",
    ],
    darkMode: 'selector',
}

