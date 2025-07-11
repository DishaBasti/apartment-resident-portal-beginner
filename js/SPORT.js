function display(){
    const sport=document.getElementById("sport").value;
    let result;
switch (sport)
{
case ('Badminton'):
result="Indoor courts 1 and 2 are available for play";
break;
case ('Carrom'):
result="Indoor Stadium is available";
break;
case ('Swimming'):
result="Swimming Pool 1 is available. Pool 2 can be accessed after booking";
break;
case ('TableTennis'):
result="Indoor Stadium is available only for 4-8 players";
break;        
case ('Basketball'):
result="Indoor Court is available, but confirm by visit.";
break;
case ('Squash'):    
result="Wooden court is available. Glass squash courts must be booked after physical presence";
break;
default:
result="invalid";
}
window.alert(result);
}