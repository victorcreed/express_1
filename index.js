const express = require('express');
const app = express();
app.use(express.json());



// Create
app.post('/cars', (req, res) => {
  const car = req.body;
  car.id = cars.length + 1;
  cars.push(car);
  res.status(201).json(car);
});

// Read
app.get('/cars', (req, res) => {
  res.json(cars);
});

app.get('/cars/:id', (req, res) => {
  const car = cars.find(car => car.id === parseInt(req.params.id));
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
});


// Update
app.put('/cars/:id', (req, res) => {
  const carIndex = cars.findIndex(car => car.id === parseInt(req.params.id));
  if (carIndex === -1) {
    res.status(404).json({ message: 'Car not found' });
  } else {
    cars[carIndex] = { ...cars[carIndex], ...req.body };
    res.json(cars[carIndex]);
  }
});


// Delete
app.delete('/cars/:id', (req, res) => {
  const carIndex = cars.findIndex(car => car.id === parseInt(req.params.id));
  if (carIndex === -1) {
    res.status(404).json({ message: 'Car not found' });
  } else {
    cars.splice(carIndex, 1);
    res.status(204).send();
  }
});

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
