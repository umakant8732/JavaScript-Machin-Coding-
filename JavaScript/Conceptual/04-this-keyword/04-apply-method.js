/**
 * Step 4: apply() Method (Basic to Advanced Production Scenarios)
 * 
 * Task:
 * 1. (Basic Telemetry) Create a function 'logStatus' checking cluster telemetry context. Call it using .apply(context).
 * 2. (Array Unpacking) Create 'dispatchSystemMetrics' accepting cpu, memory, and connections. Unpack a dynamic monitoring array using .apply().
 * 3. (Batch Processing) Use Math.max / Math.min via .apply() to calculate the boundary salaries of a payroll array.
 * 4. (Method Delegation) Borrow Array.prototype.push using .apply() to batch append items into a cart array without manual loops.
 */

// Task 1: Basic Telemetry Context Binding
// 1. In logStatus.apply(clusterNode), 'clusterNode' is passed as the context to bind 'this' explicitly.
// 2. Therefore, 'this.clusterId' resolves to 'AP-SOUTH-1' and 'this.status' resolves to 'HEALTHY'.
// 3. Since no parameters are needed by logStatus, no array argument is passed.
function logStatus () {
    console.log("[TELEMETRY] Cluster ID: " + this.clusterId + " | Status: " + this.status);
}

const clusterNode = {
    clusterId : "AP-SOUTH-1",
    status : "HEALTHY"
}


logStatus.apply(clusterNode)


// Task 2: Array Unpacking (System Metrics Mapping)
// 1. In dispatchSystemMetrics.apply(clusterNode, metrics), 'clusterNode' sets the 'this' context explicitly.
// 2. The array 'metrics' is unpacked by .apply() into three individual parameter arguments.
// 3. Therefore, cpu maps to 85, memory maps to 4096, and connections maps to 1200.
function dispatchSystemMetrics(cpu, memory, connections) {
     console.log(`[MONITOR] Cluster: ${this.clusterId} | CPU: ${cpu}% | RAM: ${memory}MB | Conns: ${connections}`);
}

const metrics = [85, 4096, 1200] //85% cpu, 4096mb ram, 1200 connections

dispatchSystemMetrics.apply(clusterNode, metrics)


// Task 3: Batch Payroll Math Calculations (Math Borrowing)
// 1. In Math.max.apply(null, salaryDetails), we borrow the standard max method.
// 2. Since Math.max doesn't use 'this', we pass 'null' as the first argument context.
// 3. The array 'salaryDetails' is unpacked by .apply() to evaluate: Math.max(45000, 12200, 30000, 550000, 90000).
const salaryDetails =  [45000, 12200, 30000, 550000, 90000]

const maxSalary = Math.max.apply(null, salaryDetails)
const minSalary = Math.min.apply(null, salaryDetails)

console.log(minSalary);
console.log(maxSalary);


// Task 4: Method Delegation (Array Push Borrowing)
// 1. In Array.prototype.push.apply(cart, newItems), 'cart' is passed as context to bind the 'this' keyword inside push.
// 2. The array 'newItems' is unpacked by .apply() so they are pushed as individual arguments rather than a nested array.
// 3. Therefore, 'cart' is updated inline to contain both original items and newItems.
const cart = ["Laptop", "Mouse", "Keyboard", "Monitor"]

const newItems = ["HDMI Cable", "MotherBoard"]

Array.prototype.push.apply(cart, newItems)

console.log(cart);

