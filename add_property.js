let day1 = {
  suirrel: false,
  events: ["Music", "Dance", "Art", "Drama"],
};

//add property
day1.time = "10 am";

console.log(day1.time);

//add space in property

let test = {
  "Unit Testing": "approved",
  time: "10 am",
  out: "3 pm",
};

console.log(test["Unit Testing"]);

//Delete property
delete test["time"];

console.log(test);

//add property
test.in = "come in";

console.log(test);

//delete property
delete test["Unit Testing"];

console.log(test);
