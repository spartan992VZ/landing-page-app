# Airsoft Operations Landing Page

Landing page y formulario de encuesta beta para Airsoft Operations, una plataforma diseñada para la comunidad de Airsoft que permite organizar operaciones, encontrar jugadores y administrar equipos.

## Descripción

Este proyecto consiste en una landing page moderna y un formulario de encuesta multi-paso para capturar interés en la beta de la plataforma. La landing page presenta las características principales de la plataforma, mientras que el formulario de encuesta recopila información sobre roles, frecuencia de juego, problemas actuales, funcionalidades deseadas y datos de contacto de los usuarios interesados.

## Tecnologías

- **Next.js 16.2.7** - Framework React con App Router
- **React 19.2.4** - Biblioteca UI
- **TypeScript 5** - Tipado estático
- **TailwindCSS 4** - Framework CSS
- **Lucide React 1.27.0** - Biblioteca de iconos
- **Node.js 18+** - Entorno de ejecución

## Requisitos previos

- Node.js 18 o superior
- npm (viene incluido con Node.js)
- Git (para clonar el repositorio)

## Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd airsoft-landing
```

2. Instala las dependencias:
```bash
npm install
```

## Configuración

### Variables de Entorno

El proyecto requiere configuración de variables de entorno para el funcionamiento del formulario de encuesta. Copia el archivo `.env.example` a `.env` y completa los valores:

```bash
cp .env.example .env
```

**Variables requeridas para Google Forms:**

- `GOOGLE_FORM_ACTION_URL` - URL de acción del Google Form
- `GOOGLE_FORM_ENTRY_ROLE` - ID de entrada para el campo de rol
- `GOOGLE_FORM_ENTRY_FREQUENCY` - ID de entrada para frecuencia de juego
- `GOOGLE_FORM_ENTRY_PROBLEM` - ID de entrada para problema principal (permite múltiples selecciones)
- `GOOGLE_FORM_ENTRY_FEATURES` - ID de entrada para funcionalidades deseadas (permite múltiples selecciones)
- `GOOGLE_FORM_ENTRY_INTEREST` - ID de entrada para nivel de interés
- `GOOGLE_FORM_ENTRY_NAME` - ID de entrada para nombre
- `GOOGLE_FORM_ENTRY_EMAIL` - ID de entrada para email
- `GOOGLE_FORM_ENTRY_DISCORD` - ID de entrada para Discord

**Nota:** Estas variables son server-side only (no usar prefijo `NEXT_PUBLIC_`) por seguridad.

**Variables requeridas para Demos Interactivas:**

- `NEXT_PUBLIC_PLAYER_DEMO_URL` - URL de la demo del mockup Player (app móvil)
- `NEXT_PUBLIC_ORGANIZER_DEMO_URL` - URL de la demo del mockup Organizer (dashboard)

**Nota:** Estas variables son client-side (usar prefijo `NEXT_PUBLIC_`) para que estén disponibles en el navegador.

### Imágenes Requeridas

El proyecto requiere las siguientes imágenes en la carpeta `public/`:

- `/public/dashboard-preview.png` - Imagen del dashboard organizador para la sección Screenshots
- `/public/carrusel/appm1.png` a `appm6.png` - Imágenes del carrusel Hero (ya incluidas)
- `/public/logoapp.png` - Logo de fondo para Hero (ya incluido)

Si no tienes `dashboard-preview.png`, la sección Screenshots mostrará un placeholder.

## Ejecución

### Modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la landing page.

Para acceder al formulario de encuesta beta, navega a [http://localhost:3000/beta/survey](http://localhost:3000/beta/survey).

### Desarrollo Local con Demos Interactivas

Para visualizar las demos interactivas en la sección Preview, necesitas ejecutar los proyectos de mockup junto con la landing:

1. **Landing Page**:
   ```bash
   npm run dev
   ```
   → http://localhost:3000

2. **Player Mock (App Móvil)**:
   ```bash
   cd path/to/player-mock
   PORT=8443 npm run dev
   ```
   → http://localhost:8443

3. **Organizer Mock (Dashboard)**:
   ```bash
   cd path/to/organizer-mock
   PORT=8444 npm run dev
   ```
   → http://localhost:8444

Configura las URLs en tu archivo `.env`:
```bash
NEXT_PUBLIC_PLAYER_DEMO_URL=http://localhost:8443
NEXT_PUBLIC_ORGANIZER_DEMO_URL=http://localhost:8444
```

**Nota:** Los proyectos de mockup deben tener configurados los headers `X-Frame-Options: ALLOWALL` y `Content-Security-Policy: frame-ancestors *` en su configuración de servidor para permitir ser embebidos en iframe.

### Modo producción

```bash
npm run build
npm start
```

El servidor de producción estará disponible en [http://localhost:3000](http://localhost:3000).

## Testing

Actualmente el proyecto no tiene tests configurados.

## Build / Producción

Para generar una build de producción:

```bash
npm run build
```

El proyecto está configurado con `output: 'standalone'` en `next.config.ts` para optimizar el despliegue en contenedores Docker.

## Estructura del proyecto

```
airsoft-landing/
├── app/
│   ├── Landing/              # Componentes de la landing page
│   │   ├── Hero.tsx         # Sección principal con mockup
│   │   ├── Navbar.tsx       # Barra de navegación
│   │   ├── Features.tsx     # Carrusel de características
│   │   ├── Why.tsx          # Comparación problema/solución
│   │   ├── UserTypes.tsx    # Funcionalidades por rol
│   │   ├── Screenshots.tsx  # Preview de la aplicación (demos interactivas)
│   │   └── Footer.tsx       # Pie de página
│   ├── beta/
│   │   └── survey/
│   │       └── page.tsx     # Página principal del formulario de encuesta
│   ├── components/
│   │   ├── CTA.tsx          # Componente de llamada a la acción
│   │   ├── DemoCard.tsx     # Card para demo interactiva (Player/Organizer)
│   │   ├── DemoModal.tsx    # Modal para demo ampliada
│   │   └── survey/          # Componentes reutilizables del formulario
│   │       ├── QuestionStep.tsx    # Componente base para pasos de encuesta
│   │       ├── OptionCard.tsx      # Tarjeta de opción seleccionable
│   │       ├── ProgressBar.tsx    # Barra de progreso
│   │       ├── SurveyHeader.tsx   # Header del formulario
│   │       ├── SurveyNavigation.tsx # Navegación del formulario
│   │       ├── SurveyLayout.tsx   # Layout del formulario
│   │       ├── StepOne.tsx        # Paso 1: Selección de rol
│   │       ├── StepTwo.tsx        # Paso 2: Frecuencia de juego
│   │       ├── StepThree.tsx      # Paso 3: Problema principal
│   │       ├── StepFour.tsx       # Paso 4: Funcionalidades deseadas
│   │       ├── StepFive.tsx       # Paso 5: Nivel de interés
│   │       └── StepSix.tsx       # Paso 6: Datos de contacto
│   ├── types/
│   │   └── survey.ts        # Tipos TypeScript para la encuesta
│   ├── layout.tsx           # Layout raíz de la aplicación
│   ├── page.tsx             # Página principal (landing page)
│   └── globals.css          # Estilos globales
├── lib/
│   ├── adapters/            # Adaptadores para servicios externos
│   │   └── googleFormsAdapter.ts  # Adaptador para Google Forms
│   ├── config/              # Configuración centralizada
│   │   ├── googleFormsConfig.ts    # Configuración de Google Forms
│   │   └── demosConfig.ts         # Configuración de demos interactivas
│   └── types/               # Tipos compartidos
├── public/                  # Archivos estáticos
│   ├── carrusel/           # Imágenes del carrusel del Hero
│   ├── logo.png            # Logo principal
│   └── otro_logo2-removebg-preview.png # Logo transparente
├── Dockerfile              # Configuración para contenedor Docker
├── next.config.ts          # Configuración de Next.js
├── tsconfig.json           # Configuración de TypeScript
├── tailwind.config.ts      # Configuración de TailwindCSS
└── package.json            # Dependencias y scripts
```

## Arquitectura

### Landing Page
La landing page sigue una arquitectura de componentes modulares donde cada sección (Hero, Features, Why, UserTypes, Screenshots, CTA) es un componente independiente. El diseño utiliza un tema oscuro con acentos en color lime, optimizado para responsive design.

### Formulario de Encuesta
El formulario de encuesta utiliza un patrón de pasos secuenciales (StepOne a StepSix) que comparten un componente base reutilizable `QuestionStep`. Este componente maneja:

- Barra de progreso
- Header con título y subtítulo
- Renderizado de opciones (OptionCard)
- Navegación (anterior/siguiente)
- Estados de selección (única o múltiple)

Los pasos son:
1. **StepOne**: Selección de rol (jugador, organizador, ambos)
2. **StepTwo**: Frecuencia de juego
3. **StepThree**: Problema principal al organizar partidas
4. **StepFour**: Funcionalidades deseadas (selección múltiple, max 2)
5. **StepFive**: Nivel de interés en participar
6. **StepSix**: Formulario de contacto (nombre, email, discord)

El estado del formulario se gestiona centralmente en `app/beta/survey/page.tsx` usando el tipo `SurveyData`.

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo en http://localhost:3000 |
| `npm run build` | Genera una build de producción optimizada |
| `npm start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta ESLint para verificar el código |

