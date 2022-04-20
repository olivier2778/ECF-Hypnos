
--  Se connecter a mySQL en ligne de commande : 
mysql -u root -p 
-- apres saisi du mot de passe s'il y en a un , la console MySQL affiche :   MySQL>


-- Afficher la liste des bases : 
SHOW databases;


-- Se connecter a la base Hypnos :
USE hypnos;



-- Insertion de données dans les tables company , hotel , suite et user.


INSERT INTO company (name , email)  VALUES  ( 'Hypnos' , 'contact@hypnos.fr') ;


INSERT INTO hotel (name , address , city , description , link , company_id)
VALUES
('Le Méditerranéen' , '4 Av Victor Hugo' , 'Nice' , 'Ce magnifique hôtel de style moderne avec des suites ....  Phasellus egestas tortor justo, at pulvinar massa molestie a. Praesent nulla arcu, fringilla non leo eu, sodales tincidunt eros. Donec a elit et nibh dictum tincidunt. Ut feugiat id lectus at egestas' , 'https://www.booking.com/' , '1' ) ,
('Le Normand' , '11 Bd Georges Clemenceau' , 'Deauville' , 'Cet élégant hotel allie la classe et la decontraction .... estibulum venenatis risus ut libero commodo pulvinar. Nulla aliquet massa ligula, ac aliquam nunc malesuada quis. Integer rutrum ante viverra odio venenatis, et pretium arcu aliquet.' , 'https://www.booking.com/' , '1') ,
('Le Royal' , '8 Avenue Emile Zola' , 'Versailles' , 'Ce splendide hotel offre charme et raffinement ... Fusce rutrum consequat enim. Nam venenatis sodales tortor, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' , 'https://www.booking.com/' , '1') ,
('Le Toulousain', '20 Boulevard Matabio' , 'Toulouse' , 'Ce superbe hotel offre douceur de vivre ... Donec luctus porttitor mollis. Etiam placerat felis et diam ultricies gravida. Sed sed sem id nibh mollis aliquam at nec sem. Morbi sit amet vestibulum sapien, non varius tortor.' , 'https://www.booking.com/', '1') ,
('Le Bordelais' , '10 rue Honoré de Balzac' , 'Bordeau' , 'Ce très bel hotel de style moderne et raffiné ... Proin ligula ante, interdum eget convallis id, mattis ac lacus. Donec luctus, risus quis viverra fermentum, massa sapien fermentum tellus, eu suscipit nisl libero at magna. In ut nisl lobortis.' , 'https://www.booking.com/' , '1') ,
('Le Lyonnais' , '12 Rue Scaliero' , 'Lyon' ,  ' Ce magnifique hotel offre de belles suites ... Etiam at velit imperdiet, euismod tellus aliquet, dictum diam. Donec mollis enim vitae elit vulputate, eget scelerisque velit elementum. Nam aliquet nulla vel egestas mattis. Donec sed ullamcorper tortor.' , 'https://www.booking.com/' , '1') ,
('Le Frontalier' , '35 rue Jean Paul Belmondo' ,'Strasbourg' , 'Cet élégant hotel et ses magniques suites ... Fusce convallis imperdiet leo, ac efficitur erat pellentesque vitae. Quisque varius nibh quis leo sodales, aliquet venenatis ipsum volutpat. Vivamus ac ante id ex fringilla ullamcorper ' , 'https://www.booking.com/' , '1') ;

