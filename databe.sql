CREATE TABLE `FinanceApp`.`users`(
	id int Not null auto_increment,
    `name` varchar(20) Not null,
    last_name varchar(30) not null,
    email varchar(50) not null,
	`password` varchar(30) not null,
    unique(id,email),
    constraint PK_USER primary key (id,email)
);


CREATE TABLE `FinanceApp`.`categories`(
	id int Not null auto_increment,
    `name` varchar(16) Not null,
    unique(id,`name`),
     constraint PK_CATG primary key (id,`name`)
);

CREATE TABLE `FinanceApp`.`spends`(
	spendID varchar(50) not null ,
    amount float4 default 0 ,
    categoryID int not null,
    userID int not null,
    date_spend date,
    porpuse varchar(70),
    unique(spendID),
    constraint PF_SPENDS primary key (spendID),
    foreign key (categoryID) references categories(id),
    foreign key (userID) references users(id)
);

Create TABLE `FinanceApp`.`income`(
	incomeID varchar(50) not null ,
    amount float4 default 0 ,
    userID int not null,
    date_income date,
    unique(incomeID),
    constraint PF_INCOMES primary key (incomeID),
    foreign key (userID) references users(id)
);






