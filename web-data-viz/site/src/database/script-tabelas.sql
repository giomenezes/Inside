-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/
-- Criando o database da Inside e o executando
create database inside;
use inside;

-- Criação da tabela de estilos
create table Estilo (
idEstilo int primary key auto_increment,
nomeEstilo varchar(45)
);

-- Criação da tabela do usuário
create table usuario (
idNick int primary key auto_increment,
nickname varchar(30) unique,
nomeUsuario varchar (40),
sexo char(1),
email varchar(60) unique not null,
senha varchar(45) not null,
fkAdm int,
foreign key (fkAdm) references usuario(idNick)
) auto_increment = 1000;

-- Criação da tabela N:N
create table usuarioEstilo (
fkEstilo int,
foreign key (fkEstilo) references estilo(idEstilo),
fkUsuario int,
foreign key (fkUsuario) references usuario(idNick),
dataQuiz date,
primary key (fkUsuario)
);

insert into Estilo values 
(null, 'Estilo Minimalista'),
(null, 'Estilo Industrial'),
(null, 'Estilo Tropical'),
(null, 'Estilo Boho'),
(null, 'Estilo Cottage'),
(null, 'Estilo Tradicional'),
(null, 'Estilo Contemporâneo'),
(null, 'Estilo Moderno'),
(null, 'Estilo Art Déco'),
(null, 'Estilo Escandinavo'),
(null, 'Estilo Eclético'),
(null, 'Estilo Orgânico'),
(null, 'Estilo Oriental'),
(null, 'Estilo Provençal'),
(null, 'Estilo Rústico'),
(null, 'Estilo Vintage');

insert into usuario values 
(null, 'trblgio', 'gio', 'f', 'insider@gmail.com', 'giogiogio', null),
(null, 'robertinhaStyles', 'Roberts', 'f', 'robertinha@outlook.com', 'robertinha123', 1000),
(null, 'otavoConstrucoes', 'Otavo', 'm', 'otavo@outlook.com', 'otavoBigConstructions', 1000),
(null, 'donaLiz', 'Liz', 'f', 'liz@outlook.com', 'netinhaJoana', 1000),
(null, 'juca', 'Juca', 'm', 'juca@outlook.com', 'juquinha123', 1000),
(null, 'designNow', 'Design Now', 'f', 'design@outlook.com', 'designEVida', 1000);

insert into usuarioEstilo values 
(1, 1001, '2023-04-06'),
(2, 1002, '2023-05-18'),
(5, 1003, '2023-04-06'),
(6, 1004, '2023-05-21'),
(8, 1005, '2023-04-03');

-- Após criar as tabelas e inserir todos os dados, executar os comandos para:
-- Exibir os dados de cada tabela separadamente (confira se os dados foram inseridos corretamente).
select * from usuario;
select * from estilos;
select * from usuarioEstilo;

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


/*
comando para sql server - banco remoto - ambiente de produção
*/
CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	cpf CHAR(14)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY IDENTITY(1,1),
	descricao VARCHAR(300)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
);

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
