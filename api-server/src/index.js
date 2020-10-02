import app from './app';
import mongoose from 'mongoose';

(async app => {
  await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  });

  app.listen((process.env.PORT = 3000), () => {
    console.log(`server is up and running..`);
  });
})(app);
