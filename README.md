# Ampf-front

Desarrollo de interfaz web responsive, basada en REACT, con Webpack y Redux.

### INFORMACION RELEVANTE:

Una vez clonado el repositorio, ejecutar la instalacion de dependencias para desarrollo:
    
    * npm install 

### Una vez instaladas las dependencias sin problemas, ejecutar en modo desarrollo para verificar si quedo todo correctamente instalado. Existen dos maneras:
    
    * npm start, o bien 
    * webpack-dev-server --open
    

## Generar bundle para PROD:
### Existen dos maneras para generar el bundle para produccion:
    
    * .\node_modules\.bin\webpack -d ==> 
    * npm run build
    
El resultado deberia ser la creacion de dos archivos en la carpeta frontend\public (bundle.js e index.html)

## Configuracion de host y puerto para DEV:
    
    * Ir a archivo webpack.config.js
    * Configurar las lineas host y port de acuerdo a donde quieren que escuche de manera local (por defecto, port 3000):
    
    ```
    Ejemplo:
        devServer: {
            host: '192.168.0.162',
            port: 3000,
            historyApiFallback: true       
        }
    ```
