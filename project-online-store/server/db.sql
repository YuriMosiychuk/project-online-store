select * from shops s
select * from items i

    CREATE TABLE shops (
	id serial PRIMARY KEY,
	name varchar(100) NOT NULL
 );

CREATE TABLE items (
    id serial PRIMARY KEY,
    shop_id integer NOT NULL,
    title varchar(100) NOT NULL,
    description varchar(100),
    img_url varchar(500) NOT NULL,
    price integer,
    FOREIGN KEY (shop_id) REFERENCES shops(id) ON DELETE CASCADE ON UPDATE CASCADE
);

insert into shops (name) values ('Магазин бджільництва');

UPDATE shops SET name ='Інтернет магазин бджільництва' where id=2;

delete  from items where id=1
    
 insert into items (shop_id, title, description, img_url, price) values 
(
	1, 
	'Вулик', 
	'Житло бджіл й основний інструмент пасічника', 
	'/img/Вулик.jpg', 
	2000
),
(
     1, 
	 'Вoщина',
	 'Тонка воскова пластина, із видавленими шестикутниками, які будуть основою бджолиних стільників',
	 '/img/Вoщина.jpg',
     1000
),
(
     1,
	 'Вуликова рамка',
	 'Призначена для утримування стільника із кормом (мед та перга) або розплодом у вулику.',
	 '/img/Рамка.jpg', 
      1200
 ),
(
     1,
	 'Одяг пасічника',
	 'Захисне спорядження - одяг бджоляра, яка захистить вас від вжалень під час роботи',
	 '/img/Одяг.jpg', 
      1500
 ),
 (
      1,
	 'Інвентар бджоляра',
	 'Робочі інструменти, без яких неможливо обслуговувати пасіку, доглядати за бджолами',
	 '/img/Оснащення.jpg', 
     150
),
(
      1,
	 'Тара для зберігання меду',
	 'Ємкість яка дозволяє зберігати мед без псування в будь-яких приміщеннях',
	 '/img/Тара.jpg', 
     15
);