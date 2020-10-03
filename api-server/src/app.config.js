// import dotenv from 'dotenv';
// dotenv.config();

export default {
  environment: process.env.NODE_ENV,
  db: {
    url: process.env.MONGODB_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
      poolSize: 10
    }
  }
};
