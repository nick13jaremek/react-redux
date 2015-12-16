/**
 * Created by nickjaremek on 16/12/15.
 */

import {createStore} from 'redux';
import reducer from './reducer';

export default function makeStore() {
  return createStore(reducer);
}