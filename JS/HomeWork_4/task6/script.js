'use strict';

let rideQuantity = prompt("How many rides are you planing to take this month?");
rideQuantity = Number(rideQuantity);
if(rideQuantity > 60){
    let ticketsSixty = Math.floor(rideQuantity / 60);
    if((rideQuantity % 60) == 0){
        alert(`You gonna need ${ticketsSixty} ticket for 440 rubles `)
    }
    else if((rideQuantity % 60) > 10){
        let ticketsTen = Math.floor((rideQuantity % 60) / 10);
        let ticketOne = (((rideQuantity % 60) % 10) / 1);
        alert(`You gonna need ${ticketsSixty} ticket for 440 rubles, ${ticketsTen} tickets for 125 rubles and ${ticketOne} tickets for 15 rubles`)
    }
    else if((rideQuantity % 60) < 10){
        let ticketOne = ((rideQuantity % 60) / 1);
        alert(`You gonna need ${ticketsSixty} ticket for 440 rubles and ${ticketOne} tickets for 15 rubles`)
    }
    else if((rideQuantity % 60) == 10){
        let ticketsTen = Math.floor((rideQuantity % 60) / 10);
        alert(`You gonna need ${ticketsSixty} ticket for 440 rubles and  ${ticketsTen} tickets for 125 rubles`)
    }
}
else if(rideQuantity < 60){
    let ticketsTen = Math.floor(rideQuantity /10);
    let ticketOne = ((rideQuantity % 10) / 1);
    alert(`You gonna need ${ticketsTen} tickets for 125 rubles and ${ticketOne} tickets for 15 rubles`)
}