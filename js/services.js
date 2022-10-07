(function(){

    const services = [
        {
            id: 1,
            title: "Beardcut",
            img: "img/seventh-hairstyle.jpg",
            price: "250 UAH"
        },
        {
            id: 2,
            title: "Haircut",
            img: "img/fourth-hairstyle.jpg",
            price: "400 UAH"
        },
        {
            id: 3,
            title: "Haircut and beardcut",
            img: "img/first_hairstyle.jpg",
            price: "600 UAH"
        }
    ];

    function renderServices(services) {
        const servicesContainer = document.querySelector('.services__cards');
        // servicesContainer.innerHTML = "";
        for (const service of services) {
            servicesContainer.innerHTML += `
            <div class="services__card__item">
                <img class="services__card__image" src="${service.img}" alt="$(service.title}" class="services__card-image">
                <h3>${service.title}</h3>
                <p>${service.price}</p>
            </div>
            `
        }
    }
    renderServices(services);
})()