const form =document.querySelector('form')//it selects the queries of forms
form.addEventListener('submit',function(e){
    e.preventDefault();//by defaultt it sends the data to the server so we are stopping that
    const height=parseInt(document.querySelector('#height').value);//we are parsing coz it gives the value into string
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    if (height===''|| height<0|| isNaN(height)) {
        results.innerHTML=`Please give a valid height ${height}`;
    }
    else if (weight===''|| weight<0 || isNaN(weight)) {
        results.innerHTML=`Please give a valid weight ${weight}`;
    }
    else{
        const bmi=((weight*height)/10000).toFixed(2);//it results upto two digit
        //showing the result
        results.innerHTML=`<span> ${bmi}</span>`
    }
});