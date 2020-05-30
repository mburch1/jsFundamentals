/*
SWITCH STATEMENTS
*/

let friend;

switch(friend){
    case 'Tom':
        console.log('Hey Tom, when eill you bring sourdough bread for me?');
        break;
    case 'Kenn':
        console.log('Hey Kenn, do you own a wolf in your backyard?');
        break;
    case 'Alecx':
        console.log('Hey Alecx, how many Magic cards do you own?');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}    

let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean'){
    case true:
        console.log('yep is not a string or a number');
        break;
    default:
        console.log('yep is not a string or a number');
}