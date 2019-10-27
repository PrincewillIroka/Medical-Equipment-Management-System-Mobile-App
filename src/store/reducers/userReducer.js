import * as Actions from '../actions'

const initialState = {
  user: {},
  equipmentRequests: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_DATA: {
      return {
        ...state,
        user: action.payload.user,
        equipmentRequests: action.payload.equipmentRequests
      }
    }
    default: {
      return state
    }
  }
}

export default userReducer
