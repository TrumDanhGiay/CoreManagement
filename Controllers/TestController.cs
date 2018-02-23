using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreManagement.Models;
using CoreManagement.Models.AccountViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CoreManagement.Controllers
{
    [Route("api/[controller]/[action]")]
    public class TestController : Controller
    {
       public IActionResult Ping()
        {
            return Ok();
        }
    }
}