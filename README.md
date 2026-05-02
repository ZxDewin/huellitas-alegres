# 🐾 Happy Paws - Guardería Canina

Un sitio web moderno y responsivo para una guardería canina profesional, diseñado para una clase.

## 📋 Características

✨ **Diseño Responsivo**
- Interfaz adaptada para dispositivos móviles, tablets y desktop
- Navegación intuitiva y fácil de usar

🏠 **Secciones Principales**
- **Inicio**: Presentación atractiva de la guardería
- **Servicios**: 6 servicios diferentes con precios
- **Sobre Nosotros**: Información de la empresa y estadísticas
- **Reservas**: Formulario completo para agendar servicios
- **Contacto**: Información de ubicación y redes sociales

📱 **Formulario de Reservas**
- Captura de información del dueño y del perro
- Selección de servicios disponibles
- Validación de datos en tiempo real
- Almacenamiento local de reservas (localStorage)

🎨 **Diseño Moderno**
- Colores atractivos y profesionales
- Gradientes y sombras modernas
- Animaciones suaves
- Efectos hover interactivos

## 🚀 Cómo Usar

1. **Abrir el archivo**: Abre `index.html` en tu navegador
   - Haz doble clic en el archivo, O
   - Arrastra el archivo a tu navegador

2. **Navegar por el sitio**:
   - Usa el menú de navegación en la parte superior
   - Haz clic en "Hacer una Reserva" para ir directamente al formulario
   - Usa smooth scrolling para una experiencia suave

3. **Hacer una reserva**:
   - Completa todos los campos requeridos
   - El formulario valida los datos automáticamente
   - Recibirás un mensaje de confirmación

## 📁 Estructura de Archivos

```
empresa-perritos/
├── index.html      # Página principal (estructura HTML)
├── styles.css      # Estilos y diseño
├── script.js       # Lógica interactiva y validaciones
└── README.md       # Este archivo
```

## 💾 Datos de Reservas

Las reservas se guardan en el navegador (localStorage). Para ver las reservas guardadas:

1. Abre la consola del navegador (F12)
2. Copia y pega en la consola: `obtenerReservas()`
3. Verás un array con todas las reservas guardadas

## 🎓 Para la Clase

Este proyecto es ideal para aprender:
- ✅ HTML semántico y estructura correcta
- ✅ CSS avanzado (Grid, Flexbox, Animaciones)
- ✅ JavaScript vanilla (DOM manipulation, eventos, validaciones)
- ✅ LocalStorage para persistencia de datos
- ✅ Responsive Design y Mobile-First
- ✅ Buenas prácticas de UX/UI

## 🛠️ Personalización

Puedes modificar fácilmente:

**Colores** (archivo `styles.css`):
```css
:root {
    --primary-color: #FF6B6B;      /* Rojo/Rosa */
    --secondary-color: #4ECDC4;    /* Turquesa */
    --dark-color: #2C3E50;         /* Gris oscuro */
}
```

**Contenido** (archivo `index.html`):
- Nombre de la guardería
- Servicios y precios
- Información de contacto
- Redes sociales

**Funcionalidad** (archivo `script.js`):
- Validaciones
- Almacenamiento de datos
- Animaciones

## 📞 Servicios Disponibles

| Servicio | Precio | Descripción |
|----------|--------|-------------|
| Guardería Diaria | $25/día | Cuidado durante el día con juegos y ejercicio |
| Hospedaje 24h | $40/noche | Hospedaje completo con alimentación |
| Baño y Aseo | $30/sesión | Baño profesional con productos de calidad |
| Entrenamiento | $50/sesión | Sesiones de entrenamiento básico/avanzado |
| Paseos Diarios | $15/paseo | Paseos supervisados con ejercicio controlado |
| Eventos Especiales | Consultar | Fiestas, playdates y actividades |

## 🌐 Compatibilidad

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera
- ✅ Todos los navegadores modernos

## 🎯 Mejoras Futuras

Para hacer el proyecto más completo, podrías:

1. Conectar con un servidor backend
2. Enviar emails de confirmación
3. Agregar galería de fotos
4. Implementar sistema de login
5. Agregar testimonios/reseñas
6. Integración con redes sociales
7. Sistema de pago online
8. Calendario de disponibilidad

## 📝 Notas

- Este es un proyecto educativo
- Los datos se guardan solo localmente en el navegador
- Para producción, necesitarías un servidor backend
- Las imágenes son emojis, puedes reemplazarlas con fotos reales

## 🐾 ¡Gracias por usar Happy Paws!

Hecho con ❤️ para los perros más felices de la ciudad.

---

**Autor**: Proyecto de clase para guardería canina  
**Fecha**: 2026  
**Licencia**: Libre para uso educativo
