// projectsData.js
import barceloveImage from './images/barcelove.png';
import bowiegameImage from './images/bowiegame.png';
import juancitoImage from './images/juancito.png';
import pinkbudaburger from './images/Pinkbuda_cover.png';
import locculta from './images/locculta.png';

const myProjects = [
    {
        id: 1,
        title: 'Bowiegame',
        description: 'Play with my dog for bursting bubbles,  a project I built for Hardvard cs50X. Stack: flask, sql,javascript ',
        image: bowiegameImage,
        url: 'https://www.bowiegame.es/login'
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
    {
        id: 4 ,
        title: 'Pink Buda Burger website',
        description: 'website for a Pink Buda Burger a burger restaurant franchise locate in Spain. Stack: Node.js, Express.js, React.js ',
        image: pinkbudaburger,
        url: 'https://www.pinkbudaburger.com'
    },
    
    {
        id: 5 ,
        title: 'L\'Occulta website',
        description: 'web app, and website for a cultural worker cooperative L\'Occulta, Arte de todos y para todos, MongoDB,  Express.js,  React.js, Node.js, Redux.js, RTK ',
        image: locculta,
        url: 'https://www.locculta.com'
    }  

    // ... other projects
];

export default myProjects;
