# 🎀 Charm Beads - Tienda Online

Tienda estática de e-commerce para vender phone charms y pulseras de cuentas. Totalmente gratuita y funcional.

## ✨ Características

- ✅ Diseño pastel hermoso y moderno
- ✅ Carrito de compras con localStorage
- ✅ Filtros de productos (Charms, Pulseras, Promociones)
- ✅ Selección de colores por producto
- ✅ Integración con WhatsApp
- ✅ Exportación a Google Sheets
- ✅ Métodos de pago (Yape, Plin, Transferencia)
- ✅ Totalmente responsivo (móvil/tablet/desktop)
- ✅ Sin dependencias externas
- ✅ 100% Gratuito

## 🚀 Instalación Rápida

### Opción 1: GitHub Pages (Recomendado - Gratis)

1. **Crea una cuenta en [GitHub](https://github.com)**

2. **Crea un nuevo repositorio:**
   - Nombre: `[tu-usuario].github.io`
   - Hacer público
   - NO inicializar con README

3. **Sube el archivo:**
   - Descarga `tienda-charms.html`
   - Sube a tu repositorio como `index.html`
   - Tu tienda estará en: `https://[tu-usuario].github.io`

4. **Personalizá tu dominio (opcional):**
   - En Settings > Pages
   - Agrega un dominio personalizado

### Opción 2: Netlify (Gratis - Más fácil)

1. **Ve a [Netlify.com](https://www.netlify.com)**
2. **Conecta tu GitHub** o **arrastra el archivo HTML**
3. **Tu tienda estará en:** `https://[random].netlify.app`
4. **Agrega dominio personalizado gratis** (opcional)

### Opción 3: Vercel (Gratis)

1. **Ve a [Vercel.com](https://vercel.com)**
2. **Conecta GitHub o carga el archivo**
3. **Tu tienda estará lista al instante**

## ⚙️ Configuración Personalizada

### Cambiar Nombre de la Tienda

En el HTML, busca:
```html
<div class="logo">✨ Charm Beads</div>
```

Cambia por:
```html
<div class="logo">✨ Tu Nombre</div>
```

### Agregar Tus Productos

En la sección de `<script>`, busca `const products = [` y modifica:

```javascript
{
    id: 1,
    name: "Nombre del Producto",
    category: "charms", // o "pulseras"
    emoji: "🌸",
    price: 25,
    description: "Descripción del producto",
    colors: ["#FFB3D9", "#E8B4F3", "#B8E0F0"],
    badge: "Popular" // o "Nuevo", "Descuento", "Promoción", null
}
```

### Configurar WhatsApp

1. Obtén tu número de WhatsApp con código de país (ej: 51987654321)
2. En la función `sendToWhatsApp()`, busca:
```javascript
const whatsappURL = `https://wa.me/51XXXXXXXXX?text=${encodedMessage}`;
```

3. Reemplaza `51XXXXXXXXX` con tu número:
```javascript
const whatsappURL = `https://wa.me/51987654321?text=${encodedMessage}`;
```

### Cambiar Colores Pastel

Personaliza la paleta en `:root`:

```css
:root {
    --primary: #FFB3D9;      /* Rosa pastel */
    --secondary: #E8B4F3;    /* Púrpura pastel */
    --accent: #B8E0F0;       /* Azul pastel */
    --warm: #FFD4A3;         /* Durazno pastel */
    --mint: #C8F0E8;         /* Menta pastel */
}
```

## 💳 Métodos de Pago

### Configurar en la Tienda

En el modal del carrito, busca `payment-methods` y actualiza:

```html
<div class="payment-method">
    <strong>Tu Banco</strong>
    Número de cuenta: XXXXXXXXXXXX<br>
    CCI: XXXXXXXXXXXXXXXXXXXX
</div>
```

## 📊 Google Sheets Integration

Para guardar pedidos automáticamente en Google Sheets:

1. **Ve a [Google Forms](https://forms.google.com)**
2. **Crea un formulario con:**
   - Nombre
   - Teléfono
   - Dirección
   - Productos (párrafo)
   - Monto Total

3. **En el HTML, en la función `sendToSheets()`:**
   ```javascript
   // Obtén el ID de tu formulario de Google
   const formID = "tu-id-aqui";
   ```

## 🎨 Personalizar Emojis

Cada producto usa un emoji. Cámbialos según tu preferencia:

- Charms: 🌸 🌺 🌊 🍑 ✨ 💎
- Pulseras: 🌈 💎 ⭐ 👯 💜 🎀

## 📱 Responsive Design

La tienda se adapta automáticamente a:
- Móviles (320px+)
- Tablets (768px+)
- Desktops (1024px+)

## 🔒 Seguridad

- ✅ No hay base de datos (datos en localStorage del cliente)
- ✅ Sin servidor (estático)
- ✅ Sin credenciales expuestas
- ✅ HTTPS automático (GitHub Pages, Netlify, Vercel)

## 🌐 Dominio Personalizado

### Comprar Dominio

Opciones baratas:
- **Namecheap** - $0.88/año (primer año)
- **Google Domains** - $12/año
- **Hostinger** - $2.99/año

### Conectar Dominio

Si usas **GitHub Pages**:
1. Compra el dominio
2. En el DNS del dominio, apunta a GitHub:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. En GitHub > Settings > Pages > Custom domain

Si usas **Netlify/Vercel**:
1. Ellos te dan instrucciones automáticas
2. Muy fácil de configurar

## 💰 Costos

- **HTML/CSS/JS:** Gratis
- **Hosting:** Gratis (GitHub Pages, Netlify, Vercel)
- **Dominio personalizado:** $2-12/año (opcional)
- **Total:** Gratis o ~$5/año con dominio

## 📈 Siguientes Pasos

### Mejoras Futuras

1. **Backend Simple:**
   - Node.js + Express
   - Base de datos (MongoDB gratis en Atlas)
   - Pagos reales (Stripe, MercadoPago)

2. **E-mail:**
   - SendGrid (gratis)
   - Mailchimp (gratis)

3. **Analytics:**
   - Google Analytics (gratis)
   - Hotjar (gratis)

4. **CMS:**
   - Strapi (gratis self-hosted)
   - Contentful (gratis plan)

## ❓ Preguntas Frecuentes

**P: ¿Cuánto tarda en cargarse?**
R: Menos de 1 segundo. Es un archivo estático.

**P: ¿Pierdo datos si cierro el navegador?**
R: Los datos del carrito se guardan en localStorage. Se mantienen hasta que limpies el historial.

**P: ¿Puedo vender sin WhatsApp?**
R: Sí, usa el botón de Google Sheets o adapta el código.

**P: ¿Es seguro para pagos?**
R: No guarda datos de tarjetas. Los pagos son manuales (Yape, Plin, transferencia).

**P: ¿Puedo cambiar los colores?**
R: Sí, edita las variables CSS en `:root`

## 🆘 Soporte

- **Documentación:** README.md
- **Comunidad:** Stack Overflow (etiqueta: html-css-javascript)
- **GitHub Issues:** Si usas GitHub Pages

## 📄 Licencia

Libre para usar, modificar y distribuir. Créate un imperio 👑

---

**Hecho con 💜 para emprendedoras**

¿Preguntas? ¿Feedback? ¡Espero que te vaya increíble con tu tienda!

Próxima meta: **1000 pedidos** 🎉
