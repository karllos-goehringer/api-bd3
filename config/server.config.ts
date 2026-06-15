import app from '../src/app';
const port = 3030;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});