var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Question 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
var alien_color = "green";
if (alien_color === "green") {
    console.log("Player  earned 5 points ");
}
else if (alien_color === "yellow") {
    console.log("Player just earned 10 points");
}
else {
    console.log("Player earned 15 points");
}
// • If the alien is yellow, print a message that the player earned 10 points.
var alien_color = "yellow";
if (alien_color === "green") {
    console.log("Player  earned 5 points ");
}
else if (alien_color === "yellow") {
    console.log("Player just earned 10 points");
}
else {
    console.log("Player earned 15 points");
}
// • If the alien is red, print a message that the player earned 15 points.
var alien_color = "red";
if (alien_color === "green") {
    console.log("Player  earned 5 points ");
}
else if (alien_color === "yellow") {
    console.log("Player  earned 10 points");
}
else {
    console.log("Player earned 15 points");
}
// Question 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
var age = 1;
if (age < 2) {
    console.log("Person is baby");
}
else if (age >= 2 && age < 4) {
    console.log("Person is toddler");
}
else if (age >= 4 && age < 13) {
    console.log("Person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("Person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("Person is an adult");
}
else {
    console.log("Person is elder");
}
// Question 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
var favFruits = ["Apple", "Banana", "Peach"];
/*• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
if (favFruits.includes("Apple")) {
    console.log("I really like apples");
}
if (favFruits.includes("Banana")) {
    console.log("I really like banana");
}
if (favFruits.includes("Peach")) {
    console.log("I really like peach");
}
if (favFruits.includes("apricot")) {
    console.log("I really like apricot");
}
if (favFruits.includes("grapes")) {
    console.log("I really like grapes");
}
// Question 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
/*• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
var userName = ["Ali", "Danish", "Farhan", "Admin", "Sohaib"];
for (var i_1 = 0; i_1 < userName.length; i_1++) {
    if (userName[i_1] === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userName[i_1], ",thankyou for logging in again"));
    }
}
// Question 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var usernames = ["Basel", "Eric", "ALishba", "Wajahat", "Admin"];
for (var i = usernames.length - 1; i >= 0; i--) {
    usernames.pop();
}
if (usernames.length === 0) {
    console.log("We need to find some users");
}
// Question 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
/*• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted*/
var current_users = ["alishba", "basel", "rameesha", "ali"];
var new_users = ["Alishba", "Ayan", "bilal", "basel", "meHak"];
for (var i_2 = 0; i_2 < new_users.length; i_2++) {
    if (current_users.includes(new_users[i_2].toLowerCase())) {
        console.log("Sorry! ".concat(new_users[i_2], ", You need to enter a new username."));
    }
    else {
        console.log("".concat(new_users[i_2], ", this username is available"));
    }
}
// Question 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
/*• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i_3 = 0; i_3 < numbers.length; i_3++) {
    if (numbers[i_3] === 1) {
        console.log("".concat(numbers[i_3], "st"));
    }
    else if (numbers[i_3] === 1) {
        console.log("".concat(numbers[i_3], "nd"));
    }
    else if (numbers[i_3] === 3) {
        console.log("".concat(numbers[i_3], "rd"));
    }
    else {
        console.log("".concat(numbers[i_3], "th"));
    }
}
// Question 34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza
var favouritePizza = ["Fajita", "Arabian hot", "Italian cheese"];
for (var i = 0; i < favouritePizza.length; i++) {
    console.log("".concat(favouritePizza[i]));
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (var i = 0; i < favouritePizza.length; i++) {
    console.log("I really like ".concat(favouritePizza[i], " pizza"));
}
console.log("I really love pizza!");
// Question 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
var animals = ["Snakes", "Crocodile", "lizard"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("".concat(animal, " is a very dangerous animal"));
}
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("\nThese all are reptiles");
// Question 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirts(size, message) {
    console.log("The size of T-shirt is ".concat(size, " and the message that will be be printed on it is ").concat(message));
}
make_shirts('small', "\"I love myself\"");
// Question 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
function make_shirts(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("The size of T-shirt is ".concat(size, " and the message that will be be printed on it is ").concat(message));
}
make_shirts();
make_shirts("medium");
make_shirts('small', "\"I love myself\"");
// Question 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Chicago", "America");
// Question 39
//:City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "\"".concat(city, ",").concat(country, "\"");
}
var ans = city_country("Karachi", "Pakistan");
var ans2 = city_country("Duabi", "UAE");
var ans3 = city_country("Bejing", "China");
console.log(ans);
console.log(ans2);
console.log(ans3);
// Question 40
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album
function make_album(artist, title, track) {
    var dictionaries = {
        Artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        Title: title.charAt(0).toUpperCase() + title.slice(1),
        Tracks: track
    };
    return dictionaries;
}
var album = make_album("alishba", "moonlight");
console.log(album);
album = make_album("Anas", "Heart");
console.log(album);
album = make_album("Rameesha", "peace", 8);
console.log(album);
// Question 41
//:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
show_magicians(["eric", "john", "Mark"]);
// Question 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (var i_4 = 0; i_4 < magicians.length; i_4++) {
        magicians[i_4] = magicians[i_4] + " " + "The Great";
    }
}
var magicians = ["Alibaba", "zukeberg", "zachking"];
make_great(magicians);
show_magicians(magicians);
// Question 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great2(magicians) {
    var newArray = [];
    for (var i_5 = 0; i_5 < magicians.length; i_5++) {
        newArray.push(magicians[i_5] + " " + "The Great");
    }
    return newArray;
}
var magicianNames = ["Alibaba", "zukeberg", "zachking"];
var magicians2 = make_great2(magicianNames);
show_magicians(magicianNames);
show_magicians(magicians2);
// Question 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time
function sandwich(items) {
    console.log("Your sandwich includes");
    for (var i_6 = 0; i_6 < items.length; i_6++) {
        console.log(". ".concat(items[i_6].charAt(0).toUpperCase()).concat(items[i_6].slice(1)));
    }
    console.log("All these items altogether make a tasty and healthy sandwich");
}
sandwich(["cheese", "capsicum"]);
sandwich(["beef", "tomato"]);
sandwich(["chicken", "mushrooms"]);
function createCar(manufacturer, model, optional) {
    return __assign({ manufacturer: manufacturer, model: model }, optional);
}
var myCar = createCar("toyota", "axio", { color: "black", year: 2023 });
console.log(myCar);
