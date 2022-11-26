using System;

namespace Backend.Models;


public class User 
{
    public int Id { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Password{ get; set; }
}


/*
id int Not null auto_increment,
    `name` varchar(20) Not null,
    last_name varchar(30) not null,
    email varchar(50) not null,
	`password` varchar(30) not null,
    unique(id,email),
    constraint PK_USER primary key (id,email)

*/