using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreManagement.JWT
{
    public class JWTOptions
    {
        public string JwtKey { get; set; }
        public string JwtIssuer { get; set; }
        public string JwtExpireDays { get; set; }
    }
}
