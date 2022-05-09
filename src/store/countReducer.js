/*import { ADD, REDUCE } from "./types"
const initialState2 = {
    count: 15
}
export const countReducer = (state = initialState2, action) => {
    console.log('countReducer>', action)
    switch (action.type) {
        case ADD:
            console.log("action.type---"+action.type+"state.count---"+state.count);
            return {
               
                ...state,
                count: state.count + 5
            }
        case REDUCE:
            console.log("action.type---"+action.type+"state.count---"+state.count);
            return {
                ...state,
                count: state.count - 3

            }
        default:
            return state

    }
}*/