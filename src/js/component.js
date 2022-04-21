import '../css/components.css';
//import webpackImg from '../assets/img/webpack-logo.png';

export const sayHello = (name) => {
    let tagName = document.createElement('h1');
    tagName.innerText = `Hi ${name}`;
    document.body.append(tagName);

    /*
    const wpckImg = document.createElement('img');
    wpckImg.src = webpackImg;
    document.body.append(wpckImg);
    */
}