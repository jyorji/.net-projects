using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.API.Models
{
    public class MoviesModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MovieId { get; set; }

        [Column(TypeName ="text")]
        public string BackgroundImg { get; set; }

        [Column(TypeName = "text")]
        public string CardImg { get; set; }

        [Column(TypeName = "text")]
        public string Description { get; set; }

        [Column(TypeName = "text")]
        public string SubTitle { get; set; }

        [Column(TypeName = "text")]
        public string Title { get; set; }

        [Column(TypeName = "text")]
        public string TitleImg { get; set; }

        [Column(TypeName = "text")]
        public string Type { get; set; }
    }
}
