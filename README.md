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

No se requieren variables de entorno para ejecutar el proyecto en modo desarrollo. El proyecto no utiliza configuración de base de datos ni servicios externos para el funcionamiento básico.

## Ejecución

### Modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la landing page.

Para acceder al formulario de encuesta beta, navega a [http://localhost:3000/beta/survey](http://localhost:3000/beta/survey).

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
│   │   ├── Screenshots.tsx  # Preview de la aplicación (placeholders)
│   │   └── Footer.tsx       # Pie de página
│   ├── beta/
│   │   └── survey/
│   │       └── page.tsx     # Página principal del formulario de encuesta
│   ├── components/
│   │   ├── CTA.tsx          # Componente de llamada a la acción
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
El proyecto está optimizado para despliegue en Vercel. Simplemente conecta tu repositorio y Vercel detectará automáticamente que es un proyecto Next.js.

### Docker
Ver la sección "Docker" arriba para instrucciones de construcción y ejecución.
