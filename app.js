//For tonight's home work, complete the following exercises that we covered today in class. Save all your solutions to a js file and deploy that js file to github. Submit a link to your repository as your submission for this homework.

//Basic Algorithms:

//Falsy Bouncer : https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer
function bouncer(arr) {
    var truth= [];
    for (var elem of arr){
    if (elem) truth.push(elem);
    }
      return truth;
    }
    
    bouncer([7, "ate", "", false, 9]);

//Chunky Monkey: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
function chunkArrayInGroups(arr, size) {
    var groups = [];
    while (arr.length > 0){
    groups.push(arr.slice(0, size));
    arr=arr.slice(size);
    }
    
    
      return groups;
    }
    
    chunkArrayInGroups(["a", "b", "c", "d"], 2);