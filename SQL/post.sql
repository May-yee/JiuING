-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2024-03-19 07:27:29
-- 伺服器版本： 10.4.32-MariaDB
-- PHP 版本： 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `jiuing`
--

-- --------------------------------------------------------

--
-- 資料表結構 `post`
--

CREATE TABLE `post` (
  `postID` int(4) UNSIGNED ZEROFILL NOT NULL,
  `type` varchar(10) NOT NULL,
  `originalPoster` int(11) UNSIGNED NOT NULL,
  `postDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `title` text NOT NULL,
  `registeredDate` varchar(10) NOT NULL,
  `registeredTime` varchar(10) NOT NULL,
  `activityDate` varchar(10) NOT NULL,
  `activityTime` varchar(10) NOT NULL,
  `minPeople` int(11) UNSIGNED NOT NULL,
  `maxPeople` int(11) UNSIGNED NOT NULL,
  `location` text NOT NULL,
  `price` int(11) UNSIGNED NOT NULL,
  `content` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `post`
--

INSERT INTO `post` (`postID`, `type`, `originalPoster`, `postDate`, `title`, `registeredDate`, `registeredTime`, `activityDate`, `activityTime`, `minPeople`, `maxPeople`, `location`, `price`, `content`) VALUES
(0006, 'visit', 2, '2024-03-14 07:08:40', '標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題', '2024-03-15', '13:00:00', '2024-03-17', '13:00:00', 2, 6, '404台中市北區館前路1號', 100, '廣大的科學博物館，設有 3D 劇院、植物園、恐龍、生態等各種展覽。'),
(0007, 'game', 3, '2024-03-14 06:41:28', '密室逃脫', '2024-03-15', '13:00:00', '2024-03-16', '14:00:00', 4, 8, '403台中市西區公益路155巷9號2樓', 500, '密室逃脫密室逃脫密室逃脫密室逃脫密室逃脫密室逃脫'),
(0008, 'eat', 3, '2024-03-19 03:59:16', '標題3標題3標題3標題3', '2023-03-20', '20:00:00', '2023-03-25', '20:00:00', 0, 0, '40360台中市西區公益路68號三樓', 500, '不本來是有點不會不會太我也想，哈哈哈沒有位置為什，就喜歡爸得不著為⋯我了一怎麼這⋯你們不不認雖然也，有點不般面客考慮。126'),
(0009, 'eat', 2, '2024-03-19 03:59:42', '陪吃屋馬燒肉', '2024-03-16', '14:00', '2024-03-17', '18:00', 2, 4, '403台中市西區公益路111號1樓', 1250, '屋馬燒肉園邸店沒吃過想找人一起吃。我不請客喔....'),
(0010, '', 0, '2024-03-19 04:38:15', '55688', '2024-03-20', '22:10', '2024-03-27', '20:08', 4, 15, '', 14500, 'YOYOYOYOYOYOYOOYOYOYO126'),
(0013, '', 0, '2024-03-19 03:59:25', '我是誰', '2024-03-19', '19:39', '2024-03-27', '22:39', 8, 15, '', 275, '一二三四五 成龍經典電影大家一起來看下去123'),
(0018, '', 0, '2024-03-19 06:25:45', '1234546666', '2024-03-27', '18:23', '2024-03-28', '18:23', 5, 4, '1253454', 1498, '1010240298988');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`postID`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `post`
--
ALTER TABLE `post`
  MODIFY `postID` int(4) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
