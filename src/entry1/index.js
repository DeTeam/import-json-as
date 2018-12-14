import * as config from './config.json'
import * as leftPad from 'left-pad'

console.log(leftPad(JSON.stringify(config), 6));
