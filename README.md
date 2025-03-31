# Proyecto de Blog Personal

## Descripción
Este proyecto es un blog desarrollado con Next.js y Supabase. Fue creado con el objetivo de probar nuevas tecnologías y poder tener un espacio propio para expresar mis ideas. 
La aplicación permite gestionar artículos con imágenes, categorías y comentarios, además de ofrecer una experiencia moderna y optimizada.

## Tecnologías utilizadas
- **Next.js**: Framework de React para el desarrollo de aplicaciones web modernas y optimizadas.
- **Supabase**: Plataforma backend como servicio (BaaS) basada en PostgreSQL.
- **Tailwind CSS**: Framework de CSS para un diseño flexible y personalizable.
- **React Markdown**: Para la renderización de contenido en formato Markdown.
- **Vercel**: Plataforma utilizada para el despliegue del proyecto.

## Estructura del proyecto
```
/project-root
│── app/
│   ├── articles/         # Páginas de artículos
│   │   ├── [id]/         # Página individual de un artículo
│   │   ├── page.js       # Listado de artículos
│   ├── layout.js         # Configuración del layout global
│   ├── page.js           # Página principal
│── lib/
│   ├── supabase.js       # Configuración de Supabase
│── public/
│   ├── images/           # Imágenes públicas
│── styles/
│   ├── globals.css       # Estilos globales
│── .gitignore            # Archivos ignorados por Git
│── next.config.js        # Configuración de Next.js
│── package.json          # Dependencias y scripts
│── README.md             # Documentación del proyecto
```

## 🚀 Instalación y ejecución
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/usuario/repo.git
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Configurar variables de entorno en un archivo `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
   ```
4. Ejecutar el proyecto en desarrollo:
   ```sh
   npm run dev
   ```

## Despliegue en Vercel
Este proyecto está configurado para desplegarse en Vercel. 
1. Crear un nuevo proyecto en [Vercel](https://vercel.com/).
2. Conectar el repositorio de GitHub.
3. Agregar las variables de entorno en la configuración de Vercel.
4. Hacer deploy desde la interfaz de Vercel o usando:
   ```sh
   vercel --prod
   ```

