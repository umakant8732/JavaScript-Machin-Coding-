# 🚀 TOP NODE.JS, EXPRESS & MONGODB INTERVIEW QUESTIONS (JUNIOR & MID-LEVEL)

> **Curated High-Frequency Questions Asked in Node.js Backend Developer Interviews**  
> *Target Experience: 0 - 3 Years | Language: Hinglish (Hindi + English)*

---

## 📌 PART 1: CORE NODE.JS ARCHITECTURE & EVENT LOOP

### Q1. Node.js kya hai aur ye Single-Threaded kyun hai?
- **Definition**: Node.js ek open-source, cross-platform **JavaScript Runtime Environment** hai jo Chrome ke **V8 Engine** par chalta hai. Ye browser ke bahar JavaScript execute karta hai.
- **Single-Threaded kyun hai?**:
  - JavaScript single-threaded hai taaki concurrency/locks handle karna simple ho.
  - Node.js ek hi main thread (Event Loop) ka use karta hai sabhi incoming requests ko receive aur process karne ke liye.
  - Heavy tasks (File I/O, DB queries) ko background worker threads (Libuv) ko de deta hai taaki main thread kabhi block na ho.

---

### Q2. Node.js Architecture explain karo (V8, Libuv, Event Loop).
Node.js 3 main layers par kaam karta hai:
1. **V8 Engine (C++ & JS)**: JavaScript code ko fast machine code (0101) mein compile karta hai.
2. **Libuv (C Library)**: Event Loop aur Background Thread Pool (default 4 threads) provide karta hai asynchronous I/O handle karne ke liye.
3. **C++ Bindings**: JS APIs (`fs`, `http`, `crypto`) ko underlying OS functions se connect karti hai.

---

### Q3. Event Loop kya hota hai aur ye asynchronous tasks ko kaise handle karta hai?
- **Event Loop** ek continuous infinite loop hai jo **Call Stack** aur **Task Queues** ko monitor karta hai.
- Jab Call Stack empty ho jata hai, tab Event Loop Callback Queue (Microtask/Macrotask queue) se tasks uthakar Call Stack mein push karta hai execution ke liye.

---

### Q4. Node.js Event Loop ke main Phases kaunse hain?
Event Loop ek specific order mein 6 phases execute karta hai:
1. **Timers Phase**: `setTimeout()` aur `setInterval()` ke callbacks execute hote hain.
2. **Pending Callbacks Phase**: OS level errors/IO callbacks execute hote hain.
3. **Idle, Prepare Phase**: Node.js internal maintenance.
4. **Poll Phase**: Naye I/O events wait/fetch hote hain aur unke callbacks execute hote hain.
5. **Check Phase**: `setImmediate()` ke callbacks execute hote hain.
6. **Close Callbacks Phase**: Close handlers (e.g., `socket.on('close')`) execute hote hain.

---

### Q5. `process.nextTick()`, `setImmediate()`, aur `setTimeout(fn, 0)` mein kya difference hai?
| Feature | `process.nextTick()` | `setTimeout(fn, 0)` | `setImmediate()` |
|---|---|---|---|
| **Priority** | Highest (Executes BEFORE next Event Loop phase) | Medium (Timers phase mein chalta hai) | Check phase mein chalta hai |
| **Queue** | Microtask Queue | Macrotask (Timers Queue) | Macrotask (Check Queue) |

---

### Q6. Blocking vs Non-Blocking I/O kya hota hai?
- **Blocking I/O**: Jab tak operation complete nahi hota, tab tak current thread block rehta hai.  
  *Example*: `fs.readFileSync('file.txt')`
- **Non-Blocking I/O**: Operation background mein chalta hai aur main thread pause nahi hota. Completion par callback/promise trigger hota hai.  
  *Example*: `fs.readFile('file.txt', callback)`

---

### Q7. Node.js CPU-intensive tasks ke liye suitable kyun nahi hai?
- Node.js ka **Main Thread (Event Loop)** single-threaded hota hai.
- Agar koi CPU-heavy task (jaise Video processing, Image compression, Complex Math) main thread par chalega, toh Call Stack block ho jayega aur baaki sabhi users ki requests pause ho jayengi!
- **Solution**: Heavy tasks ke liye `worker_threads` module, Child Processes, ya Python/Go microservices ka use kiya jata hai.

