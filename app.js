'use strict';

const app = require('./server');

app.listen(app.get('port'), () => {
  console.log('Listening on port', app.get('port'));
});
