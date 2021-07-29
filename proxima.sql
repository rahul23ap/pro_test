-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 29, 2021 at 05:28 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proxima`
--

-- --------------------------------------------------------

--
-- Table structure for table `sub_master`
--

DROP TABLE IF EXISTS `sub_master`;
CREATE TABLE IF NOT EXISTS `sub_master` (
  `subject_id` int(4) NOT NULL AUTO_INCREMENT,
  `subject_name` varchar(200) DEFAULT NULL,
  `subject_stream` enum('Science','Commerce','Arts') DEFAULT NULL,
  `subject_created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `subject_updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `subject_modified_user_id` smallint(2) DEFAULT NULL,
  PRIMARY KEY (`subject_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sub_master`
--

INSERT INTO `sub_master` (`subject_id`, `subject_name`, `subject_stream`, `subject_created_at`, `subject_updated_at`, `subject_modified_user_id`) VALUES
(1, 'Maths', 'Science', '2021-07-29 14:34:19', '2021-07-29 14:34:19', 1),
(2, 'English', 'Arts', '2021-07-29 14:34:59', '2021-07-29 14:34:59', 2),
(3, 'Physics', 'Science', '2021-07-29 14:35:23', '2021-07-29 14:35:23', 1),
(4, 'Economics', 'Commerce', '2021-07-29 14:35:40', '2021-07-29 14:35:40', 3),
(5, 'Social Science', 'Arts', '2021-07-29 14:36:13', '2021-07-29 14:36:13', 2),
(6, 'Finance', 'Commerce', '2021-07-29 14:37:35', '2021-07-29 14:37:35', 3),
(7, 'F1', 'Science', '2021-07-29 21:55:10', '2021-07-29 21:55:10', 1);

-- --------------------------------------------------------

--
-- Table structure for table `training_course_master`
--

DROP TABLE IF EXISTS `training_course_master`;
CREATE TABLE IF NOT EXISTS `training_course_master` (
  `training_id` smallint(4) NOT NULL AUTO_INCREMENT,
  `training_name` varchar(200) DEFAULT NULL,
  `subject_ids` varchar(200) DEFAULT NULL,
  `type_id` enum('Basic','Detailed') NOT NULL DEFAULT 'Basic',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `udated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `training_mod_by_user_id` smallint(2) DEFAULT NULL,
  PRIMARY KEY (`training_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `training_course_master`
--

INSERT INTO `training_course_master` (`training_id`, `training_name`, `subject_ids`, `type_id`, `created_at`, `udated_at`, `training_mod_by_user_id`) VALUES
(1, 'Basics of Engg', 'Maths,Physics,English', 'Basic', '2021-07-29 14:40:43', '2021-07-29 14:40:43', 1),
(2, 'CA Fundamentals', 'English,Economics,Finance', 'Basic', '2021-07-29 14:54:09', '2021-07-29 14:54:09', 2),
(3, 'International Arts', 'English,Social Science, Finance', 'Detailed', '2021-07-29 14:54:53', '2021-07-29 14:54:53', 1),
(4, 'Computer Tech', 'English,Economics', 'Basic', '2021-07-29 22:35:25', '2021-07-29 22:35:25', 2),
(5, 'Computer Tech', 'English,Economics', 'Basic', '2021-07-29 22:46:39', '2021-07-29 22:46:39', 2),
(6, 'CT', 'English,Economics', 'Basic', '2021-07-29 22:47:49', '2021-07-29 22:47:49', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
