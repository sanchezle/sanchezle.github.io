// projectsData.js
import bowiegameImage from './images/bowiegame.png';
import barceloveImage from './images/barcelove.png';
import juancitoImage from './images/juancito.png';

const myProjects = [
    {
        id: 1,
        title: 'Bowiegame',
        description: 'Play with my dog for bursting bubbles,  a project I build for Hardvard cs50X. Stack: flask, sql,javascript ',
        image: bowiegameImage,
        url: 'https://www.bowiegame.es'
    },
    {
        id: 2,
        title: 'Barcelove',
        description: 'geolocation Barcelona inspired game. Stack: MongoDB,Express.js,Node.js, React.js Redux.js ',
        image: barceloveImage,
        url: 'https://app.netlify.com/sites/mellow-mochi-d0d65a/overview'
    },
    {
        id: 3 ,
        title: 'Juancito',
        description: 'Chatgpt powered spanish teacher ',
        image: juancitoImage,
        url: 'https://zingy-baklava-d1f0ae.netlify.app/'
    }, 

    // ... other projects
];

export default myProjects;
