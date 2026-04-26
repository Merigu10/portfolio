export const projects = [
  {
    id: 'moodtrace',
    title: { en: 'MoodTrace', es: 'MoodTrace' },
    subtitle: { en: 'Emotional Journal with NLP Pipeline', es: 'Diario Emocional con Pipeline NLP' },
    type: { en: 'NLP · Full-stack', es: 'NLP · Full-stack' },
    description: {
      en: 'REST API for emotional analysis of personal journal entries. Uses a dual NLP pipeline: VADER for lexical baseline and a fine-tuned transformer model for contextual sentiment. Includes emotional history, temporal pattern detection, and a minimal React dashboard.',
      es: 'API REST para análisis emocional de entradas de diario personal. Usa un pipeline NLP dual: VADER como base léxica y un modelo transformer fine-tuned para contexto. Incluye historial emocional, detección de patrones temporales y un dashboard minimalista en React.'
    },
    details: {
      en: 'Designed the pipeline to handle colloquial text with contractions and emojis without aggressive preprocessing — a deliberate trade-off to preserve emotional signal over clean tokens.',
      es: 'Diseñé el pipeline para procesar texto coloquial con contracciones y emojis sin un preprocesado agresivo — un compromiso deliberado para preservar la carga emocional sobre la limpieza de tokens.'
    },
    stack: ['Python', 'FastAPI', 'HuggingFace Transformers', 'VADER', 'SQLite', 'React'],
    tags: ['nlp', 'python', 'fastapi', 'transformers'],
    color: 'blue',
    github: 'https://github.com/Merigu10/moodtrace',
    icon: '🧠',
    status: 'featured',
  },
  {
    id: 'taskflow-api',
    title: { en: 'TaskFlow API', es: 'TaskFlow API' },
    subtitle: { en: 'Production-Ready REST API in Java', es: 'API REST en Java lista para producción' },
    type: { en: 'Backend · Java', es: 'Backend · Java' },
    description: {
      en: 'REST API for task and sprint management with JWT authentication, role-based access control (ADMIN/USER), paginated endpoints and full Swagger/OpenAPI documentation. Containerized with Docker Compose.',
      es: 'API REST para gestión de tareas y sprints con autenticación JWT, control de acceso por roles (ADMIN/USER), endpoints paginados y documentación completa Swagger/OpenAPI. Contenerizada con Docker Compose.'
    },
    details: {
      en: 'Implemented a lightweight audit layer that records state changes with timestamps and actor — no external audit frameworks. Every state transition is traceable without polluting the domain model.',
      es: 'Implementé una capa de auditoría ligera que registra cambios de estado con marcas de tiempo y el actor que los realiza — sin frameworks externos. Cada transición de estado es trazable sin contaminar el modelo de dominio.'
    },
    stack: ['Java 17', 'Spring Boot 3', 'Spring Security', 'PostgreSQL', 'Docker', 'OpenAPI'],
    tags: ['java', 'spring-boot', 'jwt', 'docker', 'postgresql'],
    color: 'purple',
    github: 'https://github.com/Merigu10/taskflow-api',
    icon: '⚙️',
    status: 'featured',
  },
  {
    id: 'sentimentstream',
    title: { en: 'SentimentStream', es: 'SentimentStream' },
    subtitle: { en: 'ML Pipeline for E-commerce Sentiment', es: 'Pipeline ML para Sentimiento en E-commerce' },
    type: { en: 'Data · Machine Learning', es: 'Datos · Machine Learning' },
    description: {
      en: 'End-to-end sentiment analysis pipeline over e-commerce product reviews. Includes EDA, text preprocessing, model comparison (Naive Bayes vs Logistic Regression vs SVM), learning curves and model export as a reusable `.pkl` artifact.',
      es: 'Pipeline integral de análisis de sentimiento sobre reseñas de productos e-commerce. Incluye EDA, preprocesamiento de texto, comparación de modelos (Naive Bayes vs Regresión Logística vs SVM), curvas de aprendizaje y exportación del modelo como un artefacto `.pkl` reutilizable.'
    },
    details: {
      en: 'The analysis revealed that text length was more predictive than keyword presence — documented with visualizations and statistical backing in the notebook. The finding shaped the final feature engineering strategy.',
      es: 'El análisis reveló que la longitud del texto era más predictiva que la presencia de ciertas palabras clave — documentado con visualizaciones y respaldo estadístico en el notebook. Este hallazgo moldeó la estrategia final de ingeniería de características.'
    },
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter'],
    tags: ['python', 'scikit-learn', 'nlp', 'data-analysis'],
    color: 'yellow',
    github: 'https://github.com/Merigu10/sentimentstream',
    icon: '📊',
    status: 'featured',
  },
]
