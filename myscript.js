window.onkeypress = () => {
    document.querySelector('#excuse').innerHTML = excuseGenerator();
    console.log("Hola Sariii desde el archivo Javascript! ");
   
};

let excuseGenerator = () => {
    let who = ['my cat', 'the internet', 'my self esteem', 'a magician', 'an alien'];
    let verb = ['ate', 'crushed', 'broke', 'peed', 'destroyed'];
    let what = ['my homework', 'my happiness', 'my soul', 'the house', 'the computer'];
    let randomIndex = (Math.floor(Math.random() * 5));
    
    let whoIn = (Math.floor(Math.random() * 5));
    let verbIn = (Math.floor(Math.random() * 5));
    let whatIn = (Math.floor(Math.random() * 5));

    return who[whoIn] + ' ' + verb[verbIn]+' '+what[whatIn];
}