---

### Q8. Libuv Thread Pool kya hai? Default size kya hoti hai?
- **Libuv Thread Pool** background worker threads ka group hai jo asynchronous file operations (`fs`), cryptography (`crypto`), aur DNS lookups handle karta hai.
- **Default Size**: 4 threads.
- **Change Size**: Environment variable `process.env.UV_THREADPOOL_SIZE = 8;` set karke ise badhaya ja sakta hai (max 128).

---

## 📌 PART 2: MODULES, STREAMS & BUFFERS

### Q9. CommonJS (`require`) aur ES Modules (`import`) mein kya difference hai?
| Feature | CommonJS (CJS) | ES Modules (ESM) |
|---|---|---|
| **Syntax** | `const fs = require('fs')` | `import fs from 'fs'` |
| **Loading Type** | Synchronous (Runtime par load hota hai) | Asynchronous (Parse time / Top-level static) |
| **Default in Node** | Traditional default | Modern default (Set `"type": "module"` in `package.json`) |

---

### Q10. `module.exports` vs `exports` mein kya difference hai?
- `module.exports` asal object hai jo file se export hota hai.
- `exports` ek helper reference shorthand hai jo `module.exports` ko point karta hai (`exports = module.exports`).
- **Caution**: Agar aap `exports = { fn }` karke naya object reassign karenge, toh reference break ho jayega aur export nahi chalega.

---

### Q11. Node.js Streams kya hoti hain aur unke 4 Types kaunse hain?
Streams continuous data handling ka tareeka hain jisse poori file ko memory (RAM) mein load kiye bina chunks mein read/write kiya ja sakta hai.
1. **Readable Stream**: Data read karne ke liye (e.g., `fs.createReadStream()`).
2. **Writable Stream**: Data write karne ke liye (e.g., `fs.createWriteStream()`).
3. **Duplex Stream**: Both Read & Write (e.g., TCP Socket).
4. **Transform Stream**: Data modify karke output dena (e.g., `zlib.createGzip()` compression).

---

### Q12. Streams mein Backpressure kya hota hai aur ise kaise solve karte hain?
- **Backpressure**: Jab Read Stream bohot fast data bhej rahi ho aur Write Stream utni speed se write na kar pa rahi ho, toh memory overflow hone lagta hai.
- **Solution**: `.pipe()` method auto backpressure handle karta hai. Jab write buffer full ho jata hai, pipe automatically read stream ko pause kar deta hai.

---

### Q13. Node.js mein `Buffer` kya hota hai?
- **Buffer** raw binary data (bytes) ko hold karne ke liye memory chunk (outside V8 heap) hota hai.
- TCP streams, file system operations, aur binary images handle karne ke liye use hota hai.

---

## 📌 PART 3: ASYNC PROGRAMMING & ERROR HANDLING

### Q14. Callback Hell (Pyramid of Doom) kya hota hai?
- Jab multiple nested callbacks ek ke andar ek call hote hain, toh code hard to read aur debug karna mushkil ho jata hai.
- **Fix**: Promises aur `async/await` ka use karke flat code likha jata hai.

---

### Q15. Error-First Callback pattern kya hai?
Node.js standard convention jahan callback ka **pehla argument hamesha `err`** hota hai.
```js
fs.readFile('file.txt', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("Data:", data.toString());
});
```

---

### Q16. Node.js mein Uncaught Exceptions aur Unhandled Promise Rejections kaise handle karte hain?
- App crash hone se bachane ke liye process level listeners use hote hain:
```js
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception thrown:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
```

---

## 📌 PART 4: EXPRESS.JS & REST API DESIGN

### Q17. Express.js kya hai aur Middleware ka role kya hai?
- **Express.js** ek minimal aur flexible Node.js web application framework hai jo routing aur middleware handling ko easy banata hai.
- **Middleware**: Function jo Request (`req`) aur Response (`res`) objects ke beech mein execute hota hai.

---

