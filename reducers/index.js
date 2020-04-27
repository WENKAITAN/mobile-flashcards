import { RECEIVE_DECKS, GET_DECK, SAVE_DECK_TITLE, ADD_CARD_TO_DECK, REMOVE_DECK } from '../actions/'

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
        case REMOVE_DECK:
            const { id } = action
            const { [id]: value, ...rest } = state
            return rest
        case ADD_CARD_TO_DECK:
            return{
                ...state,
                [action.title]:{
                    ...state[action.title],
                    questions:[...action.title.questions, action.card]
                }
            }
        default:
            return state
    }
}