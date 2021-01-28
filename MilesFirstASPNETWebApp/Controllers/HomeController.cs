using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MilesFirstASPNETWebApp.Models;

namespace MilesFirstASPNETWebApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("GradeCalc")]
        public IActionResult GradeCalc()
        {
            return View();
        }

        //Accept inputs from the grade calculator
        [HttpPost("GradeCalc")]
        public IActionResult GradeCalc (GradeCalcModel model)
        {
            return View();
        }
    }
}
