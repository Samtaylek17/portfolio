const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');


dotenv.config({path: './config.env'});

if (process.env.NODE_ENV === 'production') {
    const DB = process.env.MONGODB.replace(
        'PASSWORD',
        process.env.DB_PASSWORD
    );
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connection successful'));
} else {
    mongoose
    .connect(process.env.DATABASE_LOCAL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() => console.log('DB connection successful'));
}

const port  = process.env.PORT || 80

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})