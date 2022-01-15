var player_input=prompt("State your input: ");
var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];
var comp_number=Math.floor(Math.random()*5+1)
if(player_input==="sc")
{
    
    image1.setAttribute("src","Scissor.jpg")
}
else if(player_input==="l")
{
    image1.setAttribute("src","Lizard.jpg")
}
else if(player_input==="p")
{
    image1.setAttribute("src","Paper.jpg")
}
else if(player_input==="r")
{
    image1.setAttribute("src","Rock.jpg")
}
else if(player_input==="sp")
{
    image1.setAttribute("src","Spock.jpg")
}
if(comp_number===1)
{
    image2.setAttribute("src","Rock.jpg")
}
else if(comp_number===2)
{
    image2.setAttribute("src","Paper.jpg")
}
else if(comp_number===3)
{
    image2.setAttribute("src","Scissor.jpg")
}
else if(comp_number===4)
{
    image2.setAttribute("src","Lizard.jpg")
}
else if(comp_number===5)
{
    image2.setAttribute("src","Spock.jpg")
}

if(player_input==="sc" && comp_number===1)
{
    document.querySelector("h1").innerHTML="Computer won!!, Rock crushes scissor!!"
}
else if(player_input==="sc" && comp_number===2)
{
    document.querySelector("h1").innerHTML="The player won!!,Scissor cuts paper!!"
}
else if(player_input==="sc" && comp_number===3)
{
    document.querySelector("h1").innerHTML="Its a tie!!"
}
else if(player_input==="sc" && comp_number===4)
{
    document.querySelector("h1").innerHTML="The player won!!,Scissor decapitates Lizard!!"
}
else if(player_input==="sc" && comp_number===5)
{
    document.querySelector("h1").innerHTML="Computer won!!,spock smashes scissor!!"
}
else if(player_input==="r" && comp_number===1)
{
    document.querySelector("h1").innerHTML="Its a tie!!"
}
else if(player_input==="r" && comp_number===2)
{
    document.querySelector("h1").innerHTML="Computer won!!,Paper covers rock!!"
}
else if(player_input==="r" && comp_number===3)
{
    document.querySelector("h1").innerHTML="Player won!!,Rock crushes  scissor!!"
}
else if(player_input==="r" && comp_number===4)
{
    document.querySelector("h1").innerHTML="Player Won!!,Rock Crushes liazrd!!"
}
else if(player_input==="r" && comp_number===5)
{
    document.querySelector("h1").innerHTML="Computer won!!,spock vapourises rock!!"
}
else if(player_input==="p" && comp_number===1)
{
    document.querySelector("h1").innerHTML="Player won!!,Paper covers rock!!"
}
else if(player_input==="p" && comp_number===2)
{
    document.querySelector("h1").innerHTML="Its a tie!!"
}
else if(player_input==="p" && comp_number===3)
{
    document.querySelector("h1").innerHTML="Computer Won!!Scissor cuts paper!!"
}
else if(player_input==="p" && comp_number===4)
{
    document.querySelector("h1").innerHTML="Computer won!!,Lizard eats paper!!"
}
else if(player_input==="p" && comp_number===5)
{
    document.querySelector("h1").innerHTML="Computer won!!,paper disproves spock!!"
}
else if(player_input==="l" && comp_number===1)
{
    document.querySelector("h1").innerHTML="Computer Won!!, Rock crushes Lizard"
}
else if(player_input==="l" && comp_number===2)
{
    document.querySelector("h1").innerHTML="Player Won!!Lizard eats paper."
}
else if(player_input==="l" && comp_number===3)
{
    document.querySelector("h1").innerHTML="Computer Won!!Scissor decapitates lizard!!"
}
else if(player_input==="l" && comp_number===4)
{
    document.querySelector("h1").innerHTML="Its a tie!!"
}
else if(player_input==="l" && comp_number===5)
{
    document.querySelector("h1").innerHTML="Player won!!Lizard poisons spock"
}
else if(player_input==="sp" && comp_number===1)
{
    document.querySelector("h1").innerHTML="Player Won!!Spock vapourises rock"
}
else if(player_input==="sp" && comp_number===2)
{
    document.querySelector("h1").innerHTML="Computer won!!Paper disproves spock"
}
else if(player_input==="sp" && comp_number===3)
{
    document.querySelector("h1").innerHTML="Player won!!Spock smashes scissor"
}
else if(player_input==="sp" && comp_number===4)
{
    document.querySelector("h1").innerHTML="Computer Won!! Lizard poisons spock!!"
}
else if(player_input==="sp" && comp_number===5)
{
    document.querySelector("h1").innerHTML="Its a tie!!"
}










