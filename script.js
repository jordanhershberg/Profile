/*let augustExpenses = [
    {expense: "groceries", category: "necessities", cost: 300},
    {expense: "utilities", category: "necessities", cost: 150},
    {expense: "car repairs", category: "necessities", cost: 100},
    {expense: "dining out", category: "luxury", cost: 150},
    {expense: "entertainment", category: "luxury", cost: 200 },
    {expense: "birthday gift", category: "gift", cost: 100},
    ]

    //Calculate total expenses in the three categories
    //Find highest expense and lowest expense

    var nTotal = 0;
    var lTotal = 0;
    var gTotal = 0;
    for (var i=0; i < augustExpenses.length; i++) {
        if (augustExpenses[i].category == "necessities") {
            nTotal = nTotal + augustExpenses[i].cost;
            } else if (augustExpenses[i].category == "luxury") {
            lTotal = lTotal + augustExpenses[i].cost;
            } else if (augustExpenses[i].category == "gift") {
            gTotal = augustExpenses[i].cost + gTotal;
            }
    }
    var lowest = augustExpenses[0].cost;
for (var i = 0; i < augustExpenses.length; i++) {
if (augustExpenses[i].cost < lowest) {
lowest = augustExpenses[i].cost;
}
}
var highest = augustExpenses[0].cost;
for (var i = 0; i < augustExpenses.length; i++) {
if (augustExpenses[i].cost > highest) {
highest = augustExpenses[i].cost;
}
}
console.log("The lowest expense is " + lowest);
console.log("The highest for luxuries is " + highest);
console.log("The total for necessities is " + nTotal);
console.log("The total for luxuries is " + lTotal);
console.log("The total for gifts is " + gTotal);


*/




let stolenItems = [
    {
     socks: 7,
     spoons: 20,
     nutella_jar: 5,
     keys: 0,
     shoelaces: 4,
     rotisserie_chicken:1
   },
   
   {
     socks: 2,
     spoons: 2,
     nutella_jar: 0,
     keys: 0,
     shoelaces: 4, 
     rotisserie_chicken: 2
   },
     
   {
     socks: 0,
     spoons: 0,
     nutella_jar: 0,
     keys: 0,
     shoelaces: 0,
     rotisserie_chicken: 0
   },
   
     {
     socks: 2,
     spoons: 10,
     nutella_jar: 4,
     keys: 4,
     shoelaces: 12,
     rotisserie_chicken: 0
   }, 
     
   {
     socks: 12,
     spoons: 17,
     nutella_jar: 0,
     keys: 2,
     shoelaces: 0,
     rotisserie_chicken: 0
   },
   
   {
     socks: 0,
     spoons: 0,
     nutella_jar: 2,
     keys: 0,
     shoelaces: 0,
     rotisserie_chicken: 0
   }, 
     
   {
     socks: 2,
     spoons: 2,
     nutella_jar: 0,
     keys: 4,
     shoelaces: 1,
     rotisserie_chicken: 0
   }, 
     
   {
     socks: 43,
     spoons: 10,
     nutella_jar: 50,
     keys: 2,
     shoelaces: 0,
     rotisserie_chicken: 0
   }, 
   
   {
     socks: 0,
     spoons: 2,
     nutella_jar: 0,
     keys: 3,
     shoelaces: 0,
     rotisserie_chicken: 0
   }, 
   {
     socks: 0,
     spoons: 0,
     nutella_jar: 0,
     keys: 0,
     shoelaces: 14,
     rotisserie_chicken: 0
   }
   
   ]

   // PROBLEM ONE
// Given an object of the stolen items for a household, return the total amount of items stolen (number). If nothing was robbed, return the string "Lucky you!”.
let totalstolen=0
function houseTotal(obj, item) {
for(i=0; i<stolenItems.length; i++)
if(stolenItems[obj] >= 1) {
    totalstolen = stolenItems[obj]+totalStolen
    return totalStolen;
  }

    
else if (stolenItems[obj] == 0){
  return "Lucky You!";
  }    
    }
    // uncomment these out to test it out
    console.log(houseTotal(stolenItems[0])); 
    console.log(houseTotal(stolenItems[1]));
    console.log(houseTotal(stolenItems[2])); 
     
    // PROBLEM TWO
    // Given an object of the stolen items for a household and a string in lowercase representing a specific item, return true if that item was stolen and false if it was not. 
    
    function isStolen(obj, item) {
    
    
    
    }
    // uncomment these out to test it out
    //console.log(houseTotal(stolenItems[0], "keys")); 
    //console.log(houseTotal(stolenItems[1], "socks"));
    //console.log(houseTotal(stolenItems[2], "spoons")); 
    
    
    // EXTRA CREDIT!!!!! PROBLEM THREE
    // Given an array of objects representing an entire neighborhood, return the most frequently stolen item. This is NOT the item that has been stolen from the most households, this is the item that has been stolen the most times TOTAL. 
    
    function neighborhoodTotal(arr) {
    
    
      return total; 
      
    }
    
    // uncomment these out to test it out
    //console.log(houseTotal(stolenItems)); 
    
    
    
    // PROBLEM FOUR
    // Based on the item that has been stolen the most, who do you think the burglar is? (you won’t get marked down for getting the “wrong” answer - just give me a fun explanation for why you think it is who it is! 
