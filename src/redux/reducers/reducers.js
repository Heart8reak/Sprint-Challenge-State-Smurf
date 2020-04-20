import { 
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILED,
    FECTH_DATA,
    SUCCESS,
    FAILURE
} from '../actions/actions'

const initialState = {
    smurfs: [],
    addSmurf: false,
    error: []
}

export default function(state=initialState, action) {
    switch (action.type) {

        case ADD_SMURF_SUCCESS: {
            return {
                ...state,
                smurfs: action.payload
            }
        }

        case ADD_SMURF_FAILED: {
            return {
                ...state,
                error: action.payload
            }
        }

        case FETCH_DATA: {
            return {
                ...state,
                error: action.payload
            }
        }

        case SUCCESS: {
            return {
                ...state,
                error: action.payload,
                smurfs: action.payload
            }
        }

        case FAILURE: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}