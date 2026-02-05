# Guía de despliegue a Vercel

## Opción 1: Vía CLI de Vercel (Recomendado)

### 1. Instalar Vercel CLI
```bash
npm i -g vercel
```

### 2. Iniciar sesión en Vercel
```bash
vercel login
```

### 3. Desplegar el proyecto
```bash
vercel
```

Sigue las instrucciones:
- ¿Set up and deploy? → **Y**
- ¿Which scope? → Selecciona tu cuenta
- ¿Link to existing project? → **N** (primera vez)
- ¿What's your project's name? → `programa-obsesion` (o el que prefieras)
- ¿In which directory is your code located? → **./** (Enter)
- ¿Override settings? → **N**

### 4. Desplegar a producción
```bash
vercel --prod
```

## Opción 2: Vía GitHub + Vercel Dashboard

### 1. Inicializar Git (si no lo has hecho)
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Crear repositorio en GitHub
- Ve a github.com
- Crea un nuevo repositorio
- Sigue las instrucciones para subir el código

### 3. Conectar con Vercel
- Ve a vercel.com
- Importa el repositorio de GitHub
- Vercel detectará automáticamente Next.js
- Haz clic en "Deploy"

## Variables de entorno (si las necesitas)

Si necesitas variables de entorno:
1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Añade las variables necesarias

## Notas importantes

- El proyecto está configurado para Next.js 14
- Las imágenes en `/public` se servirán automáticamente
- El build se ejecutará automáticamente en cada push (si usas Git)
