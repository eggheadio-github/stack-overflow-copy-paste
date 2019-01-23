import test from 'ava'
import { rollDice } from '../src'

test('Dice value should not be greater than 6', t => {
  const max = 6
  const diceValue = rollDice()
  t.false(diceValue > max)
})

test('Dice value should not be less than 1', t => {
  const min = 1
  const diceValue = rollDice()
  t.false(diceValue < min)
})
