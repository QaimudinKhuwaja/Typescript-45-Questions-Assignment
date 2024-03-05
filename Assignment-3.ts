var personName:string = "Qaimudin Khuwaja";
console.log("lower Case:", personName.toLowerCase());
console.log("Upper Case:", personName.toUpperCase());
console.log("Title Case:", personName.replace(/\bw/g,c => c.toUpperCase()));