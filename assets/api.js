import { AsyncStorage } from 'react-native'
import decks from './_data'

const DECKS_STORAGE_KEY = "mobileFlashCard: decks"

function formattedResults(results) {
    return results === null
        ? AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks) )
        : JSON.parse(results)
}
export async function getDecks(){
    try{
        const results = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
        formattedResults(results)
    }catch(e){
        console.log(e.message)
    }
        
}

export async function getDeck(id){
    try{
        const results = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
        return JSON.parse(results)[id]
    }catch(e){
        console.log('The error is ', e)
    }
}

export async function saveDeckTitle (title) {
    try { 
        await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(title))
    } catch(e){
        console.error('Failed to save title')
    }
        
}

export async function addCardToDeck(title, card){
    try{
        const deck = await getDeck(title)
        await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
            [title]: {
                questions:[...deck.questions].concat(card)
            }
        }))
    } catch (e) {
        console.error('Failed to save title')
    }
}