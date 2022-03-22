const messages = [
    "oscar",
    "Ana",
    "Esteban",
    "Diego",
    "Laura",
    "Yesica",
    "paola",
    "natalia",
    "sebastian",
    "diana",
];

const randomMsg = () =>{
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};


module.exports = {randomMsg};