// 1st question 
let score = document.getElementById('score');

let list0 = document.getElementsByTagName('li')[0];

// endGame.addEventListener("click",()=>{
//   alert( `game over your score is ${finalScore}`)
// })


let scoreint = ()=>{
  let finalScore = score.textContent++;
  return finalScore;
}


list0.addEventListener("click",()=>{
  list0.classList.add('wrong')
})
let list1 = document.getElementsByTagName('li')[1];

list1.addEventListener("click",()=>{
  list1.classList.add('right');
   scoreint();
})
let list2 = document.getElementsByTagName('li')[2];

list2.addEventListener("click",()=>{
  list2.classList.add('wrong')
})
let list3 = document.getElementsByTagName('li')[3];

list3.addEventListener("click",()=>{
  list3.classList.add('wrong')
})


// 2nd qustion

let list4 = document.getElementsByTagName('li')[4];

list4.addEventListener("click",()=>{
  list4.classList.add('right')
  scoreint();
})
let list5 = document.getElementsByTagName('li')[5];

list5.addEventListener("click",()=>{
  list5.classList.add('wrong')
})
let list6 = document.getElementsByTagName('li')[6];

list6.addEventListener("click",()=>{
  list6.classList.add('wrong')
})
let list7 = document.getElementsByTagName('li')[7];

list7.addEventListener("click",()=>{
  list7.classList.add('wrong')
})


// qustion 3 

let list8 = document.getElementsByTagName('li')[8];

list8.addEventListener("click",()=>{
  list8.classList.add('wrong')
})
let list9 = document.getElementsByTagName('li')[9];

list9.addEventListener("click",()=>{
  list9.classList.add('wrong')
})
let list10 = document.getElementsByTagName('li')[10];

list10.addEventListener("click",()=>{
  list10.classList.add('wrong')
})
let list11 = document.getElementsByTagName('li')[11];

list11.addEventListener("click",()=>{
  list11.classList.add('right')
  scoreint();
})


// qustion 4 

let list12 = document.getElementsByTagName('li')[12];

list12.addEventListener("click",()=>{
  list12.classList.add('wrong')
})
let list13 = document.getElementsByTagName('li')[13];

list13.addEventListener("click",()=>{
  list13.classList.add('right')
  scoreint();
})
let list14 = document.getElementsByTagName('li')[14];

list14.addEventListener("click",()=>{
  list14.classList.add('wrong')
})
let list15 = document.getElementsByTagName('li')[15];

list15.addEventListener("click",()=>{
  list15.classList.add('wrong')
})

// quetion 5 

let list16 = document.getElementsByTagName('li')[16];

list16.addEventListener("click",()=>{
  list16.classList.add('wrong')
})
let list17 = document.getElementsByTagName('li')[17];

list17.addEventListener("click",()=>{
  list17.classList.add('wrong')
})
let list18 = document.getElementsByTagName('li')[18];

list18.addEventListener("click",()=>{
  list18.classList.add('wrong')
})
let list19 = document.getElementsByTagName('li')[19];

list19.addEventListener("click",()=>{
  list19.classList.add('right')
  scoreint();
})


// qustion 6 

let list20 = document.getElementsByTagName('li')[20];

list20.addEventListener("click",()=>{
  list20.classList.add('right')
  scoreint();
})
let list21 = document.getElementsByTagName('li')[21];

list21.addEventListener("click",()=>{
  list21.classList.add('wrong')
})
let list22 = document.getElementsByTagName('li')[22];

list22.addEventListener("click",()=>{
  list22.classList.add('wrong')
})
let list23 = document.getElementsByTagName('li')[23];

list23.addEventListener("click",()=>{
  list23.classList.add('wrong')
})


// Question 7 
let list24 = document.getElementsByTagName('li')[24];

list24.addEventListener("click",()=>{
  list24.classList.add('wrong')
})
let list25 = document.getElementsByTagName('li')[25];

list25.addEventListener("click",()=>{
  list25.classList.add('wrong')
})
let list26 = document.getElementsByTagName('li')[26];

list26.addEventListener("click",()=>{
  list26.classList.add('right')
  scoreint();
})
let list27 = document.getElementsByTagName('li')[27];

list27.addEventListener("click",()=>{
  list27.classList.add('wrong')
})

// qustion 8 
let list28 = document.getElementsByTagName('li')[28];

list28.addEventListener("click",()=>{
  list28.classList.add('wrong')
})
let list29 = document.getElementsByTagName('li')[29];

list29.addEventListener("click",()=>{
  list29.classList.add('wrong')
})
let list30 = document.getElementsByTagName('li')[30];

list30.addEventListener("click",()=>{
  list30.classList.add('wrong')
})
let list31 = document.getElementsByTagName('li')[31];

list31.addEventListener("click",()=>{
  list31.classList.add('right')
  scoreint();
})

// qustion 9 
let list32 = document.getElementsByTagName('li')[32];

list32.addEventListener("click",()=>{
  list32.classList.add('right')
  scoreint();
})
let list33 = document.getElementsByTagName('li')[33];

list33.addEventListener("click",()=>{
  list33.classList.add('wrong')
})
let list34 = document.getElementsByTagName('li')[34];

list34.addEventListener("click",()=>{
  list34.classList.add('wrong')
})
let list35 = document.getElementsByTagName('li')[35];

list35.addEventListener("click",()=>{
  list35.classList.add('wrong')
})

// qustion 10 
let list36 = document.getElementsByTagName('li')[36];

list36.addEventListener("click",()=>{
  list36.classList.add('wrong')
})
let list37 = document.getElementsByTagName('li')[37];

list37.addEventListener("click",()=>{
  list37.classList.add('wrong')
})
let list38 = document.getElementsByTagName('li')[38];

list38.addEventListener("click",()=>{
  list38.classList.add('right')
  scoreint();
})
let list39 = document.getElementsByTagName('li')[39];

list39.addEventListener("click",()=>{
  list39.classList.add('wrong')
})

// qustion 11
let list40 = document.getElementsByTagName('li')[40];

list40.addEventListener("click",()=>{
  list40.classList.add('right')
  scoreint();
  
})
let list41 = document.getElementsByTagName('li')[41];

list41.addEventListener("click",()=>{
  list41.classList.add('wrong')
  
})
let list42 = document.getElementsByTagName('li')[42];

list42.addEventListener("click",()=>{
  list42.classList.add('wrong')
  
})
let list43 = document.getElementsByTagName('li')[43];

list43.addEventListener("click",()=>{
  list43.classList.add('wrong')
  
})

/*
let list16 = document.getElementsByTagName('li')[16];

list16.addEventListener("click",()=>{
  list16.classList.add('wrong')
})
let list17 = document.getElementsByTagName('li')[17];

list17.addEventListener("click",()=>{
  list17.classList.add('wrong')
})
let list18 = document.getElementsByTagName('li')[18];

list18.addEventListener("click",()=>{
  list18.classList.add('wrong')
})
let list19 = document.getElementsByTagName('li')[19];

list19.addEventListener("click",()=>{
  list19.classList.add('wrong')
})

*/