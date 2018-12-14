import * as config from './config.json'
import * as leftPad from 'left-pad'

const anotherReferenceToConfig = config

console.log(leftPad(anotherReferenceToConfig['de-DE'], 6));
