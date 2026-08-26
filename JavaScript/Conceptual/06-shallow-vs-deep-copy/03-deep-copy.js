/**
 * Step 3: Deep Copy Solutions
 * 
 * Task:
 * 1. Create a deep copy using JSON.parse(JSON.stringify(obj)) and analyze its limitations (functions, Date, Undefined lost).
 * 2. Create a deep copy using modern 'structuredClone(obj)'.
 */

// Write your code here


let originalUser = {
    name : "Umakant",
    age : 25,
    skills : {
        primary : "React",
        cloud : {
            server : 'ec2'
        }
    }
}

//first way

// let deepCopyUser = JSON.parse(JSON.stringify(originalUser))
let deepCopyUser = structuredClone(originalUser) 

deepCopyUser.skills.cloud.server = "AWS Lambda";
deepCopyUser.name = "Rahul"

console.log("Original User Cloud Server:", originalUser.skills.cloud.server); // ec2 (SAFE!)
console.log("Deep Copy Cloud Server:", deepCopyUser.skills.cloud.server); // AWS Lambda (Changed!)
