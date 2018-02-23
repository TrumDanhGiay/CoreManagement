using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CoreManagement.Models;
using CoreManagement.JWT;
using Microsoft.AspNetCore.Http;

namespace CoreManagement.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Layout()
        {
            return View();
        }

        public ActionResult Login()
        {
            return View();
        }
        public ActionResult LoginPartial()
        {
            ViewBag.Title = "Đăng nhập";
            return View();
        }

        public ActionResult Register()
        {
            ViewBag.Title = "Đăng kí";
            return View();
        }

        public ActionResult Dashboard()
        {
            return View();
        }

        public ActionResult UserProfile()
        {
            return View();
        }

        public ActionResult LayoutAdmin()
        {
            HttpContext.Session.SetString("Username",Property.Username);
            return View();
        }
    }
}