## Dependencias externas

El proyecto no depende de servicios externos, bases de datos o APIs para su funcionamiento básico. El formulario de encuesta actualmente muestra los datos capturados en un alert (demo) y no persiste la información.

## Docker

El proyecto incluye un `Dockerfile` optimizado para despliegue en contenedores. Para construir y ejecutar:

```bash
# Construir la imagen
docker build -t airsoft-landing .

# Ejecutar el contenedor
docker run -p 3000:3000 airsoft-landing
```

## Solución de problemas

### El puerto 3000 ya está en uso
Si el puerto 3000 está ocupado, puedes especificar otro puerto:
```bash
npm run dev -- -p 3001
```

### Errores de compilación
Si encuentras errores de compilación, asegúrate de:
1. Tener Node.js 18+ instalado
2. Haber ejecutado `npm install` después de clonar
3. No tener archivos modificados en `node_modules`

## Desarrollo

### Estilos
El proyecto utiliza TailwindCSS 4. Los estilos globales están en `app/globals.css`. La paleta de colores principal usa zinc para fondos y lime como color de acento.

### Tipado
El proyecto usa TypeScript con configuración estricta. Los tipos de la encuesta están definidos en `app/types/survey.ts`.

### Componentes de encuesta
Al agregar nuevos pasos a la encuesta:
1. Crea un nuevo componente StepX en `app/components/survey/`
2. Utiliza `QuestionStep` como base para mantener consistencia
3. Actualiza `app/types/survey.ts` si necesitas nuevos tipos
4. Integra el paso en `app/beta/survey/page.tsx`

