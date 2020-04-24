import { RECEIVE_DECKS, GET_DECK, SAVE_DECK_TITLE, ADD_CARD_TO_DECK } from '../actions/'

export default function decks(state={}, action){
    switch(action.type){
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case GET_DECK:
            return state[action.id]
        case SAVE_DECK_TITLE:
            return{
                ...state,
                [title]:{
                    title,
                    questions: []
                }
            }
        case ADD_CARD_TO_DECK:
            return{
                ...state,
                [action.title]:{
                    ...state[title],
                    questions:[...action.title.questions, action.card]
                }
            }
        default:
            return state
    }
}