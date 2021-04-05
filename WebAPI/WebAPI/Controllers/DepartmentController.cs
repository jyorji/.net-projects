using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using WebAPI.Models;
using DALAccess;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public DepartmentController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get()
        {
            var result = new DAL(_configuration.GetConnectionString("EmployeeAppCon"));
            var t = new JsonResult(result.GetDepartment(1));
            return t;
        }



        /*[HttpPost]
        public JsonResult Post(DepartmentClass dep)
        {

        }*/
    }
}
