$(document).ready(function () {
    const products = {
        electronics: [
            { id: 1, name: 'Monitor', price: 799.99, image: 'https://placehold.co/300x200', category: 'electronics' },
            { id: 2, name: 'Fone Bluetooth', price: 129.99, image: 'https://placehold.co/300x200', category: 'electronics' },
            { id: 3, name: 'Headset Redragon', price: 199.99, image: 'https://placehold.co/300x200', category: 'electronics' },
        ],
        computers: [
            { id: 4, name: 'Gaming Laptop', price: 4999.99, image: 'https://placehold.co/300x200', category: 'computers' },
            { id: 5, name: 'Desktop PC', price: 7999.99, image: 'https://placehold.co/300x200', category: 'computers' },
            { id: 6, name: 'MacBook Pro', price: 19999.99, image: 'https://placehold.co/300x200', category: 'computers' },
        ],
        accessories: [
            { id: 7, name: 'Gaming Mouse', price: 79.99, image: 'https://placehold.co/300x200', category: 'accessories' },
            { id: 8, name: 'Teclado', price: 99.99, image: 'https://placehold.co/300x200', category: 'accessories' },
            { id: 9, name: 'Suporte Monitor', price: 149.99, image: 'https://placehold.co/300x200', category: 'accessories' },
        ],
    };

    const cart = [];

    function formatCurrency(value) {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function renderProducts() {
        Object.entries(products).forEach(([category, categoryProducts]) => {
            const $productList = $(`#${category}-products`);
            $productList.empty();

            categoryProducts.forEach((product) => {
                const productCard = `
                    <div class="col-md-4 mb-4">
                        <div class="card product-card">
                            <img src="${product.image}" class="card-img-top" alt="${product.name}">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${formatCurrency(product.price)}</p>
                                <button class="btn btn-primary add-to-cart" data-id="${product.id}">Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                `;
                $productList.append(productCard);
            });
        });
    }

    function updateCart() {
        const $sidebarCartItems = $('#sidebar-cart-items');
        const $sidebarCartTotal = $('#sidebar-cart-total');
        const $cartCount = $('#cart-count');
        $sidebarCartItems.empty();

        let total = 0;
        let itemCount = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            itemCount += item.quantity;

            const cartRow = `
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h6 class="m-0">${item.name}</h6>
                        <small>${formatCurrency(item.price)} x ${item.quantity}</small>
                    </div>
                    <div>
                        <span>${formatCurrency(itemTotal)}</span>
                        <button class="btn btn-sm btn-danger remove-item ms-2" data-index="${index}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            $sidebarCartItems.append(cartRow);
        });

        $sidebarCartTotal.text(formatCurrency(total));
        $cartCount.text(itemCount);
    }

    function addToCart(productId) {
        const product = Object.values(products).flat().find((p) => p.id === productId);

        if (!product) return;

        const existingCartItem = cart.find((item) => item.id === productId);
        if (existingCartItem) {
            existingCartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCart();
    }

    function handleCartActions() {
        $('#sidebar-cart-items').on('click', '.remove-item', function () {
            const index = $(this).data('index');
            cart.splice(index, 1);
            updateCart();
        });

        $('#sidebar-checkout-btn').on('click', function () {
            if (cart.length === 0) {
                alert('Seu carrinho está vazio!');
                return;
            }
            alert('Obrigado por comprar na Tech Haven!');
            cart.length = 0;
            updateCart();
            $('#cart-sidebar').removeClass('show');
        });
    }

    $('#cart-toggle').on('click', function () {
        $('#cart-sidebar').addClass('show');
    });

    $('#close-cart').on('click', function () {
        $('#cart-sidebar').removeClass('show');
    });

    $('#electronics-products, #computers-products, #accessories-products').on('click', '.add-to-cart', function () {
        const productId = $(this).data('id');
        addToCart(productId);
    });

    renderProducts();
    handleCartActions();
});
