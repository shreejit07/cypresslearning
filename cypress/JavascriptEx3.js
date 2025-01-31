let a = 7;
let b = 8;

for( var i = 0; i < 10; i++){
    console.log("Hello World");
    let c = (a + b) * i;
    if (c%2 == 0){
        console.log("Even number is: " + c);
    }
    else{
        console.log("Odd number is: " + c);
    }
}

function add(a, b){
    return (a + b) * 2;
}
console.log(add(222, 123));

let day = 'tuesday '
console.log(day.length)  //8
let subDay = day.slice(0,4)
console.log(subDay)
console.log(day[1]) //u
//tue   day 
let splitDay =day.split("s")
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)


let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
diff.toString()

let newQuote =day+ "is Funday day"
console.log(newQuote)
let val =newQuote.indexOf("day",5)
console.log(val)
//tuesday is Funday  
let count = 0
let value =newQuote.indexOf("day")
while(value!== -1)
{
    count++ //2
    value =newQuote.indexOf("day",value+1)

}
console.log(count)

// let person =new Person("Chris","Edward")
// console.log(person.fullName())
