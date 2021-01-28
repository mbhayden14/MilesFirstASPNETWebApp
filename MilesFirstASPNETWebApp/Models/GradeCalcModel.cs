using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MilesFirstASPNETWebApp.Models
{
    public class GradeCalcModel
    {
        //Validate inputs and output error messages
        [Range(0, 100, ErrorMessage = "The assignments category must be between 0 and 100")]
        public int Assignments { get; set; }
        [Range(0, 100, ErrorMessage = "The group project category must be between 0 and 100")]
        public int GroupProject { get; set; }
        [Range(0, 100, ErrorMessage = "The quizzes category must be between 0 and 100")]
        public int Quizzes { get; set; }
        [Range(0, 100, ErrorMessage = "The exams category must be between 0 and 100")]
        public int Exams { get; set; }
        [Range(0, 100, ErrorMessage = "The INTEX category must be between 0 and 100")]
        public int Intex { get; set; }
      

    }
}
