let api=`https://v6.exchangerate-api.com/v6/84b4e7421b006f6e0b68fbd9/latest/USD`;


 document.getElementById("convertButton").addEventListener("click",function()
{
    let from=document.getElementById("from").value;
    let to=document.getElementById("to").value; 
    let amt=document.getElementById("amount").value;
    document.getElementById("result").style.display = "flex";
    // if(amt.length==0)
    // {
    //     console.log("please Enter Amount");
    // }


    fetch(api).then((resp)=>resp.json())
    .then((data)=>
    {
        console.log(data);
    
       let fromexchangerate=data.conversion_rates[from];
       let toexchangerate=data.conversion_rates[to];

       console.log(fromexchangerate);
       
       console.log(toexchangerate);
       console.log(amt);

       let convertedamt=(amt/fromexchangerate)*toexchangerate;
       console.log(convertedamt);

       document.getElementById("result").textContent=convertedamt;

    });
   
});