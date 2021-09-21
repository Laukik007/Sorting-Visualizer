var container=document.getElementById("array");
let x = false;
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

//to clear the previous randomly genrated array
function clearBox(elementID) {
    var div = document.getElementById(elementID);
      
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

//random genration function 
function generatearray(){
    //clearBox(array);
    clearBox("array");
    for(let i=0; i<20; i++){

        //return random value in range 1 to 100
        let value=Math.ceil(Math.random()*100);

        //creating div element
        var arr_ele=document.createElement("div");

        //adding class to 'bars' to div
        arr_ele.classList.add("bars");

        //adding style to div
        arr_ele.style.height=`${value*3}px`;
        arr_ele.style.transform=`translate(${i*30}px)`;

        //creating lable element for display
        //size of a particular block
        var arr_ele_lable=document.createElement("label");
        arr_ele_lable.classList.add("bars_id");
        arr_ele_lable.innerText=value;

        arr_ele.appendChild(arr_ele_lable);
        container.appendChild(arr_ele);
    }
}