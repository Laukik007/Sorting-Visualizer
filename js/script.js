var container=document.getElementById("array");
let x = false;
let cusAry = 0;
var selectAlgo =0;
function StartStop()
{
    if(x == false)
    {   //button is at stop and needs to start
        x = true;
        document.getElementById("StartStop").childNodes[0].nodeValue="Stop";
        document.getElementById("GenAry").disabled = true;
        document.getElementById("CusAry").disabled = true;
        document.getElementById("SltBtn").disabled = true;
        switch(selectAlgo)
        {
            case 0:
                BubbleSort();
                break;
            default:
                console.log("Under Construction")
        }

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
        txt.title = "seperate numbers by ','";
        txt.placeholder = "seperate numbers by ','";
        // txt.size = "30";
        let btn = document.createElement("button");
        btn.id = "textBtn";
        btn.innerHTML="Create Array";
        btn.onclick = function generatecustomarray()
        { 
            let x = document.getElementById("textBox").value;
            const arr = x.split(",");
            //taking the custom values in an array 

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
            arr_ele.style.height=`${value*1}vh`;
            arr_ele.style.transform=`translate(${i*20}%)`;

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
            arr_ele.style.height=`${value*0.5}vh`;
            arr_ele.style.transform=`translate(${i*20}%)`;

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
}

// Promise to swap two bars
function swap(el1, el2) 
{
    return new Promise((resolve) => {
  
        // For exchanging styles of two bars
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;
  
        window.requestAnimationFrame(function() {
  
            // For waiting for .25 sec
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 250);
        });
    });
}

async function BubbleSort(delay = 100) {
    var bars = document.querySelectorAll(".bars");
  
    // BubbleSort Algorithm
    for (var i = 0; i < bars.length; i += 1) {
        for (var j = 0; j < bars.length - i - 1; j += 1) {
  
            // To change background-color of the
            // bars to be compared
            bars[j].style.backgroundColor = "#FF4949";
            bars[j + 1].style.backgroundColor = "#FF4949";
  
            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
  
            console.log("run");
            var value1 = Number(bars[j].childNodes[0].innerHTML);
            var value2 = Number(bars[j + 1]
                        .childNodes[0].innerHTML);
  
            // To compare value of two bars
            if (value1 > value2) {
                await swap(bars[j], bars[j + 1]);
                bars = document.querySelectorAll(".bars");
            }
  
            // Changing the color to the previous one
            bars[j].style.backgroundColor = "#fceb00";
            bars[j + 1].style.backgroundColor = "#fceb00";
            if (x == false)
            {
                break;
            }
        }if (x == false)
        {
            break;
        }

        //changing the color of greatest element 
        //found in the above traversal
        bars[bars.length - i - 1]
                .style.backgroundColor = "#13CE66";
    }
    document.getElementById("StartStop").childNodes[0].nodeValue="Start";
    document.getElementById("GenAry").disabled = false;
    document.getElementById("CusAry").disabled = false;
    document.getElementById("SltBtn").disabled = false;

}
  