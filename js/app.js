// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
    {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
    },
    {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
    },
    {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
    },
    {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
    },
    {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
    },
    {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
    },
    {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
    },
    {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
    },
];

// Check units

var changeQuantity = () => {

    calculateButton.disabled = true;

    for (items of products) {
    items.units = document.getElementById("input-quantity-" + products.indexOf(items) + 1).value;
    items.units = parseInt(items.units);    

        if (items.units <= 0 && calculateButton.disabled == true) {
            calculateButton.classList.add("disabled");
            calculateButton.disabled = true;

        } else {
            calculateButton.classList.remove("disabled");
            calculateButton.disabled = false;
        }
    };
};


// Print costumer's shopping bag

for (var items of products) {

    var indexItem = document.createElement("span");
    indexItem.setAttribute("class", "product-index");
    indexItem.innerText = (products.indexOf(items) + 1 + ". ");

    var inputProduct = document.createElement("div");
    inputProduct.setAttribute("class", "product-name");
    inputProduct.innerText = items.description + " - " + items.price + " €/ud.";

    var inputQuantity = document.createElement("input");
    inputQuantity.setAttribute("id", "input-quantity-" + products.indexOf(items) + 1);
    inputQuantity.setAttribute("class", "input-quantity")
    inputQuantity.setAttribute("type", "number");
    inputQuantity.setAttribute("value", 0);
    inputQuantity.setAttribute("min", 0);
    inputQuantity.setAttribute("max", items.stock);
    inputQuantity.addEventListener("change", changeQuantity);


    var divProduct = document.createElement("div");
    divProduct.setAttribute("class", "product-container");
    divProduct.appendChild(indexItem);
    divProduct.appendChild(inputProduct);
    divProduct.appendChild(inputQuantity);

    var shoppingList = document.getElementById("shopping-list").appendChild(divProduct);
};


// Print Total

var calculateSubtotal = () => {
    var subtotal = 0;

    for (items of products) {
        subtotal = subtotal + (items.price * items.units);
    };

    return subtotal;
};

var calculateVat = () => {
    var vat = 0;

    for (items of products) {
        vat = vat + ((items.price * items.units) * (items.tax / 100));
    };

    return vat;
};

var calculateTotal = () => calculateSubtotal() + calculateVat();

var print = (functionName, nameBox) => {
    functionName;
    document.getElementById(nameBox).innerHTML = parseFloat(functionName).toFixed(2) + " €";
};

var printAll = () => {
    print (calculateSubtotal(), "subtotalBox");
    print (calculateVat(), "vatBox");
    print (calculateTotal(), "totalBox");
};

var calculateButton = document.getElementById("shopping-button");
calculateButton.disabled = true;
calculateButton.classList.add("disabled");
calculateButton.addEventListener("click", printAll);
