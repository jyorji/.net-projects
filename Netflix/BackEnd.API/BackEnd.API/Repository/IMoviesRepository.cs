using BackEnd.API.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BackEnd.API.Repository
{
    public interface IMoviesRepository
    {
        Task<List<MoviesModel>> GetMoviesAsync();
        Task<MoviesModel> GetMovieByIdAsync(int MovieId);
    }
}
