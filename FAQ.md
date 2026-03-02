# ❓ Preguntas Frecuentes (FAQ)

## 🚀 PUESTA EN MARCHA

### ¿Cuál es la forma más rápida de publicar mi tienda?
**Respuesta:** Netlify o Vercel (5 minutos)
1. Ve a netlify.com
2. Arrastra y suelta tu `tienda-charms.html`
3. Listo, tu tienda está online 🎉

### ¿Necesito pagar algo?
**Respuesta:** Completamente gratis
- HTML: Gratis
- Hosting: Gratis (Netlify, GitHub Pages, Vercel)
- Dominio personalizado: Opcional ($2-15/año)

## 💳 PAGOS

### ¿Es seguro guardar datos de tarjeta?
**Respuesta:** No guardamos datos de tarjeta en absoluto
- Usamos métodos manuales (Yape, Plin, Transferencia)
- El cliente inicia el pago en su app
- Tú solo recibes confirmación por WhatsApp/Google Sheets

### ¿Cómo veo cuánto dinero he ganado?
**Respuesta:** Mira tus Google Sheets o recibos bancarios
- Google Sheets automáticamente sumará los totales
- Agrega una columna con fórmula =SUM(H:H)

## 📱 PRODUCTOS Y CARRITO

### ¿Cómo agrego productos con múltiples tamaños?
**Respuesta:** Crea productos separados para cada tamaño
```javascript
{
    id: 11,
    name: "Charm Pequeño",
    price: 20,
    description: "Tamaño pequeño"
},
{
    id: 12,
    name: "Charm Mediano",
    price: 25,
    description: "Tamaño mediano"
},
{
    id: 13,
    name: "Charm Grande",
    price: 30,
    description: "Tamaño grande"
}
```


### ¿Cómo borro todo el historial de carritos?
**Respuesta:** Desde la consola del navegador (F12)
```javascript
localStorage.clear();
```

## 🎨 DISEÑO Y PERSONALIZACIÓN



### ¿Puedo usar mi logo en lugar del emoji?
**Respuesta:** Sí, reemplaza el emoji por una imagen
```javascript
{
    id: 1,
    name: "Producto",
    image: "https://link-a-tu-imagen.jpg",  // Agregamos imagen
}
```

Luego en renderProducts():
```javascript
<img src="${product.image}" style="width: 100%; height: 240px; object-fit: cover;">
```


## 📊 GOOGLE SHEETS

### ¿Cómo conecto Google Sheets automáticamente?
**Respuesta:** Sigue la guía en `GOOGLE_SHEETS_SETUP.md`
- Crear Google Sheet
- Crear Apps Script
- Desplegar como Web App
- Copiar URL en el HTML

### ¿Puede Google Sheets guardar muchos pedidos?
**Respuesta:** Sí, teóricamente ilimitado
- Google Sheets soporta +2 millones de celdas
- Para 1000 pedidos, solo necesitas ~8000 celdas
- Puedes trabajar con historiales de años

### ¿Puedo crear gráficos automáticos en Google Sheets?
**Respuesta:** Sí, Google Sheets tiene gráficos integrados
1. Selecciona los datos
2. Insertar > Gráfico
3. Google genera automáticamente


## 💬 WHATSAPP

### ¿Cómo configuro mi número de WhatsApp?
**Respuesta:** Busca esta línea:
```javascript
const whatsappURL = `https://wa.me/51XXXXXXXXX?text=...`;
```

Reemplaza `51XXXXXXXXX` con tu número:
- 51 = código de Perú
- 987654321 = tu número SIN el 0 inicial
- Ejemplo: 51987654321 (NO 051987654321)

### ¿Qué pasa si envío el mensaje a WhatsApp?
**Respuesta:** El cliente ve automáticamente el resumen del pedido
- Nombre, productos, cantidad, precios
- El cliente rellenat sus datos (nombre, dirección)
- Tú recibes el mensaje y confirmas


## 🌐 HOSTING Y DOMINIO

### ¿Cuál es el mejor hosting?
**Respuesta:** Para tienda estática, todos son igual:
| Plataforma | Precio | Facilidad | Velocidad |
|-----------|--------|-----------|-----------|
| GitHub Pages | Gratis | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Netlify | Gratis | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Vercel | Gratis | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Hostinger | $2.99/año | ⭐⭐⭐ | ⭐⭐⭐⭐ |

**Recomendación:** Netlify o Vercel (más fácil)

### ¿Necesito un dominio personalizado?
**Respuesta:** No es obligatorio, pero ayuda
- Sin dominio: `https://mi-tienda-charms.netlify.app`
- Con dominio: `https://www.mitiendadecharms.com`


## ⚡ RENDIMIENTO

### ¿Carga rápido mi tienda?
**Respuesta:** Sí, es un archivo estático
- Sin base de datos = sin esperas
- Sin servidor = sin latencia
- Carga en <1 segundo usualmente


## 🐛 PROBLEMAS COMUNES

### Mi carrito se borra cuando cierro el navegador
**Solución:** localStorage no está funcionando
- Revisa que no tienes privacidad extrema
- Intenta en navegador incógnito
- Borrar cookies


### Google Sheets no recibe datos
**Solución:** Apps Script mal configurado
1. Verifica que está publicado como "Web App"
2. Verifica que acceso es "Cualquiera"
3. Copia la URL completa (sin espacios)
4. Recarga la página del script


## 💡 TIPS PRO

### Truco 1: Agregar cupones de descuento
```javascript
{
    id: 99,
    name: "Cupón PRIMERACOMPRA",
    category: "promocion",
    price: 0,
    badge: "Cupón",
    description: "Descuento de S/ 10"
}
```

### Truco 2: Flash sales automáticas
```javascript
const hora = new Date().getHours();
if (hora >= 18 && hora <= 20) {
    product.badge = "Flash Sale -20%";
}
```

### Truco 3: Productos recomendados
```javascript
function getRecommended() {
    return products.filter(p => p.badge === "Popular");
}
```

### Truco 4: Newsletter básico
```javascript
function subscribeNewsletter() {
    const email = prompt("Tu email para ofertas especiales:");
    if (email) {
        localStorage.setItem('email', email);
        alert("¡Suscrito! Recibirás ofertas exclusivas");
    }
}
```

---

