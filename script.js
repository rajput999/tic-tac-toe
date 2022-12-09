let n=0
let start=true;
let arr = [true,true,true,true,true,true,true,true,true,];

const checkwin=()=>{
    let col =document.getElementsByClassName('col');
    let win =document.querySelector('.win');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach((e) => {
        if((col[e[0]].innerText === col[e[1]].innerText) && (col[e[1]].innerText === col[e[2]].innerText) && (col[e[2]].innerText !== "")){
            console.log();
            win.innerText="Win🥳"
            start=false;
        }
    });
}

const reset = () =>{
    start =true;
    let col =document.getElementsByClassName('col');

    for(i=0;i<9;i++){
        col[i].innerText="";
    }
    arr = [true,true,true,true,true,true,true,true,true,];
}

const clicked = (no) =>{
    if(start){
    console.log(no);
    let id = document.getElementById(no).id;
    console.log(arr[no-1])
    if(id && arr[no-1]){
        arr[no-1]=false;
    if(n%2){
        n++;
        document.getElementById(no).innerHTML="X";
    }
    else{
        n++;
        document.getElementById(no).innerHTML="O";
    }
    }
    checkwin();
}
}