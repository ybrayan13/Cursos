﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using proyecto_FETarjetaCredito_BackEnd.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace proyecto_FETarjetaCredito_BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarjetaController : ControllerBase
    {
        private readonly AplicaciondbContext _context;

        public TarjetaController(AplicaciondbContext context)
        {
            _context = context;
        }

        // GET: api/<TarjetaController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listTarjetas = await _context.TarjetaCredito.ToListAsync();
                return Ok(listTarjetas);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<TarjetaController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
         //   return "value";
        //}

        // POST api/<TarjetaController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] TarjetaCredito tarjeta)
        {
            try
            {
                var existeTarjeta = false;
                var listTarjetas = await _context.TarjetaCredito.ToListAsync();
                listTarjetas.ForEach(item => {
                    if (tarjeta.NumeroTarjeta == item.NumeroTarjeta)
                    {
                        existeTarjeta = true;
                    }
                });
                if (existeTarjeta == true)
                {
                    return BadRequest(new { message = "La tarjeta #"+tarjeta.NumeroTarjeta+" ya se encuentra en uso" });
                }

                _context.Add(tarjeta);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Se registro la Tarjeta exitosamente" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<TarjetaController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] TarjetaCredito tarjeta)
        {
            if (id != tarjeta.Id)
            {
                return NotFound();
            }
            
            var existeTarjeta = false;
            var listTarjetas = await _context.TarjetaCredito.ToListAsync();
            
            listTarjetas.ForEach(item => {
                if (tarjeta.NumeroTarjeta == item.NumeroTarjeta && tarjeta.Id != item.Id)
                {
                    existeTarjeta = true;
                }
            });

            if (existeTarjeta == true)
            {
                return BadRequest(new { message = "El número de tarjeta ya se encuentra en uso" });
            }

            try
            {
                _context.TarjetaCredito.Update(tarjeta);
                await _context.SaveChangesAsync();
                return Ok(new { message = "la tarjeta fue actualizada con exito!!" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<TarjetaController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var tarjeta = await _context.TarjetaCredito.FindAsync(id);
                if (tarjeta==null)
                {
                    return NotFound();
                }
                _context.TarjetaCredito.Remove(tarjeta);
                await _context.SaveChangesAsync();
                return Ok(new { message = "la tarjeta fue eliminada con exito!!" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
