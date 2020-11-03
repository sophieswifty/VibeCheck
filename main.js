window.onload = function () {
    let q1 = new Question("2tiles", "Are you hanging out with friends?", ["YES", "NO"]).getElement();
    let q2 = new Question("4tiles", "What kind of hangout is it?", ["Just Hanging", "Kickback", "Party", "Group Studying"]).getElement();
    let q3 = new Question("2tiles", "Do you want lyrics?", ["YES", "NO"]).getElement();

    document.querySelector("#question-carousel").append(q1);
    document.querySelector("#question-carousel").append(q2);
    document.querySelector("#question-carousel").append(q3);


    let carousel = new Carousel("#question-carousel")
    let yes = document.querySelectorAll(".yes");
    yes.forEach((elt) => {
        elt.addEventListener("click", () => {
            carousel.next();
        });
    })

    let no = document.querySelectorAll(".no");
    no.forEach((elt) => {
        elt.addEventListener("click", () => {
            carousel.next();
        });
    })

    let sample = document.querySelector(".carousel-item");
    carousel.append(sample);

    let answerTiles = document.querySelectorAll(".answer-tile");
    answerTiles.forEach( (elt) => {
        elt.addEventListener("click", () => {
            carousel.next();
        })
    });
}
/**
 * @param {string} id id of the carousel element in dom
 * 
 * Wrapper for Carousel object from bulma-carousel 
 */

class Carousel {
    constructor(id) {
        this.id = id;
        let carousels = bulmaCarousel.attach(this.id, {
            slidesToScroll: 1,
            slidesToShow: 1,
            pagination: false,
            navigationKeys: false,
            navigation: false,
            // effect: "fade",
            duration: 500,
        });

        this.carousel = carousels[0];
    }

    next() {
        this.carousel.next();
    }

    getItems() {
        return this.carousel._items;
    }

    append(elt) {
        this.carousel._items.push(elt);
    }

    refresh() {
        let carousels = bulmaCarousel.attach(this.id, {
            slidesToScroll: 1,
            slidesToShow: 1,
            pagination: false,
            navigationKeys: false,
            navigation: false,
            // effect: "fade",
            duration: 500,
        });

        this.carousel = carousels[0];

    }
}

class Question {
    constructor(type, question, answers) {
        this.element = undefined;
        if (type === "2tiles") {
            this.element = this.htmlToElement(
                `
                <div class="carousel-item">
                    <section class="section">
                        <div class="container">
                            <div class="box centered question-box">
                                <h1 class="title has-text-white">
                                    ${question}
                                </h1>
                                <div class="tile is-ancestor is-parent">
                                     <div class="tile is-child box answer-tile">
                                        <img class="answerimage" src="img/dancing.jpg" width="400" height="400" style="text-align: center;">
                                        <h1 class="title has-text-white">${answers[0]}</h1>
                                     </div>
                                    <div class="tile is-child box answer-tile">
                                        <img class="answerimage" src="img/rain.jpg" width="400" height="400">
                                        <h1 class="title has-text-white">${answers[1]}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                `
            )
        }

        if (type === "4tiles") {
            this.element = this.htmlToElement(
                `
                <div class="carousel-item">
                    <section class="section">
                        <div class="container">
                            <div class="box centered question-box">
                                <h1 class="title has-text-white">
                                    ${question}
                                </h1>
                                <div class="tile is-ancestor is-parent">
                                    <div class="tile is-child box answer-tile">
                                        <img class="answerimage" src="img/dancing.jpg" width="400" height="400" style="text-align: center;">
                                        <h1 class="title has-text-white">${answers[0]}</h1>
                                    </div>
                                    <div class="tile is-child box answer-tile">
                                        <img class="answerimage" src="img/dancing.jpg" width="400" height="400" style="text-align: center;">
                                        <h1 class="title has-text-white">${answers[1]}</h1>
                                    </div>
                                    <div class="tile is-child box answer-tile">
                                        <img class="answerimage" src="img/dancing.jpg" width="400" height="400" style="text-align: center;">
                                        <h1 class="title has-text-white">${answers[2]}</h1>
                                    </div>
                                    <div class="tile is-child box answer-tile">
                                        <img class="answerimage" src="img/dancing.jpg" width="400" height="400" style="text-align: center;">
                                        <h1 class="title has-text-white">${answers[3]}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                `
            )
        }
    }

    getElement() {
        return this.element;
    }

    /**
     * @param {String} HTML representing a single element
     * @return {Element}
     * https://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript
     */
    htmlToElement(html) {
    let template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
    }   
}

