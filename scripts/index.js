
let Scree = document.getElementById("Screen")
let ScreenButton = document.getElementById("Next")
let screens = ["Next1", "Next2", "Next3", "Next4", "Next5"]
let links = ["https://www.github.com/jamellknows", "https://jamellknows.github.io", "https://jamellknows.github.io/module1challenge",
 "https://www.cii.systems/", "https://www.milleniumprizesolutions.com/"]
 let titles = ["Github Repository", "Github Page", "Module Challenge", "CII Systems", "Millennium Prize Solutions"]
let Up = document.getElementById("up")
let Down = document.getElementById("down")
let Screen1 = document.getElementById("Next1")
let Screen2 = document.getElementById("Next2")
let Screen3 = document.getElementById("Next3")
let n1num = 0, n2num = 1, n3num = 2, n4num = 3

Scree.href = links[n1num]
Scree.style.backgroundImage = "url('/images/Next1.jpg')"
Screen1.style.backgroundImage = "url('/images/Next2.jpg')"
Screen2.style.backgroundImage = "url('/images/Next3.jpg')"
Screen3.style.backgroundImage = "url('/images/Next4.jpg')"
let screennumber = 1
let Desc = document.getElementById("Desc")

let descriptions = ["Github is a cloud based repository that helps developers store, manage, track and control changes to their code. This is my github repository",
                    "jamellknows.io is my official github landing page, check it out for other developments I make outside of frontend development ",
                    "The module 1 challenge page displays the first website I made as part of the edEx bootcamp",
                    "The CII website is the official page for a small start up I am running in artificial intelligence",
                    "THe millenium prize solutions is a webpage I made dedicated to displaying my solutions to the millenium prize problems "
]


Desc.innerText = descriptions[n1num]
Scree.innerText = titles[n1num]

ScreenButton.addEventListener("click", function(){
    scimage = '/images/' + screens[n1num] + '.jpg'
    Scree.style.backgroundImage = `url(${scimage})`
    Scree.href = links[n1num]
    Desc.innerText = descriptions[n1num]
    UpClick()


    


});

Up.addEventListener("click", UpClick)

function UpClick(){
    if(n1num == n3num || n2num == n4num ){
        n1num = 0;
        n2num = 1;
        n3num = 2
        n4num = 3
    }
    if(n1num == 4)
    {
        n1num = 0
    }
    if(n2num== 4)
    {
        n2num = 0
    }
    if(n3num == 4)
    {
        n3num = 0
    }
    if(n4num== 4)
    {
        n4num = 0
    }
    n1num++
    n2num++
    n3num++
    n4num++
    sc1image = '/images/' + screens[n1num] + '.jpg'
    sc2image = '/images/' + screens[n2num] + '.jpg'
    sc3image = '/images/' + screens[n3num] + '.jpg'



    Screen1.style.backgroundImage = `url(${sc1image})`
    Screen2.style.backgroundImage = `url(${sc2image})`
    Screen3.style.backgroundImage = `url(${sc3image})`



}

//down function

Down.addEventListener("click", function(){
    if(n1num == n3num || n2num == n4num || n2num == n3num){
        n1num = 0;
        n2num = 1;
        n3num = 2
        n4num = 3
    }
    if(n1num == 0)
    {
        n1num = 4
    }
    if(n2num== 0)
    {
        n2num = 4
    }
    if(n3num == 0)
    {
        n3num = 4
    }
    if(n4num== 0)
    {
        n4num = 4
    }
    n1num--
    n2num--
    n3num--
    n4num--
    sc1image = '/images/' + screens[n1num] + '.jpg'
    sc2image = '/images/' + screens[n2num] + '.jpg'
    sc3image = '/images/' + screens[n3num] + '.jpg'



    Screen1.style.backgroundImage = `url(${sc1image})`
    Screen2.style.backgroundImage = `url(${sc2image})`
    Screen3.style.backgroundImage = `url(${sc3image})`



})