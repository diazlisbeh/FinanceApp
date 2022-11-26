namespace Backend.Models
{
    public class Spend
    {
        public string SpendID { get; set; }
        public float Amount{ get; set; }
        public Category Category { get; set; }
        public User User{ get; set; }
        public DateTime MyProperty { get; set; }
    }
}


/*
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
*/