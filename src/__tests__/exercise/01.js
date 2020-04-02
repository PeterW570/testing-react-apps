// simple test with ReactDOM
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments when the button is clicked', () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  //
  // 🐨 append the div to document.body (💰 document.body.appendChild)
  //
  // 🐨 use ReactDOM.render to render the <Counter /> to the div
  // 🐨 get a reference to the increment and decrement buttons:
  //   💰 div.querySelectorAll('button')
  // 🐨 get a reference to the message div:
  //   💰 div.firstChild.querySelector('div')
  //
  // 🐨 expect the message.textContent toBe 'Current count: 0'
  // 🐨 click the increment button (💰 increment.click())
  // 🐨 assert the message.textContent
  // 🐨 click the decrement button (💰 decrement.click())
  // 🐨 assert the message.textContent
  //
  // 🐨 cleanup by removing the div from the page (💰 document.body.removeChild(div))
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

// 💯 using .click on a DOM node works fine, but what if you wanted to fire an
// event that doesn't have a dedicated method (like mouseover). Rather than
// use `button.click()`, try using `button.dispatchEvent`:
// 📜 https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
// NOTE: Make sure that your event config sets `bubbles: true`

/* eslint no-unused-vars:0 */