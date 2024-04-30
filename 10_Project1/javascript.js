const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");
buttons.forEach(function(button){
    //console.log(button);
    button.addEventListener('click',function(e){
        // console.log(e);
        // console.log(e.target);
        if( e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;//body ke style ka background color becomes e.target ki id
        }
        if( e.target.id==='white'){
            body.style.backgroundColor=e.target.id;
        }
        if( e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
        if( e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
        if( e.target.id==='purple'){
            body.style.backgroundColor= 'gold'//isse humn khud kla color bhi set kr skte hain
        }
    });
});