'use strict';

import { Aircraft } from "./aircrafts";

export class F16 extends Aircraft {
  aircraftType: string = 'F16';
  maxAmmo: number = 8;
  baseDamage: number = 30;
}
