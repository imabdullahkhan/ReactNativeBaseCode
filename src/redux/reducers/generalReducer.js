import { Themes } from "../../constants"
import { actions } from "../actions/generalActions"

const initialState = {
  theme: Themes.LIGHT,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SET_THEME:
      return { ...state, theme: payload }

    default:
      return state
  }
}
