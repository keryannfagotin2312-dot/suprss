Keryann Fagotin <keryann.fagotin@gmail.com>
	
22:13 (il y a 3 minutes)
	
À moi

# SUPRSS - Application de gestion et de suivi RSS

 

## 📌 Description
SUPRSS est une application web permettant de gérer et de suivre des flux RSS.  
Le projet est divisé en deux parties principales :
- **Backend** : API REST construite avec Node.js, Express et PostgreSQL
- **Frontend** : Application React permettant d’interagir avec l’API et d’afficher les données

 

---

 

## ⚙️ Technologies utilisées
- **Node.js** (Express)
- **PostgreSQL** (Base de données)
- **React** (Interface utilisateur)
- **Docker** (optionnel, pour containeriser l’application)
- **Dotenv** pour la gestion des variables d’environnement

 

---

 

## 📂 Structure du projet
 

suprss/
│── backend/
│   ├── config/         # Configuration (connexion DB)
│   ├── controllers/    # Logique métier (CRUD utilisateurs, feeds, favoris, commentaires)
│   ├── routes/         # Routes de l’API
│   └── serveur.js      # Point d’entrée du backend
│
│── frontend/ # Code React (interface utilisateur)
│
│── .env # Variables d’environnement (PORT, DB, etc.)
│── package.json # Dépendances du projet
│── README.md # Documentation
 

	

