/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
*/

function tickets(peopleInLine) {
  let change = {
    $25: 0,
    $50: 0,
  };
  let msg = 'YES';

  peopleInLine.forEach(function (personBill) {
    if (personBill === 25) {
      change.$25 += personBill;
    } else if (personBill === 50) {
      change.$50 += personBill;
      change.$25 -= 25;
    } else {
      change.$25 >= 25 && change.$50 >= 50
        ? ((change.$25 -= 25), (change.$50 -= 50))
        : (change.$25 -= 75);
    }

    for (const valueOfBill in change) {
      if (change[valueOfBill] < 0) {
        msg = 'NO';
        break;
      }
    }
  });

  return msg;
}

tickets([25, 50, 25, 100, 25, 50, 25, 100, 25, 25, 25, 100]);
tickets([25, 25, 50, 50]);
tickets([25, 100]);