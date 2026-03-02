        const products = [
            { id: 1, name: "Phone Charm Abejita", category: "charms", emoji: "", price: 25, description: "Charm decorativo con cuentas en tonos pastel", colors: ["#FFB3D9", "#E8B4F3", "#B8E0F0"], badge: "Popular" },
            { id: 2, name: "Phone Charm Pulpo", category: "pulseras", emoji: "", price: 30, description: "Pulsera elástica con cuentas de colores", colors: ["#FFB3D9", "#FFD4A3", "#C8F0E8"], badge: null },
            { id: 3, name: "Phone Charm Cangrejito", category: "charms", emoji: "", price: 28, description: "Diseño floral con cuentas translúcidas", colors: ["#E8B4F3", "#B8E0F0", "#FFB3D9"], badge: "Nuevo" },
            { id: 4, name: "Phone Charm Flor", category: "pulseras", emoji: "", price: 22, description: "Diseño simple y elegante", colors: ["#FFB3D9", "#E8B4F3"], badge: "Descuento" },
            { id: 5, name: "Phone Charm Libelula", category: "charms", emoji: "", price: 26, description: "Inspirado en los tonos del mar", colors: ["#B8E0F0", "#C8F0E8"], badge: null },
            { id: 6, name: "....", category: "pulseras", emoji: "", price: 32, description: "Con detalles dorados y cuentas brillantes", colors: ["#FFD4A3", "#E8B4F3", "#FFB3D9"], badge: "Popular" },
            { id: 7, name: "....", category: "charms", emoji: "", price: 24, description: "Colores de frutas frescas", colors: ["#FFD4A3", "#FFB3D9", "#C8F0E8"], badge: "Promoción" },
            { id: 8, name: "....", category: "pulseras", emoji: "", price: 50, description: "Set de 2 pulseras coordinadas", colors: ["#FFB3D9", "#B8E0F0"], badge: "Promoción" }
        ];

        let cart = [];
        let currentFilter = 'all';

        document.addEventListener('DOMContentLoaded', () => {
            loadCart();
            renderProducts();
        });

        function renderProducts() {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = '';

            const filtered = currentFilter === 'all'
                ? products
                : products.filter(p => {
                    if (currentFilter === 'promocion') return p.badge === 'Promoción' || p.badge === 'Descuento';
                    return p.category === currentFilter;
                });

            filtered.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-image">
                        <span>${product.emoji}</span>
                        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category === 'charms' ? '📱 Charm' : '💎 Pulsera'}</div>
                        <div class="product-name">${product.name}</div>
                        <div class="product-description">${product.description}</div>
                        <div class="product-price">S/ ${product.price.toFixed(2)}</div>
                        <div class="product-colors">
                            ${product.colors.map((color, idx) =>
                                `<div class="color-dot ${idx === 0 ? 'selected' : ''}"
                                     style="background: ${color}"
                                     onclick="event.stopPropagation(); this.parentElement.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected')); this.classList.add('selected');">
                                </div>`
                            ).join('')}
                        </div>
                        <div class="product-quantity">
                            <button class="quantity-btn" onclick="event.stopPropagation(); changeQuantity(this, -1)">−</button>
                            <input type="number" class="quantity-input" value="1" min="1" onchange="this.value = Math.max(1, parseInt(this.value) || 1)">
                            <button class="quantity-btn" onclick="event.stopPropagation(); changeQuantity(this, 1)">+</button>
                        </div>
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id}, event)">
                            Agregar al Carrito
                        </button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        function filterProducts(filter, event) {
            currentFilter = filter;
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            if (event) event.target.classList.add('active');
            renderProducts();
        }

        function changeQuantity(btn, change) {
            const input = btn.parentElement.querySelector('.quantity-input');
            input.value = Math.max(1, parseInt(input.value) + change);
        }

        function addToCart(productId, event) {
            const product = products.find(p => p.id === productId);
            const card = event.target.closest('.product-card');
            const quantity = parseInt(card.querySelector('.quantity-input').value);
            const selectedColor = card.querySelector('.color-dot.selected').style.backgroundColor;

            cart.push({
                id: productId,
                name: product.name,
                emoji: product.emoji,
                price: product.price,
                quantity: quantity,
                color: selectedColor,
                timestamp: Date.now()
            });

            saveCart();
            updateCartUI();

            const btn = event.target;
            btn.textContent = '✓ Agregado';
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.textContent = 'Agregar al Carrito';
                btn.style.transform = 'scale(1)';
            }, 1500);
        }

        function saveCart() {
            try { localStorage.setItem('charmbeads_cart', JSON.stringify(cart)); } catch(e) {}
        }

        function loadCart() {
            try {
                const saved = localStorage.getItem('charmbeads_cart');
                cart = saved ? JSON.parse(saved) : [];
            } catch(e) { cart = []; }
            updateCartUI();
        }

        function updateCartUI() {
            const count = cart.length;
            document.getElementById('cartCount').textContent = count;

            const container = document.getElementById('cartItemsContainer');
            const paymentSection = document.getElementById('paymentSection');
            const summarySection = document.getElementById('cartSummarySection');
            const formSection = document.getElementById('orderFormSection');

            if (cart.length === 0) {
                container.innerHTML = '<div class="cart-empty">Tu carrito está vacío 🌸</div>';
                paymentSection.style.display = 'none';
                summarySection.style.display = 'none';
                formSection.style.display = 'none';
                return;
            }

            container.innerHTML = cart.map((item, idx) => `
                <div class="cart-item">
                    <div class="cart-item-emoji">${item.emoji}</div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-meta">
                            Cantidad: ${item.quantity} &nbsp;|&nbsp;
                            <span style="display:inline-block;width:12px;height:12px;background:${item.color};border-radius:50%;vertical-align:middle;"></span>
                        </div>
                        <div class="cart-item-price">S/ ${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                    <button class="remove-item-btn" onclick="removeFromCart(${idx})">Eliminar</button>
                </div>
            `).join('');

            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const shipping = subtotal > 100 ? 0 : 10;
            const total = subtotal + shipping;

            document.getElementById('subtotal').textContent = `S/ ${subtotal.toFixed(2)}`;
            document.getElementById('shipping').textContent = shipping === 0 ? 'Gratis 🎉' : `S/ ${shipping.toFixed(2)}`;
            document.getElementById('total').textContent = `S/ ${total.toFixed(2)}`;

            paymentSection.style.display = 'block';
            summarySection.style.display = 'block';
            formSection.style.display = 'block';
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            saveCart();
            updateCartUI();
        }

        function toggleCart() {
            document.getElementById('cartModal').classList.toggle('active');
            // Reset feedback on open
            document.getElementById('formFeedback').className = 'form-feedback';
            document.getElementById('formFeedback').textContent = '';
        }

        function showFeedback(type, message) {
            const el = document.getElementById('formFeedback');
            el.className = `form-feedback ${type}`;
            el.textContent = message;
        }

        function sendToSheets() {
            if (cart.length === 0) return;

            const name    = document.getElementById('clientName').value.trim();
            const phone   = document.getElementById('clientPhone').value.trim();
            const address = document.getElementById('clientAddress').value.trim();
            const district= document.getElementById('clientDistrict').value.trim();
            const notes   = document.getElementById('clientNotes').value.trim();

            if (!name || !phone || !address) {
                showFeedback('error', '⚠️ Por favor completa tu nombre, teléfono y dirección.');
                return;
            }

            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const shipping = subtotal > 100 ? 0 : 10;
            const total = subtotal + shipping;

            const btn = document.getElementById('submitOrderBtn');
            btn.classList.add('loading');
            btn.disabled = true;

            const formData = {
                name,
                phone,
                address: district ? `${address}, ${district}` : address,
                notes,
                items: cart.map(item => `${item.emoji} ${item.name} x${item.quantity}`).join('; '),
                subtotal: subtotal.toFixed(2),
                shipping,
                total: total.toFixed(2)
            };

            const scriptURL = 'https://script.google.com/macros/s/AKfycbwSC5L2D9_WCSusCMJT2w33OK42TyQEKFyD1yLlO7d3_vX3VkadtvxNFOvFM5Hp2xVL/exec';

            fetch(scriptURL, {
                method: 'POST',
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => {
                btn.classList.remove('loading');
                btn.disabled = false;

                if (data.status === 'success') {
                    showFeedback('success', `✅ ¡Pedido confirmado! Hola ${name}, nos contactaremos pronto al ${phone} 🎀`);
                    cart = [];
                    saveCart();
                    updateCartUI();
                    // Limpiar formulario
                    ['clientName','clientPhone','clientAddress','clientDistrict','clientNotes'].forEach(id => {
                        document.getElementById(id).value = '';
                    });
                } else {
                    showFeedback('error', '❌ Hubo un error al guardar. Intenta de nuevo.');
                }
            })
            .catch(() => {
                btn.classList.remove('loading');
                btn.disabled = false;
                showFeedback('error', '❌ No se pudo conectar. Revisa tu conexión e intenta de nuevo.');
            });
        }