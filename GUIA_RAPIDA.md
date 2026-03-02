# ⚡ Guía Rápida de Cambios

## 1️⃣ Cambiar Nombre de la Tienda

**Busca en el HTML:**
```html
<div class="logo">✨ Charm Beads</div>
<p class="tagline">Accesorios únicos hechos con amor</p>
```

**Cambia por:**
```html
<div class="logo">✨ Mi Tienda</div>
<p class="tagline">Los mejores accesorios de la ciudad</p>
```

## 2️⃣ Cambiar Paleta de Colores

**Busca en CSS:**
```css
:root {
    --primary: #FFB3D9;      /* Rosa pastel */
    --secondary: #E8B4F3;    /* Púrpura pastel */
    --accent: #B8E0F0;       /* Azul pastel */
    --warm: #FFD4A3;         /* Durazno pastel */
    --mint: #C8F0E8;         /* Menta pastel */
    --text-dark: #6B5B7F;    /* Texto oscuro */
}
```

**Opciones de paletas:**

### Pastel Rosa Intenso
```css
--primary: #FF69B4;      /* Hot pink */
--secondary: #FFB6D9;    /* Rosa claro */
--accent: #FFC0CB;       /* Rosa muy claro */
```

### Pastel Morado Sutil
```css
--primary: #DDA0DD;      /* Plum */
--secondary: #EE82EE;    /* Violeta */
--accent: #DDA0DD;       /* Plum */
```

### Pastel Tropical
```css
--primary: #FFB347;      /* Naranja pastel */
--secondary: #98D8C8;    /* Verde agua */
--accent: #F7DC6F;       /* Amarillo pastel */
```

## 3️⃣ Agregar/Editar Productos

**Busca en JavaScript:**
```javascript
const products = [
    {
        id: 1,
        name: "Phone Charm Pastel Dreams",
        category: "charms",
        emoji: "🌸",
        price: 25,
        description: "Charm decorativo con cuentas en tonos pastel",
        colors: ["#FFB3D9", "#E8B4F3", "#B8E0F0"],
        badge: "Popular"
    },
    // ... más productos
];
```

**Para AGREGAR un producto, copia esto y pégalo:**
```javascript
{
    id: 9,  // Incrementa el ID
    name: "Nombre de tu producto",
    category: "charms",  // o "pulseras"
    emoji: "🎀",  // Tu emoji preferido
    price: 35,  // Precio en soles
    description: "Descripción breve del producto",
    colors: ["#FFB3D9", "#E8B4F3"],  // Colores disponibles
    badge: null  // O "Popular", "Nuevo", "Descuento", "Promoción"
}
```

### Emojis recomendados por categoría:

**Phone Charms:**
- 🌸 🌺 🌻 🌷 🌹
- 🎀 🎁 ✨ 💎 👑
- 🌊 🍑 🍋 🍒 🍓
- 🦋 🐝 🦢 ⭐ 💫

**Pulseras:**
- 💎 💍 👑 ✨
- 🌈 🌟 ⭐ 💫
- 🎀 🎁 💝 💜
- 👯 👯‍♀️ 💕 💖

## 4️⃣ Cambiar Precio de Envío

**Busca en JavaScript:**
```javascript
const shipping = subtotal > 100 ? 0 : 10;
```

**Explicación:**
- Si la compra es mayor a S/ 100, el envío es gratis
- Si no, el envío cuesta S/ 10

**Para cambiar:**
```javascript
const shipping = subtotal > 150 ? 0 : 15;  // Gratis si > S/ 150, sino S/ 15
```

## 5️⃣ Configurar Número de WhatsApp

**Busca en JavaScript:**
```javascript
const whatsappURL = `https://wa.me/51XXXXXXXXX?text=${encodedMessage}`;
```

**Tu número debe tener:**
- Código de país: 51 (Perú)
- Número sin el 0 inicial
- Ejemplo: 51987654321 (NO 051987654321)

**Reemplaza:**
```javascript
const whatsappURL = `https://wa.me/51987654321?text=${encodedMessage}`;
```

**Para probarlo:** 
- Haz una compra prueba
- Click en "Enviar a WhatsApp"
- Te abrirá WhatsApp directamente

## 6️⃣ Agregar Métodos de Pago

**Busca en HTML:**
```html
<div class="payment-methods">
    <h4>💳 Métodos de Pago</h4>
    <div class="payment-method">
        <strong>Transferencia Bancaria</strong>
        Banco: BCP / Scotiabank<br>
        Contacta para más detalles
    </div>
    <!-- ... más métodos -->
