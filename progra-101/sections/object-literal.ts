

export let person = { 
    gender: 'masculino',
    name: 'Fernando',
    age: 45, 
    isActive: true,
    hobbies: ['soccer', 'futbol', 'basquetball'],
    toString() {
        let objectString = this.name + ' ' + this.gender
        console.log(objectString);
    }

}
//console.log( person.name );
//person.toString();

let car = {
    brand: 'toyota',
    doors: 4,
    color: 'blue',
}

let smartTv = {
    brand: 'samsung',
    size: '50cm',
    color: 'black'
}

let youtubeVideo = {
     lenght: '10 minutes',
     link: 'http',
     platform: 'youtube',
}

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);