export const SET_DATA = 'SET_DATA'

export const setData = (user, equipmentRequests) => ({
  type: SET_DATA,
  payload: { user, equipmentRequests }
})
