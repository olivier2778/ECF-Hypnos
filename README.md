# ECF-Hypnos

### Technos 
PHP 8.0 , Symfony 6 , MySQL  5.7


## Installation du projet pour une utilisation en local

Utiliser git clone :

```bash
git clone https://github.com/olivier2778/ECF-Hypnos.git
```


Se placer dans le dossier d'installation
```bash
cd ECF-Hypnos
```

Effectuer l'installation des dépendances
```bash
composer install
```

Création de la base de données
```bash
php bin/console doctrine:database:create
```

Création des tables avec l'aide des migrations
```bash
php bin/console doctrine:migrations:migrate
```

Se connecter à mySQL en ligne de commande : 
```bash
mysql -u root -p 
```

Se connecter à la base Hypnos :
```bash
USE hypnos;
```

Saisir les lignes du fichier datas.SQL ( repertoire Documentation ) pour alimenter les differentes tables
Sortir de la console MySQL

Et lancer l'application en local avec :
```bash
symfony serve
```

