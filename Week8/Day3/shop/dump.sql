CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `types` (`id`, `title`) VALUES
(1, 'Entertaintment'),
(2, 'Groceries'),
(3, 'Restaurant'),
(4, 'Services'),
(5, 'Transport');

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `type` tinyint(4) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `title`, `price`, `type`, `date`) VALUES
(1, 'KFC', 2380, 3, '2018-02-05'),
(2, 'TELEKOM.HU', 5590, 4, '2018-02-05'),
(3, 'BKK AUTOMATA', 3000, 5, '2018-02-07'),
(4, 'VAPIANO', 4600, 3, '2018-02-07'),
(5, 'Fozelekfalo', 1770, 3, '2018-02-14'),
(6, 'ITUNES', 299, 4, '2018-02-16'),
(7, 'PIZZA FORTE', 1590, 3, '2018-02-19'),
(8, 'CBA', 3590, 2, '2018-02-22'),
(9, 'Spotify', 2509, 4, '2018-02-23'),
(10, 'Budapest BBC', 1940, 3, '2018-02-26'),
(11, 'ITUNES', 349, 4, '2018-02-27'),
(12, 'CINEMA CITY', 3450, 1, '2018-03-01'),
(13, 'ITUNES', 299, 4, '2018-03-01'),
(14, 'PULITZER', 1090, 3, '2018-03-02'),
(15, 'BKK AUTOMATA', 3000, 5, '2018-03-05'),
(16, 'CBA', 4159, 2, '2018-03-05'),
(17, 'Amazon web services', 167, 4, '2018-03-06'),
(18, 'Barion', 4440, 1, '2018-03-07'),
(19, 'CBA', 2282, 2, '2018-03-09'),
(20, 'PIZZA FORTE', 1795, 3, '2018-03-09'),
(21, 'AUCHAN BUDAORS', 21799, 2, '2018-03-10'),
(22, 'MCDHU', 580, 3, '2018-03-13'),
(23, 'BELOZZO', 1560, 3, '2018-03-14'),
(24, 'LIDL', 2574, 2, '2018-03-14'),
(25, 'ITUNES', 299, 4, '2018-03-19'),
(26, 'ROSSMANN', 398, 2, '2018-03-19'),
(27, 'AUCHAN BUDAORS', 9636, 2, '2018-03-19'),
(28, 'LIKE RESTAURANT', 2100, 3, '2018-03-19'),
(29, 'CBA', 1064, 2, '2018-03-22'),
(30, 'Spotify', 2504, 4, '2018-03-23'),
(31, 'NETPINCER', 1701, 3, '2018-03-27'),
(32, 'CBA', 2863, 2, '2018-03-28'),
(33, 'UDEMY ONLINE', 9428, 1, '2018-03-29'),
(34, 'ITUNES', 299, 4, '2018-03-29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;