let guestlist: string[] = ["Kamran Khan tessori",  "Sir Zia Khan", "Sir Ameen Alam"];
console.log(guestlist);
console.log(`I want to invite three more guest on dinner`);
guestlist.unshift("Miss hina Naseer");
console.log(guestlist);

guestlist.splice(2, 0, "Sir Daniyal Nagori");
console.log(guestlist);

guestlist.push("Sir M.Qasim");
console.log(guestlist);