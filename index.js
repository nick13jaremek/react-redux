/**
 * Created by nickjaremek on 16/12/15.
 */

import makeStore from './src/store';
import startServer from './src/server';

export const store = makeStore();
startServer(store);

store.dispatch({
  type: 'ENTRIES',
  entries: require('./entries.json')
});
store.dispatch({type: 'NEXT'});