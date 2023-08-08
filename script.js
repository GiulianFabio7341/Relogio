const Horas=document.getElementById('Horas');
const Minutos=document.getElementById('Minutos');
const Segundos=document.getElementById('Segundos');
const cro=document.getElementById('tempo');
const lista=document.getElementById('cronômetro')
let intervalId=0;
let timer=0;

const format=(time) =>{
   const hours = Math.floor(time / 360000);
   const minutes = Math.floor((time % 360000) / 6000);
   const seconds = Math.floor((time % 6000) / 100);
   const hundredths = time % 100;

   return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`;
}

const setTimer = (time) => {
   cro.innerText = format(time);
}

const toggleTimer = () => {
   const button = document.getElementById('power');
   const action = button.getAttribute('action');

   clearInterval(intervalId);

   if (action == 'start' || action == 'continue') {
       intervalId = setInterval(() => {
           timer += 1;
           setTimer(timer);
   }, 10);
       button.setAttribute('action', 'pause');
       button.innerHTML = '<i class="fa-solid fa-pause"></i>';
   } else if (action == 'pause') {
       button.setAttribute('action', 'continue');
       button.innerHTML = '<i class="fa-solid fa-play"></i>';
   }
}

document.getElementById('power').addEventListener('click', toggleTimer);

const funcionamento=setInterval(function time() {
 let dia=new Date();
 let horas=dia.getHours();
 let minutos=dia.getMinutes();
 let segundos=dia.getSeconds();
 
 if (segundos<10){
    Segundos.innerHTML='0'+segundos;
 }
 else{
    Segundos.innerHTML=segundos;
 }
 if (minutos<10){
    Minutos.innerHTML='0'+minutos;
 }
 else{
    Minutos.innerHTML=minutos;
 }
 if (horas<10){
    Horas.innerHTML='0'+horas;
 }
 else{
    Horas.innerHTML=horas;
 }
}
)




  





