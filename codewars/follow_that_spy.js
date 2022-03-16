// https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/javascript

function findRoutes(routes) {
    const itineraries = [...routes];
    let realRoute = [];

    for (let i = 0; i < itineraries.length; i++) {
        const route = itineraries[i];
        const arr = [...itineraries.slice(0, i), ...itineraries.slice(i + 1)];
        
        if(!arr.find(r => r.includes(route[0]))){
            realRoute = [...route];
            itineraries.splice(i, 1);
            break;
        }
    }


    while(itineraries.length){
        const lastStop = realRoute[realRoute.length - 1];
        const nextStopInx = itineraries.findIndex(r => lastStop === r[0]);
        realRoute = realRoute.concat(itineraries[nextStopInx][1]);
        itineraries.splice(nextStopInx, 1);
    }

    return realRoute.join(", ");
}

function findRoutes(routes){
    const r1 = routes.map
}

  console.log(findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]));
  console.log(findRoutes([["UK", "GER"], ["GER", "BEL"], ["BEL", "CAN"]]));
  console.log(findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]));