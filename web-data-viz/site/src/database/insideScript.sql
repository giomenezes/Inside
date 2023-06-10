-- Criando o database da Inside e o executando
create database inside;
use inside;

-- Criação da tabela de estilos
create table Estilo (
idEstilo int primary key auto_increment,
nomeEstilo varchar(45),
url varchar(90)
);

-- Criação da tabela do usuário
create table usuario (
nickname varchar(30) primary key,
nome varchar (40),
email varchar(60) unique not null,
senha varchar(45) not null,
adm boolean
);

-- Criação da tabela N:N
create table usuarioEstilo (
fkEstilo int,
foreign key (fkEstilo) references estilo(idEstilo),
fkUsuario varchar(30),
foreign key (fkUsuario) references usuario(nickname),
dataQuiz date,
primary key (fkUsuario)
);

-- Criação da tabela 1:1
create table telefone (
fkUsuario varchar(30) primary key,
foreign key (fkUsuario) references usuario(nickname),
telefoneCelular char(14),
telefoneFixo char(13)
);

insert into Estilo values 
(null, 'Estilo Minimalista', '../assets/quiz/minimalista.png'),
(null, 'Estilo Industrial', '../assets/quiz/industrial.png'),
(null, 'Estilo Tropical', '../assets/quiz/tropical.png'),
(null, 'Estilo Boho', '../assets/quiz/boho.png'),
(null, 'Estilo Cottage', '../assets/quiz/cottage.png'),
(null, 'Estilo Tradicional', '../assets/quiz/tradicional.png'),
(null, 'Estilo Contemporâneo', '../assets/quiz/contemporaneo.png'),
(null, 'Estilo Moderno', '../assets/quiz/moderno.png'),
(null, 'Estilo Art Déco', '../assets/quiz/art deco.png'),
(null, 'Estilo Escandinavo', '../assets/quiz/escandinavo.png'),
(null, 'Estilo Eclético', '../assets/quiz/ecletico.png'),
(null, 'Estilo Orgânico', '../assets/quiz/organico.png'),
(null, 'Estilo Oriental', '../assets/quiz/oriental.png'),
(null, 'Estilo Provençal', '../assets/quiz/provencal.png'),
(null, 'Estilo Rústico', '../assets/quiz/rustico.png'),
(null, 'Estilo Vintage', '../assets/quiz/vintage.png');

insert into usuario values 
('trblgio', 'gio', 'insider@gmail.com', 'giogiogio', true),
('robertinhaStyles', 'Roberts', 'robertinha@outlook.com', 'robertinha123', false),
('otavoConstrucoes', 'Otavo', 'otavo@outlook.com', 'otavoBigConstructions', false),
('donaLiz', 'Liz', 'liz@outlook.com', 'netinhaJoana', false),
('juca', 'Juca', 'juca@outlook.com', 'juquinha123', false),
('designNow', 'Design Now', 'design@outlook.com', 'designEVida', false);

insert into usuarioEstilo values ((select idEstilo from estilo where url = '../assets/quiz/escandinavo.png'), 'otavoConstrucoes', now());
-- (1, 'robertinhaStyles', '2023-04-06'),
-- (2, 'otavoConstrucoes', '2023-05-18'),
-- (5, 'donaLiz', '2023-04-06'),
-- (6, 'juca', '2023-05-21'),
-- (8, 'designNow', '2023-04-03');

insert into telefone values 
('robertinhaStyles', '(11)98437-2834', '(11)2356-9076'),
('donaLiz', '(13)98437-7344', '(11)1239-4236'),
('juca', '(21)98743-3256', '(11)9384-1235'),
('designNow', '(11)92143-0129', '(11)9753-3276'),
('otavoConstrucoes', '(12)94385-8342', '(12)4323-8795');

-- Após criar as tabelas e inserir todos os dados, executar os comandos para:
-- Exibir os dados de cada tabela separadamente (confira se os dados foram inseridos corretamente).
select * from usuario;
select * from estilo;
select * from usuarioEstilo;
select * from telefone;

-- Selecionar o estilo de certo usuário
SELECT * FROM usuarioEstilo JOIN estilo ON idEstilo = fkEstilo WHERE fkUsuario = 'thoyf';

