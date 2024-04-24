function calculateCartPrice(...num1){ //rest operator
return num1;
}
console.log(calculateCartPrice(500,600,900));

const user={
    username: "hitesh",
    price: 199,
}

function handleObject(anyobject){
    console.log(`Username is ${user.username} and the price is ${user.price} `);
}
handleObject(user)//isme mene object hi paas kr diya

//idhr direct hi argument pass kr diya
handleObject({
    username:"Sam",
    price:599,
})

const mynewArray=[200,300,400,500];

