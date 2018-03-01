'use strict';

//*import {Thing} from "./thing";*/
import { Fleet } from "./fleet";
import { Thing } from "./thing";

let fleet = new Fleet();
let thing1 = new Thing('Milk');
let thing2 = new Thing('Sugar');
let thing3 = new Thing('Bread');

console.log(thing1);
fleet.add(thing1);
console.log(fleet);
//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */

