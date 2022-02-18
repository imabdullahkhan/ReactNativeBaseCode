export const actions = {
  COUNTER_CHANGE: "COUNTER_CHANGE"
}

export const setCounter = payload => ({
  type: actions.COUNTER_CHANGE,
  payload
})