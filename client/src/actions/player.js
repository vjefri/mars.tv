import * as ACTIONS from '../constants/player';

export function updateVideo (videoId) {
  return {
    type: ACTIONS.UPDATE_VIDEO,
    videoId: videoId
  };
};
