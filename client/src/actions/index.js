import * as ACTIONS from '../constants/';

export function updateEpisode (episode, channel) {
  return {
    type: ACTIONS.UPDATE_EPISODE,
    episode: episode,
    channel: channel
  };
};
