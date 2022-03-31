let studentRecords = [ {name: 'John', id: 123, marks : 98 },
            {name: 'Baba', id: 101, marks : 23 },
            {name: 'yaga', id: 200, marks : 45 },
            {name: 'Wick', id: 115, marks : 75 } ] 

            // console.log(studentRecords);

// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']


// studentRecords.forEach(n=>document.write(n.name.toUpperCase()))


// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]

// let a=[];
//         for(let i=0;i<studentRecords.length;i++){
//             if(studentRecords[i].marks>50){
//                 a.push(studentRecords[i]);
//             }
//             console.log(a);
//         }


// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

// let m = studentRecords.filter((stu) => stu.marks > 50 && stu.id > 120);
// console.log(m);

// Question 4: Consider the same scenario we have discussed above, 
// but this time we would like to know the sum total of the marks of the students.

// let sum = studentRecords => Object.values(studentRecords).reduce((a, b) => a + b);
// console.log(sum);

// Question 5: This time we want to get only the names of the students
// who scored more than 50 marks from the same dataset used above.

// let res=studentRecords.filter(n=>n.marks>50).map(n=>n.marks).reduce((acc,cur)=>acc+cur,0);
// console.log(res);


// Question 6: This time we are required to print the sum of marks of the students with id > 120.

// let idmark = studentRecords
//         .filter((stu) => stu.id > 120)
//         .reduce((acc, curr) => acc + curr.marks, 0);
//         console.log(idmark);

// Question 7: This time we are required to print the total marks of the students with marks greater than 50 
// after a grace of 15 marks has been added to those students who scored less than 50.

// let total=studentRecords.map((value)=>{
//     if(value.marks<50){
//         value.marks +=15;
//     }
//     return value;
//  })
// .filter((value)=>value.marks>50).reduce((acc,cur)=>acc+cur.marks ,0)
// console.log(total)


// Create 6 objects , each object will have name, class, roll no as properties Store these objects in an array of objects

// let obj1 = { name: "akhil", class: "inter", rollno: 1 };
// let obj2 = { name: "methushel", class: "btech", rollno: 2 };
// let obj3 = { name: "RC", class: "KTM", rollno: 3 };
// let obj4 = { name: "NTR", class: "RRR", rollno: 4 };
// let obj5 = { name: "RAM", class: "rrr", rollno: 5 };
// let obj6 = { name: "Mahesh", class: "MS", rollno: 6 };

// let arr=[{...obj1,...obj2,...obj3,...obj4,...obj5,...obj6}]
// console.log(arr);