-- Exibir uma lista apenas dos nicknames de todos os usuários.
select nickname from usuario;

-- Exibir uma lista apenas das datas distintos de todos os os quiz já feitos.
select distinct dataQuiz from usuarioEstilo;

-- Exibir os dados dos usuários ordenados pelo nick.
select * from usuario order by nickname;

-- Exibir os dados dos usuario ordenados pelo email, de forma decrescente.
select * from usuario order by email desc;

-- Exibir os dados dos usuários que tenham idNick entre 1001 e 1005.
select * from usuario order by idNick between 1001 and 1005;

-- Exibir os nicknames e os nomes dos usuários cujos nomes começam com a letra ‘D’.
select nickname, nomeUsuario from usuario where nomeUsuario like 'D%';

-- Exibir os nicknames e os nomes dos usuários cujos nomes terminam com a letra ‘s’.
select nickname, nomeUsuario from usuario where nickname like '%s';

-- Exibir os nomes dos estilos que tem a letra ‘e’ como terceira letra do nome.
select nomeEstilo from estilo where nomeEstilo like '__t%';

-- Exibir os nomes dos estilos cujos nomes tenham a letra ‘l’ como 5ª letra de trás para frente.
select nomeEstilo from estilo where nomeEstilo like '% %____l%';

-- Exibir os dados dos usuários cujo estilo seja o Estilo Minimalista, referenciando o idEstilo.
select * from usuario join usuarioEstilo on fkEstilo = 1 and fkUsuario = idNick;

-- Exibir os dados dos estilos e os usuários de um determinado intervalo.
select * from estilo join usuarioEstilo on fkEstilo >= 2 and fkEstilo = idEstilo;

-- Exibir o idNick e o nome de cada usuário, juntamente com o idNick e o nome do seu administrador. 
-- Faça com que o título da coluna seja “ID do Usuário” para usuário e “ID do Administrador” para o id do administrador.
select idNick.idNick as 'ID do Usuário', idNick.nomeUsuario as 'Nome do Usuário', 
	   idAdm.idNick as 'ID do Administrador', idAdm.nomeUsuario as 'Nome do Administrador' from usuario as idNick 
																							join usuario as idAdm
																							on idNick.fkAdm = idAdm.idNick;

-- Exibir para cada usuário relacionado ao estilo Industrial, o idNick do usuário, seu respectivo nome, e o nome do estilo.
select usuario.idNick, usuario.nomeUsuario, estilo.nomeEstilo from usuario join usuarioEstilo on fkUsuario = idNick
																		 join estilo on fkEstilo = idEstilo
																		 where estilo.nomeEstilo = 'Estilo Industrial';

-- Exibir o usuário relacionado ao estilo que se relaciona e os dados desse estilo
select * from usuario join usuarioEstilo on idNick = fkUsuario
					  join estilo on idEstilo = fkEstilo;

-- Exibir os nomes dos funcionários que realizaram o quiz antes de 18 de Maio.
select nomeUsuario from usuario join usuarioEstilo on idNick = fkUsuario where dataQuiz < '2023-05-18';

-- Exibir a quantidade de datas de quizes diferentes que existem na tabela.
select count(distinct(dataQuiz)) as 'Qtd. de datas diferentes' from usuarioEstilo;

-- Exibir a quantidade de usuários no database.
select count(distinct(idNick)) as 'Qtd. de usuários' from usuario;

-- Exibir a quantidade de usuários femininos no cadastrados no site.
select count(sexo) as 'Qtd. de usuários femininos' from usuario  where sexo = 'f';

-- Exibir a quantidade de usuários masculinos no cadastrados no site.
select count(sexo) as 'Qtd. de usuários masculinos' from usuario  where sexo = 'm';

-- Exibir o menor e o maior salário da empresa.
select min(dataQuiz) as 'Primeira data de quiz realizado', max(DataQuiz) as 'Última data de quiz realizado' from usuarioEstilo;

-- Exibir todos os usuários e seus respectivos estilos, inclusive os usuários que não posssuem um estilo.
select * from usuario left join usuarioEstilo on fkUsuario = idNick;

-- Exibir todos os usuários que possuem estilos relacionados a eles.
select * from usuario right join usuarioEstilo on fkUsuario = idNick;