function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
};
const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

menuBtn.addEventListener('click', function (event) {
    dropdownMenu.classList.toggle('hidden');
    event.stopPropagation();
});

document.addEventListener('click', function (event) {
    if (!menuBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
    }
});

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
    grid.innerHTML = data.map(menu => `
        <div class="flex flex-col items-center p-4">
            <div class="bg-black w-full p-2 md:p-4">
                <div class="p-4 bg-white/20 rounded-2xl">
                    <img src="${menu.imageUrl}" alt="${menu.title}" class="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-md mb-2">
                </div>
            </div>
            <div class="text-left mt-4">
                <h3 class="text-lg md:text-xl lg:text-2xl font-normal">${menu.title}</h3>
                <p class="text-sm md:text-md font-light text-[#F5F5F5]">${menu.description}</p>
            </div>
        </div>
    `).join('');
}

renderMenuGrid(menuData);


const beverageData = [
    {
        name: 'Plum Wine (梅酒)',
        price: '$19.75',
        description: 'Smooth and refined, often enjoyed neat or on the rocks.'
    },
    {
        name: 'Sparkling Wine',
        price: '$26.05',
        description: 'Sweet, fruity wine made from plums, served chilled.'
    },
    {
        name: 'Japanese Whiskey',
        price: '$34.90',
        description: 'Japanese rice wine, with varieties like Junmai, Ginjo, and Daiginjo.'
    },
    {
        name: 'Green Tea (緑茶)',
        price: '$38.50',
        description: 'Traditional Japanese beverage, often served warm or cold.'
    },
    {
        name: 'Shochu (焼酎)',
        price: '$21.30',
        description: 'Finely ground green tea powder, served as a concentrated beverage.'
    },
    {
        name: 'Beer (ビール)',
        price: '$30.80',
        description: 'Non-alcoholic option with a spicy kick that complements sushi flavors.'
    },

    {
        name: 'White Wine',
        price: '$26.05',
        description: 'Champagne or Prosecco, providing a refreshing contrast.'
    },

    {
        name: 'Matcha (抹茶)',
        price: '$16.50',
        description: 'Distilled Japanese spirit, often served on the rocks or diluted with water.'
    },
    {
        name: 'Ginger Ale',
        price: '$18.60',
        description: 'Light, crisp beers like Japanese lagers (e.g., Asahi, Sapporo, Kirin).'
    },

]
const firstBeverageColumn = beverageData.slice(0, 5);
const secondBeverageColumn = beverageData.slice(5);
const beverageList = document.getElementById('beverageList');
beverageList.innerHTML = `
    <div class="flex h-full justify-center p-20">
        <div class="bg-white w-[35%] my-40 "></div>
        <div class="bg-[#1A1A1A] w-[65%] "
            style=" height: 100%; backdrop-filter: blur(10px); background-color: #1A1A1A;">
            <div class="p-10">
                <div class=" border-t-2 border-l-2 border-r-2 border-white/20 h-full flex items-end p-4 z-50">
                    <div class="menu_gradient top-0 left-0  absolute w-full h-full"> </div>
                    <div class="w-full h-full left-0 top-0 relative p-10">
                        <p class="font-bebas text-white text-5xl mt-[-40px] p-4">Beverage</p>
                         <div class="grid grid-cols-2 gap-4 p-4">
                        <div class="flex flex-col gap-4">
                            ${firstBeverageColumn.map(beverageItem => `
                                <div>
                                    <div class="flex items-center justify-between text-white text-xl font-normal mb-2">
                                        <h3>${beverageItem.name}</h3>
                                        <p class="text-white/50 text-lg leading-none mr-2">${beverageItem.price}</p>
                                    </div>
                                    <p class="text-white/50 text-sm font-light leading-none mr-2 pt-4 border-b-2 pb-8 border-white/20">
                                        <span class="w-[80%] inline-block two_line">${beverageItem.description}</span>
                                    </p>
                                </div>
                            `).join('')}
                        </div>
                        <div class="flex flex-col gap-4">
                            ${secondBeverageColumn.map(beverageItem => `
                                <div>
                                    <div class="flex items-center justify-between text-white text-xl font-normal mb-2">
                                        <h3>${beverageItem.name}</h3>
                                        <p class="text-white/50 text-lg leading-none mr-2">${beverageItem.price}</p>
                                    </div>
                                    <p class="text-white/50 text-sm font-light leading-none mr-2 pt-4 border-b-2 pb-8 border-white/20">
                                        <span class="w-[80%] inline-block two_line">${beverageItem.description}</span>
                                    </p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`

const foodData = [
    {
        name: 'Aburi Sushi (炙り寿司)',
        price: '$34.90',
        description: 'A bowl of vinegared rice topped with various sashimi and ingredients.'
    },
    {
        name: 'Chirashi (ちらし寿司)',
        price: '$24.75',
        description: 'Lightly seared sushi with the top layer of fish torched.'
    },

    {
        name: 'Narezushi (馴れ寿司)',
        price: '$19.75',
        description: 'Thinly sliced raw fish or seafood, served without rice.'
    },
    {
        name: 'Oshi Sushi (押し寿司)',
        price: '$15.40',
        description: 'Sushi wrapped with seaweed, often filled with roe or sea urchin.'
    },
    {
        name: 'Temaki (手巻き寿司)',
        price: '$38.50',
        description: 'Traditional Japanese beverage, often served warm or cold.'
    },

    {
        name: 'Nigiri (握り寿司)',
        price: '$22.70',
        description: 'Pressed sushi in a mold with fish and rice, cut into pieces.'
    },
    {
        name: 'Maki (巻き寿司)',
        price: '$12.85',
        description: 'Hand-rolled sushi in a cone shape with seaweed, rice, and fillings.'
    },
];

const firstFoodColumn = foodData.slice(0, 5);
const secondFoodColumn = foodData.slice(5);

const foodList = document.getElementById('foodList');
foodList.innerHTML = `
<div class="flex h-full justify-center p-20">
    <div class="bg-[#1A1A1A] w-[65%]" style="height: 100%; backdrop-filter: blur(10px); background-color: #1A1A1A;">
        <div class="p-10">
            <div class="border-t-2 border-l-2 border-r-2 border-white/20 h-full flex items-end p-4 z-50">
                <div class="menu_gradient top-0 left-0 absolute w-full h-full"></div>
                <div class="w-full h-full left-0 top-0 relative p-10">
                    <p class="font-bebas text-white text-5xl mt-[-40px] p-4">Food</p>
                    <div class="grid grid-cols-2 gap-4 p-4">
                        <div class="flex flex-col gap-4">
                            ${firstFoodColumn.map(foodItem => `
                                <div>
                                    <div class="flex items-center justify-between text-white text-xl font-normal mb-2">
                                       <span class="w-[70%] inline-block two_line"> <h3>${foodItem.name}</h3></span>
                                        <p class="text-white/50 text-lg leading-none mr-2">${foodItem.price}</p>
                                    </div>
                                    <p class="text-white/50 text-sm font-light leading-none mr-2 pt-4 border-b-2 pb-8 border-white/20">
                                        <span class="w-[70%] inline-block two_line">${foodItem.description}</span>
                                    </p>
                                </div>
                            `).join('')}
                        </div>
                        <div class="flex flex-col gap-4">
                            ${secondFoodColumn.map(foodItem => `
                                <div>
                                    <div class="flex items-center justify-between text-white text-xl font-normal mb-2">
                                       <span class="w-[70%] inline-block two_line"> <h3>${foodItem.name}</h3></span>
                                        <p class="text-white/50 text-lg leading-none mr-2">${foodItem.price}</p>
                                    </div>
                                    <p class="text-white/50 text-sm font-light leading-none mr-2 pt-4 border-b-2 pb-8 border-white/20">
                                        <span class="w-[70%] inline-block two_line">${foodItem.description}</span>
                                    </p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white w-[35%] my-40"></div>
</div>
`;



const dessertData = [
    {
        name: 'Anmitsu (あんみつ)',
        price: '$14.90',
        description: 'Layered pastry with matcha-flavored cream.'
    },
    {
        name: 'Sesame Balls (ごま団子)',
        price: '$39.60',
        description: 'Rich and creamy ice cream flavored with green tea powder.'
    },
    {
        name: 'Dorayaki (どら焼き)',
        price: '$10.60',
        description: 'Fresh seasonal fruits like melon, strawberries, or persimmons, often served in elegant presentations.'
    },
    {
        name: 'Matcha Ice Cream (抹茶アイスクリーム)',
        price: '$36.15',
        description: 'Creamy cheesecake flavored with green tea, blending traditional Japanese and Western flavors.'
    },
    {
        name: 'Mille-Feuille Matcha Cake',
        price: '$32.20',
        description: 'Traditional Japanese dessert with agar jelly, fruits, and red bean paste, often served with sweet syrup.'
    },
    {
        name: 'Fruit Platter',
        price: '$27.40',
        description: 'Firm jelly made from red bean paste, agar, and sugar, often served in slices.'
    },

    {
        name: 'Taiyaki (鯛焼き)',
        price: '$13.25',
        description: 'Fish-shaped pastries filled with sweet fillings such as red bean paste, custard, or chocolate.'
    },

    {
        name: 'Yokan (羊羹)',
        price: '$18.60',
        description: 'Fried or baked rice balls coated in sesame seeds and filled with sweet paste.'
    },


]
const firstDessertColumn = dessertData.slice(0, 5);
const secondDessertColumn = dessertData.slice(5);
const dessertList = document.getElementById('dessertList');
dessertList.innerHTML = `
<div class="flex h-full justify-center p-20">
<div class="bg-white w-[35%] my-40 "></div>
<div class="bg-[#1A1A1A] w-[65%] "
style=" height: 100%; backdrop-filter: blur(10px); background-color: #1A1A1A;">
<div class="p-10">
    <div class=" border-t-2 border-l-2 border-r-2 border-white/20 h-full flex items-end p-4 z-50">
        <div class="menu_gradient top-0 left-0  absolute w-full h-full"> </div>
        <div class="w-full h-full left-0 top-0 relative p-10">
            <p class="font-bebas text-white text-5xl mt-[-40px] p-4">Dessert</p>
             <div class="grid grid-cols-2 gap-4 p-4">
            <div class="flex flex-col gap-4">
                ${firstDessertColumn.map(dessertItem => `
                    <div>
                        <div class="flex items-center justify-between text-white text-xl font-normal mb-2">
                            <span class="w-[70%] inline-block two_line"><h3>${dessertItem.name}</h3></span>
                            <p class="text-white/50 text-lg leading-none mr-2">${dessertItem.price}</p>
                        </div>
                        <p class="text-white/50 text-sm font-light leading-none mr-2 pt-4 border-b-2 pb-8 border-white/20">
                            <span class="w-[70%] inline-block two_line">${dessertItem.description}</span>
                        </p>
                    </div>
                `).join('')}
            </div>
            <div class="flex flex-col gap-4">
                ${secondDessertColumn.map(dessertItem => `
                    <div>
                        <div class="flex items-center justify-between text-white text-xl font-normal mb-2">
                            <span class="w-[70%] inline-block two_line"><h3>${dessertItem.name}</h3></span>
                            <p class="text-white/50 text-lg leading-none mr-2">${dessertItem.price}</p>
                        </div>
                        <p class="text-white/50 text-sm font-light leading-none mr-2 pt-4 border-b-2 pb-8 border-white/20">
                            <span class="w-[70%] inline-block two_line truncate">${dessertItem.description}</span>
                        </p>
                    </div>
                `).join('')}
            </div>
        </div>
        </div>
    </div>
</div>
</div>
</div>
`;


document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    const fields = [
        { id: "contactPhone", errorId: "contactPhoneError" },
        { id: "contactEmail", errorId: "contactEmailError", validation: (value) => value.includes("@") },
        { id: "contactAddress", errorId: "contactAddressError" },
        { id: "openingHours", errorId: "openingHoursError" },
        { id: "firstName", errorId: "firstNameError" },
        { id: "lastName", errorId: "lastNameError" },
        { id: "dateTime", errorId: "dateTimeError" }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorElement = document.getElementById(field.errorId);
        errorElement.classList.add("hidden");

        if (!input.value || (field.validation && !field.validation(input.value))) {
            errorElement.classList.remove("hidden");
            isValid = false;
        }
    });

    if (isValid) {
        let fieldsInfo = '';
        fields.forEach(field => {
            const input = document.getElementById(field.id);
            fieldsInfo += `${field.id}: ${input.value}\n`;
        });
        alert(`Form submitted successfully!\n${fieldsInfo}`);
    }
});
