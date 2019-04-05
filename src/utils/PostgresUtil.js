const { Pool } = require('pg')

const pool = new Pool({
  user: "qikong",
  host: "localhost",
  database: "postgres",
  password: "1234",
  port: "5432"

  // connectionString: process.env.DATABASE_URL,
  // ssl: true
})

module.exports = {
  pool,
}
