
// const { first } = require('lodash');
var _ = require('lodash');
console.log("Hello Test");
const members = [
    {name: 'Vijay Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];

  
/////-------------------------------------------////////////////////////////
// //  Task  1. Get array of first names of everyone
  let names=[];
   
  _.map(members,(member)=>{
    names.push(member.name.split(" ")[0]);
  })
  console.log(names);


/////-------------------------------------------////////////////////////////

//  //  Task 2 Make everyone's last names in UPPERCASE in given array of objects

_.map(members,(member, i)=>{
  members[i].name= _.split(member.name," ",1)+" "+_.upperCase(_.split(member.name," ",2)[1])//member.name.split(" ")[0]+" "+member.name.split(" ")[1].toUpperCase()
 })
console.log(members);

/////-------------------------------------------////////////////////////////

// /// Task 3. Get entries where age is between 41-60
// //  Task 4. Get average age
// //  Task 5. Get Person with maximum age
let someOfAge=0;
let maxAge=0;
console.log("Members between age of 41 to 60");
_.map(members, (member, i) => {
  if ((member.age >= 41) & (member.age <= 60)) {
    console.log("Name:- " + member.name + " Age:-" + member.age);
  }
  if (member.age) someOfAge = someOfAge + parseInt(member.age);
  if (member.age > maxAge) maxAge = i;
});

console.log("Maximum age is "+members[maxAge].age+" of "+members[maxAge].name);
console.log("Average age is "+someOfAge);


/////-------------------------------------------////////////////////////////

// // Task 6 Divide persons in three groups, result should look like
// //Less than 35yrs is young, above 35 is old

let newAgeGroup = {
  young: [],
  old: [],
  noage: [],
};
_.map(members, (member, i) => {
  if (member.age) {
    member.age <= 35
      ? newAgeGroup.young.push({ name: member.name, age: member.age })
      : newAgeGroup.old.push({ name: member.name, age: member.age });
  } else {
    newAgeGroup.noage.push({ name: member.name });
  }
});
console.log(newAgeGroup);


/////-------------------------------------------////////////////////////////

// //Task 7 add a new member to same members array instance at index 2
let temp=members.shift()
members.unshift({name:'Jay Shankar Sharma',age:36});
members.unshift(temp);
console.log(members);

/////-------------------------------------------////////////////////////////
// //Task 8. extract first and second element using destructing

names=_.map(members,'name')
ages=_.map(members,'age')
console.log("First Element:- ",names)
console.log("Second Element:- ",ages)

/////-------------------------------------------////////////////////////////
// //Task 9. Create a new array instance adding a new member at index 0,   and keeping existing afterwards
console.log(_.concat({name:'Jay',age:25},members));


/////-------------------------------------------////////////////////////////
//Task 10. Extract properties of object using destructuring
_.map(members,(member)=>{
    console.log( (Object.keys(member)))
  }
  );

/////-------------------------------------------////////////////////////////
// Task 11. Rename extracted property of object while destructing


temp=_.reduce(members,function(accumulator, value, indexkey, collection){
  value.name=value.name+' of WisFlux';
  // console.log("Accum:- ",accumulator, " Value:- ",value, " index:- ",indexkey, " Collection:-", collection)
  return "Accum:- ",accumulator, " Value:- ",value, " index:- ",indexkey, " Collection:-", collection;
 
},0);
console.log(temp);

/////-------------------------------------------////////////////////////////
// Task 12. Destructure any property of an object and use spread operator to get remaining properties in an object
{[first,...temp]=members }
console.log("Names:- ",first," and rest ",temp)


/////-------------------------------------------////////////////////////////
// Task 13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
[newObj]=[{name:"Jay Sharma", age:35}]
// OR newObj={name:"Jay Sharma", age:35};
members[3]=newObj;
console.log(members);

//  OR
// console.log(newObj)
// tempmembers=members.pop();
// members.push(newObj);

/////-------------------------------------------////////////////////////////
// Task 14. Use reduce function on array and object

temp=_.reduce(members,function(accumulator, value, indexkey, collection){
  value.name=value.name+' WIsflux';
  // console.log("Accum:- ",accumulator, " Value:- ",value, " index:- ",indexkey, " Collection:-", collection)
  return "Accum:- ",accumulator, " Value:- ",value, " index:- ",indexkey, " Collection:-", collection;
 },0);
console.log(temp);
