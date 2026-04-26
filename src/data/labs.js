export const labs = [
  {
    id: 'servomind',
    title: { en: 'ServoMind', es: 'ServoMind' },
    area: { en: 'Robotics · Embedded', es: 'Robótica · Sistemas Integrados' },
    stack: ['Python', 'Raspberry Pi', 'RPi.GPIO', 'Vosk STT'],
    description: {
      en: 'Small servo arm controlled by voice commands using local speech-to-text recognition (Vosk). No cloud APIs — the entire pipeline runs on the Pi.',
      es: 'Pequeño brazo robótico controlado por comandos de voz usando reconocimiento local (Vosk). Sin APIs en la nube — todo el pipeline se ejecuta en la Raspberry Pi.'
    },
    why: {
      en: 'Wanted to close the loop between software and hardware. Running NLP on the edge has interesting constraints: latency budgets, model size limits, no retry logic.',
      es: 'Quería cerrar la brecha entre software y hardware. Correr modelos NLP "en el borde" tiene restricciones interesantes: presupuestos de latencia, límites de tamaño del modelo, ausencia de reintentos.'
    },
    status: 'building',
    color: 'yellow',
    icon: '🤖',
    github: 'https://github.com/Merigu10/servomind',
  },
  {
    id: 'uimotion',
    title: { en: 'UIMotion Engine', es: 'UIMotion Engine' },
    area: { en: 'UI Animation · Frontend', es: 'Animación UI · Frontend' },
    stack: ['React', 'Framer Motion', 'Canvas API', 'TypeScript'],
    description: {
      en: 'Library of reusable micro-animations for dashboard UIs: spring-physics entries, state transitions and canvas-based particles. Designed as a design system for rapid prototyping.',
      es: 'Librería de microanimaciones reutilizables para paneles de control (dashboards): físicas de rebote, transiciones de estado y partículas en canvas. Diseñada como un sistema para prototipado rápido.'
    },
    why: {
      en: "Well-crafted animations aren't decoration — they communicate state. A loading indicator that matches the interaction model reduces perceived latency.",
      es: 'Las animaciones bien diseñadas no son decoración — comunican estado. Un indicador de carga que encaja con el modelo de interacción reduce la latencia percibida.'
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
      en: 'Minimal version of MoodTrace. Iterating in CLI before building UI is a practice I adopted — it forces you to define the data contract before the interface.',
      es: 'Versión minimalista de MoodTrace. Iterar en una interfaz de línea de comandos antes de construir una interfaz gráfica te fuerza a definir el contrato de datos primero.'
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
      en: 'Collection of exploratory visualizations over public datasets. Focus on making each chart tell a story — annotations, narrative structure, deliberate use of color.',
      es: 'Colección de visualizaciones exploratorias sobre conjuntos de datos públicos. Enfoque en que cada gráfico cuente una historia — anotaciones, estructura narrativa, uso deliberado del color.'
    },
    why: {
      en: "Most data viz is technically correct and communicatively useless. I'm exploring what it takes to make a chart that a non-analyst can read in under 10 seconds.",
      es: 'La mayoría de visualizaciones de datos son técnicamente correctas pero inútiles para comunicar. Estoy explorando qué se requiere para hacer un gráfico que un no-analista pueda leer en menos de 10 segundos.'
    },
    status: 'experimenting',
    color: 'purple',
    icon: '📈',
    github: 'https://github.com/Merigu10/datasketch',
  },
]
