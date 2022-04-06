// problem 1
// Write one example explaining how you can write a callback function ?



let Hell = () => {
   setTimeout(()=>{
       console.log("1");
        setTimeout(()=>{
          console.log("2");
           setTimeout(()=>{
              console.log("3");
               setTimeout(()=>{
                  console.log("4");
                    setTimeout(()=>{
                      console.log("5");
                      setTimeout(()=>{
                          console.log("6");
                          setTimeout(()=>{
                              console.log("7");
                          },1000)
                      },1000)
                 },1000)
             },1000)
         },1000)   
     },1000)
 },1000)
}
Hell()     //the triangle formed is known as call back hell it prints 1 after 1sec and so on

// Problem 2

// Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec ,
// 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Numbers
// 1
// 2
// 3
// 4
// 5
//6
// 7



function promisess(num){
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           console.log(num);
           resolve('promise done')
       },1000)
   })
}
promisess("1").then(()=>promisess("2")).then(()=>promisess("3")).then(()=>promisess("4"))
.then(()=>promisess("5")).then(()=>promisess("6")).then(()=>promisess("7"))


// Problem 3

//Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state
//and print Promise Resolved,and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

function PrintNum(num){
    return new Promise((resolve,reject)=>{
       if(num%2 == 0){
           console.log("Promise Resolved");
       } 
       else{
           console.log("Promise Rejected");
       }
    })
}
PrintNum(24).then((result)=>{console.log(result);}).catch((result)=>{console.log(result);})
PrintNum(27).then((result)=>{console.log(result);}).catch((result)=>{console.log(result);})

// Problem 4

//Create examples to explain async await function

function PrintLetter(alphabet){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log(alphabet);
             resolve(alphabet)
         },1000)
    })
}
async function PrintAlphabets(){
    await PrintLetter("A")
    await PrintLetter("B")
    await PrintLetter("C")
    await PrintLetter("D")
    await PrintLetter("E")
    await PrintLetter("F")
}
PrintAlphabets()

// Problem 5

// Create examples to explain callback hell function
function printNumbers(){
        setTimeout(()=>{
            console.log('1')
            setTimeout(()=>{
                console.log('2')
                setTimeout(()=>{
                    console.log('3')
                    setTimeout(() => {
                        console.log('4')
                        setTimeout(()=>{
                            console.log('5')
                            setTimeout(()=>{
                                console.log('6')
                                setTimeout(()=>{
                                    console.log('7')
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
}
// This is called the callback hell