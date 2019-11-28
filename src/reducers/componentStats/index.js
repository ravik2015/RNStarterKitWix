const initialState = {
  componentStats: {},
};

export default function componentStats(state = initialState, action = {}) {
  switch (action.type) {
    case 'componentStats':
      return {
        ...state,
        componentStats: action.payload || {},
      };
    default:
      return state;
  }
}
