function acceptItems(...array:string[]){
    console.log("summary of the sandwich that is being orderd");

if(Array.length ==0){
    console.log("you have not orderd any thing")
}
else{
    console.log("you have order "+array.join(", ")+ " sandwich")
}
}
acceptItems("pizza", "white", "blue")
acceptItems("red", "chese", "garlic")
acceptItems("blue", "pizza", "mayo")