var pets = ['dog', 'dog', 'cat', 'cat', 'cow', 'sheep', 'sheep'];
var petcount = pets.reduce(function(obj,v){
    if (obj[v]===undefined){
        obj[v] = 1
    } else {
        obj[v]+=1
    }
    return obj;
},{})
console.log(petcount);

newFunc =() => {
    promise = new Promise ((resolve, reject) => {
        resolve ();
        reject ();
    })
    return promise;
}

mainfunc = () => {
    newFunc().then((x)=>{console.log('hello '+x)});
};
mainfunc();