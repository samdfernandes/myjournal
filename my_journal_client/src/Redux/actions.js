import { ADD_ENTRY, TOGGLE_FORM } from "./actionTypes"

export const addEntry = content => {
    type: ADD_ENTRY,
    payload: {}
}

export const toggleForm = () => ({
    type: TOGGLE_FORM,
    payload: boolean
})