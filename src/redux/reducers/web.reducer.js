const initState = {
}

const webReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case "SOME_CASE": {
      console.log('test')
    }

  }

  return state
}

export default webReducer