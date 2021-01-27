const fname = 'Victor';
const lname = 'Hoang';
const age = 18;
let drivingAge = 16;
let yearsDriven = age-drivingAge;
if (age-drivingAge >=0){
  console.log(fname + ' ' + lname + ' can drive. They have driven for ' + yearsDriven  + ' years!');
}
else {
  console.log(fname + ' ' + lname + ' cannot drive yet. ' + (drivingAge-Age) + ' more years needed to get license!');
}