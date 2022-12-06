
let Scree = document.getElementById("Screen")
let ScreenButton = document.getElementById("Next")
let screens = ["Next1", "Next2", "Next3", "Next4", "Next5"]
let links = ["https://www.github.com/jamellknows", "https://jamellknows.github.io", "https://jamellknows.github.io/module1challenge",
 "https://www.cii.systems/", "https://www.milleniumprizesolutions.com/"]
let Up = document.getElementById("up")
let Down = document.getElementById("down")
let Screen1 = document.getElementById("Next1")
let Screen2 = document.getElementById("Next2")
let Screen3 = document.getElementById("Next3")
let n1num = 0, n2num = 1, n3num = 2, n4num = 3

Scree.href = links[n1num]
Scree.style.backgroundImage = "url('/starter/images/Next1.jpg')"
Screen1.style.backgroundImage = "url('/starter/images/Next2.jpg')"
Screen2.style.backgroundImage = "url('/starter/images/Next3.jpg')"
Screen3.style.backgroundImage = "url('/starter/images/Next4.jpg')"
let screennumber = 1
ScreenButton.addEventListener("click", function(){
    scimage = '/starter/images/' + screens[n1num] + '.jpg'
    Scree.style.backgroundImage = `url(${scimage})`
    Scree.href = links[n1num]
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
    sc1image = '/starter/images/' + screens[n1num] + '.jpg'
    sc2image = '/starter/images/' + screens[n2num] + '.jpg'
    sc3image = '/starter/images/' + screens[n3num] + '.jpg'



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
        n1num = 7
    }
    if(n2num== 0)
    {
        n2num = 7
    }
    if(n3num == 0)
    {
        n3num = 1
    }
    if(n4num== 0)
    {
        n4num = 7
    }
    n1num--
    n2num--
    n3num--
    n4num--
    sc1image = '/starter/images/' + screens[n1num] + '.jpg'
    sc2image = '/starter/images/' + screens[n2num] + '.jpg'
    sc3image = '/starter/images/' + screens[n3num] + '.jpg'



    Screen1.style.backgroundImage = `url(${sc1image})`
    Screen2.style.backgroundImage = `url(${sc2image})`
    Screen3.style.backgroundImage = `url(${sc3image})`



})