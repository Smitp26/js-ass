let billValue = 260;
let tipValue;

function calculateTip(){

    (billValue>=50 && billValue<=300) ? (tipValue=(billValue*15)/100) : (tipValue=(billValue*20)/100);
    // if(billValue>=50 && billValue<=300){
    //     tipValue = (billValue * 15)/100;
    // }
    // else{
    //     tipValue = (billValue * 20)/100;
    // }

    //console.log(`The bill was ${billValue}, the tip was ${tipValue} and the total value is ${billValue + tipValue}`);

    document.write(`The bill was ${billValue}, the tip was ${tipValue} and the total value is ${billValue + tipValue}`);
}

// calculateTip();
