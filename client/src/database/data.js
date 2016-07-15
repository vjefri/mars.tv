// Mock Database with some JSON data
const data = {
  'Featured': [{
    'number': 3,
    'channelName': 'AltShiftX',
    'image': 'goo.gl/aNe2Yj',
    'episodes': [{
      'videoId': 'naUttrBVRzs',
      'title': 'Game of Thrones S6E10 Explained',
      'runtime': 30,
      'start': 16,
      'end': 17
    }, {
      'videoId': '2O6PZx5KlIA',
      'title': 'Game of Thrones S6E09 Explained',
      'runtime': 30,
      'start': 17,
      'end': 18
    }, {
      'videoId': 'LJrQmGf0Y5A',
      'title': 'Game of Thrones S6E08 Explained',
      'runtime': 30,
      'start': 18,
      'end': 19
    }, {
      'videoId': '6lsOmZvdCeg',
      'title': 'Game of Thrones S6E07 Explained',
      'runtime': 30,
      'start': 20,
      'end': 23
    }]
  }],
  'Tech': [{
    'number': 1,
    'channelName': 'JSConf',
    'image': 'goo.gl/I91jY8',
    'episodes': [{
      'videoId': 'CL8_nlqTcw0',
      'title': 'JSConf Budapest 2016 Intro',
      'runtime': 30,
      'start': 16,
      'end': 17
    }, {
      'videoId': 'fJKlmhriAH4',
      'title': 'Lightning Talks - JSUnconf 2016',
      'runtime': 30,
      'start': 17,
      'end': 18
    }, {
      'videoId': 'mJoS_pLbiWc',
      'title': 'JSConf Budapest 2016 Mood Video',
      'runtime': 30,
      'start': 18,
      'end': 19
    }, {
      'videoId': 'eQt39xpUc3s',
      'title': 'Hannes Diercks: Frontend Testing - JSUnconf 2016',
      'runtime': 30,
      'start': 20,
      'end': 23
    }]
  }, {
    'number': 2,
    'channelName': 'FunFunFunction',
    'image': 'goo.gl/I91jY8',
    'episodes': [{
      'videoId': 'FufhKV3dEis',
      'title': 'Haskell lists - FunFunFunction #39',
      'runtime': 30,
      'start': 16,
      'end': 17
    }, {
      'videoId': 'mIoKRyLcIjo',
      'title': 'How much are you allowed to Google? - Q&A Part 2 - FunFunFunction #38',
      'runtime': 30,
      'start': 17,
      'end': 18
    }, {
      'videoId': 'Yv2qljLrns',
      'title': 'Is Big O relevant to you? - Q&A Part 1 - FunFunFunction #37',
      'runtime': 30,
      'start': 18,
      'end': 19
    }, {
      'videoId': 'v5AukLriIh8',
      'title': 'Haskell - Babys first functions - FunFunFunction #36',
      'runtime': 30,
      'start': 20,
      'end': 23
    }]
  }],
  'Repeat 1': [{
    'number': 3,
    'channelName': 'AltShiftX',
    'image': 'goo.gl/aNe2Yj',
    'episodes': [{
      'videoId': 'naUttrBVRzs',
      'title': 'Game of Thrones S6E10 Explained',
      'runtime': 30,
      'start': 16,
      'end': 17
    }, {
      'videoId': '2O6PZx5KlIA',
      'title': 'Game of Thrones S6E09 Explained',
      'runtime': 30,
      'start': 17,
      'end': 18
    }, {
      'videoId': 'LJrQmGf0Y5A',
      'title': 'Game of Thrones S6E08 Explained',
      'runtime': 30,
      'start': 18,
      'end': 19
    }, {
      'videoId': '6lsOmZvdCeg',
      'title': 'Game of Thrones S6E07 Explained',
      'runtime': 30,
      'start': 20,
      'end': 23
    }]
  }],
  'Repeat 2': [{
    'number': 1,
    'channelName': 'JSConf',
    'image': 'goo.gl/I91jY8',
    'episodes': [{
      'videoId': 'CL8_nlqTcw0',
      'title': 'JSConf Budapest 2016 Intro',
      'runtime': 30,
      'start': 16,
      'end': 17
    }, {
      'videoId': 'fJKlmhriAH4',
      'title': 'Lightning Talks - JSUnconf 2016',
      'runtime': 30,
      'start': 17,
      'end': 18
    }, {
      'videoId': 'mJoS_pLbiWc',
      'title': 'JSConf Budapest 2016 Mood Video',
      'runtime': 30,
      'start': 18,
      'end': 19
    }, {
      'videoId': 'eQt39xpUc3s',
      'title': 'Hannes Diercks: Frontend Testing - JSUnconf 2016',
      'runtime': 30,
      'start': 20,
      'end': 23
    }]
  }, {
    'number': 2,
    'channelName': 'FunFunFunction',
    'image': 'goo.gl/I91jY8',
    'episodes': [{
      'videoId': 'FufhKV3dEis',
      'title': 'Haskell lists - FunFunFunction #39',
      'runtime': 30,
      'start': 16,
      'end': 17
    }, {
      'videoId': 'mIoKRyLcIjo',
      'title': 'How much are you allowed to Google? - Q&A Part 2 - FunFunFunction #38',
      'runtime': 30,
      'start': 17,
      'end': 18
    }, {
      'videoId': 'Yv2qljLrns',
      'title': 'Is Big O relevant to you? - Q&A Part 1 - FunFunFunction #37',
      'runtime': 30,
      'start': 18,
      'end': 19
    }, {
      'videoId': 'v5AukLriIh8',
      'title': 'Haskell - Babys first functions - FunFunFunction #36',
      'runtime': 30,
      'start': 20,
      'end': 23
    }]
  }],
  'Repeat 3': [{
    'number': 3,
    'channelName': 'AltShiftX',
    'image': 'goo.gl/aNe2Yj',
    'episodes': [{
      'videoId': 'naUttrBVRzs',
      'title': 'Game of Thrones S6E10 Explained',
      'runtime': 30,
      'start': 16,
      'end': 17
    }, {
      'videoId': '2O6PZx5KlIA',
      'title': 'Game of Thrones S6E09 Explained',
      'runtime': 30,
      'start': 17,
      'end': 18
    }, {
      'videoId': 'LJrQmGf0Y5A',
      'title': 'Game of Thrones S6E08 Explained',
      'runtime': 30,
      'start': 18,
      'end': 19
    }, {
      'videoId': '6lsOmZvdCeg',
      'title': 'Game of Thrones S6E07 Explained',
      'runtime': 30,
      'start': 20,
      'end': 23
    }]
  }],
  'Repeat 4': [{
    'number': 1,
    'channelName': 'JSConf',
    'image': 'goo.gl/I91jY8',
    'episodes': [{
      'videoId': 'CL8_nlqTcw0',
      'title': 'JSConf Budapest 2016 Intro',
      'runtime': 30,
      'start': 16,
      'end': 17
    }, {
      'videoId': 'fJKlmhriAH4',
      'title': 'Lightning Talks - JSUnconf 2016',
      'runtime': 30,
      'start': 17,
      'end': 18
    }, {
      'videoId': 'mJoS_pLbiWc',
      'title': 'JSConf Budapest 2016 Mood Video',
      'runtime': 30,
      'start': 18,
      'end': 19
    }, {
      'videoId': 'eQt39xpUc3s',
      'title': 'Hannes Diercks: Frontend Testing - JSUnconf 2016',
      'runtime': 30,
      'start': 20,
      'end': 23
    }]
  }, {
    'number': 2,
    'channelName': 'FunFunFunction',
    'image': 'goo.gl/I91jY8',
    'episodes': [{
      'videoId': 'FufhKV3dEis',
      'title': 'Haskell lists - FunFunFunction #39',
      'runtime': 30,
      'start': 16,
      'end': 17
    }, {
      'videoId': 'mIoKRyLcIjo',
      'title': 'How much are you allowed to Google? - Q&A Part 2 - FunFunFunction #38',
      'runtime': 30,
      'start': 17,
      'end': 18
    }, {
      'videoId': 'Yv2qljLrns',
      'title': 'Is Big O relevant to you? - Q&A Part 1 - FunFunFunction #37',
      'runtime': 30,
      'start': 18,
      'end': 19
    }, {
      'videoId': 'v5AukLriIh8',
      'title': 'Haskell - Babys first functions - FunFunFunction #36',
      'runtime': 30,
      'start': 20,
      'end': 23
    }]
  }],
  'Repeat 5': [{
    'number': 3,
    'channelName': 'AltShiftX',
    'image': 'goo.gl/aNe2Yj',
    'episodes': [{
      'videoId': 'naUttrBVRzs',
      'title': 'Game of Thrones S6E10 Explained',
      'runtime': 30,
      'start': 16,
      'end': 17
    }, {
      'videoId': '2O6PZx5KlIA',
      'title': 'Game of Thrones S6E09 Explained',
      'runtime': 30,
      'start': 17,
      'end': 18
    }, {
      'videoId': 'LJrQmGf0Y5A',
      'title': 'Game of Thrones S6E08 Explained',
      'runtime': 30,
      'start': 18,
      'end': 19
    }, {
      'videoId': '6lsOmZvdCeg',
      'title': 'Game of Thrones S6E07 Explained',
      'runtime': 30,
      'start': 20,
      'end': 23
    }]
  }],
  'Repeat 6': [{
    'number': 1,
    'channelName': 'JSConf',
    'image': 'goo.gl/I91jY8',
    'episodes': [{
      'videoId': 'CL8_nlqTcw0',
      'title': 'JSConf Budapest 2016 Intro',
      'runtime': 30,
      'start': 16,
      'end': 17
    }, {
      'videoId': 'fJKlmhriAH4',
      'title': 'Lightning Talks - JSUnconf 2016',
      'runtime': 30,
      'start': 17,
      'end': 18
    }, {
      'videoId': 'mJoS_pLbiWc',
      'title': 'JSConf Budapest 2016 Mood Video',
      'runtime': 30,
      'start': 18,
      'end': 19
    }, {
      'videoId': 'eQt39xpUc3s',
      'title': 'Hannes Diercks: Frontend Testing - JSUnconf 2016',
      'runtime': 30,
      'start': 20,
      'end': 23
    }]
  }, {
    'number': 2,
    'channelName': 'FunFunFunction',
    'image': 'goo.gl/I91jY8',
    'episodes': [{
      'videoId': 'FufhKV3dEis',
      'title': 'Haskell lists - FunFunFunction #39',
      'runtime': 30,
      'start': 16,
      'end': 17
    }, {
      'videoId': 'mIoKRyLcIjo',
      'title': 'How much are you allowed to Google? - Q&A Part 2 - FunFunFunction #38',
      'runtime': 30,
      'start': 17,
      'end': 18
    }, {
      'videoId': 'Yv2qljLrns',
      'title': 'Is Big O relevant to you? - Q&A Part 1 - FunFunFunction #37',
      'runtime': 30,
      'start': 18,
      'end': 19
    }, {
      'videoId': 'v5AukLriIh8',
      'title': 'Haskell - Babys first functions - FunFunFunction #36',
      'runtime': 30,
      'start': 20,
      'end': 23
    }]
  }]
};

module.exports = data;
