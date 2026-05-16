import { describe, it, expect } from 'vitest'
import { greet, getUserLabel, scores, tags, double, identity } from '../phase1-typescript-fundamentals'

describe('Phase 1 — TypeScript Fundamentals', () => {
  describe('Exercise 2: greet', () => {
    it('returns a greeting string', () => {
      expect(greet('Ada', 'Hello')).toBe('Hello, Ada!')
    })
    it('works with different names', () => {
      expect(greet('World', 'Hi')).toBe('Hi, World!')
    })
  })

  describe('Exercise 3: getUserLabel', () => {
    it('formats user label correctly', () => {
      const user = { id: 1, name: 'Ada', email: 'ada@example.com', role: 'admin' as const }
      expect(getUserLabel(user)).toBe('Ada (admin)')
    })
    it('works for viewer role', () => {
      const user = { id: 2, name: 'Bob', email: 'bob@example.com', role: 'viewer' as const }
      expect(getUserLabel(user)).toBe('Bob (viewer)')
    })
  })

  describe('Exercise 4: typed arrays', () => {
    it('scores contains numbers', () => {
      expect(scores.every(s => typeof s === 'number')).toBe(true)
    })
    it('tags contains strings', () => {
      expect(tags.every(t => typeof t === 'string')).toBe(true)
    })
  })

  describe('Exercise 6: double', () => {
    it('doubles a number', () => {
      expect(double(5)).toBe(10)
    })
    it('doubles a numeric string', () => {
      expect(double('4')).toBe(8)
    })
  })

  describe('Exercise 7: identity', () => {
    it('returns the same string', () => {
      expect(identity('hello')).toBe('hello')
    })
    it('returns the same number', () => {
      expect(identity(42)).toBe(42)
    })
    it('returns the same object reference', () => {
      const obj = { x: 1 }
      expect(identity(obj)).toBe(obj)
    })
  })
})
