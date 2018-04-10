const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function(amt) {
  }
};

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '1%',
  deposit: function(amt) {
  }
};

const Shuffler = {
  cash: 10000,
  counter: 0,
  pick: function() {
    this.cash -= 1000;
    if (this.counter % 2 === 0) {
      Panama.cash += 1000;
      console.log(`Panama got 1000`);
    } else if (this.counter % 2 !== 0) {
      Cyprus.cash += 1000;
      console.log(`Cyprus got 1000`);
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