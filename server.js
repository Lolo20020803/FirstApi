const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000; // Port assign
const db = process.env.MONGODB || 'mongodb://localhost:27017/FirstApi'; // Database Location

mongoose.connect(db, (err) => {
  if (err) console.log(`Cant connect to database. Error: ${err}`);
  else app.listen(PORT, () => { console.log(`Node server running on http://localhost:${PORT}`); });
});

module.exports = app;
