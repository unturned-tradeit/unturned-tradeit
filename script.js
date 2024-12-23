const skins = [
    { name: "Golden Eagle", price: 12.99, image: "https://via.placeholder.com/150" },
    { name: "Dragon Fang", price: 24.99, image: "https://via.placeholder.com/150" },
    { name: "Shadow Blade", price: 18.5, image: "https://via.placeholder.com/150" },
];

const skinList = document.getElementById("skin-list");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");

function displaySkins(skinsToShow) {
    skinList.innerHTML = "";
    skinsToShow.forEach(skin => {
        const skinDiv = document.createElement("div");
        skinDiv.className = "skin";
        skinDiv.innerHTML = `
            <img src="${skin.image}" alt="${skin.name}">
            <h2>${skin.name}</h2>
            <p>Price: $${skin.price.toFixed(2)}</p>
        `;
        skinList.appendChild(skinDiv);
    });
}

function sortSkins(option) {
    if (option === "priceLow") {
        return [...skins].sort((a, b) => a.price - b.price);
    } else if (option === "priceHigh") {
        return [...skins].sort((a, b) => b.price - a.price);
    }
    return [...skins].sort((a, b) => a.name.localeCompare(b.name));
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredSkins = skins.filter(skin => skin.name.toLowerCase().includes(query));
    displaySkins(filteredSkins);
});

sortSelect.addEventListener("change", () => {
    const sortedSkins = sortSkins(sortSelect.value);
    displaySkins(sortedSkins);
});

// Initial display
displaySkins(skins);
