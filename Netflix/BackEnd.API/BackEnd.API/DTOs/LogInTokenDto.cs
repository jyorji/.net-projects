using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.API.DTOs
{
    public class LogInTokenDto
    {
        public string Token { get; set; }
        public DateTime ExpiredTime { get; set; }
    }
}
