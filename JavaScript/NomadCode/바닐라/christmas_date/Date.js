const time = document.querySelector("#time h2");

const Month = [31,28,31,30,31,30,31,31,30,31,30,31];
let Now = new Date();
let Christmas;
checkChristmasYear();
DateToChristmas();
setInterval(DateToChristmas,1000);


function checkChristmasYear(){
    Christmas = new Date(getChristmasYear(Now),11,25);
    checkLeapMonth(Christmas);
}
function TodayYearNumber(){
    let number;
    for(let i = 0 ; i < 12 ;i++){
        number += Month[i];
    }
    return number;
}
function getChristmasYear(Now){
    if(Now.getMonth() === 11 && Now.getDate() >= 25)
        return Now.getFullYear()+1;
    else 
        return Now.getFullYear();
}
function checkLeapMonth(Christmas){
    if(Christmas.getFullYear % 4 === 0) Month[1] = 29;
}

function getDateNumber(month,day){
    let DateNumber = 0;

    for(let i = 0 ; i < month; i++){
        DateNumber += Month[i];
    }
    DateNumber += day;
    return DateNumber;
}

function DateToChristmas(){
    Now = new Date();

    if(Now.getMonth() === 11 && 
    Now.getDate()=== 25 && 
    Now.getHours() === 0&&
    Now.getMinutes === 0)checkChristmasYear();

    const NowNumber = getDateNumber(Now.getMonth(),Now.getDate());
    const ChristmasNumber = getDateNumber(Christmas.getMonth(),Christmas.getDate());
    
    let dateToChristmas;
    if(Now.getFullYear() !== Christmas.getFullYear())
        dateToChristmas =  ChristmasNumber + TodayYearNumber() - NowNumber;
    else
        dateToChristmas = ChristmasNumber - NowNumber;
    const Hour = String(23 - Now.getHours()).padStart("2",0);
    const Minute = String(59 - Now.getMinutes()).padStart("2",0);
    const Second = String(59 - Now.getSeconds()).padStart("2",0);

    time.innerHTML = `${dateToChristmas}d ${Hour}h ${Minute}m ${Second}s`;
}

