//For in loops 
//with teh help of for in loops we can print and interate the object

const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'Swift by apple'
}

for (const key in myObject) {
    console.log(`${key} Shortcut is for ${myObject[key]}`);
//pehle bs key se iski keys print hui and then 2nd key se iski baaki kichijein print hui
}