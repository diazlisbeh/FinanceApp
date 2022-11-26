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

insert into `FinanceApp`.`categories`
 (`name`,`description`)
values ('Principal','This is the sum of all budgets');

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

Create Table `FinanceApp`.`Budget`(
	budgetID int not null auto_increment,
    amount float4 default 0,
    userID int not null,
    last_update date,
    categoryID int not null,
    unique(budgetID),
    primary key (budgetID),
    foreign key (userID) references users(id),
     foreign key (categoryID) references categories(id)
);

Create trigger User_T_CreateFirstCapital 
after insert on users for each row
insert into `FinanceApp`.`Budget`
(categoryID,
userID,
last_update,
amount)
values(1,new.id,now(),0);






