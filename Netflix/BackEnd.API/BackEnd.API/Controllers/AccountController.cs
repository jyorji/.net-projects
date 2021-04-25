using BackEnd.API.DTOs;
using BackEnd.API.Models;
using BackEnd.API.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Runtime.Caching;

namespace BackEnd.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _accountRepository;

        public AccountController(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUp([FromBody]SignUpModel signUpModel)
        {
            var result = await _accountRepository.SignUpAsync(signUpModel);

            if (result.Succeeded)
            {
                return Ok(result.Succeeded);
            }
            else
            {
                if(result.Errors.Any())
                {
                    List<ValidationDto> temp = new List<ValidationDto>();
                    foreach (var error in result.Errors)
                    {
                        ValidationDto vDto = new ValidationDto()
                        {
                            Error = error.Code,
                            Expected = error.Description
                        };
                        temp.Add(vDto);
                    }
                    return BadRequest(temp);
                }
            }
            return BadRequest();
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            var result = await _accountRepository.LoginAsync(loginModel);

            if (string.IsNullOrEmpty(result))
            {
                return Unauthorized();
            }

            var loginTokenDto = new LogInTokenDto();
            loginTokenDto.Token = result;
            loginTokenDto.ExpiredTime = DateTime.Now.AddDays(1);

            return Ok(loginTokenDto);

        }
    }
}
