var nick="";
var fname = prompt ("please enter your Name " ) ;
var gender = prompt ("please enter your gender (male or female)  " ) ;
var age = prompt ("please enter your age " ) ;
while (age <=0)
 age = prompt ("please enter your postive age " ) ;
 var confirmming = confirm("do you wanna show wilc message");
 if(gender=="male")
  nick = "Mr";
 else if (gender=="female") 
 nick= "Ms" ;
 else
 nick="";
 if(confirmming)
 alert("Welcome "+nick+" "+ fname );


