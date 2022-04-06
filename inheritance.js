// Problem 1
// Create 2 objects - parent and child.
// Attach methods to parent and use those methods in child object using parents prototype.

let parents={
    tall:'true',
    mother:'true',
    father:'true',
    children:function(){
        console.log("Responsibility");
    }
}
let child={
    crying:'true',
    food:'cereal',
}
    child.__proto__=parents
    console.log('child',child)
    console.log(child.father)//true
    child.children();

// problem 2

// Write code to explain prototype chaining

let mother={
    responsibility:"true",
        care:"more",
        guides:function(){
            console.log("More")
        }
    }
    let child={
        food:"cereal",
        walks:"true",
    }
    let children={
        food:"junk food",
        walks:"true",
    
    }
    
    child.__proto__=mother
    children.__proto__=child
    child.guides()// More
    children.guides()//the output is More

// problem 3
// Add a method to calculate sum of all elements in Array in array's protype, 
// use that method to calculate sum for multiple arrays

let array=[100,110,120,130,140,150,160,170,180,190,200]
let output=array.reduce((acc,cur)=>acc+cur,0)
console.log(output);

// Problem 4
// Write a JavaScript function to retrieve all
//  the names of object's own and inherited properties.

let mammals={
    eats:'true',
    moves:'true',
}
let rabbit={
    jumps:'true',
}
let mouse={
    hasTail:'yes'
}
rabbit.__proto__=mammals;
mouse.__proto__=mammals;
console.log(rabbit.hasOwnProperty("moves"));
console.log(mouse.hasOwnProperty('hasTail'));
