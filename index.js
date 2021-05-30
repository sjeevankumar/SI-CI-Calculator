
let siCalc=document.getElementById('btn1');
let ciCalc=document.getElementById('btn2');


siCalc.addEventListener('click',()=>{
      let pa=document.getElementById('txt1').value;;
      let time=document.getElementById('txt2').value;;
      let roi=document.getElementById('txt3').value;

      let si=(pa*time*roi)/100;
      let totalamount=parseInt(pa)+ parseInt(si);
      console.log("simple interest is "+si);
      console.log("Totalamount is "+ totalamount);


})

ciCalc.addEventListener('click',()=>{
      let pa=document.getElementById('txt1').value;
      let time=document.getElementById('txt2').value;
      let roi=document.getElementById('txt3').value;
      let n=document.getElementById('txt4').value;

      let ci=pa*(1+(roi/n))**(n*time);
      let totalamount=parseInt(pa)+parseInt(ci);
      console.log("Compound interest is "+ci);
      console.log("Totalamount is "+totalamount);

})
