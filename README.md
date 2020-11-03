# lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mr.adamt/lotide`

**Require it:**

`const _ = require('@mr.adamt/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(...)`: Returns a count of the letters of an input string
* `countOnly(...)`: Given an input list of items and an itemsToCount object with true/false values, will return a new object with the itemsToCount keys which were present in the input list, along with a count of how many times they occurred in that list.
* `findKey(...)`: description TBD
* `findKeyByValue(...)`: description TBD
* `flatten(...)`: description TBD
* `head(...)`: description TBD
* `letterPositions(...)`: description TBD
* `map(...)`: description TBD
* `middle(...)`: description TBD
* `tail(...)`: description TBD
* `takeUntil(...)`: description TBD
* `without(...)`: description TBD
