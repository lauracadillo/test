#  Integración Google Sheets + Apps Script

Guía para guardar automáticamente los pedidos en Google Sheets.

## Paso 1: Crear Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una hoja nueva
3. Renómbrala: "Pedidos Charm Beads"
4. Crea estas columnas:
   - A: Fecha
   - B: Nombre
   - C: Teléfono
   - D: Dirección
   - E: Productos
   - F: Subtotal
   - G: Envío
   - H: Total

## Paso 2: Crear Apps Script

1. En tu Google Sheet, ve a **Extensiones > Apps Script**
2. Elimina el código que viene por defecto
3. Copia este código:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Obtén los datos enviados
    const data = JSON.parse(e.postData.contents);
    
    // Agregar nueva fila
    sheet.appendRow([
      new Date().toLocaleString('es-PE'),
      data.name,
      data.phone,
      data.address,
      data.items,
      data.subtotal,
      data.shipping,
      data.total
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Para testing
function doGet(e) {
  return ContentService.createTextOutput('Apps Script activo');
}
```

4. Guarda (Ctrl+S)
5. Nombre: "Guardar Pedidos"

## Paso 3: Desplegar como Web App

1. Arriba, click en **"Desplegar"**
2. Selecciona **"Nuevo despliegue"**
3. Tipo: **"Aplicación web"**
4. Ejecutar como: Tu email
5. Quién tiene acceso: **"Cualquiera"**
6. Click en **"Desplegar"**
7. Copia la URL: `https://script.google.com/macros/d/...`

## Paso 4: Actualizar el HTML

En tu archivo `tienda-charms.html`, busca la función `sendToSheets()`:

```javascript
function sendToSheets() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;

    // Pide datos al cliente
    const name = prompt('¿Tu nombre?');
    const phone = prompt('¿Tu teléfono?');
    const address = prompt('¿Tu dirección?');

    if (name && phone && address) {
        const formData = {
            name: name,
            phone: phone,
            address: address,
            items: cart.map(item => `${item.name} (${item.quantity})`).join('; '),
            subtotal: subtotal.toFixed(2),
            shipping: shipping,
            total: total.toFixed(2)
        };

        // REEMPLAZA ESTA URL CON LA DE TU APPS SCRIPT
        const scriptURL = 'https://script.google.com/macros/d/TU_ID_AQUI/usercontent';

        fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert(`✅ ¡Pedido registrado!\n\nNombre: ${name}\nTotal: S/ ${total.toFixed(2)}\n\nNos contactaremos pronto.`);
                cart = [];
                saveCart();
                updateCartUI();
                toggleCart();
            } else {
                alert('Error al guardar. Intenta de nuevo.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al conectar con el servidor.');
        });
    }
}
```

## Alternativa: Usar Google Form (Más Simple)

Si prefieres no usar Apps Script:

1. Ve a [Google Forms](https://forms.google.com)
2. Crea un formulario con campos:
   - Nombre (texto corto)
   - Teléfono (texto corto)
   - Dirección (párrafo)
   - Productos (párrafo)
   - Total (número)

3. En tu tienda, usa este código modificado:

```javascript
function sendToSheets() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;

    const name = prompt('¿Tu nombre?');
    const phone = prompt('¿Tu teléfono?');
    const address = prompt('¿Tu dirección?');

    if (name && phone && address) {
        // ID de tu Google Form
        const formID = '1FAIpQLSeXXXXXXXXXXXXXX';
        
        const formData = new FormData();
        // Reemplaza estos números con los entry IDs reales
        formData.append('entry.123456789', name);
        formData.append('entry.987654321', phone);
        formData.append('entry.555555555', address);
        formData.append('entry.444444444', cart.map(item => `${item.name} (${item.quantity})`).join('; '));
        formData.append('entry.333333333', total.toFixed(2));

        fetch(`https://docs.google.com/forms/u/0/d/e/${formID}/formResponse`, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        })
        .then(() => {
            alert(`✅ ¡Pedido registrado!\n\nNombre: ${name}\nTotal: S/ ${total.toFixed(2)}\n\nNos contactaremos pronto.`);
            cart = [];
            saveCart();
            updateCartUI();
            toggleCart();
        })
        .catch(() => {
            alert('Datos guardados localmente. Por favor contacta por WhatsApp para confirmar.');
        });
    }
}
```

## ¿Cómo Obtener Entry IDs?

1. Abre tu Google Form
2. Click en **Vista previa** (ojo de abajo a la derecha)
3. Inspecciona (F12) el HTML
4. Busca `name="entry.XXXXXX"`
5. Los números son tus entry IDs

## Datos en Tiempo Real

Una vez configurado:
- Cada compra se guarda automáticamente
- Ves los datos en tiempo real en Google Sheets
- Puedes crear gráficos y reportes
- Los datos están siempre respaldados

## Consejos de Seguridad

✅ **Bueno:**
- Google Sheets auto-respalda
- No expones credenciales
- Es gratis y confiable

⚠️ **Considera:**
- Para mucho volumen, usa una base de datos real
- Considera migrar a Supabase, Firebase, o MongoDB gratis

## Troubleshooting

**P: ¿Me dice "error" al guardar?**
- Verifica que copiaste la URL correctamente
- Asegúrate que el Apps Script está publicado

**P: ¿Los datos no aparecen en el sheet?**
- Recarga la página del script
- Verifica los permisos (Cualquiera)
- Abre el Sheet en una pestaña distinta

**P: ¿Quiero que responda un correo automático?**

En el Apps Script, agrega:

```javascript
function enviarConfirmacion(email, nombre, total) {
  const message = `
    Hola ${nombre},
    
    Recibimos tu pedido por S/ ${total}
    
    Nos contactaremos en 24 horas para confirmar.
    
    ¡Gracias por comprar en Charm Beads!
  `;
  
  MailApp.sendEmail(email, "Pedido Recibido - Charm Beads", message);
}
```

---

Con esto tu tienda está completamente automatizada 🚀
