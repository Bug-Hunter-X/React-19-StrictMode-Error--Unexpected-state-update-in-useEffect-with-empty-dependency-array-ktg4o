# React 19 StrictMode Error: Unexpected state update

This repository demonstrates a common error encountered when using StrictMode in React 19.  The error occurs due to an unexpected state update within a useEffect hook that has an empty dependency array ([]).

## The Problem

In React 18 and earlier versions, the following code would work without issue.  However, in React 19 StrictMode, it throws an error because the state update happens synchronously within the useEffect call. StrictMode detects this and throws an error to prevent unexpected behavior.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the error in your browser's console.

## The Solution

The solution is to either:

1. **Remove the state update from the useEffect:** If possible, the ideal solution is to avoid updating the state in the useEffect with an empty dependency array. Perform state updates in response to props or other events. 
2. **Use a state update function:** if you need to update the state based on the current state value, use a functional approach to the `setCount` function. This ensures the state update is based on the latest state value and avoids the error.

The solution provided uses the second method. 

## How to Fix

The solution is implemented in `bugSolution.js`.