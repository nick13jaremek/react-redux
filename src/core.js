/**
 * Created by nickjaremek on 16/12/15.
 */

import {List} from 'immutable';

export function setEntries(state, entries) {
  return state.set('entries', List(entries));
}