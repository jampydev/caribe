
// Función del botón para esconder y visualizar botón de menú

document.addEventListener("DOMContentLoaded",() => {
    // seleccion de elementos del DOM
    const toggleButton = document.querySelector(".navbar__toogler-btn");
    const mobileMenu = document.querySelector(".navbar__mobile-menu");

    // si el menú movil está oculto ("none o vacio"), lo muestra cambiando a flex
    // si el menu movil ya está visible ("flex"), lo oculta cambiando a none
    
    const toggleMenu = () => {
        mobileMenu.style.display = 
            mobileMenu.style.display === "none" || mobileMenu.style.display === "" 
            ? "flex"
            :"none";
    };

    const hideMenuResize = () => {
        mobileMenu.style.display = "none"
    };

    // evento listener o eventos de escucha
    toggleButton.addEventListener("click", toggleMenu);
    window.addEventListener("resize",hideMenuResize);
    window.addEventListener("load",hideMenuResize);    
});

// Movimiento sliders //

(function(){ // función que se llame a si misma para proteger el código //
    
    const sliders = [...document.querySelectorAll('.slider__body')]; //array//
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value; 

    buttonNext.addEventListener("click", ()=>
    {
        changePosition(1);
    });

    buttonBefore.addEventListener("click", ()=>
    {
        changePosition(-1);
    });

    const changePosition = (add)=>
    {
        const currentslider = document.querySelector('.slider__body--show').dataset.id;
        value = Number(currentslider);
        value+= add;

        sliders[Number(currentslider)-1].classList.remove('slider__body--show');

        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('slider__body--show');

        console.log(value);

       
    }   
})();





