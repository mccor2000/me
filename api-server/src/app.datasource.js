import _mongoose from 'mongoose';
import config from './app.config';

export const mongoose = async () => {
  _mongoose.connection.on('connected', () => {
    console.log('mongoose connected');
  });

  _mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected');
  });

  _mongoose.connection.on('error', err => {
    console.log(`mongoose connection error: ${err}`);
  });

  process.on('SIGINT', () => {
    _mongoose.connection.close(() => {
      console.log('mongoose connection closed');
    });

    process.exit(0);
  });

  await _mongoose.connect(config.db.url, config.db.options);
};
