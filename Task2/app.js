let dolphins = {
    score1: 100,
    score2: 100,
    score3: 100
};

let koalas = {
    score1: 100,
    score2: 100,
    score3: 100
};

let avgDolphins = (dolphins.score1 + dolphins.score2 + dolphins.score3) / 3;
let avgKoalas = (koalas.score1 + koalas.score2 + koalas.score3) / 3;

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log('Dolphins win the trophy!');
}

else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
    console.log('Koalas win the trophy!');
}

else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log('Both win the trophy!');
}

else {
    console.log('It is a draw!');
}

