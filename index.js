// document.getElementById("count-el").innerText = 5

// to store data we need to create a variable to store the data
// let count = 5*7 //let count be zero   
// in the let count you can do mathematical calculations, 0+19+12-3 etc

//  console.log(count)   // print out what is stored in count - for debugging purposes and checking our code

// javascript reads from the top and down. So it matters in what order things are placed. 
// if things are not in order you will get a reference error in the inspect - console tab for the live page

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch // first variable added to second variable for an outcome

// console.log(count)     // to comment out lines shortcut key is Ctrl+K+C

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console
// let myAge = 47
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let count = 5  // we can add to the count with hard coded numbers f.ex 4 + other variables
//  // let count above is the initialization or the assignment of the variable. 
//  // what if I want to change the variable.  Count is the keyword for the variable
//  // Javascript will use the last of the variables with initial let keyword and that will be the output
// count = 3
// // there are other types of variables that you cant reassigne like this example. 
// count = 1

// console.log(count)

//let count = 5
// if I want to increment the website counter with one and still keep that count. 
// everytime you´d press the button in the app it will add one to the total count

//count + 1
//count = count + 1 // in js you don´t need to have equals on the side of the =  

// let bonusPoint = 50 
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 50

// console.log(bonusPoint)

// bonusPoint = bonusPoint -75

// console.log(bonusPoint)

// bonusPoint = bonusPoint + 45

// console.log(bonusPoint)   
// this calculation above will give the output in console to be 50, 100, 25 and then 70
// It will add to whatever is above it because JS will continue reading down the index.js and put out the last value

// NEXT ON THE TO DO: 
    // intialize the count as 0
    // listen for clicks on the increment button  (we do that with onclick in html but we have to create that function in js)
    // increment the count variable when the button is clicked
    // change the count-el in the HTML to reflect the new count

// function increment () {
//     // what we write here is called the body of the function
//     console.log("The button was clicked")  
//     // when the button on the site is clicked js will add one to the count  - this is only showing us that clicking on the button works
// }

// // Setting up the the race 🏎 🏎 🏎
// // the console logs below are a countdown

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()
// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎
// repetitions in code are not great, we want to restructure this
// and we call it command. So above the first console log we add a function

// comment this out and use this instead
//countdown()
// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)

// NEXT LESSON> 
    // Create a function (you decide the name) that logs out the number 42 to the console
    // Call/invoke the function
// function answerToEverything() {
//     console.log(42)  // this is the action for this function
// }
// answerToEverything()  // this calls for the output that is inside the function

// NEXT LESSON>
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// // Create a function that logs out the sum of all the lap times

// function allLaps() {
//     let totalTime = lap1+lap2+lap3
//     console.log(totalTime)
// }
// // things can go from outside of a function and into it and work. But you can´t take console.log(totalTime) and put it on the outside 
// // inside is within curly brackets.  Blockscoped is the concept for what is inside of the function
// allLaps()

// NEXT COMBINE SOME OF THE THINGS WE'VE LEARNT
// let LapsCompleted = 0 
// // Create a function that increments the lapsCompleted variable with one
// // Run it three times

// function incrementLap() {
//     LapsCompleted = LapsCompleted + 1
// }
// // this is running it three times
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(LapsCompleted)

// The way of writing in JS is called 'camelCase' is capitalizing the first letter in the second word

// document.getElementById("count").innerText = 5      WHAT IS THIS FOR
     // this is an expression. First part is asking for the html element and the second part is where we are modifying the html element
    // this is the first part: document.getElementById("count")
    // and this is the second part :  .innerText = 5

                                    // intialize the count as 0
                                    // listen for clicks on the increment button
                                    // increment the count variable when the button is clicked (log it out)
                                    // change the count-el in the HTML to reflect the new count

// we will start with the first part of the top expression
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");   // get the element from html by id

console.log(countEl)   // in the console we see an html looking text  <h2 id="count-el">0</h2>   It's more of a model of an html element. 

// now we will do the second part which is to modify the element we got from the html  and add it into the function below
let count = 0 
function increment() {
    count += 1
    countEl.textContent = count // now we are saying that we want the inner text (on the inside of the html element tags) to become the count 
    // console.log(count)  = this we can remove when we've added the line above because this was for testing out that the console log worked. 
}
//now when I click it will add number each time

//  the .getElementById  and the .log  are both functions in the same way as the function text(){} is a function.. They are hooked onto 
// ....the document object and the console object.  They're both functions or methods on objects.  

// let countEl = document.getElementById("count-el");   Adding sth into the paranthesis is this is  to 'pass in arguments'


// Working with the DOM.  Short for Document Object Model.  It is just how you use JS to modify a website. 
// Documents.  That is the html document
// Object. the html document has been shoved into a JS objects.  
// Model.  A representation of something. The html element is the real thing and then the JS model is the representaion of what you have in the html 

// 1. Grab the save-el paragrah and store it in a variable called saveEl

function save() {
    let countStr = count + " - "  //countstring
    saveEl.textContent += countStr   // spaces on paragraph get lost = you can google innertext alternative mdn and look at mozilla dev docs for solution. 
    // changed the saveEl.innerText to saveEl.textContent because innertext only shows human-readable elements but textcontent gets the content of all elements, incl script and style elements
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph

//  now we want to make the people entered number always go back to zero after the save feature. 
    countEl.textContent = 0    // this turns the count to zero but it keeps adding it so when you push increment it will start from the last number, not from zero again. 
    count = 0
    console.log(count)
}









// strings are a datatype in JS  = text or numbers 
// this is a string:  "count-el"
// Basics of STRINGS 
//
let username = "Solveig"  // you can use single quote as well  'solveig'
console.log(username)

let message = "you have three new notifications"  // we want to combine notification with name
console.log(message + "," + username)  // shows up like this: you have three new notificationsSolveig
// to add a , we do like above

let messageToUser = (message + ", " + username + "!")
console.log(messageToUser)



//let username = "per"
//let message = "You have three new notifications"
//let messageToUser = message + ", " + username + "!"
//console.log(messageToUser)

let greeting ="Hi, my name is"
let myGreeting = (greeting + " " + username)   //or I can add a space after the original Hi, my name is 
console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"
// let totalPoints = 4 + "10"
// console.log(totalPoints)  //this will log out as 410 because string always wins. And the 10 is in a string> "10"

//    console.log(4 + 5) // logs out as > 9
//    console.log("2" + "4") //  logs out as > "24"
//    console.log("5" + 1) //  logs out as >  "51"
//    console.log(100 + "100") //  logs out as >  "100100"



//
//
//