### Q18. Express ke 5 Types of Middleware kaunse hain?
1. **Application-level**: `app.use(logger)`
2. **Router-level**: `router.use('/users', authMiddleware)`
3. **Built-in**: `express.json()`, `express.static()`
4. **Third-party**: `cors()`, `morgan()`, `helmet()`
5. **Error-handling**: `(err, req, res, next) => {}`

---

### Q19. Express Error-Handling Middleware mein 4 Arguments `(err, req, res, next)` kyun zaroori hain?
Express function ke arity (number of parameters) se pehchanta hai ki ye Normal Middleware hai (3 params: `req, res, next`) ya Error Middleware (4 params: `err, req, res, next`).

---

### Q20. `req.params`, `req.query`, aur `req.body` mein kya difference hai?
- `req.params`: URL route path parameters (e.g., `/users/:id` -> `req.params.id`).
- `req.query`: URL query string parameters (e.g., `/users?page=2` -> `req.query.page`).
- `req.body`: Request body data sent via POST/PUT JSON payload (`req.body.name`).

---

### Q21. Standard HTTP Status Codes jo har dev ko pata hone chahiye:
- **200 OK**: Request successful.
- **201 Created**: Resource successfully created (POST).
- **400 Bad Request**: Client side invalid input.
- **401 Unauthorized**: Authentication missing/invalid (Not logged in).
- **403 Forbidden**: Authenticated but no permission (Role issue).
- **404 Not Found**: Endpoint/Resource doesn't exist.
- **500 Internal Server Error**: Unhandled server side code error.

---

### Q22. CORS (Cross-Origin Resource Sharing) kya hota hai?
- Security feature enabled by browsers jo block karta hai jab Client (e.g., React on `localhost:3000`) dusre domain ke Server (Node on `localhost:5000`) ko API request bhejta hai.
- Express mein fix: `const cors = require('cors'); app.use(cors());`.

---

## 📌 PART 5: AUTHENTICATION, AUTHORIZATION & SECURITY

### Q23. JWT (JSON Web Token) kya hai? Iske 3 Parts kaunse hote hain?
- JWT ek secure mechanism hai client-server authentication ke liye token exchange karne ka.
- **3 Parts** (Separated by dots `.`):
  1. **Header**: Algorithm & Token Type (e.g., HS256).
  2. **Payload**: User data (e.g., `userId`, `role`).
  3. **Signature**: Encrypted verification key (`HMACSHA256(header + payload, secret)`).

---

### Q24. JWT ko Token store kahan karna chahiye — LocalStorage vs HTTP-Only Cookie?
- **HTTP-Only Cookie** (Recommended): XSS (Cross-Site Scripting) attacks se safe hota hai kyunki JavaScript is cookie ko read nahi kar sakti.
- **LocalStorage**: Vulnerable to XSS script attacks.

---

### Q25. `bcrypt` password hashing mein Salt Round kya hota hai?
- **Salt**: Random string jo password ke sath append ki jati hai taaki rainbow table attacks aur duplicate hashes se bacha ja sake.
- **Salt Round** (e.g., 10): Computational difficulty level. Round jitna zyada hoga, hash calculate hone mein utna time lagega, making brute force impossible.

---

### Q26. Rate Limiting kya hai aur ye DDoS/Brute-force se kaise bachata hai?
- Rate Limiting ek technique hai jo ek specific IP address se constrained timeframe (e.g. 15 mins mein max 100 requests) ko restrict karti hai.
- Package: `express-rate-limit`.

---

### Q27. Helmet package Express app mein karta hai?
- `helmet()` automatically essential HTTP security headers set karta hai (e.g. `X-Frame-Options`, `X-XSS-Protection`, `Strict-Transport-Security`) jo app ko common web vulnerabilities se protect karte hain.

---

## 📌 PART 6: MONGODB & MONGOOSE ODM

### Q28. SQL (Relational) vs NoSQL (Document) MongoDB mein kya difference hai?
| Feature | SQL (PostgreSQL/MySQL) | NoSQL (MongoDB) |
|---|---|---|
| **Data Structure** | Structured Tables with Rows & Columns | Dynamic Flexible Documents (BSON/JSON) |
| **Schema** | Rigid/Fixed Schema | Schema-less / Flexible |
| **Scaling** | Vertical Scaling (More RAM/CPU) | Horizontal Scaling (Sharding/Clusters) |

