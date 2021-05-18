using BackEnd.API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.API.Data
{
    public class PayrollContext: IdentityDbContext<ApplicationUser>
    {
        public PayrollContext(DbContextOptions<PayrollContext> options) : base(options)
        {
        }
        public DbSet<MoviesModel> Movies { get; set; }
    }
}
