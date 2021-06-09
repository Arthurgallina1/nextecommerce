global.fetch = require('node-fetch')

import { server } from '../src/utils/mockServer/server'

beforeAll(() => {
    //  listen to every call on tests
    server.listen()
})

afterEach(() => {
    //reset all handlers in case they're called again
    server.resetHandlers()
})


afterAll(() => {
    // close server and clean tests
    server.close()
})