---

### Q29. JSON vs BSON mein kya difference hai?
- **JSON**: Human-readable text format, limited data types (String, Number, Boolean, Array, Object).
- **BSON (Binary JSON)**: MongoDB internal binary format. Supports extra data types like `ObjectId`, `Date`, `BinData`, fast parsing.

---

### Q30. Embedding (Nested) vs Referencing (`populate`) kab use karna chahiye?
- **Embedding (1-to-Few)**: Jab associated data small ho aur saath mein fetch karna ho (e.g., User has 2-3 Addresses).
- **Referencing (1-to-Many / Many-to-Many)**: Jab data frequently change hota ho ya large array ho (e.g., User has 10,000 Posts). Reference using `ObjectId` and use `.populate()`.

---

### Q31. MongoDB mein Indexing kya hai aur ye query performance kaise badhata hai?
- Without Index: MongoDB ko **Collection Scan (COLLSCAN)** karna padta hai (har single document check karna).
- With Index: MongoDB **Index Scan (IXSCAN)** (B-Tree structure) se binary search karke `O(log N)` time mein data find kar leta hai.

---

### Q32. Single Field Index vs Compound Index kya hai?
- **Single Field Index**: Single property par index (e.g., `{ email: 1 }`).
- **Compound Index**: Multiple fields par combined index (e.g., `{ category: 1, price: -1 }`).  
  *Rule*: Order matters (Left-to-Right prefix rule).

---

### Q33. MongoDB Aggregation Pipeline kya hai? 5 Common Stages batao.
Data processing framework jo data ko step-by-step filter, transform, aur calculate karta hai.
1. `$match`: Documents filter karna (like `WHERE`).
2. `$group`: Data group karke sum/avg nikalna (like `GROUP BY`).
3. `$project`: Required fields include/exclude karna (like `SELECT`).
4. `$sort`: Ordering (1 for Ascending, -1 for Descending).
5. `$lookup`: Join with another collection (like `LEFT JOIN`).

---

### Q34. MongoDB Pagination mein `skip()` vs Cursor-based Pagination mein kya difference hai?
- **Offset Pagination (`skip(1000).limit(10)`)**: Slow for large datasets because MongoDB has to scan and discard 1000 documents.
- **Cursor/Keyset Pagination (`_id > lastSeenId`)**: Fast `O(1)` query using index.

---

## 📌 PART 7: SYSTEM DESIGN & PERFORMANCE

### Q35. Node.js Cluster Module kya hota hai?
- Node.js default single CPU core use karta hai.
- **Cluster Module** multiple child processes (workers) spawn karta hai jo same server port share karte hain, multi-core CPU capacity utilization ke liye.

---

### Q36. Production mein PM2 Process Manager kyun use karte hain?
- Automatic server restart on crashes.
- Zero-downtime reloads.
- Built-in cluster mode.
- Log management and memory monitoring.

---

### Q37. Node.js Memory Leak kya hota hai aur iske common causes kya hain?
- Memory leak tab hota hai jab objects ab zaroori nahi hote lekin unka reference memory mein retained rehta hai (Garbage Collector delete nahi kar pata).
- **Causes**: Global variables, uncleaned `setInterval`, unremoved Event Listeners, Closures holding large objects.

---

### Q38. Process vs Thread vs Worker Thread Node.js mein kya difference hai?
- **Process**: Independent execution unit with separate memory space.
- **Thread**: Sub-unit of process sharing memory.
- **Worker Thread**: Node.js `worker_threads` module jo JS code ko multiple parallel threads mein execute karne deta hai with shared memory (`ArrayBuffer`).

---

### Q39. Environment variables (`.env`) kyun use karte hain aur `.gitignore` mein kyun rakhte hain?
- Sensitive configuration parameters (DB URI, JWT secret, API keys) ko source code se alag rakhne ke liye.
- Security risk se bachne ke liye `.env` file Git repository par push nahi ki jaati.

---

### Q40. Node.js microservice vs Monolith backend kab choose karna chahiye?
- **Monolith**: Small to medium applications, fast development, simple deployment.
- **Microservices**: Large scale team, high throughput, independent service scaling, heterogeneous tech stack.
