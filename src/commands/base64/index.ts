import { category } from '../../utils'
import encode from './encode'
import decode from './decode'

export default category("Base64", [
    encode,
    decode
])