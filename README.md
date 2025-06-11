

# 🚧 Développement de l'application ToDo List

Bienvenue dans la branche **develop** du projet.
Cette branche contient tout le code source de l’application web en cours de développement.

---

## 🎯 Objectif

L’application ToDo List permet aux utilisateurs de :

* Créer des tâches
* Modifier des tâches
* Supprimer des tâches
* Consulter la liste des tâches

Les données sont stockées dans une base de données MySQL via un backend développé en **Node.js + Express.js**.

---

## 🏗️ Technologies utilisées

* **Node.js**
* **Express.js**
* **EJS** (ou autre moteur de template selon ton choix)
* **MySQL** (base de données relationnelle)
* **Sequelize** (ou autre ORM selon ton choix)
* **Docker** (via l'infrastructure du projet)

---

## 📂 Structure du répertoire

```bash
.
├── app.js                 # Point d'entrée de l'application Express
├── package.json           # Dépendances Node.js
├── routes/                # Routes de l'application
├── controllers/           # Logique métier
├── models/                # Modèles Sequelize (ou ORM)
├── views/                 # Templates EJS (ou autre moteur de vue)
├── public/                # Fichiers statiques (CSS, JS client)
└── config/                # Configuration de la connexion MySQL
```

---

## ⚙️ Installation locale

### 1️⃣ Pré-requis

* Node.js installé
* MySQL opérationnel
* Accès à l'infrastructure Docker (via la branche `infrastructure`)

### 2️⃣ Installer les dépendances

```bash
npm install
```

### 3️⃣ Configurer la base de données

Configurer le fichier `.env` ou `config/config.js` avec les informations de connexion à MySQL.

Exemple de variables d’environnement :

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=todo_db
DB_PORT=3306
```

### 4️⃣ Lancer le serveur de développement

```bash
npm run dev
```

L'application est accessible sur :
📍 [http://localhost:3000](http://localhost:3000)

---

## 🔀 Flux de travail avec Git

* Les développements se font uniquement sur cette branche `develop`.
* Chaque fonctionnalité importante peut être développée dans une sous-branche (`feature/xxx`), puis mergée via pull request sur `develop`.
* Une fois validé, le code est fusionné sur `main` pour la production.

---

## 🚩 Prochaines fonctionnalités à développer

* [ ] Authentification utilisateur
* [ ] Gestion de priorités des tâches
* [ ] Dates d’échéance
* [ ] Filtres et recherches

---

## 👥 Développeurs

* Mouhamed edouard Thione (responsable développement)
* Ali Idrissa Yacouba (responsable infrastructure)
* Mouhamad Mbengue (responsable infrastructure)
* Adja Aminata Diagne (responsable infrastructure)


