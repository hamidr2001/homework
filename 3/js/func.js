
function welcomechange(){
    var mytext="hello and welcome"
    
    document.getElementById("welcom-txt").innerHTML=mytext
    
    //alert('jj')
}

function yuyu(){
    var yyyy="bootcamp"
    document.getElementById("tyty").innerHTML=yyyy

}



function userdata(){
    var names=['ali','hassan','mohamad']
    var user_1={name:"amin",lastname:"hosieni",age:22,website:'amin.com' }

    var users=[
        {
            name:"javad",
            lastname:"javadi",
            age:24,
            website:"www.javad.com"
        },
        {
            name:"vahid",
            lastname:"vahidi",
            age:25,
            website:"www.vahid.com"
        },
        {
            name:"reza",
            lastname:"sarabi",
            age:23,
            website:"wwwreza..com"
        },
        {
            name:"saleh",
            lastname:"taheri",
            age:26,
            website:"www.saleh.com"
        },
        {
            name:"ali",
            lastname:"mohamadi",
            age:24,
            website:"www.ali.com"
        },
        

    ]
    var x =parseInt(prompt("enter your user's index"))
   /* if (x<5 && x>=0){
        if(users[x].name===users[0].name){
            alert(users[0].name)
        }else if(users[x].name===users[1].name){
            alert(users[1].name)
        }
    }else{
        alert("false index")
    }
*/


       switch(x){
           case 0 :
               alert(users[0].name)
               break;
           case 1 :
               alert(users[1].name)
               break;
           default:
               alert('signup')
       }

}
function mouseover(){
    document.getElementById('hovermetxt').innerHTML= 'signup for free'

}

function mouseout(){
    document.getElementById('hovermetxt').innerHTML= 'hover me'

}

