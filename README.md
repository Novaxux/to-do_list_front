# React pwa

![Image](https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png)

## Install pwa

```bash
npm install vite-plugin-pwa --save-dev
```

## Create your manifest json

```bash
my-vite-app/
 ├─ public/
 │    └─ manifest.json  
```

## An example

```json
{
  "name": "Mi App de Tareas",
  "short_name": "TaskApp",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1C274C",
  "description": "Una aplicación simple para gestionar tareas",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## Link to your html page

```html
<link rel="manifest" href="/manifest.json" />
```
