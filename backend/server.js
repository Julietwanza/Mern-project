const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const projectsRouter = require('./routes/projects');
const errorHandler = require('./middleware/errorHandler');


dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());


app.use('/api/projects', projectsRouter);


app.get('/', (req, res) => res.send({ ok: true, message: 'SDG CleanWater API' }));


app.use(errorHandler);


const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;


if (!MONGODB_URI) {
console.error('MONGODB_URI not set. Exiting.');
process.exit(1);
}


mongoose
.connect(MONGODB_URI)
.then(() => {
console.log('Connected to MongoDB');
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => {
console.error('Failed connecting to MongoDB', err);
process.exit(1);
});
