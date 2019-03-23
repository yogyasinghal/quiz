function check()
{
var correct = 0;
var validity = false;
window.scrollBy(0, 500000);
  var answer2 = document.getElementsByClassName("q2");
document.getElementById("instruction").innerHTML = "";
for(x=0;x<answer2.length;x++)
{
    if(answer2[x].checked && answer2[x].value=="correct")
    {
        correct ++;
    }
}

var answer3 = document.getElementsByClassName("q3");
for(x=0;x<answer3.length;x++)
{

    if(answer3[x].checked && answer3[x].value=="correct")
    {
        correct ++;
    }
}

var answer4 = document.getElementsByClassName("q4");
for(x=0;x<answer4.length;x++)
{

    if(answer4[x].checked && answer4[x].value=="correct")
    {
        correct ++;
    }
}

var answer5 = document.getElementsByClassName("q5");
for(x=0;x<answer5.length;x++)
{

    if(answer5[x].checked && answer5[x].value=="correct")
    {
        correct ++;
    }
}

var answer6 = document.getElementsByClassName("q6");
for(x=0;x<answer6.length;x++)
{

    if(answer6[x].checked && answer6[x].value=="correct")
    {
        correct ++;
    }
}


var gifs = ["zero.gif","one.gif","two.gif","three.gif","four.gif","five.gif"];

document.getElementById("para").innerHTML = " YOU GOT " + correct*2 + " MARKS";
document.getElementById("gif").src = gifs[correct];

//return(false);
}

