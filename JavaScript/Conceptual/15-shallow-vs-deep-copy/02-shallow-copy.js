// ==========================================
// SHALLOW COPY IN JAVASCRIPT
// ==========================================

// What is a Shallow Copy?
// A shallow copy creates a NEW object in memory and copies the "top-level" properties from the original object.
// However, if there are nested objects or arrays inside, their "references" (addresses) are still shared.

let originalUser = {
  name: "Umakant",
  age: 25,
  skills: {
    primary: "React",
    secondary: "NodeJS",
    cloud:{
        server : 'ec2'
    }
  }
};

 let copyUser = {...originalUser}

console.log(copyUser);

copyUser.skills.primary = "NextJs",
copyUser.skills.cloud.server = "aws"

console.log(copyUser);
console.log(originalUser);

// ==========================================
// 3 WAYS TO CREATE A SHALLOW COPY
// ==========================================

/* 
  1. SPREAD OPERATOR (Most Popular)
  let copyUser = { ...originalUser };
  let copyArray = [ ...originalArray ];
*/

/* 
  2. Object.assign() (Older way)
  let copyUser = Object.assign({}, originalUser);
*/

/* 
  3. Array Methods (For arrays only)
  let copyArray1 = originalArray.slice();
  let copyArray2 = [].concat(originalArray);
  let copyArray3 = Array.from(originalArray);
*/

// CONCLUSION:
// Shallow copy ONLY copies the top-level properties.
// If your object has nested objects or arrays (like 'skills' or 'cloud'), 
// their references are still shared. Modifying them in the copy will modify the original too!
