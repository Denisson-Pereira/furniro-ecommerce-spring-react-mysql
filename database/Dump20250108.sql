CREATE DATABASE  IF NOT EXISTS `furniro` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `furniro`;
-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: furniro
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Dining','The bedroom category covers furniture and accessories intended for the bedroom environment. This includes beds, nightstands, wardrobes, dressers, and bedding, all designed to create a cozy, restful, and functional space for sleep and relaxation.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fcategories%2Fimage%20101.png?alt=media&token=5442a087-9265-401f-a0b8-cacfa82a886b'),(2,'Living','The living category features furniture and decor items for living rooms and family rooms. It encompasses sofas, armchairs, coffee tables, media consoles, bookshelves, and other pieces that enhance the comfort and aesthetics of shared living spaces.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fcategories%2Fimage%20100.png?alt=media&token=f4c486fb-0b39-45a1-b89a-de2735b9d626'),(3,'Bedroom','The bedroom category covers furniture and accessories intended for the bedroom environment. This includes beds, nightstands, wardrobes, dressers, and bedding, all designed to create a cozy, restful, and functional space for sleep and relaxation.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fcategories%2Fimage%20101.png?alt=media&token=5442a087-9265-401f-a0b8-cacfa82a886b');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `price` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Syltherine','Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fproducts%2Fimage%201.png?alt=media&token=e9d5386d-ff2a-4872-aa47-c2fb562dee8a','Dining','2500'),(2,'Leviosa','Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fproducts%2Fimage%202.png?alt=media&token=1ad52fef-7dfb-4d40-9f8f-18a4015483b2','Living','1500*'),(3,'Lolito','Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fproducts%2Fimage%203.png?alt=media&token=9ddf881b-4837-43a2-8227-4650481ed0ef','Bedroom','7000*'),(4,'Respira','Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fproducts%2Fimage%204.png?alt=media&token=23abb30b-e4f2-49f4-a835-774908000507','Dining','9500*'),(5,'Syltherine','Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fproducts%2Fimage%201.png?alt=media&token=e9d5386d-ff2a-4872-aa47-c2fb562dee8a','Bedroom','2500'),(6,'Leviosa','Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fproducts%2Fimage%202.png?alt=media&token=1ad52fef-7dfb-4d40-9f8f-18a4015483b2','Living','1500'),(7,'Lolito','Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fproducts%2Fimage%203.png?alt=media&token=9ddf881b-4837-43a2-8227-4650481ed0ef','Dining','7000'),(8,'Respira','Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fproducts%2Fimage%204.png?alt=media&token=23abb30b-e4f2-49f4-a835-774908000507','Bedroom','9500'),(9,'Syltherine','Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fproducts%2Fimage%201.png?alt=media&token=e9d5386d-ff2a-4872-aa47-c2fb562dee8a','Dining','2500'),(10,'Leviosa','Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fproducts%2Fimage%202.png?alt=media&token=1ad52fef-7dfb-4d40-9f8f-18a4015483b2','Living','1500'),(11,'Lolito','Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fproducts%2Fimage%203.png?alt=media&token=9ddf881b-4837-43a2-8227-4650481ed0ef','Bedroom','7000'),(12,'Respira','Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fproducts%2Fimage%204.png?alt=media&token=23abb30b-e4f2-49f4-a835-774908000507','Dining','9500'),(13,'Syltherine','Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fproducts%2Fimage%201.png?alt=media&token=e9d5386d-ff2a-4872-aa47-c2fb562dee8a','Bedroom','2500'),(14,'Leviosa','Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fproducts%2Fimage%202.png?alt=media&token=1ad52fef-7dfb-4d40-9f8f-18a4015483b2','Living','1500'),(15,'Lolito','Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fproducts%2Fimage%203.png?alt=media&token=9ddf881b-4837-43a2-8227-4650481ed0ef','Dining','7000'),(16,'Respira','Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/ecommerce%2Fproducts%2Fimage%204.png?alt=media&token=23abb30b-e4f2-49f4-a835-774908000507','Bedroom','9500');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(254) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `street` varchar(100) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-08 22:05:26
