import * as ACTIONS from '../constants/';

const INITIAL_STATE = {
  episode: {},
  channel: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_EPISODE:
      return {
        ...state,
        isFetching: true,
        episode: action.episode,
        channel: action.channel
      };
    default:
      return state;
  }
};

