import { getDecks } from '../assets/api'
export const RECEIVE_DECKS = "receive_decks"
export const GET_DECK = "get_deck"
export const SAVE_DECK_TITLE = "save_deck_title"
export const ADD_CARD_TO_DECK = "add_card_to_deck"

export function receiveDecks(decks){
    return{
        type: RECEIVE_DECKS,
        decks
    }
}

export function getDeck(id){
    return{
        type: GET_DECK,
        id
    }
}

export function saveDeckTitle(title){
    return{
        type: SAVE_DECK_TITLE,
        title
    }

}

export function addCardToDeck(title, card){
    return{
        type: ADD_CARD_TO_DECK,
        title,
        card
    }
}

export function handleInitialData() {
    return dispatch => {
        return getDecks().then(decks => {
            dispatch(receiveDecks(decks));
        });
    };
}