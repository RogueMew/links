window.onload = function(){
    let element = document.getElementById("Background")
    let darkImages = ["./images/darkImages/IMG_4726.jpg", "./images/darkImages/IMG_4735.jpg", "./images/darkImages/IMG_4868.jpg", 
                      "./images/darkImages/IMG_4878.jpg", "./images/darkImages/IMG_4882.jpg", "./images/darkImages/IMG_8296.jpg"
                    ]
        let lightImages = ["./images/lightImages/IMG_5499.jpg", "./images/lightImages/IMG_6284.jpg", "./images/lightImages/IMG_6421.jpg",
                           "./images/lightImages/IMG_6495.jpg", "./images/lightImages/IMG_6510.jpg", "./images/lightImages/IMG_6552.jpg" ]
    let hour = new Date().getHours();
    if (hour < 18){
        let randomImage = lightImages[Math.floor(Math.random() * lightImages.length)]
        element.style.setProperty('--bg-image', `url(${randomImage})`)
    }else{
        let randomImage = darkImages[Math.floor(Math.random() * darkImages.length)]
        console.log(randomImage)
        element.style.setProperty('--bg-image', `url(${randomImage})`)
    }
}
