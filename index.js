// const btn = document.querySelector("button");
// const wrapper = document.getElementById("wrapper");

// btn && btn.addEventListener("click",function(event) {
//     event.preventDefault( );
//     const image = document.createElement("img");
//     const randomId = Math.trunc(Math.random() * 500)

// } )


console.log('Boshlanish');

setTimeout(() => {
  console.log('3 soniya kechikish');
}, 2000);

console.log('Yana biror narsani amalga oshirish');

let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(`Intervall ${count}`);
  
  
  if (count === ) {
    clearInterval(intervalId);
    console.log('Interval to\'xtatildi');
  }
}, 1000);
