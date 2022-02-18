import { actions }  from  "../actions/countActions"

const initialState = {
  count: 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case actions.COUNTER_CHANGE:
      return { ...state, count: payload }

    default:
      return state
  }
}