</div>
```

**Para AGREGAR un método:**
```html
<div class="payment-method">
    <strong>MercadoPago</strong>
    Enviamos un link de pago<br>
    Seguro y rápido
</div>
```

## 7️⃣ Cambiar Información de Contacto en Footer

**Busca en HTML:**
```html
<footer>
    <div class="footer-content">
        <h3>Charm Beads</h3>
        <div class="footer-links">
            <a href="#instagram">Instagram</a>
            <a href="#whatsapp">WhatsApp</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#about">Sobre Nosotros</a>
        </div>
        <p class="footer-credit">Hecho con 💜 en Chepén, La Libertad</p>
    </div>
</footer>
```

**Cambia:**
```html
<footer>
    <div class="footer-content">
        <h3>Mi Tienda de Charms</h3>
        <div class="footer-links">
            <a href="https://instagram.com/mi-usuario">Instagram</a>
            <a href="https://wa.me/51987654321">WhatsApp</a>
            <a href="https://maps.google.com/?q=mi+ubicacion">Ubicación</a>
            <a href="#about">Sobre Nosotros</a>
        </div>
        <p class="footer-credit">Hecho con 💜 en [Tu Ciudad]</p>
    </div>
</footer>
```

## 8️⃣ Cambiar Fuentes (Tipografía)

**Para fuentes más ELEGANTES:**

Busca al inicio del CSS:
```html
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
```

Opciones alternativas:

### Fuente Elegante + Moderna:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Cormorant+Garamond:wght@600;700&display=swap" rel="stylesheet">
```

Luego cambia en CSS:
```css
body {
    font-family: 'Poppins', sans-serif;
}

.logo, .hero h1, .product-name {
    font-family: 'Cormorant Garamond', serif;
}
```

### Fuente Playful/Divertida:
```html
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;600;700&family=Caveat:wght@600;700&display=swap" rel="stylesheet">
```

## 9️⃣ Cambiar Cantidad de Columnas (Móvil/Desktop)

**Busca en CSS:**
```css
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
}
```

**Para 2 columnas en desktop:**
```css
grid-template-columns: repeat(2, 1fr);
```

**Para 3 columnas:**
```css
grid-template-columns: repeat(3, 1fr);
```

**Para 4 columnas:**
```css
grid-template-columns: repeat(4, 1fr);
```

## 🔟 Agregar Descuentos

Para un producto con descuento:

```javascript
{
    id: 10,
    name: "Pulsera Promoción",
    category: "pulseras",
    emoji: "🎉",
    price: 20,  // Precio con descuento
    originalPrice: 30,  // Precio original (opcional)
    description: "Descuento especial",
    colors: ["#FFB3D9"],
    badge: "Descuento"
}
```

Luego en la tarjeta del producto, muestra:

```javascript
<div class="product-price">
    <span style="text-decoration: line-through; opacity: 0.6;">S/ ${product.originalPrice}</span>
    S/ ${product.price.toFixed(2)}
</div>
```

---

## 🎨 Cheat Sheet de Colores Pastel

```css
/* Pasteles clásicos */
#FFB3D9 - Rosa pastel
#E8B4F3 - Púrpura pastel
#B8E0F0 - Azul pastel
#FFD4A3 - Durazno pastel
#C8F0E8 - Menta pastel

/* Más opciones */
#FFE5EC - Rosa muy claro
#F8E5FF - Púrpura muy claro
#E5F5FF - Azul muy claro
#FFF5E5 - Naranja muy claro
#E5FFF5 - Verde muy claro

/* Pasteles más saturados */
#FF99CC - Rosa más fuerte
#DD88EE - Púrpura más fuerte
#99DDFF - Azul más fuerte
#FFCC99 - Naranja más fuerte
#99FFDD - Verde más fuerte
```

