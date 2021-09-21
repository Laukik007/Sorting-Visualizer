let x = false;
let cusAry = 0;
function StartStop()
{
    if(x == false)
    {             //button is at stop and needs to start
        x = true;
        document.getElementById("StartStop").childNodes[0].nodeValue="Stop";
        document.getElementById("GenAry").disabled = true;
        document.getElementById("CusAry").disabled = true;

    }
    else{
        // button is in stop position and needs to start
        x = false;
        document.getElementById("StartStop").childNodes[0].nodeValue="Start";
        document.getElementById("GenAry").disabled = false;
        document.getElementById("CusAry").disabled = false;
    }
}
function customArray()
{   if (cusAry ==0)
    {
        var txt = document.createElement("input");
        txt.type = "text";
        txt.id = "textBox";
        txt.pattern = "[0-9]+(,[0-9]+)*";
        txt.title = "Enter numbers seperated by commas";
        txt.placeholder = "Enter numbers seperated by commas";
        var btn = document.createElement("button")
        btn.id = "textBtn";
        btn.innerHTML="Create Array";
        document.getElementById("inputArray").appendChild(txt); 
        document.getElementById("inputArray").appendChild(btn);
        cusAry =1;
    }
}