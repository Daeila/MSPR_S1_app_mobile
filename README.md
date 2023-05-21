# MSPR_S1_app_mobile
Application mobile de la MSPR4

Lancement de l'application : page APP.js

Dossier components : Accès aux différentes pages de l'application
Home.js => Page d'accueil
Item.js => Page de descriptif d'un produit avec sa représentation en 3D
ItemList.js => Liste de tous les produits disponibles, choix d'un produit pour afficher sa fiche
Modelisation_3D.js => Création du modèle 3D qui est affiché sur la fiche produit
Scan.js => Permet l'authentification par le biais d'un scan de QR code, demande d'autorisation d'accès à la caméra du smartphone

Dossier assets : texture et objet pour l'affichage du modèle 3D

Fichiers de configuration :
index.js => configure l'appel à la première page : App.js
metros.config.js => permet de lire les types d'image/d'objet pour la réalisation 3D
package.json => Liste des packages nécessaires pour exécuter l'application
