export const labs = [
  {
    id: 'plant-node',
    title: { en: 'Plant Node', es: 'Plant Node' },
    area: { en: 'IoT · Embedded Systems', es: 'IoT · Sistemas embebidos' },
    stack: ['ESP32', 'KiCad', 'PCB Design', 'Solar Power', 'Deep Sleep', 'WiFi'],
    description: {
      en: 'Minimalist IoT device for real-time plant monitoring. Built around an ESP32 with WiFi, rechargeable battery and solar panel, it periodically wakes from deep sleep to measure soil moisture and send data only when needed, optimizing autonomy.',
      es: 'Dispositivo IoT minimalista para monitorizar el estado de una planta en tiempo real. Basado en un ESP32 con WiFi, batería recargable y panel solar, despierta periódicamente desde deep sleep para medir la humedad del suelo y enviar datos solo cuando es necesario, optimizando la autonomía.'
    },
    why: {
      en: 'The project combines electronics, embedded software and product thinking: a custom 45x30 mm KiCad PCB with power, processing and sensor blocks, expansion interfaces (I2C, ADC), and a discreet low-profile design that does not visually compete with the plant.',
      es: 'El proyecto combina electrónica, software embebido y enfoque de producto: una PCB personalizada de 45x30 mm en KiCad con bloques de energía, procesamiento y sensores, interfaces de expansión (I2C, ADC) y un diseño discreto de bajo perfil que no compite visualmente con la planta.'
    },
    status: 'building',
    color: 'green',
    icon: '🌱',
    github: 'https://github.com/Merigu10/plant-node',
  },
  {
    id: 'uimotion',
    title: { en: 'UIMotion Engine', es: 'UIMotion Engine' },
    area: { en: 'UI Animation · Frontend', es: 'Animación UI · Frontend' },
    stack: ['React', 'Framer Motion', 'Canvas API', 'TypeScript'],
    description: {
      en: 'Library of reusable micro-animations for dashboard UIs: spring-physics entries, state transitions and canvas-based particles. Designed as a design system for rapid prototyping.',
      es: 'Librería de microanimaciones reutilizables para paneles de control: físicas de rebote, transiciones de estado y partículas en canvas. Diseñada como un sistema para prototipado rápido.'
    },
    why: {
      en: "Well-crafted animations are not decoration; they communicate state. A loading indicator that matches the interaction model reduces perceived latency.",
      es: 'Las animaciones bien diseñadas no son decoración; comunican estado. Un indicador de carga que encaja con el modelo de interacción reduce la latencia percibida.'
    },
    status: 'done',
    color: 'blue',
    icon: '✨',
    github: 'https://github.com/Merigu10/uimotion-engine',
  },
  {
    id: 'emotilog',
    title: { en: 'EmotiLog CLI', es: 'EmotiLog CLI' },
    area: { en: 'NLP · CLI Tools', es: 'NLP · Herramientas CLI' },
    stack: ['Python', 'Click', 'VADER', 'Rich'],
    description: {
      en: 'Terminal tool for analyzing the emotional tone of text files or stdin. Output with color-coding by emotional intensity. Useful for analyzing conversation logs or quick journaling.',
      es: 'Herramienta de terminal para analizar el tono emocional de archivos de texto o stdin. Salida coloreada según la intensidad emocional. Útil para analizar registros de conversación o diarios rápidos.'
    },
    why: {
      en: 'Minimal version of MindMood. Iterating in CLI before building UI is a practice I adopted because it forces you to define the data contract before the interface.',
      es: 'Versión minimalista de MindMood. Iterar en una interfaz de línea de comandos antes de construir una interfaz gráfica te fuerza a definir el contrato de datos primero.'
    },
    status: 'done',
    color: 'green',
    icon: '💻',
    github: 'https://github.com/Merigu10/emotilog-cli',
  },
  {
    id: 'datasketch',
    title: { en: 'DataSketch', es: 'DataSketch' },
    area: { en: 'Data Visualization', es: 'Visualización de Datos' },
    stack: ['Python', 'Matplotlib', 'Seaborn', 'Observable'],
    description: {
      en: 'Collection of exploratory visualizations over public datasets. Focus on making each chart tell a story through annotations, narrative structure, and deliberate use of color.',
      es: 'Colección de visualizaciones exploratorias sobre conjuntos de datos públicos. Enfoque en que cada gráfico cuente una historia mediante anotaciones, estructura narrativa y uso deliberado del color.'
    },
    why: {
      en: "Most data viz is technically correct and communicatively useless. I am exploring what it takes to make a chart that a non-analyst can read in under 10 seconds.",
      es: 'La mayoría de visualizaciones de datos son técnicamente correctas pero inútiles para comunicar. Estoy explorando qué se requiere para hacer un gráfico que una persona no analista pueda leer en menos de 10 segundos.'
    },
    status: 'experimenting',
    color: 'purple',
    icon: '📈',
    github: 'https://github.com/Merigu10/datasketch',
  },
]
