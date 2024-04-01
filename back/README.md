# API REST Django

## Mise en place de l'environnement

Installer virtualenv et éventuellement pip s'ils ne sont pas déjà installés :<br>
`sudo apt-get install python3-venv`<br>
`sudo apt-get install python3-pip`<br>

Créer un environnement virtuel pour python :<br>
`python3 -m venv .venv`<br>

Activer l'environnement virtuel :<br>
`source .venv/bin/activate`<br>

Installer les dépendances :<br>
`pip install -r requirements.txt`

## Installer la base de données

Pour l'atelier il sera peut être plus simple d'utiiser SQLite. Pour créer la base de données il suffit d'executer la commande suivante<br>
`python manage.py migrate`<br>
`python manage.py shell < data_loader.py` // ceci n'existe pas encore

## Démarrer le serveur
`python manage.py runserver`<br>
