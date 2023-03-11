const addCart = () => {
    const productField = document.getElementById('product-field');
    const product = productField.value;
    const quantityField = document.getElementById('quantity-field');
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';

    // console.log(product, quantity);
    displayContainer(product, quantity);
    saveDataFromInputToLocalStorage(product, quantity);
};

const displayContainer = (product, quantity) => {
    const displayUl = document.getElementById('display-container');
    const li = document.createElement('li');
    li.innerText = `${product} ${quantity}`;
    displayUl.appendChild(li);
};

const getDataFromLocalStorage = () => {
    let cart = {};
    const storedData = localStorage.getItem('cart');
    if (storedData) {
        cart = JSON.parse(storedData);
    }
    return cart;
};

const saveDataFromInputToLocalStorage = (product, quantity) => {
    const CartObject = getDataFromLocalStorage();
    CartObject[product] = quantity;
    const CartObjectString = JSON.stringify(CartObject);
    localStorage.setItem('cart', CartObjectString);
};

const displayFromLocalStorage = () => {
    const savedObjectCart = getDataFromLocalStorage();
    console.log(savedObjectCart);
    for (const product in savedObjectCart) {
        const value = savedObjectCart[product];
        console.log(product, value);
        displayContainer(product, value);
    };
};

displayFromLocalStorage();