import React from 'react';
import First from './App';

console.log("First component", {First, window})
if (window) {
	window.First = First
}
