# API Documentation - Survey Submission

## Endpoint: POST /api/survey

### Descripción
Este endpoint recibe datos del formulario de encuesta beta y los envía a Google Forms a través de un adapter server-side. Todas las configuraciones de Google Forms se manejan exclusivamente en el servidor por seguridad.

### URL
```
POST /api/survey
```

### Headers
```
Content-Type: application/json
```

### Request Body

El endpoint espera un objeto JSON con la siguiente estructura:

```typescript
{
  role: string;              // Rol del usuario ("player", "organizer", "both")
  frequency: string;          // Frecuencia de juego
  painPoint: string;         // Problema principal al organizar partidas
  features: string[];        // Funcionalidades deseadas (array, max 2)
  engagement: string;        // Nivel de interés en participar
  name?: string;             // Nombre del usuario (opcional)
  email?: string;            // Email del usuario (opcional)
  discord?: string;          // Usuario de Discord (opcional)
}
```

### Campos Requeridos
- `role` - Rol del usuario (obligatorio)

### Campos Opcionales
- `name` - Nombre del usuario
- `email` - Email del usuario
- `discord` - Usuario de Discord

### Ejemplo de Request

```json
{
  "role": "player",
  "frequency": "weekly",
  "painPoint": "coordination",
  "features": ["calendar", "chat"],
  "engagement": "high",
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "discord": "juanperez#1234"
}
```

### Response

#### Success (200)
```json
{
  "message": "Survey submitted successfully"
}
```

#### Error (400)
```json
{
  "error": "Role is required"
}
```

#### Error (500)
```json
{
  "error": "Submission failed"
}
```

### Códigos de Estado HTTP

| Código | Descripción |
|--------|-------------|
| 200 | Encuesta enviada exitosamente |
| 400 | Request inválido (campo requerido faltante) |
| 500 | Error interno del servidor o fallo en envío a Google Forms |

### Configuración Requerida

El endpoint requiere las siguientes variables de entorno configuradas en el servidor:

- `GOOGLE_FORM_ACTION_URL` - URL de acción del Google Form
- `GOOGLE_FORM_ENTRY_ROLE` - ID de entrada para rol
- `GOOGLE_FORM_ENTRY_FREQUENCY` - ID de entrada para frecuencia
- `GOOGLE_FORM_ENTRY_PAIN_POINT` - ID de entrada para problema principal
- `GOOGLE_FORM_ENTRY_FEATURES` - ID de entrada para funcionalidades
- `GOOGLE_FORM_ENTRY_ENGAGEMENT` - ID de entrada para nivel de interés
- `GOOGLE_FORM_ENTRY_NAME` - ID de entrada para nombre
- `GOOGLE_FORM_ENTRY_EMAIL` - ID de entrada para email
- `GOOGLE_FORM_ENTRY_DISCORD` - ID de entrada para Discord

### Seguridad

- Todas las variables de entorno son server-side only (sin prefijo `NEXT_PUBLIC_`)
- Los datos de Google Forms nunca se exponen al cliente
- Validación básica de campos requeridos en el servidor

### Errores Comunes

1. **Role is required (400)** - El campo `role` no está presente en el request
2. **Invalid request body (400)** - El cuerpo del request no es un objeto JSON válido
3. **Submission failed (500)** - Error al enviar datos a Google Forms (verificar configuración de variables de entorno)
4. **Internal server error (500)** - Error inesperado en el servidor

### Ejemplo de Uso con fetch

```javascript
const submitSurvey = async (surveyData) => {
  try {
    const response = await fetch('/api/survey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(surveyData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Success:', result.message);
    } else {
      const error = await response.json();
      console.error('Error:', error.error);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};
```

### Notas de Implementación

- El endpoint utiliza un adapter (`googleFormsAdapter`) para abstraer la lógica de envío a Google Forms
- Los datos se validan antes de enviar al adapter
- Los errores se loguean en consola para debugging
- El endpoint está diseñado para ser stateless (no mantiene sesión)
