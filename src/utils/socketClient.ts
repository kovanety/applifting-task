import client from 'socket.io-client'

import { SERVER_URL } from '../constants'

export const socketClient = client(SERVER_URL)
