const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function(amt) {
    this.cash += amt * 0.99;
  }
};

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function(amt) {
    this.cash += amt * 0.95;
  }
};

const Shuffler = {
  cash: 10000,
  counter: 0,
  pick: function() {
    this.cash -= 1000;
    if (this.counter % 2 === 0) {
      Panama.deposit(1000);
      console.log(`${Panama.name} got 1000 and has ${Panama.cash}`);
    } else if (this.counter % 2 !== 0) {
      Cyprus.deposit(1000);
      console.log(`${Cyprus.name} got 1000 and has ${Cyprus.cash}`);
    }
    this.counter ++;    
  }
};

Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000
Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000

console.log(Panama.cash); // 2000 
console.log(Cyprus.cash); // 2000 