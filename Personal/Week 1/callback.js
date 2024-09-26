function sum(num1 , num2 , fn2call) 
{
    let result = num1 + num2;
    fn2call(result);
    return 0;
}

function display(data)
{
    console.log("Result: " + data);
    return;
}

const a = sum(1,2,display);
console.log(a);

