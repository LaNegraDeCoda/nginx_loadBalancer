import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;
const INSTANCE_ID = Math.floor(Math.random() * 10000); // Simulate instance identity

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello from backend!',
    instance: INSTANCE_ID
  });
});

app.listen(PORT, () => {
  console.log(`🟢 Backend instance ${INSTANCE_ID} running on port ${PORT}`);
});
