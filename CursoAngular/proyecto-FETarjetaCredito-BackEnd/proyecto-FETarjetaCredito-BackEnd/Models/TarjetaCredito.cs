﻿using System.ComponentModel.DataAnnotations;

namespace proyecto_FETarjetaCredito_BackEnd.Models
{
    public class TarjetaCredito
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Titular { get; set; }
        [Required]
        public string NumeroTarjeta { get; set; }
        [Required]
        public string FechaExpiracion { get; set; }
        [Required]
        public string CVV { get; set; }
    }
}
