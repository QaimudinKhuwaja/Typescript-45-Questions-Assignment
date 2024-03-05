let great_magician:string[] = ["Faraz", "Noor", "Hamza", "Ahmed"]
function show_magician(magician_name:string[]){
    console.log(magician_name)
}
show_magician(great_magician);

function make_great(upgratearray:string[]){


    console.log("the great " +great_magician[0]);
    console.log("the great " +great_magician[1]);
    console.log("the great " +great_magician[2]);
    console.log("the great " +great_magician[3]);
}
make_great(great_magician)

let new_array = ["the great Faraz ","the great Noor", "the great Hamza", "the great Ahmed"]
show_magician(new_array)