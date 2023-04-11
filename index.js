const endDate= "20 may 2023 10:00 AM"
 document.getElementById('end-date').innerText=endDate; 
 const inputs=document.querySelectorAll("input"); 

 const clock=()=>{
    const end=new Date(endDate);
    const now=new Date()
    const dif=(end - now)/1000;
    // console.log(dif);
   //convert into days
   inputs[0].value=Math.floor(dif/ 3600 /24);
   //convert into hours
   inputs[1].value=Math.floor(dif/ 3600)%24;

   //convert into minute
   inputs[2].value=Math.floor(dif/ 60)%60;

     //convert into second
   inputs[3].value=Math.floor(dif)%60;
 } 
  clock();   


  setInterval( 
    ()=>{
   clock()
    },
    1000
  )
   
  