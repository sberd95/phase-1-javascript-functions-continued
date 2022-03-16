// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(string = '*') {
    return function(ele = 'special') {
        return `You are ${string}${ele}${string}!`
    }
}