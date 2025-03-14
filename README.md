# FOMO

FOMO es una plataforma innovadora que permite a los organizadores de eventos gestionar y promocionar sus actividades de manera eficiente. La aplicación está construida con **React Native**, permitiendo su despliegue tanto en **Android** como en **iOS**.

## 🚀 Características
- Listado y búsqueda de eventos en tiempo real.
- Interfaz intuitiva y optimizada para móviles.
- Integración con **Axios** para el consumo de APIs.
- Uso de **React Navigation** para la gestión de rutas.
- Soporte para **vector icons** y estilos personalizados.
- Implementación de **Fastlane** para la automatización de builds.

## 📦 Dependencias principales

```json
{
  "@react-navigation/native": "^7.0.15",
  "@react-navigation/native-stack": "^7.2.1",
  "axios": "^1.8.3",
  "react": "19.0.0",
  "react-native": "0.78.0",
  "react-native-safe-area-context": "^5.3.0",
  "react-native-screens": "^4.9.2",
  "react-native-vector-icons": "^10.2.0"
}
```

## 📖 Instalación y configuración

### 1️⃣ Requisitos previos
Antes de iniciar, asegúrate de tener instalados:
- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [CocoaPods](https://cocoapods.org/) (para iOS)
- Android Studio (para emulador Android)

### 2️⃣ Instalación del proyecto
Clona este repositorio y ejecuta:

```sh
git clone https://github.com/Valdo-177/fomo
cd fomo
npm install
```

### 3️⃣ Iniciar el servidor Metro
Metro es el bundler de React Native. Para iniciarlo, ejecuta:

```sh
npm start
```

### 4️⃣ Ejecutar la aplicación

#### 📱 Android
```sh
npm run android
```

#### 🍏 iOS (MacOS requerido)

```sh
cd ios
bundle install
bundle exec pod install
cd ..
npm run ios
```

## 🏗 Configuración de Fastlane
Para automatizar la generación de builds, se utiliza **Fastlane**. Asegúrate de tenerlo instalado:

```sh
gem install fastlane -NV
```

### 📌 Configuración para iOS
1. Accede a la carpeta `ios` y corre:
   ```sh
   fastlane init
   ```
2. Configura `fastlane/Fastfile` con tus credenciales de App Store Connect.
3. Genera una build para distribución con:
   ```sh
   fastlane ios release
   ```

### 📌 Configuración para Android
1. Accede a la carpeta `android` y corre:
   ```sh
   fastlane init
   ```
2. Modifica `fastlane/Fastfile` para la configuración de Play Store.
3. Genera una build con:
   ```sh
   fastlane android release
   ```

## 📚 Historia de FOMO

FOMO nació con la visión de revolucionar la forma en que los organizadores de eventos gestionan y promocionan sus actividades. Su fundador, **Alexandro Rendón**, inició el proyecto participando en una competencia, lo que le permitió desarrollar un **MVP en WordPress** gracias a un capital semilla.

En 2024, **Jesús Barros** se unió al proyecto. En ese momento, Jesús ya contaba con un equipo de desarrollo y buscaba construir una plataforma similar a FOMO. Tras varias conversaciones, ambos decidieron consolidar una sociedad y convertirse en cofundadores, dando inicio al desarrollo de **FOMO 2.0**.

A finales de 2024, se hizo evidente la necesidad de mejorar la eficiencia de los servidores en la nube. Fue entonces cuando Jesús contactó a **Felipe Gonzales**, un experto en **AWS**, quien se convirtió en el tercer cofundador de FOMO.

A mediados de marzo de 2025, **FOMO 2.0 finalmente salió al mercado**. Hoy, la historia continúa con la misión de seguir evolucionando y transformando la industria de los eventos.

## 🎯 Misión
Empoderar a los organizadores de eventos con una plataforma tecnológica eficiente, escalable e intuitiva, que simplifique la gestión, promoción y venta de entradas.

## 👀 Visión
Convertirnos en la **plataforma líder en la organización y gestión de eventos en Latinoamérica**, brindando herramientas innovadoras que faciliten el éxito de nuestros clientes.

## ⭐ Valores
- **Innovación**: Nos mantenemos a la vanguardia con tecnología de última generación.
- **Compromiso**: Brindamos la mejor experiencia a organizadores y asistentes.
- **Escalabilidad**: Creamos soluciones robustas y adaptables.
- **Transparencia**: Construimos relaciones de confianza con nuestros usuarios.