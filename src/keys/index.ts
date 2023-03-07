import { Keys } from '../types'

const keys: Keys = {
    clientToken: process.env.CLIENT_TOKEN ?? 'nil',
    testGuild: process.env.TEST_GUILD ?? 'nil',
}

if(Object.values(keys).includes('nil'))
    throw new Error("Not all ENV variables are definded!")

export default keys