let users:string[] = ["Faraz", "Admin", "Ameen", "Qasim", "Daniyal"]
for(let user of users){
if(user == "Admin"){
    console.log("Hello Admin, would you like to see a status report")
}
else console.log(`Hello ${user} thank you for logging in again.`)
}
