function car_information(manufacturer:string, model_name:string,... other_information:[string,any][]):{
    
    manufacturer:string;
    model_name:string;
    [key:string]:any;

}
{
    const car :any ={
        manufacturer,
        model_name,
    
}
for(let [key,value]of other_information )
{
    car[key]= value;

}
return car

}
console.log(car_information("LANDCROUSAR", "TOYOTA", ["COLOR", "WHITE"], ["SIZE", 23]));