# Portafolio

Portfolio personal construido con Next.js 16, React 19 y Tailwind CSS 4. El proyecto combina una presentacion tipo wireframe/editorial con contenido real, soporte bilingue (ES/EN), tema claro/oscuro y un flujo de contacto que persiste mensajes en MongoDB.

## Caracteristicas

- Home seccionado con navegacion, hero, about, proyectos, skills, testimonials y contacto.
- Selector de idioma persistido en `localStorage`.
- Cambio de tema con `next-themes`.
- Animaciones de entrada por seccion y efecto parallax en escritorio.
- Formulario de contacto conectado a `POST /api/contact`.
- Panel de mensajes en `/messages` para consultar registros guardados en MongoDB.
- Integracion con Vercel Analytics.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- MongoDB
- `next-themes`
- `@radix-ui/react-avatar`
- `@radix-ui/react-toast`
- `lucide-react`
- `react-icons`

## Estructura principal

- `app/page.tsx`: pagina principal con home responsive y logica de animacion/idioma.
- `app/messages/page.tsx`: vista para leer mensajes del contacto con llave de administracion.
- `app/api/contact/route.ts`: API para guardar y listar mensajes.
- `components/sections/home/`: secciones del sitio principal.
- `components/controls/`: switches de idioma y tema.
- `components/providers/`: provider de tema.
- `components/ui/`: primitives reutilizables de UI.
- `lib/mongodb.ts`: conexion a MongoDB con cache para serverless.

## Requisitos

- Node.js 20 o superior.
- pnpm recomendado, aunque tambien funciona `npm`.
- Una base de datos MongoDB accesible desde tu entorno local o desde Vercel.

## Instalacion

```bash
pnpm install
```

## Variables de entorno

Crea un archivo `.env.local` con estos valores:

```bash
MONGODB_URI="mongodb+srv://..."
MONGODB_DB_NAME="portfolio"
MONGODB_CONTACT_COLLECTION="contact_messages"
CONTACT_ADMIN_KEY="una-clave-secreta-larga"
```

Si no configuras `MONGODB_DB_NAME` o `MONGODB_CONTACT_COLLECTION`, el proyecto usa los valores por defecto mostrados arriba.

## Desarrollo

```bash
pnpm dev
```

Abre `http://localhost:3000` para ver el sitio.

## Scripts

- `pnpm dev`: inicia el servidor de desarrollo.
- `pnpm build`: compila la aplicacion para produccion.
- `pnpm start`: ejecuta la version compilada.
- `pnpm lint`: corre ESLint en todo el proyecto.

## Contacto y MongoDB

El formulario de contacto envia datos a `POST /api/contact` y guarda:

- nombre
- correo
- mensaje
- fecha de creacion
- estado
- fuente
- IP y user agent

La ruta `GET /api/contact` devuelve mensajes recientes y exige la cabecera `x-admin-key` con el valor de `CONTACT_ADMIN_KEY`.

## Mensajes

La pagina `/messages` permite consultar mensajes guardados en MongoDB. Ingresa la llave de administracion para cargar hasta 50 mensajes recientes.

## Despliegue en Vercel

Antes de desplegar, confirma que estas variables esten cargadas en el proyecto:

- `MONGODB_URI`
- `MONGODB_DB_NAME`
- `MONGODB_CONTACT_COLLECTION`
- `CONTACT_ADMIN_KEY`

Tambien verifica que tu cluster de MongoDB permita conexiones desde Vercel.

## Notas de implementacion

- El idioma seleccionado se guarda en `localStorage` bajo `portfolio-lang`.
- El layout usa `app/globals.css`; la hoja `styles/globals.css` no se usa.
- El proyecto incluye una capa de UI basada en componentes reutilizables dentro de `components/ui`.

## Rutas

- `/`: pagina principal del portfolio.
- `/messages`: panel para leer mensajes del contacto.
- `/api/contact`: API de contacto.
