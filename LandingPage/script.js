function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
};

const menuData = [
    {
        imageUrl: "https://example.com/image1.jpg",
        title: "Nigiri (握り寿司)",
        description: "Rolled sushi wrapped in seaweed (nori) and sliced into bite-sized pieces. Variations include hosomaki (thin rolls) and futomaki (thick rolls)."
    },
    {
        imageUrl: "https://example.com/image2.jpg",
        title: "Gunkan (軍艦巻き)",
        description: "A bowl of vinegared rice topped with various sashimi and ingredients."
    },
    {
        imageUrl: "https://example.com/image2.jpg",
        title: "Temaki (手巻き寿司)",
        description: "Inside-out rolls with rice on the outside and seaweed inside."
    },
    {
        imageUrl: "https://example.com/image2.jpg",
        title: "Narezushi (馴れ寿司)",
        description: "Hand-rolled sushi in a cone shape with seaweed, rice, and fillings."
    },
    {
        imageUrl: "https://example.com/image2.jpg",
        title: "Inari Sushi (稲荷寿司)",
        description: "Thinly sliced raw fish or seafood, served without rice."
    },
    {
        imageUrl: "https://example.com/image2.jpg",
        title: "Aburi Sushi (炙り寿司)",
        description: "A bowl of vinegared rice topped with various sashimi and ingredients."
    },
    {
        imageUrl: "https://example.com/image2.jpg",
        title: "Oshi Sushi (押し寿司)",
        description: "Small, ball-shaped sushi often decorated with colorful toppings."
    },
    {
        imageUrl: "https://example.com/image2.jpg",
        title: "Sashimi (刺身)vid",
        description: "Fermented sushi, an ancient method of preserving fish with rice."
    },
    {
        imageUrl: "https://example.com/image2.jpg",
        title: "Nigiri (握り寿司)",
        description: "Small, ball-shaped sushi often decorated with colorful toppings."
    },
    {
        imageUrl: "https://example.com/image2.jpg",
        title: "Maki (巻き寿司)",
        description: "Hand-pressed sushi with fish or seafood atop rice."
    },
    {
        imageUrl: "https://example.com/image2.jpg",
        title: "Temari (手まり寿司)",
        description: "Inside-out rolls with rice on the outside and seaweed inside."
    },
    {
        imageUrl: "https://example.com/image2.jpg",
        title: "Chirashi (ちらし寿司)",
        description: "Lightly seared sushi with the top layer of fish torched."
    },

];


function renderMenuGrid(data) {
    const grid = document.getElementById('menu-grid');
    data.forEach(menu => {
        const menuElement = document.createElement('div');
        menuElement.className = 'flex flex-col items-center';

        const imageContainer = document.createElement('div');
        imageContainer.className = 'bg-black w-full p-4';


        const innerImageContainer = document.createElement('div');
        innerImageContainer.className = 'p-4 bg-white/20 rounded-[24px]';

        const image = document.createElement('img');
        image.src = menu.imageUrl;
        image.alt = menu.title;
        image.className = 'w-full h-32 object-cover rounded-md mb-2';

        innerImageContainer.appendChild(image);
        imageContainer.appendChild(innerImageContainer);

        const textContainer = document.createElement('div');
        textContainer.className = 'text-left mt-4';

        const title = document.createElement('h3');
        title.className = 'text-lg font-normal text-[22px]';
        title.textContent = menu.title;

        const description = document.createElement('p');
        description.className = 'text-sm font-light text-wrap text-[#F5F5F5]';
        description.textContent = menu.description;

        textContainer.appendChild(title);
        textContainer.appendChild(description);

        menuElement.appendChild(imageContainer);
        menuElement.appendChild(textContainer);

        grid.appendChild(menuElement);
    });
}

renderMenuGrid(menuData);

