const images = [
    {
        type: 'image',
        src: './media&images/1.jpg',
        title: 'Мельница'
    },
    {
        type: 'image',
        src: './media&images/2.jpg',
        title: 'Горы'
    },
    {
        type: 'image',
        src: './media&images/3.jpg',
        title: 'Домики'
    },
    {
        type: 'image',
        src: './media&images/4.gif',
        title: 'ГифМастер'
    },
    {
        type: 'audio',
        src: './media&images/1.mp3',
        title: 'Звуки природы'
    },
    {
        type: 'audio',
        src: './media&images/2.mp3',
        title: 'Звуки природы'
    },
    {
        type: 'audio',
        src: './media&images/3.mp3',
        title: 'Звуки природы'
    },
    {
        type: 'video',
        src: './media&images/1.mp4',
        title: 'Видосик'
    },
    {
        type: 'video',
        src: './media&images/2.mp4',
        title: 'Видосик'
    },
];

let renderProduct = product => {
    if(product.type == 'image')
       {return `<div class = 'card'>
                    <div class = 'item'>
                    <img src="${product.src}">
                    </div>
                    <p>${product.title}</p>
       
               </div>`} else if(product.type == 'audio') {
                return `<div class = 'card'>
                            <div class = 'item'>
                                <audio controls src="${product.src}"></audio>
                            </div>
                            <p>${product.title}</p>
                        </div>`
               } else if(product.type == 'video') {
                return  `<div class = 'card'>
                            <div class = 'item'>
                                <video height="150px" width="200px" controls src="${product.src}"  ></video>
                            </div>
                            <p>${product.title}</p>
                        </div>`
               }
}

let renderPage = list => {
    document.querySelector('.cards').innerHTML = list.map(item => renderProduct(item)).join('');
}

renderPage(images);