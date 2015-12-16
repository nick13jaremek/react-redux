/**
 * Created by nickjaremek on 16/12/15.
 */

import Server from 'socket.io';

export default function startServer() {
  const io = new Server().attach(8090);
}