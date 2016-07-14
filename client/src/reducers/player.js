import * as ACTIONS from '../constants/player';

const INITIAL_STATE = {
  videoId: 'XxVg_s8xAms'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_VIDEO:
      return {
        ...state,
        isFetching: true,
        videoId: action.videoId
      };
    default:
      return state;
  }
};
