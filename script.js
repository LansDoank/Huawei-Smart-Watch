const slides = document.querySelectorAll('.carousel-slide img');
const text = document.querySelector('.carousel-controls p');
const watch = document.querySelector('.carousel-controls img');
console.log(text);

document.querySelector('.abu').addEventListener('click', () => {
  slides.forEach((slide) => {
    slide.setAttribute('src', './img/carousel1.webp');
  });
  watch.setAttribute('src', './img/abu.webp');
  text.innerHTML = 'Tali nilon stepless yang dapat disesuaikan memberikan ruang pada kulit untuk bernapas.';
});

document.querySelector('.putih').addEventListener('click', () => {
  slides.forEach((slide) => {
    slide.setAttribute('src', './img/carousel2.webp');
  });
  watch.setAttribute('src', './img/putih.webp');
  text.innerHTML = 'Elegant Morandi-colour strap, skin-friendly & water-proof fluoroelastomer.';
});
document.querySelector('.hijau').addEventListener('click', () => {
  slides.forEach((slide) => {
    slide.setAttribute('src', './img/carousel3.webp');
  });
  watch.setAttribute('src', './img/hijau.webp');
  text.innerHTML = 'Symbol of hope, skin-friendly & water-proof fluoroelastomer.';
});
document.querySelector('.pink').addEventListener('click', () => {
  slides.forEach((slide) => {
    slide.setAttribute('src', './img/carousel4.webp');
  });
  watch.setAttribute('src', './img/pink.webp');
  text.innerHTML = 'Energetic & romantic, skin-friendly & water-proof fluoroelastomer.';
});
document.querySelector('.hitam').addEventListener('click', () => {
  slides.forEach((slide) => {
    slide.setAttribute('src', './img/carousel5.webp');
  });
  watch.setAttribute('src', './img/hitam.webp');
  text.innerHTML = 'Classic and stylish, skin-friendly & water-proof fluoroelastomer.';
});

// Miniwatch
const miniwatch = document.querySelector('.miniwatch')
const aod = document.querySelector('.aod')
const dial = document.querySelector('.dial')
setInterval(() => {
    miniwatch.setAttribute('src','./img/miniwatch2.webp')
    dial.style.color = 'black'
    aod.style.color = '#737373'

},3000)
setInterval(() => {
    miniwatch.setAttribute('src','./img/miniwatch.webp')
        dial.style.color = '#737373'
    aod.style.color = 'black'
},6000)

// pop up
const popUp = document.querySelector('.pop-up')
const promo = document.querySelector('#promo').addEventListener('click',() => {
  popUp.style.display = 'flex'
})
const buy = document.querySelector('.buy').addEventListener('click',() => {
  popUp.style.display = 'flex'
})
const close = document.querySelector('.pop-up-close').addEventListener('click',() => {
  popUp.style.display = 'none'
})

// pop up video 
const popVideo = document.querySelector('.pop-video')
const activeVideo = document.querySelector('.active-video').addEventListener('click',() => {
  popVideo.style.display = 'flex'
})
const playButton = document.querySelector('.play-button').addEventListener('click',() => {
  popVideo.style.display = 'flex'
})
const closeVideo = document.querySelector('.video-close').addEventListener('click',() => {
  popVideo.style.display = 'none'
})

// // Geser 
// const geser = document.querySelector('.geser')
// const geser1 = document.querySelector('.geser-button-1')
// const geserimg1 = document.querySelector('.tidur img')
// const geserText = document.querySelector('.t')
// geser1.addEventListener('click',() => {
 
// })

// const tidur = document.querySelector('.tidur')
// setInterval(() => {
//   tidur.classList.toggle('active-geser')
//   const activeGeser = document.querySelector('.active-geser')
//   activeGeser.innerHTML= 'Jernihkan pikiran Anda dengan mode Tidur khusus, whitenoise, lanskap suara alami, dan musik menenangkan, untuk beristirahat dengan tenang setiap malam.'
//   setTimeout(() => {
//     tidur.classList.toggle('active-geser')
//   },3000)
// },6000)