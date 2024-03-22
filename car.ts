import { features } from "process"

function carinfo(manufacturer: string, modelName: string, ...extraoption:  {[key : string]: any } []){

    const carinfo2 ={
        manufacturer,
        modelName, 
        ...Object.assign({}, ...extraoption)
    }
    return carinfo2
};

let answer = carinfo('honda', 'civic', {colo: 'black'}, {features: ['navigation', 'power window']});

console.log(answer)