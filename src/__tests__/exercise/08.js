// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, renderHook, act} from '@testing-library/react'
import useCounter from '../../components/use-counter'

function setup({initialProps} = {}) {
  const result = {}
  function TestComponent(props) {
    Object.assign(result, useCounter(props))
    return null
  }
  render(<TestComponent {...initialProps} />)
  return result
}

test('exposes the count and increment/decrement functions', () => {
  const result = setup()
  expect(result.count).toBe(0)
  act(() => result.increment())
  expect(result.count).toBe(1)
  act(() => result.decrement())
  expect(result.count).toBe(0)
})

test('allows customization of the initial count', () => {
  const result = setup({initialProps: {initialCount: 3}})
  expect(result.count).toBe(3)
})

// using renderHook from RTL instead of using the setup fn we implemented
test('the step can be changed', () => {
  const {result, rerender} = renderHook(useCounter, {
    initialProps: {step: 3},
  })
  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(3)
  rerender({step: 2})
  act(() => result.current.decrement())
  expect(result.current.count).toBe(1)
})