INSERT INTO suite (title , image , description , price , link , hotel_id)
VALUES
('La Plage' , 'Le Méditerranéen La Plage.jpg' , 'Cette splendide suite offre raffinement ... Fusce rutrum consequat enim. Nam venenatis sodales tortor, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' , '250.00' , 'https://www.booking.com/' , '1') ,
('La Romantique' , 'Le Méditerranéen La Romantique.jpg' , 'Cette romantique suite offre charme ... Donec luctus porttitor mollis. Etiam placerat felis et diam ultricies gravida, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' ,'250.00' , 'https://www.booking.com/' , '1') ,
('La Douce' , 'Le Méditerranéen La Douce.jpg' , 'Cette étonnante suite offre douceur ...  Donec mollis enim vitae elit vulputate. Nam venenatis sodales tortor, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' ,'250.00' , 'https://www.booking.com/' , '1') ,
('La Sauvage' , 'Le Normand La Sauvage' , 'Cette splendide suite offre raffinement ... Fusce rutrum consequat enim. Nam venenatis sodales tortor, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' , '250.00' ,'https://www.booking.com/' , '2') ,
('La Viking' , 'Le Normand La Viking' , 'Cette romantique suite offre charme ... Donec luctus porttitor mollis. Etiam placerat felis et diam ultricies gravida, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' , '250.00' ,'https://www.booking.com/' , '2') ,
('La Douce' , 'Le Normand La Douce' , 'Cette étonnante suite offre douceur ...  Donec mollis enim vitae elit vulputate. Nam venenatis sodales tortor, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' , '250.00' ,'https://www.booking.com/' , '2') ,
('La Somptueuse' , 'Le Royal La Somptueuse' , 'Cette magnifique suite offre splendeur ... Donec luctus porttitor mollis. Etiam placerat felis et diam ultricies gravida, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' , '250.00' ,'https://www.booking.com/' , '3') ,
('La Docile' , 'Le Royal La Docile' , 'Cette surprenante suite offre charme ...  Donec mollis enim vitae elit vulputate. Nam venenatis sodales tortor, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' , '250.00' ,'https://www.booking.com/' , '3') ,
('La Romantique' , 'Le Toulousain La Romantique.jpg' , 'Cette romantique suite offre charme ... Donec luctus porttitor mollis. Etiam placerat felis et diam ultricies gravida, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' ,'250.00' , 'https://www.booking.com/' , '4') ,
('La Douce' , 'Le Toulousain La Douce.jpg' , 'Cette étonnante suite offre douceur ...  Donec mollis enim vitae elit vulputate. Nam venenatis sodales tortor, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' ,'250.00' , 'https://www.booking.com/' , '4') ,
('La Belle' , 'Le Bordelais La Belle' , 'Cette splendide suite offre raffinement ... Fusce rutrum consequat enim. Nam venenatis sodales tortor, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' , '250.00' ,'https://www.booking.com/' , '5') ,
('La Sentimentale' , 'Le Bordelais La Sentimentale' , 'Cette romantique suite offre charme ... Donec luctus porttitor mollis. Etiam placerat felis et diam ultricies gravida, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' , '250.00' ,'https://www.booking.com/' , '5') ,
('La Rose' , 'Le Lyonnais La Rose' , 'Cette étonnante suite offre douceur ...  Donec mollis enim vitae elit vulputate. Nam venenatis sodales tortor, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' , '250.00' ,'https://www.booking.com/' , '6') ,
('La Sauvage' , 'Le Lyonnais La Sauvage' , 'Cette romantique suite offre charme ... Donec luctus porttitor mollis. Etiam placerat felis et diam ultricies gravida, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' , '250.00' ,'https://www.booking.com/' , '6') ,
('La Champêtre' , 'Le Frontalier La Champêtre' , 'Cette belle suite offre simplicité ... Donec luctus porttitor mollis. Etiam placerat felis et diam ultricies gravida, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' , '250.00' ,'https://www.booking.com/' , '7') ,
('La Rose' , 'Le Frontalier La Rose' , 'Cette surprenante suite offre charme ...  Donec mollis enim vitae elit vulputate. Nam venenatis sodales tortor, sit amet interdum nunc gravida eget. Suspendisse eget ligula eu nibh sagittis pretium. Maecenas sit amet commodo lectus.' , '250.00' ,'https://www.booking.com/' , '7') ;


INSERT INTO user (email , roles , password , last_name  , first_name , company_id , hotel_id )
VALUES
( 'admin1@hypnos.fr' , '["ROLE_ADMIN"]', '$2y$13$zZ35yDLHoWepcPpKSvyJYu6/7Ks6xTiSAyIuePBJl6KD6Yzapj9xK' , 'Durand' , 'Patrick', '1' , NULL ) ,
( 'i.valle@hypnos.fr' , '["ROLE_MANAGER"]', '$2y$10$vENIsGC6u3on7YHep5tAeuKWCrMiOTo/INOraN9wpPOyW6TgZoOr6' , 'Vale' , 'Isabelle' , NULL , '1') ,
( 'e.blanc@hypnos.fr' , '["ROLE_MANAGER"]', '$2y$13$KPHZHsaPTJxkaD4U3A4Ej.6IZixtceJYgn87r78IhqJyi14lUkNjO' , 'Blanc' , 'Eric' , NULL , '2') ,
( 's.menot@sfr.fr' , '["ROLE_CUSTOMER"]', '$2y$13$UjktukVYK6cJEzvkI6dq/uLZjkiPHjclH/SGskCwj0ylQlxftF0om' , 'Menot' , 'Stella', NULL , NULL) ,
( 'n.bedin@sfr.fr' , '["ROLE_CUSTOMER"]', '$2y$13$4B10AoUYXaR5Des8EdtBPO6TktHKyYhxaGVGewPhbHL/FoO65tjEm' , 'Bedin' , 'Nathalie', NULL , NULL) ;




-- Exportation de la base de donnée (en etant dans le repertoire contenant mysqldump.exe , en ligne de commande :)

mysqldump -u root -p hypnos > hypnos.sql


-- Importation de la base de donnée , si la base n'existe pas ,  la créer avant,  avec : 
 CREATE DATABASE IF NOT EXISTS hypnos CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
-- et lancer l'import de la base de donnée  :

mysql -u root -p hypnos < hypnos.sql




-- !!! SUPPRIMER  la base de données ( apres export ) !!!
 DROP DATABASE hypnos ;











