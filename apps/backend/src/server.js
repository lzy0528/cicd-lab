import express from 'express';

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello from CI/CD backend', version: '1.0.0' });
});

app.get('/health', (_req, res) => res.status(200).send('ok'));

app.get('/api/version', (_req, res) => res.send('1.0.0'));

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});

export default app;
