window.onload = function() {
    let carousels = bulmaCarousel.attach('#carousel-demo', {
        slidesToScroll: 1,
        slidesToShow: 1,
        pagination: false,
        navigationKeys: false,
        navigation: false
    });

    let carousel = carousels[0];

    let yes = document.querySelectorAll(".yes");
    yes.forEach( (elt) => {
        elt.addEventListener("click", () => {
            carousel.next();
        });
    }) 

    let no = document.querySelectorAll(".no");
    no.forEach( (elt) => {
        elt.addEventListener("click", () => {
            carousel.next();
        });
    }) 

}