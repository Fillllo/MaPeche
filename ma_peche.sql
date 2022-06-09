-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 09 juin 2022 à 09:02
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ma_peche`
--

-- --------------------------------------------------------

--
-- Structure de la table `comptes`
--

CREATE TABLE `comptes` (
  `id_compte` int(255) NOT NULL,
  `pseudo` varchar(30) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `mdp` varchar(30) NOT NULL,
  `adresse_mail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `comptes`
--

INSERT INTO `comptes` (`id_compte`, `pseudo`, `nom`, `prenom`, `mdp`, `adresse_mail`) VALUES
(1, 'Fillo', 'Tosello', 'Christophe', 'test', 'test.test@gmail.com'),
(2, 'Chris', 'Chris', 'Chris', 'Chris', 'Chris'),
(3, 'test', 'test', 'test', 'Chris', 'Chris'),
(4, 'test', 'test', 'test', 'Chris', 'Chris'),
(5, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(6, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(7, 'test', 'test', 'test', 'Chris', 'Chris'),
(8, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(9, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(10, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(11, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(12, 'sqdqs', 'qsddqs', 'qsdqs', 'sqdqs', 'dqs'),
(13, 'qsdsqd', 'qsdqsd', 'qsd', '20122001Du13/$*', 'dsqsqd'),
(14, 'qsdsqd', 'qsdqsd', 'qsd', '20122001Du13/$*', 'dsqsqd'),
(15, 'qsdsqd', 'qsdqsd', 'qsd', '20122001Du13/$*', 'dsqsqd'),
(16, 'sqdqsd', 'sdqsdq', 'dsqqsd', 'qsdsqd12D*', 'sqddq'),
(17, 'dqsdqsd', 'sdqsd', 'dqsdsq', 'qsdqdsdsqDD78*', 'qsdqsd'),
(18, 'qsdqsd', 'sqddq', 'sqdqsd', 'sqdqsdqsd25D*', 'sqdsqdd'),
(19, 'gfdg', 'gfrdg', 'fdgdg', '[object Object]', 'fdggdf'),
(20, 'test', 'test', 'test', 'Chris', 'Chris'),
(21, 'qdsqsd', 'dqsdq', 'qsdqsd', 'qsdqsdqdsDD59*', 'qsdqsd'),
(22, 'test', 'test', 'test', 'Chris', 'Chris'),
(23, 'sqdqsd', 'dsqsd', 'qsdqds', 'dqsqsddsqDD59*', 'qsdqs'),
(24, 'qdsqsd', 'dsqd', 'qsd', 'dsqqsdqsdDD59*', 'dsqqs'),
(25, 'sfsdf', 'fsdfsfd', 'dfsdf', 'qsdqsdqdsdqDD59*', 'fsdsdf'),
(26, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(27, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(28, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(29, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(30, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(31, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(32, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined');

-- --------------------------------------------------------

--
-- Structure de la table `points`
--

CREATE TABLE `points` (
  `id_point` int(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `lat` varchar(65) NOT NULL,
  `lng` varchar(65) NOT NULL,
  `id_compte` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `points`
--

INSERT INTO `points` (`id_point`, `nom`, `lat`, `lng`, `id_compte`) VALUES
(1, 'Point 1', '44', '5', 17),
(2, 'Point 2', '43.7104363', '5.1977942', 17),
(24, 'dfsdf', '47.42524553427128', '-1.2442016601562502', 17),
(25, '', '47.58674026309668', '0.06591796875000001', 17),
(26, 'Lac', '43.74475515199825', '5.935535430908204', 17),
(28, 'Point 0', '0', '0', 2);

-- --------------------------------------------------------

--
-- Structure de la table `poisson`
--

CREATE TABLE `poisson` (
  `id_poisson` int(255) NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `poisson`
--

INSERT INTO `poisson` (`id_poisson`, `nom`) VALUES
(1, 'Truite'),
(2, 'Chevesne'),
(5, 'Gardon'),
(6, 'Brochet'),
(7, 'Sandre'),
(8, 'Perche'),
(9, 'Carpe'),
(10, 'Silure');

-- --------------------------------------------------------

--
-- Structure de la table `prises`
--

CREATE TABLE `prises` (
  `id_prise` int(255) NOT NULL,
  `id_point` int(255) NOT NULL DEFAULT 0,
  `id_poisson` int(255) NOT NULL,
  `taille` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `prises`
--

INSERT INTO `prises` (`id_prise`, `id_point`, `id_poisson`, `taille`) VALUES
(1, 1, 1, 23),
(2, 1, 1, 35),
(4, 1, 2, 23),
(5, 2, 2, 21);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comptes`
--
ALTER TABLE `comptes`
  ADD PRIMARY KEY (`id_compte`);

--
-- Index pour la table `points`
--
ALTER TABLE `points`
  ADD PRIMARY KEY (`id_point`),
  ADD KEY `fk_points_comptes` (`id_compte`);

--
-- Index pour la table `poisson`
--
ALTER TABLE `poisson`
  ADD PRIMARY KEY (`id_poisson`);

--
-- Index pour la table `prises`
--
ALTER TABLE `prises`
  ADD PRIMARY KEY (`id_prise`),
  ADD KEY `fk_prises_points` (`id_point`),
  ADD KEY `fk_prises_poissons` (`id_poisson`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `comptes`
--
ALTER TABLE `comptes`
  MODIFY `id_compte` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT pour la table `points`
--
ALTER TABLE `points`
  MODIFY `id_point` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT pour la table `poisson`
--
ALTER TABLE `poisson`
  MODIFY `id_poisson` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `prises`
--
ALTER TABLE `prises`
  MODIFY `id_prise` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `points`
--
ALTER TABLE `points`
  ADD CONSTRAINT `fk_points_comptes` FOREIGN KEY (`id_compte`) REFERENCES `comptes` (`id_compte`);

--
-- Contraintes pour la table `prises`
--
ALTER TABLE `prises`
  ADD CONSTRAINT `fk_prises_points` FOREIGN KEY (`id_point`) REFERENCES `points` (`id_point`),
  ADD CONSTRAINT `fk_prises_poissons` FOREIGN KEY (`id_poisson`) REFERENCES `poisson` (`id_poisson`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
