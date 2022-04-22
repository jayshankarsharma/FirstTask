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
//  Task  1. Get array of first names of everyone
  let names=[];
  
  for(i=0;i<members.length;i++)
  {
names.push(members[i].name.split(" ")[0]);
  }
console.log(names);


 //  Task  Make everyone's last names in UPPERCASE in given array of objects

for(i=0;i<members.length;i++)
{
    members[i].name=members[i].name.split(" ")[0]+" "+members[i].name.split(" ")[1].toUpperCase();
   console.log("Name:- "+members[i].name+" Age:-"+members[i].age);
}


/// Task 3. Get entries where age is between 41-60
for(i=0;i<members.length;i++)
{
if((members[i].age>=41)&(members[i].age<=60))
{
    console.log("Name:- "+members[i].name+" Age:-"+members[i].age);
}
}
//  Task 4. Get average age
//  Task 5. Get Person with maximum age
let someOfAge=0;
let maxAge=0;
for(i=0;i<members.length;i++)
{
    if(members[i].age)
    someOfAge=someOfAge+parseInt(members[i].age);
    if(members[i].age>maxAge)
    maxAge=i;
}
console.log("Maximum age is "+members[maxAge].age+" of "+members[maxAge].name);

// Task 6 Divide persons in three groups, result should look like
//Less than 35yrs is young, above 35 is old

let newAgeGroup={
    young: [],
    old: [],
    noage: []
}
for(i=0;i<members.length;i++)
{
    if(members[i].age)
    {
        if(members[i].age<=35)
        {
            newAgeGroup.young.push({name:members[i].name,age:members[i].age});
        }
        else{
            newAgeGroup.old.push({name:members[i].name,age:members[i].age});
        }
          }
    else{
        newAgeGroup.noage.push({name:members[i].name});
    }
}
console.log(newAgeGroup);

//Task 7 add a new member to same members array instance at index 2
let temp=members.shift()
members.unshift({name:'Jay Shankar Sharma',age:36});
members.unshift(temp);
console.log(members);
