'use strict';

export abstract class Aircraft {
  private aircraftType: string;
  ammo: number = 0;
  maxAmmo: number;
  baseDamage: number;

  fight(): number {
    let aboard = this.ammo;
    this.ammo = 0;
    return aboard * this.baseDamage;
  }

  refill(addBullets: number): number {
    if (this.maxAmmo - this.ammo < addBullets) {
      addBullets -= (this.maxAmmo - this.ammo);
      this.ammo = this.maxAmmo;
      return (addBullets);
    } else {
      this.ammo += addBullets;
      return 0;
    }
  }

  get type(): string {
    return this.aircraftType;
  }

  get status(): string {
    return `Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.ammo * this.baseDamage}`;
  }

  isPriority(): boolean {
    if (this.type === 'F35') {
      return true;
    } else if (this.type === 'F16') {
      return false;
    }
  }
}