
const categories = [
    "Phones & computers",
    "Gaming",
    "Phones & Smartwatches",
    "Home Appliances",
    "TV, Photo & Sound",
    "Home, DIY & Pet Supplies",
    "Printing",
    "Networks & Security",
    "Office Supplies",
    "Beauty & Health",
    "Motorcycles, Sports & Leisure",
    "Toys & Games",
    "Baby"
];

function init_categories(){
    const selectElement = document.getElementById("category-select");

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        selectElement.appendChild(option);
    });
}

init_categories()