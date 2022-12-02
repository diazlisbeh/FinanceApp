using System.Text.Json.Serialization;

namespace Backend.Models
{
    public class UserDto
    {
        public string Name{ get; set; }    
        public string Email {get;set;}
        public string LastName{ get; set; }
        public string password{ get; set; }
    }
}