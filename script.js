onload = function(){
    document.querySelector('#toggler_btn').addEventListener('click', _=>{
        document.querySelector('.content__container__aside').classList.toggle('open');
    })
}