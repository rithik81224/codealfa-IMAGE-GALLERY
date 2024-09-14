const images = [
    {
        src: './image.jpg',
        text: 'Manchester in England'                                                                                                                                                                                                               
    },
    {
        src: './image_2.jpg',
        text: 'London in England'
    },
    {
        src: './image_3.jpg',
        text: 'Barcelona in Spain'
    },
    {
        src: './image_4.jpg',
        text: 'Paris in France'
    },
    {
        src: './image_5.jpg',
        text: 'Rome in Italy'
    },
    {
        src: './image_6.jpg',
        text: 'Museum Island in Germany'    
    },
    {
        src: './image_7.jpg',
        text: 'Porto in Portugal'
    },
    {
        src: './image_8.jpg',
        text: 'Lisbon in Portugal'
    }
];
let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    document.getElementById('modal-img').src = images[index].src;
    document.getElementById('modal-text').innerText = images[index].text;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateModal();
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateModal();
}

function updateModal() {
    document.getElementById('modal-img').src = images[currentIndex].src;
    document.getElementById('modal-text').innerText = images[currentIndex].text;
}