const root = document.querySelector('body');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const photo = document.querySelector('main');
const buttonPost = document.querySelector('.post');
const input = document.querySelector('input');
const divComments = document.querySelector('.comments');
const form = document.querySelector('form');

let arrayPhotos = [];
let currentPhoto = 0;

fetch('https://picsum.photos/v2/list?page=2&limit=3').then(resposta => {

    const promiseRoot = resposta.json();

    promiseRoot.then(body => {
        body.forEach(eachphoto => {
            arrayPhotos.push(eachphoto.download_url);
        })
        photo.style.backgroundImage = `url("${arrayPhotos[currentPhoto]}")`;
    })
})

const totalPhotos = arrayPhotos.length-1;
const nextPhoto = currentPhoto+1;
const previouslyPhoto = currentPhoto-1;

arrowLeft.addEventListener('click', () => {
    if (currentPhoto === 0) {
        return;
    }
    currentPhoto--;
    photo.style.backgroundImage = `url("${arrayPhotos[currentPhoto]}")`;
})


arrowRight.addEventListener('click', () => {
    if (currentPhoto === totalPhotos){
        return;
    } 
    currentPhoto++;
    photo.style.backgroundImage = `url("${arrayPhotos[currentPhoto]}")`;
})

form.addEventListener('click', (event) => {
    event.preventDefault()
})

buttonPost.addEventListener('click', (event) => {
    event.preventDefault();

    const div = document.createElement('div');
    
    const a = document.createElement('a');
    a.textContent = 'Comment';

    const span = document.createElement('span');
    span.textContent = input.textContent;

    div.append(a, span);
    divComments.append(div);
});