let timer;
const r = document.getElementById('result');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () =>
{
    btn.innerHTML = 'Пауза';
    let a = Number(document.querySelector('#a').value);
    let b = Number(document.querySelector('#b').value);   
    
     if (timer)
    {
      clearInterval(timer);
    }
if(a < b){
  timer = setInterval(() => {
    r.innerHTML = parseInt(a++);}, 1000)}
else{
    r.innerHTML = "Error";

}
});



