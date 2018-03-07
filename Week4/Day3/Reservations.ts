'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  getDowBooking(): string {
    let DOWArray: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    return DOWArray[Math.floor((Math.random() * 7))];
  };
  getCodeBooking(): string {
    let codeString: string = '0123456789QWERTZUIOPASDFGHJKLYXCVBNM'
    let bookingCode: string = '';
    for (let i: number = 0; i < 8; i++) {
      bookingCode += codeString.charAt(Math.floor((Math.random() * codeString.length)));
    }
    return bookingCode;
  };
}
let bob = new Reservation();
for (let i: number = 0; i < 10; i++) {
  console.log(`Booking# ${bob.getCodeBooking()} for ${bob.getDowBooking()}.`);
}