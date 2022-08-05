# Stoplight - Vanilla JavaScript (es6)

Your job is to write a virtual stoplight: just a simple one with three lights.

## Prerequisites

Even though you'll be writing vanilla JavaScript, you will need to have Node installed to run the tests.

1. [Node](https://nodejs.org/)
2. `npm install` in this directory to install all dependencies

## Source Code

You'll write your solution in the file `js/stoplight.js`. The `Stoplight` function already exists and is exported correctly. Do not modify the `module.exports = Stoplight` line.

## The Tests

To run the tests, simply type `npm test`. You start off with 9 tests, and your goal is to make them all pass.

## The Callback

Because the Stoplight is designed to be integrated into loosely coupled systems, it must support notifying interested listeners when it has changed state. Tests #8-#11 verify this is functioning correctly. The idea is that Stoplight can be used thusly:

    var stoplight = new Stoplight()
    stoplight.on('change', function(state) {
      console.log("Stoplight has changed to " + state);
    })
    stoplight.change()  // should produce console.log

This is where the exercise starts to get "hard". Many people have used event-based libraries (hello jQuery!) but haven't given much thought to how such a system might be implemented. This requirement is designed to assess your understanding of asynchronous programming. The event listener `cb` that's passed to `.on('change', cb)` must be _stored away for later use_. If you invoke it immediately, you are exhibiting synchronous thinking. The event is only emitted when the stoplight actually changes color.

Note: older versions of this test called for a function `.addChangeListener` instead of `.on`. The test has been changed to `.on` to reflect the standard approach most event-driven libraries (jQuery, Node event emitters) are taking. Please note that this implementation is pure JavaScript only, and you are not being asked to implement Node's `EventEmitter`. Using `.on` implies that `EventEmitter` could be implemented at some point, but the point of this test is for you to implement it yourself.

## The Approach

You should approach the problem by trying to get one test to pass at a time. Sometimes, depending on how you design your code, you'll get multiple tests to pass at once, which is okay. But this exercise is designed to reveal how you progressively attack a problem, and you are expected to make multiple commits. A good commit log might look something like this:

    6dd1dcd: Added state property.  Passing test #1.
    14d905f: Added .change() method.  Passing tests #1-2.
    f653885: Completed .change() method.  Passing tests #1-4.
    bd013b9: Handle invalid state in .change().  Passing tests #1-5.
    27fa534: Added .on().  Passing tests #1-6.
    13781e4: Completed 'change' event.  Passing all tests.

## What's Next?

Once you've finished the exercise, you will probably be asked to either do some refactoring, add additional functionality, or both. You'll probably be asked to add new tests to support the code changes you make.
