# Event Loop & Concurrency Model

## Introduction

JavaScript is a **single-threaded**, synchronous programming language. It executes one piece of JavaScript code at a time using a single **Call Stack**.

Although JavaScript is single-threaded, it can perform asynchronous operations such as API requests, timers, and file operations without blocking the main thread. This is possible because of the **Event Loop** and JavaScript's **Concurrency Model**.

---

# What is the Concurrency Model?

The Concurrency Model allows JavaScript to handle multiple tasks efficiently without executing multiple JavaScript functions simultaneously on the main thread.

Instead of waiting for long-running tasks, JavaScript delegates them to the browser (Web APIs) or Node.js (Node APIs). When those tasks finish, their callbacks are scheduled by the Event Loop.

---

# Call Stack

The **Call Stack** is a data structure that keeps track of function execution.

It follows the **LIFO (Last In, First Out)** principle.

Whenever a function is called, it is pushed onto the Call Stack. When the function finishes execution, it is removed from the stack.

### Example

```javascript
function first() {
    console.log("First");
}

function second() {
    first();
    console.log("Second");
}

second();
```

Output

```
First
Second
```

### Call Stack Diagram

```
Call Stack

↓

second()

↓

first()

↓

console.log()

↓

first() removed

↓

console.log()

↓

second() removed
```

---

# Web APIs / Node APIs

JavaScript itself cannot perform tasks such as timers, API requests, or file operations. These capabilities are provided by the environment.

### Browser Web APIs

- setTimeout()
- setInterval()
- fetch()
- DOM Events
- localStorage

### Node.js APIs

- File System (fs)
- HTTP Server
- Streams
- Timers

These APIs perform asynchronous work while JavaScript continues executing other code.

---

# Callback Queue (Macrotask Queue)

The Callback Queue stores callbacks from completed asynchronous operations such as timers and DOM events.

Examples:

- setTimeout()
- setInterval()
- DOM Events

The Event Loop moves callbacks from this queue to the Call Stack only after all microtasks have been completed.

---

# Microtask Queue

The Microtask Queue stores high-priority asynchronous callbacks.

Examples:

- Promise.then()
- Promise.catch()
- Promise.finally()
- queueMicrotask()

The Event Loop always executes every pending microtask before processing the next macrotask.

---

# Event Loop

The Event Loop continuously checks whether the Call Stack is empty.

When the Call Stack becomes empty:

1. It executes all pending Microtasks.
2. Then it executes one callback from the Callback Queue.
3. The process repeats.

---

# Event Loop Diagram

```
                 JavaScript Engine

                 Call Stack
                      │
                      ▼
            Executes Synchronous Code
                      │
                      ▼
        Asynchronous Operation Detected
                      │
                      ▼
             Browser / Node APIs
                      │
        ┌─────────────┴─────────────┐
        ▼                           ▼
  Microtask Queue            Callback Queue
 (Promise.then())            (setTimeout())

        │                           │
        └─────────────┬─────────────┘
                      ▼
                 Event Loop
                      │
      Executes all Microtasks first
                      │
      Executes one Macrotask next
                      │
                      ▼
                 Call Stack
```

---

# setTimeout() vs Promise

Consider the following code.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

### Predict the Output

Think before running the code.

### Output

```
Start
End
Promise
Timeout
```

### Explanation

1. "Start" is printed.
2. setTimeout() is handled by the Web API.
3. Promise callback enters the Microtask Queue.
4. "End" is printed.
5. The Call Stack becomes empty.
6. The Event Loop executes the Microtask Queue.
7. Finally, it executes the Callback Queue.

---

# Cooperative Concurrency

JavaScript uses **cooperative concurrency**.

Only one piece of JavaScript code executes at a time. Long-running operations are delegated to the browser or Node.js, allowing the main thread to continue executing other code.

### Example

```javascript
console.log("Task 1");

setTimeout(() => {
    console.log("Task 2");
}, 0);

console.log("Task 3");
```

Output

```
Task 1
Task 3
Task 2
```

The timer callback waits until the Call Stack is empty.

---

# True Parallelism

True parallelism means multiple tasks execute at the same time on different CPU cores or threads.

JavaScript's main thread does not provide true parallelism.

However, true parallel execution is possible using:

- Web Workers (Browser)
- Worker Threads (Node.js)

These allow CPU-intensive tasks to run independently without blocking the main thread.

---

# Cooperative Concurrency vs True Parallelism

| Cooperative Concurrency | True Parallelism |
|--------------------------|------------------|
| One JavaScript thread | Multiple threads |
| Tasks take turns executing | Tasks execute simultaneously |
| Uses Event Loop | Uses multiple CPU cores |
| Default JavaScript behavior | Achieved using Web Workers or Worker Threads |

---

# Key Takeaways

- JavaScript is single-threaded.
- The Call Stack executes synchronous code.
- Web APIs and Node APIs handle asynchronous tasks.
- Promise callbacks are stored in the Microtask Queue.
- Timer callbacks are stored in the Callback Queue.
- The Event Loop executes all microtasks before macrotasks.
- JavaScript uses cooperative concurrency on its main thread.
- True parallelism is achieved using Web Workers or Worker Threads.