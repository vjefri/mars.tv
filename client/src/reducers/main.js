import * as ACTIONS from '../constants/';

const INITIAL_STATE = {
  episode: {
    'videoId': '2O6PZx5KlIA',
    'title': 'Game of Thrones S6E09 Explained',
    'runtime': 30,
    'start': 17,
    'end': 18
  },
  channel: { 'channelName': 'AltShiftX' }
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
