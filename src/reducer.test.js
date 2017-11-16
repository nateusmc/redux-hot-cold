import {newGame, makeGuess, toggleInfoModal} from './actions'
import reducer from './reducer'

describe('reducer', () => {
    it('Should start a new game resetting the state to default', () => {
        let state = {
            guesses: [1,2,3,4],
            feedback: 'Don\'t you dare make your guess!',
            correctAnswer: 50,
            showInfoModal: true
        };
        state = reducer(state, newGame())
            expect(state.guesses).toEqual([])
            expect(state.feedback).toEqual('Make your guess!')
            expect(state.correctAnswer).toBeGreaterThanOrEqual(0)
            expect(state.correctAnswer).toBeLessThanOrEqual(100)
            expect(state.showInfoModal).toEqual(false)
    })
    it('Should make a guess', () => {
        let state = {
            guesses: [],
            feedback: 'Make your guess!!',
            correctAnswer: 50,
            showInfoModal: true
        }
        state = reducer(state, makeGuess(1))
            expect(state.guesses).toEqual([1])
    })
    it('Should toggle Info Modal to true', () => {
        let state = {
            guesses: [],
            feedback: 'Make your guess!!',
            correctAnswer: 50,
            showInfoModal: false
        }
        state = reducer(state, toggleInfoModal())
            expect(state.showInfoModal).toEqual(true)
    })
})
