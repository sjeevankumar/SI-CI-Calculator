
let siCalc=document.getElementById('btn1');
let ciCalc=document.getElementById('btn2');
let sip1=document.getElementById('si p1');
let sip2=document.getElementById('si p2');
let cip1=document.getElementById('ci p1');
let cip2=document.getElementById('ci p2');


siCalc.addEventListener('click',(e)=>{
      e.preventDefault();
      let pa=document.getElementById('txt1').value;;
      let time=document.getElementById('txt2').value;;
      let roi=document.getElementById('txt3').value;

      let si=(pa*time*roi)/100;
      let totalamount=parseInt(pa)+ parseInt(si);

      sip1.innerText="Simple Interest is "+si;
      sip2.innerText="Total Amount is "+totalamount;

      console.log("simple interest is "+si);
      console.log("Totalamount is "+ totalamount);


})

ciCalc.addEventListener('click',(e)=>{
      e.preventDefault();
      let pa=document.getElementById('txt1').value;
      let time=document.getElementById('txt2').value;
      let roi=document.getElementById('txt3').value;
      let n=document.getElementById('txt4').value;

      let ci=pa*(1+(roi/n))**(n*time);
      let totalamount=parseInt(pa)+parseInt(ci);

      cip1.innerText="Simple Interest is "+ci;
      cip2.innerText="Total Amount is "+totalamount;

      console.log("Compound interest is "+ci);
      console.log("Totalamount is "+totalamount);

})

reset=document.getElementById('res');

reset.addEventListener('click',()=>{
      sip1.innerText='';
      sip2.innerText='';
      cip1.innerText='';
      cip2.innerText='';
})