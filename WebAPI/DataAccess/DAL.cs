using System;
using System.Data;
using System.Data.SqlClient;
using DALAccess.Models;

namespace DALAccess
{
    public class DAL
    {
        private readonly string _connectionString;
        public DAL(string connectionString)
        {
            _connectionString = connectionString;
        }
        public DataTable GetDepartment(int dId) 
        {
            string query = @"select * from dbo.Department";
            
            //string query = @"select * from dbo.Employee";
            DataTable table = new DataTable();
            string sqlDataSource = _connectionString;
            SqlDataReader myReader;
            using (SqlConnection mycon = new SqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (SqlCommand mycom = new SqlCommand(query, mycon))
                {
                    myReader = mycom.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    mycon.Close();
                }
            }
            return table;
        }
    }
}
