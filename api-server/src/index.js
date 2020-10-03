import app from './app';

app.datasources
  .mongoose()
  .then(() => {
    app.listen((process.env.PORT = 3000), () => {
      console.log(`server is up and running..`);
    });
  })
  .catch(err => {
    console.log(err);
  });
