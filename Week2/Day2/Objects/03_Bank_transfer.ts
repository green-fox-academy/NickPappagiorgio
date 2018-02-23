'use strict';

// Create function that returns the name and balance of cash on an account in a list
// The output should be: "Igor", "203004099.2"


// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// var accounts = [
//	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
//	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204099571.23 },
//	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1354100.0 }
//]

/*
// PART_ONE_Igors money

function nameBalance(accounts: any[], number: number) {
  let accountList: any[] = [];
  for (let i: number = 0; i < accounts.length; i++) {
    if (accounts[i].account_number === number) {
      console.log(accounts[i].client_name, accounts[i].balance);
    }
  }
}
nameBalance(accounts, 11234543);
*/

let accounts: any[] = [
  { client_name: 'Igor', account_number: 11234543, balance: 1000 },
  { client_name: 'Vladimir', account_number: 43546731, balance: 1000 },
  { client_name: 'Sergei', account_number: 23456311, balance: 1000 }
];

function nameBalance(accounts: any[], from: number, to: number, money: number) {

  let checker: any[] = [];
  for (let i: number = 0; i < accounts.length; i++) {
    if (accounts[i].account_number === from) {
      checker.push('one')
    }
  }

  for (let i: number = 0; i < accounts.length; i++) {
    if (accounts[i].account_number === to) {
      checker.push('two')
    }
  }

  if (checker.length === 2) {

    for (let i: number = 0; i < accounts.length; i++) {
      if (accounts[i].account_number === from) {
        accounts[i].balance -= money;
        console.log(accounts[i].client_name + ': ' + (accounts[i].balance));
      }
    }

    for (let i: number = 0; i < accounts.length; i++) {
      if (accounts[i].account_number === to) {
        accounts[i].balance += money;
        console.log(accounts[i].client_name + ': ' + (accounts[i].balance));
      }
    }
  } else console.log('Log "404 - account not found" if any of the account numbers don\'t exist to the console.')
}
nameBalance(accounts, 43546731, 23456311, 500);
nameBalance(accounts, 43546731, 23456311, 500);