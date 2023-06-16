const slides = document.querySelector(".img-show");
var slideIndex = 0;
const sliderImg = document.querySelector('.active-img')
const Source = {
    src : [
    "https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY",
    "https://fastly.picsum.photos/id/15/367/267.jpg?hmac=40EYEVJXNgtMwT5FWTdPg535SqNAzzMO9LqxM0uA2no",
    "https://fastly.picsum.photos/id/16/367/267.jpg?hmac=ZyyuET1a6X-Ym6MXK8OyHrdWFJiLI4To0iYLTlyrD-0",
    "https://fastly.picsum.photos/id/29/367/267.jpg?hmac=snQvv3cTXL2ZRKdHFXUmjfsHhcSIBisdIGoJ_ofqJD0",
    "https://fastly.picsum.photos/id/37/367/267.jpg?hmac=ZPCSzJMfs2PTrVjGJHmwB1w8tyAZlbEFsSZ_wjiu3ws",
    "https://picsum.photos/id/70/367/267",
    "https://picsum.photos/id/71/367/267",
    ]
}

Source.src.map(src=>{

    // Creating Img tag using create elemnent
    let ImgTag = document.createElement("img");
    ImgTag.src = src;
    console.log(ImgTag)
    slides.appendChild(ImgTag)
})
let Images = document.querySelectorAll('.img-show img')
console.log(Images)

function blur(){
    Images.forEach(img=>{
        img.style.opacity = 0.3
    })
}
blur()

let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.prev');

// By default showing image
Images[slideIndex].style.opacity = 1;
sliderImg.style.backgroundImage = `url(${Images[slideIndex].src})`

// Next button
nextButton.addEventListener('click', ()=>{
    slideIndex++
    if (slideIndex > Images.length - 1) {
        slideIndex = 0
    }


    blur()
    Images[slideIndex].style.opacity = 1;
    sliderImg.style.backgroundImage = `url(${Images[slideIndex].src})`
})

// Prev button
prevButton.addEventListener('click', ()=>{
    slideIndex --
    if (slideIndex < 0) {
        slideIndex = Images.length - 1 
    }
    blur()
    Images[slideIndex].style.opacity = 1;
    sliderImg.style.backgroundImage = `url(${Images[slideIndex].src})`

})

Images.forEach(img=>{
    img.addEventListener('click',()=>{
        blur()
        img.style.opacity = 1;
        sliderImg.style.backgroundImage = `url(${img.src})`
    })
})
