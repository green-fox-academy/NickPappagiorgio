'use strict';

import { Aircraft } from "./aircrafts";

export class F35 extends Aircraft {
  aircraftType: string = 'F35';
  maxAmmo: number = 12;
  baseDamage: number = 50;
}
