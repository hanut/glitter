import COLLECTIONS from './collections';

const INITIAL_STATE = {
  collections: COLLECTIONS
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: return state;
  }
}

export default shopReducer;