let button = document.getElementById('button'),
    titulo = document.getElementById('titulo'),
    contador=0;

    function cambio()

    { if(contador==0)
        {
            titulo.classList.add('color');
            contador=1
        }
        else{titulo.classList.remove('color');
        contador=0;}
    }

    button.addEventListener('click',cambio,true)