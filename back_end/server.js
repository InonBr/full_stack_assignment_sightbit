const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/db');

const users = require('./routers/users');

const port = 5000;

app.use(cors());
app.use(express.json());

app.use(users);

// connect to mongoDB and run the server
connectDB().then(() => {
  console.log('🔵 MongoDB connected...');
  app.listen(port, () => {
    console.log(`🟢 App listening at http://localhost:${port}`);
  });
});
