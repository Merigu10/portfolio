export const projects = [
  {
    id: 'mindmood',
    title: { en: 'MindMood', es: 'MindMood' },
    subtitle: { en: 'Private Journal with Optional Text Insights', es: 'Diario privado con insights de texto opcionales' },
    type: { en: 'NLP · Privacy-first UX', es: 'NLP · UX privacy-first' },
    description: {
      en: 'Local-first journaling app where the user writes first and chooses later whether to inspect patterns in the text. The system avoids direct emotional labels and focuses on observable signals: recurring terms, changes in writing frequency, word groups, and trends over time.',
      es: 'Aplicación de journaling local-first donde la persona escribe primero y decide después si quiere revisar patrones en el texto. El sistema evita etiquetas emocionales directas y se centra en señales observables: términos recurrentes, cambios en la frecuencia de escritura, grupos de palabras y tendencias temporales.'
    },
    details: {
      en: 'The product is framed around control and data ownership: insights are opt-in, interpretation stays with the user, and private entries are designed to remain on the device. The challenge was turning NLP into a neutral reading layer instead of an intrusive diagnosis engine.',
      es: 'El producto se plantea alrededor del control y la propiedad del dato: los insights son opcionales, la interpretación queda en manos del usuario y las entradas privadas están diseñadas para quedarse en el dispositivo. El reto fue convertir el NLP en una capa de lectura neutral, no en un motor de diagnóstico invasivo.'
    },
    stack: ['React', 'NLP', 'Local-first', 'Data Visualization', 'Privacy UX', 'SQLite'],
    tags: ['nlp', 'privacy', 'journaling', 'local-first'],
    color: 'blue',
    github: 'https://github.com/Merigu10/mindmood',
    icon: '🧠',
    status: 'featured',
  },
  {
    id: 'retroboard-api',
    title: { en: 'RetroBoard API', es: 'RetroBoard API' },
    subtitle: { en: 'Retrospective Session Management API', es: 'API para gestionar retrospectivas de equipo' },
    type: { en: 'Backend · Collaboration', es: 'Backend · Colaboración' },
    description: {
      en: 'REST API for running team retrospectives: create sessions, invite participants, collect anonymous cards, group related feedback, vote on topics, and turn conclusions into follow-up actions. Includes JWT authentication, role-based access control, paginated endpoints and Swagger/OpenAPI documentation.',
      es: 'API REST para facilitar retrospectivas de equipo: crear sesiones, invitar participantes, recoger tarjetas anónimas, agrupar feedback relacionado, votar temas y convertir conclusiones en acciones de seguimiento. Incluye autenticación JWT, control de acceso por roles, endpoints paginados y documentación Swagger/OpenAPI.'
    },
    details: {
      en: 'The interesting part was modeling the retrospective flow as a state machine: draft, collecting, grouping, voting, action-planning and closed. Anonymous input stays protected while facilitator actions remain auditable, keeping psychological safety and traceability in balance.',
      es: 'La parte interesante fue modelar el flujo de la retrospectiva como una máquina de estados: borrador, recopilación, agrupación, votación, planificación de acciones y cierre. Las aportaciones anónimas se protegen mientras las acciones del facilitador quedan auditadas, equilibrando seguridad psicológica y trazabilidad.'
    },
    stack: ['Java 17', 'Spring Boot 3', 'Spring Security', 'PostgreSQL', 'Docker', 'OpenAPI'],
    tags: ['java', 'spring-boot', 'retrospectives', 'jwt', 'postgresql'],
    color: 'purple',
    github: 'https://github.com/Merigu10/retroboard-api',
    icon: '⚙️',
    status: 'featured',
  },
  {
    id: 'sentimentstream',
    title: { en: 'SentimentStream', es: 'SentimentStream' },
    subtitle: { en: 'ML Pipeline for E-commerce Sentiment', es: 'Pipeline ML para sentimiento en e-commerce' },
    type: { en: 'Data · Machine Learning', es: 'Datos · Machine Learning' },
    description: {
      en: 'End-to-end sentiment analysis pipeline over e-commerce product reviews. Includes EDA, text preprocessing, model comparison (Naive Bayes vs Logistic Regression vs SVM), learning curves and model export as a reusable `.pkl` artifact.',
      es: 'Pipeline integral de análisis de sentimiento sobre reseñas de productos e-commerce. Incluye EDA, preprocesamiento de texto, comparación de modelos (Naive Bayes vs Regresión Logística vs SVM), curvas de aprendizaje y exportación del modelo como un artefacto `.pkl` reutilizable.'
    },
    details: {
      en: 'The analysis revealed that text length was more predictive than keyword presence, documented with visualizations and statistical backing in the notebook. The finding shaped the final feature engineering strategy.',
      es: 'El análisis reveló que la longitud del texto era más predictiva que la presencia de ciertas palabras clave, documentado con visualizaciones y respaldo estadístico en el notebook. Este hallazgo moldeó la estrategia final de ingeniería de características.'
    },
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter'],
    tags: ['python', 'scikit-learn', 'nlp', 'data-analysis'],
    color: 'yellow',
    github: 'https://github.com/Merigu10/sentimentstream',
    icon: '📊',
    status: 'featured',
  },
]
