-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2024 at 09:55 PM
-- Server version: 11.3.2-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(10) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `gender` char(10) NOT NULL,
  `telnumber` bigint(30) NOT NULL,
  `socialfund` int(20) NOT NULL,
  `shares` int(20) NOT NULL,
  `development` int(20) NOT NULL,
  `savings` int(50) NOT NULL,
  `fines` int(10) NOT NULL,
  `socialfundgiveout` varchar(5) NOT NULL,
  `savingswithdraw` bigint(13) NOT NULL,
  `loanformfee` int(10) NOT NULL,
  `loan` int(10) NOT NULL,
  `otherfunds` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='table for member accounts';

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `fullname`, `gender`, `telnumber`, `socialfund`, `shares`, `development`, `savings`, `fines`, `socialfundgiveout`, `savingswithdraw`, `loanformfee`, `loan`, `otherfunds`) VALUES
(1, 'MAYEGA JIMMY', 'M', 700723820, 35000, 2, 120000, 5000000, 10000, '0', 0, 2000, 1500000, 0),
(2, 'Nassuna Ritah', 'F', 701760638, 25000, 1800000, 104000, 900000, 10000, '0', 0, 0, 0, 2000),
(9, 'Naggenda Joshua', 'M', 704582023, 5000, 1200000, 104000, 1500000, 0, '0', 0, 0, 0, 0),
(7, 'Namubiru Maria Keira', 'F', 758967543, 0, 0, 104000, 1250000, 100000, '0', 200000, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `password`, `email`, `name`) VALUES
(1, 'Test@44', 'test@gmail.com', 'test'),
(2, 'Richard@11', 'richard@gmail.com', 'richard'),
(3, 'Joshua2@3', 'naggendajoshua@gmail.com', 'Naggenda Joshua'),
(4, 'Shanitah@23', 'shanitah@gmail.com', 'ssewanyana shanitah');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
