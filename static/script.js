// function sum (...a){
//     console.log(a);
//     let s = a.reduce((a,c)=> a+c)
//     return s;
// }

// s = sum(1,2,3,4,5,6);
// console.log(s);

let taskAssignment = [{'task':'Print odd numbers in an array', 'func':isOdd},
{'task':'Convert all the strings to title caps in a string array','func':titleCaps},
{'task':'Sum of all numbers in an array','func':findSum},
{'task':'Return all the prime numbers in an array', 'func':isPrime},
{'task':'Return all the palindromes in an array'},
{'task':'Return median of two sorted arrays of same size','func':arrayMedian},
{'task':'Remove duplicates from an array','func':removeDuplicates},
{'task':'Rotate an array by k times and return the rotated array','func':rotateArray}
]

let myObject = {"keyForTaskAssignment": taskAssignment};
w3.displayObject ("show-dropdown", myObject);

function CreateElement(string){
    let promise = new Promise((resolve,reduce) => {
        mainElement = document.getElementById("after-select-task");
        newElement = document.createElement("label");
        newElement.htmlFor = "enter-value";
        temp_text = document.createTextNode(string);
        newElement.appendChild(temp_text);
        mainElement.append(newElement);
    
        newElement = document.createElement("input");
        newElement.id = "enter-value";
        mainElement.appendChild(newElement);
    
        newElement = document.createElement("button");
        newElement.id = "button-enter-value", newElement.value = "val_enter", newElement.type = 'submit';
        temp_text = document.createTextNode('ENTER');
        newElement.appendChild(temp_text);
        mainElement.appendChild(newElement);
        resolve();

    });

    return promise

}

WhatWasSelected = function() {
    let selectOption = document.getElementById('show-dropdown').value;
    mainElement = document.getElementById("after-select-task")
    mainElement.innerHTML = "";
    CreateElement(String(selectOption)).then(()=>{
        let btnVal = document.getElementById("button-enter-value");
        console.log(btnVal);

        // var secondPromise = new Promise ((resolve, reject)=> {
        //     function listenToClick ()
        // })

    new Promise ((resolve,reject)=>{
            btnVal.addEventListener("click",finalFunc =() =>{
                console.log('hi');
                var enteredValue = document.getElementById('enter-value').value
                resolve(enteredValue);
            });
        }).then((message)=>{WhatFunctionToCall(message,selectOption)});
    });
};

function WhatFunctionToCall (message,selectOption){
    console.log(selectOption);
    requiredFunc = (taskAssignment.filter( v => v['task']===selectOption))[0]['func'];
    console.log(requiredFunc(message));
}

