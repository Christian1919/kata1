
function getLitres(time) {
  

    if(time > 6 ){
    return 3;
    }
    else{
  return Math.floor(time*0.5);
    }
}

console.log(getLitres(2));
getLitres(1.4); // => 0
getLitres(2); // => 1
getLitres(5.5); // => 2
getLitres(12.3); // => 3
getLitres(0.82); // => 0
getLitres(11.8); // => 3
getLitres(0); // => 0