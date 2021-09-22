var container=document.getElementById("array");
let x = false;
let cusAry = 0;
function StartStop()
{
    if(x == false)
    {   //button is at stop and needs to start
        x = true;
        document.getElementById("StartStop").childNodes[0].nodeValue="Stop";
        document.getElementById("GenAry").disabled = true;
        document.getElementById("CusAry").disabled = true;
        document.getElementById("SltBtn").disabled = true;

    }
    else{
        // button is in stop position and needs to start
        x = false;
        document.getElementById("StartStop").childNodes[0].nodeValue="Start";
        document.getElementById("GenAry").disabled = false;
        document.getElementById("CusAry").disabled = false;
        document.getElementById("SltBtn").disabled = false;
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
        txt.size = "30";
        var btn = document.createElement("button");
        btn.id = "textBtn";
        btn.innerHTML="Create Array";
        btn.onclick = function generatecustomarray()
        { 
            let x = document.getElementById("textBox").value;
            const arr = x.split(",");
            //taking the custom values in an array 
            window.alert(arr);

            //calling genratearray with custom values
            generatearray(arr);
        } ;
        document.getElementById("inputArray").appendChild(txt); 
        document.getElementById("inputArray").appendChild(btn);
        cusAry =1;
    }
    else
    {
        cusAry =0;
        clearBox("inputArray");
    }
    
}

//to clear the previous randomly genrated array
function clearBox(elementID) 
{
    var div = document.getElementById(elementID);
      
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

//random genration function 
function generatearray(arr=[])
{
    //clearBox(array);
    clearBox("array");

    if(arr.length>0)
    {
        for(let i=0; i<arr.length; i++)
        {

            //taking custom values in a variable  to translate to bars
            let value=arr[i];

            //creating div element
            var arr_ele=document.createElement("div");

            //adding class to 'bars' to div
            arr_ele.classList.add("bars");

            //adding style to div
            arr_ele.style.height=`${value*30}px`;
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
    else
    {
        for(let i=0; i<20; i++)
        {

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
}
  
function getAlgo()
{
    var selectAlgo = document.getElementById('selectAlgo').value;
    console.log(selectAlgo);
}