// projectsData.js
import bowiegameImage from './images/bowiegame.png';
import barceloveImage from './images/barcelove.png';
import juancitoImage from './images/juancito.png';

const myProjects = [
    {
        id: 1,
        title: 'Bowiegame',
        description: 'Play with my dog for bursting bubbles,  a project I built for Hardvard cs50X. Stack: flask, sql,javascript ',
        image: bowiegameImage,
        url: 'https://www.bowiegame.es'
    },
    {
        id: 2,
        title: 'Barcelove',
        description: 'geolocation Barcelona inspired game. Stack: MongoDB,Express.js,Node.js, React.js Redux.js ',
        image: barceloveImage,
        url: 'https://mellow-mochi-d0d65a.netlify.app/'
    },
    {
        id: 3 ,
        title: 'Juancito',
        description: 'Spanish learning assistan chatbot powered by OpenAI API. Stack: Node.js, Express.js, React.js ',
        image: juancitoImage,
        url: 'https://zingy-baklava-d1f0ae.netlify.app/'
    }, 

    // ... other projects
];

export default myProjects;
