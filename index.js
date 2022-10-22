const colour=document.querySelector(".arts")//text div
let randomizer=0
function random(){
    randomizer=Math.floor((Math.random()*7))+1
}
function newImage(){
    const image1=document.createElement("img")
    image1.setAttribute('src','taek.png')
    image1.setAttribute('alt', 'taekwondo image')
    image1.setAttribute('height', 500);
    image1.setAttribute('width', 550);
    image1.style.border='5px solid purple';
    image1.onerror=function handleError(){
        console.log('Image could not be loaded')
    };
    image1.onload=function handleImageLoaded(){
        console.log("Successful")
    };
    const box=document.querySelector(".taek1");
    box.appendChild(image1)
}
function newColor(){
    random()
    console.log(randomizer)
    if(randomizer===1){
    colour.style.backgroundColor="red"}
    else if(randomizer===2){
        colour.style.backgroundColor="blue"
    }
    else if(randomizer===3){
        colour.style.backgroundColor="var(--bright)"
    }
    else if(randomizer===4){
        colour.style.backgroundColor="purple"
    }
    else if(randomizer===5){
        colour.style.backgroundColor="green"
    }
    else if(randomizer===6){
        colour.style.backgroundColor="pink"
    }
    else if(randomizer===7){
        colour.style.backgroundColor="white"
    }
    else{
        alert="Error"
    }
}