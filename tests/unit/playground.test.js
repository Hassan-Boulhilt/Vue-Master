import { describe, it, expect } from 'vitest'
import { evenOrodd, multiply } from '@/playground.js'

describe('basic math', () => {
  it('adds two numbers', () => {
    expect(1 + 1).toBe(2)
  })

  describe('evenOrodd', () => {
    describe('when number is even', () => {
      it('returns even for even numbers', () => {
        expect(evenOrodd(2)).toBe('even')
      })
    })
    describe('when number is odd', () => {
      it('returns odd for odd numbers', () => {
        expect(evenOrodd(3)).toBe('odd')
      })
    })
  })
  describe('multiply', () => {
    it('multiply two numbers', () => expect(multiply(2, 3)).toBe(6))
  })
})
