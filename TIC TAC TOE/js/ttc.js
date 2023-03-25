console.log(10)
let music=new Audio("../img/music.mp3")
let gameover=new Audio("../img/gameover.mp3")
let mj=new Audio("../img/ting.mp3")

let turn="X"
document.querySelector(".content").innerText=turn+" CHANCE"
const toggleturn=(turn)=>{
    if(turn=="X")
        turn ="O"
    else
        turn ="X"
    return turn
}



const iswinner=()=>{
    let data=document.getElementsByClassName("txt")
    let cases=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    cases.forEach(ptr=>{
        if((data[ptr[0]].innerText === data[ptr[1]].innerText) && (data[ptr[1]].innerText === data[ptr[2]].innerText) && data[ptr[0]].innerText !="")
        {
            document.querySelector(".content").innerText=data[ptr[0]].innerText+" WON "
        }
    })
    let isover=true
    for(var i=0;i<9;i++)
    {
        if(data[i].innerText=="")
        {
            isover=false
        }
    }
    if(isover)
        gameover.play()
}

let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(itr=>{
    let boxtext=itr.querySelector(".txt")
    itr.addEventListener('click',()=>{
        mj.play()
        if(boxtext.innerText =='')
        {
            boxtext.innerText=turn
            turn=toggleturn(turn)
            document.querySelector(".content").innerText=turn+" CHANCE"
            iswinner()
        }
    })
})

// let reset=document.getElementsByClassName("reset")
reset.addEventListener('click',()=>{
    let data=document.getElementsByClassName("txt")
    for(var i=0;i<9;i++)
    {
        data[i].innerText=""
    }
})