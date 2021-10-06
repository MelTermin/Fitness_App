const Pool=require("pg").Pool;

const pool= new Pool ({
  host : "ec2-44-199-26-122.compute-1.amazonaws.com",
  port: '5432',
  user : 'czuhivybeloztk',
  password : '0095e3f67cb5764ca78fc8c5ebc72f6c5d1133a01074407dfc4675d1eb971bd8',
  database : 'd8oemb3cvac7uv'
});

module.exports= pool;