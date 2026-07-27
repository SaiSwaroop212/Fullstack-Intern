# JavaScript Fundamentals Implementations

## Topics Covered

- DRY Principle
- KISS Principle
- Custom call()
- Custom apply()
- Custom bind()
- Closures
- Module Pattern
- Private State
- var vs let bugs

## What is DRY?

DRY means "Don't Repeat Yourself".
It encourages writing reusable code and avoiding duplication.

## What is KISS?

KISS means "Keep It Simple, Stupid".
Write code that is easy to read and maintain.

## What is a Closure?

A closure is a function that remembers variables from its outer scope even after the outer function has finished executing.

## What is 'this'?

The `this` keyword refers to the object that invokes the function.

## call(), apply(), bind()

- call() → Invokes immediately using individual arguments.
- apply() → Invokes immediately using an array of arguments.
- bind() → Returns a new function with a fixed `this`.

## Module Pattern

The Module Pattern uses closures to create private variables and expose only the methods that should be publicly accessible.

## var vs let

- var is function-scoped and can lead to bugs due to hoisting and redeclaration.
- let is block-scoped and helps write safer, more predictable code.