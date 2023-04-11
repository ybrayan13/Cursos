using Microsoft.EntityFrameworkCore;
using proyecto_FETarjetaCredito_BackEnd.Models;

namespace proyecto_FETarjetaCredito_BackEnd
{
    public class AplicaciondbContext: DbContext
    {
        public AplicaciondbContext(DbContextOptions<AplicaciondbContext> options) 
            : base(options) 
        {

        }
        public DbSet<TarjetaCredito> TarjetaCredito { get; set; }
    }
}