## Despliegue

### Vercel

El proyecto está optimizado para despliegue en Vercel. Sigue estos pasos:

1. **Conecta tu repositorio** a Vercel
2. **Configura las variables de entorno** en el dashboard de Vercel:
   - Ve a Settings > Environment Variables
   - Agrega todas las variables del archivo `.env.example`
3. **Despliega** - Vercel detectará automáticamente que es un proyecto Next.js

**Variables de entorno en Vercel:**
- Todas las variables deben agregarse sin el prefijo `NEXT_PUBLIC_`
- Asegúrate de configurarlas en el entorno de producción

### Docker

El proyecto incluye un `Dockerfile` optimizado para despliegue en contenedores. Para construir y ejecutar:

```bash
# Construir la imagen
docker build -t airsoft-landing .

# Ejecutar el contenedor
docker run -p 3000:3000 --env-file .env airsoft-landing
```

**Nota:** Asegúrate de pasar el archivo `.env` al contenedor o configurar las variables de entorno en tu plataforma de contenedores.

### Otros proveedores

El proyecto puede desplegarse en cualquier plataforma que soporte Next.js:
- **Netlify** - Configuración automática
- **Railway** - Configuración automática
- **AWS Amplify** - Configuración automática
- **Render** - Configuración automática

Asegúrate de configurar las variables de entorno en cada plataforma.
