
const fs = require('fs');
const express = require('express')
const app = express();
const PORT = 3000;

app.get('/workers', (req, res) => {
  fs.readFile('workers.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Fayl oxunarkən xəta:', err);
      return res.status(500).send('Serverdə səhv baş verdi.');
    }

    const workers = JSON.parse(data);

    res.json(workers);
  });
});

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} ünvanında işləyir`);
});
