
const inputElement = document.querySelector('#input-QR');
const buttonElement = document.querySelector('button');
const showImg = document.querySelector('#show-QR');
const QRfor = document.querySelector('#QR-for');
const warningMsg = document.querySelector('#warning');

inputElement.addEventListener('focus' , () =>{
  showImg.style.visibility = 'hidden';
  QRfor.style.visibility = 'hidden';
  warningMsg.style.visibility = 'hidden'
});


buttonElement.addEventListener('click' , () =>{
  
  if(!inputElement.value){
    warningMsg.innerHTML = 'please Enter Valid input';
    warningMsg.style.visibility = 'visible';
    showImg.style.visibility = 'hidden';
    QRfor.style.visibility = 'hidden';
  }
  else{
    showImg.style.visibility ='visible'
    showImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputElement.value}`;
    QRfor.style.visibility = 'visible'
    QRfor.innerHTML = `QR for ${inputElement.value}`
    warningMsg.style.visibility = 'hidden';
    
   }
  inputElement.value='';

});


