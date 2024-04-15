// Question 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personName = "Alishba Wajahat";
console.log("Hello ".concat(personName, ", would you like to learn some pyton today?"));
// Question 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
var Name = "ayesha wajahat";
// converting into uppercase
var upperCase = Name.toUpperCase();
console.log(upperCase);
// converting into lowercase
var lowerCase = Name.toLowerCase();
console.log(lowerCase);
// converting into titlecase
function titleCase(str) {
    var result = str.toLowerCase().split(' ');
    for (var i_1 = 0; i_1 < result.length; i_1++) {
        result[i_1] = result[i_1].charAt(0).toUpperCase() + result[i_1].slice(1);
    }
    return result.join(' ');
}
console.log(titleCase(Name));
// Question 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.” 
var quote = "Quaid e Azam once said, \"Expect the best, prepare for the worst.\"";
console.log(quote);
// Question 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Quaid e Azam";
var message = "".concat(famous_person, " once said, \"Expect the best, prepare for the worst.\" ");
console.log(message);
// Question 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces
var nameOfPerson = "\t  Alishba wajahat \n";
console.log(nameOfPerson);
var strippedName = nameOfPerson.trim();
console.log(strippedName);
// Question 7 & 8
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
/*You should create four lines that look like this:
console.log(5 + 3)
Your output should simply be four lines with the number 8 appearing once on each line.*/
console.log("The result of addition", 5 + 3);
console.log("The result of subtraction", 11 - 3);
console.log("The result of multiplication", 2 * 4);
console.log("The result of division", 32 / 4);
// Question 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoriteNum = 20;
console.log("My favorite number is ".concat(favoriteNum));
// Question 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// I already did that above!
// Question 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["Sakina", "Hafsa", "Aymen", "lubaina"];
for (var i_2 = 0; i_2 < names.length; i_2++) {
    console.log(names[i_2]);
}
// Question 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for (var i_3 = 0; i_3 < names.length; i_3++) {
    console.log("Hi,have a good day ".concat(names[i_3], "!"));
}
// Question 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var cars = ["Corolla", "Civic", "Lamborini"];
console.log("I love the elegancy of ".concat(cars[0]));
console.log("".concat(cars[1], " is the first car of my life and I have a deep love for it"));
console.log("My biggest dream is to buy ".concat(cars[2], "once in my life"));
// Question 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner
var guests = ["Mama", "Papa", "Rameesha", "bhai"];
for (var i_4 = 0; i_4 < guests.length; i_4++) {
    console.log("".concat(guests[i_4], ", I cordially invite you to my home for a dinner. \n Timing:8pm sharp , please reach on time so that we would spend more fun time together , THANKS!"));
}
// Question 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
/*• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list*/
console.log("Oho! my sister ".concat(guests[2], " can't make the dinner, so i will invite my friend Aymen instead of her"));
guests.splice(2, 1, "Aymen");
for (var i_5 = 0; i_5 < guests.length; i_5++) {
    console.log("".concat(guests[i_5], ", I cordially invite you to my home for a dinner. \n Timing:8pm sharp , please reach on time so that we would spend more fun time together , THANKS!"));
}
// Question 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
/*• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
console.log("Hey, there is a news , we have got a bigger table and now we have space for three of my friends also");
guests.unshift("Hafsa");
// In typescript, the append method is not available method for arrays because it's not a built-in method for arrays
guests.push("Huma");
guests.splice(guests.length / 2, 0, "Sakina");
for (var i_6 = 0; i_6 < guests.length; i_6++) {
    console.log("".concat(guests[i_6], ", I cordially invite you to my home for a dinner. \n Timing:8pm sharp , please reach on time so that we would spend more fun time together , THANKS!"));
}
//Question 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests
/*• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.*/
console.log("My bad luck!, My new dinner won't arrive on time and now i could invite only two people.");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
for (var i_7 = 0; i_7 < 5; i_7++) {
    var pop = guests.pop();
    console.log("I am sorry ".concat(pop, ", I can't invite you because of an issue."));
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
for (var i_8 = 0; i_8 <= 1; i_8++) {
    console.log("".concat(guests[0], ", despite of all issues , you are invited!"));
    guests.shift();
}
console.log(guests);
// Question 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var myFavPlaces = ["SaudiaArab", "Kashmir", "Murree", "London", "Germany"];
// • Print your array in its original order.
console.log(myFavPlaces);
// • Print your array in alphabetical order without modifying the actual list.
var alphabeticalOrder = ["SaudiaArab", "Kashmir", "Murree", "London", "Germany"].sort();
console.log(alphabeticalOrder);
// • Show that your array is still in its original order by printing it.
console.log(myFavPlaces);
// • Print your array in reverse alphabetical order without changing the order of the original list.
var reverseAlphabeticalOrder = ["SaudiaArab", "Kashmir", "Murree", "London", "Germany"].sort().reverse();
console.log(reverseAlphabeticalOrder);
// • Show that your array is still in its original order by printing it again.
console.log(myFavPlaces);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(myFavPlaces.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(myFavPlaces.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(myFavPlaces.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(myFavPlaces.reverse());
// Question 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("I am inviting only two people");
// Question 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these item
var cities = ["Karachi", "Islamabad", "Peshawar", "Quetta"];
console.log("The list of cities are:");
console.log(cities);
// Question 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var student = {
    name: "Alishba wajahat",
    grade: "A+",
    age: 18
};
console.log(student);
// Question 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// console.log(`The weeks ends on ${days{7}}`);
console.log("The weeks ends on ".concat(days[6]));
// Question 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
/*let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False
 Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False*/
// 1
var myAge = 18;
console.log("Is my age==18?i predict true");
console.log(myAge === 18);
// 2
var equation = 23 + 40 + 90;
console.log("Is sum of this equation is 153? i predict true");
console.log(equation === 153);
// 3
var num = [2, 4, 3];
console.log("Do these numbers gives 24 after multiplication? i predict true");
var result = 1;
for (var i_9 = 0; i_9 < num.length; i_9++) {
    result = result * num[i_9];
}
console.log(result === 24);
//  4
var girlNames = ["Alishba", "Alina", "Anabia", "Ayesha"];
console.log("Do all names starts from 'A'? I predict true");
var i = 0;
console.log(girlNames[i].charAt(0) === "A");
// 5
console.log("Is 3<2?  predict False.");
console.log(3 < 2);
// 6
console.log("Is 76>23?  predict False.");
console.log(76 > 23);
// 7
console.log("Is 76>=87?  predict False.");
console.log(76 >= 87);
// Question no 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
var name_1 = "Alishba";
var name_2 = "Alishba wajahat";
var name_3 = "Miss.Alishba wajahat";
if (name_1 === name_2) {
    console.log("Name1 and name2 are Equal");
}
else if (name_1 === name_3) {
    console.log("Name1 and name3 are equal");
}
else if (name_2 === name_3) {
    console.log("Name2 and name3 are  equal");
}
else {
    console.log("Names are not equal");
}
if (typeof name_1 === typeof name_2) {
    console.log("Names are equal");
}
else if (typeof name_1 === typeof name_3) {
    console.log("Names are equal");
}
else if (typeof name_2 === typeof name_3) {
    console.log("Names are equal");
}
else {
    console.log("Names are not equal");
}
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var age_1 = 18;
var age_2 = 25;
if (age_1 = 18) {
    console.log("You are adult");
}
if (age_2 != 18) {
    console.log("Are you adult?");
}
if (age_1 < age_2) {
    console.log("Younger");
}
if (age_2 > age_1) {
    console.log("Elder");
}
if (age_1 >= 18) {
    console.log("You are eligible for vote");
}
if (age_2 <= 25) {
    console.log("Get married as soon as possible");
}
// • Tests using "and" and "or" operators
if (age_1 === 18 && age_2 < 30) {
    console.log("You are eligible for marriage");
}
if (age_1 === 18 || age_2 === 26) {
    console.log("You can give vote");
}
// • Test whether an item is in a array
var country = ["Pakistan", "India", "America", "switzerland"];
if (country.includes("America")) {
    console.log("America is in the list");
}
// • Test whether an item is not in a array
if (!country.includes("Japan")) {
    console.log("Japan is not in the list");
}
// Question 25
/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points*/
var alien_color = "green";
if (alien_color === "green") {
    console.log("Player just earned 5 points");
}
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
if (alien_color === "red") {
    console.log("no output");
}
// Question 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block
var aliens_color = "Green";
if (aliens_color == "Green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else {
    console.log("Player just earned 10 points");
}
var aliens_color = "Red";
if (aliens_color == "Green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else {
    console.log("Player just earned 10 points");
}
