using BackEnd.API.Data;
using BackEnd.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.API.Repository
{
    public class MoviesRepository : IMoviesRepository
    {
        private readonly PayrollContext _context;

        public MoviesRepository(PayrollContext context)
        {
            _context = context;
        }
        public async Task<List<MoviesModel>> GetMoviesAsync()
        {
            var result = await _context.Movies.Select(movies => new MoviesModel()
            {
                MovieId = movies.MovieId,
                BackgroundImg = movies.BackgroundImg,
                CardImg = movies.CardImg,
                Description = movies.Description,
                SubTitle = movies.SubTitle,
                Title = movies.Title,
                TitleImg = movies.TitleImg,
                Type = movies.Type
            }
            ).ToListAsync();

            return result;
        }
        public async Task<MoviesModel> GetMovieByIdAsync(int MovieId)
        {
            var result = await _context.Movies.Where(x => x.MovieId == MovieId).Select(movies => new MoviesModel()
            {
                MovieId = movies.MovieId,
                BackgroundImg = movies.BackgroundImg,
                CardImg = movies.CardImg,
                Description = movies.Description,
                SubTitle = movies.SubTitle,
                Title = movies.Title,
                TitleImg = movies.TitleImg,
                Type = movies.Type
            }
            ).FirstOrDefaultAsync();

            return result;
        }
    }
}
