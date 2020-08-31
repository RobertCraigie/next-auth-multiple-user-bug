import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    Providers.Bungie({
      clientId: process.env.BUNGIE_CLIENT_ID,
      clientSecret: process.env.BUNGIE_SECRET,
      apiKey: process.env.BUNGIE_API_KEY,
    }),
  ],
  secret: process.env.SECRET,
  database:  {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DB,
    entityPrefix: 'nextauth_',
    ssl: {
      rejectUnauthorized: false,
      ca: process.env.DATABASE_SSL_CERT,
    },
  },
  session: {
    jwt: true
  }
};

export default (req, res) => NextAuth(req, res, options);
