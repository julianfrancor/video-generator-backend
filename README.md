# 🛠️ Shopify Video Generator - Backend

Este es el backend de un sistema automatizado para generar videos promocionales de productos en una tienda de Shopify utilizando **Make.com** y **ElevenLabs**.

## 🔗 Funcionalidad

Cuando un usuario hace clic en un botón dentro del panel de administración de Shopify (usando una app personalizada), se envía la información del producto a este backend. Este, a su vez, dispara un escenario en **Make.com**, el cual:

1. Genera un storyboard usando OpenAI.
2. Crea el video con JSON2Video.
3. Genera audio con ElevenLabs.
4. Publica el resultado en Instagram como Reel (opcional).

---

## ⚙️ Tecnologías usadas

- Node.js
- Express
- Make.com (escenario externo)
- ElevenLabs (API de voz)
- JSON2Video (render de video)
- Shopify Admin (App personalizada)

---

## 🚀 Endpoints

### POST `/api/generate-video`

Dispara la generación del video con la información del producto.

#### Request Body

```json
{
  "title": "Nombre del producto",
  "bodyHtml": "Descripción en HTML",
  "vendor": "Marca o proveedor",
  "handle": "slug-shopify",
  "image": "https://cdn.shopify.com/..."
}
```

#### Respuesta exitosa

```json
{
  "message": "Video request sent to Make"
}
```
