const { Client } = require('pg')

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DB,
  entityPrefix: 'nextauth_',
  ssl: {
    rejectUnauthorized: false,
    ca: process.env.DATABASE_SSL_CERT,
  },
}

export default async (req, res) => {
  const client = new Client(config)
  await client.connect()
  const r = await client.query('SELECT * FROM nextauth_users as message')

  res.statusCode = 200
  res.json(r.rows)

  await client.end()
}
