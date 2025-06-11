# Infrastructure du projet : Application Web ToDo List Dockerisée
🔧 Objectif de l’infrastructure
L’infrastructure a été conçue pour :
• Conteneuriser l’application web et la base de données.
• Faciliter le déploiement et la maintenance.
• Garantir la communication entre les différents services via Docker.
• Assurer la portabilité du projet (exécution identique en local ou en production).



# Architecture générale

L’infrastructure est composée de 3 conteneurs principaux :

1️⃣ Nginx (Reverse Proxy)
	•	Gère les requêtes HTTP des utilisateurs.
	•	Redirige les requêtes vers l’application backend.

2️⃣ Application Backend
	•	Application web développée en  Node.js.
	•	Fournit l’API et les pages HTML nécessaires.

3️⃣ Base de données MySQL
	•	Stocke les données de l’application (tâches de la ToDo List).

Tous ces services sont orchestrés via docker-compose.
