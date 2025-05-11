import express, { Request, Response } from 'express';

const app = express();

const esPrimo = (n: number): boolean => {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

app.get('/api/primo/:numero', (req: Request, res: Response) => {
  const numero = parseInt(req.params.numero);

  if (isNaN(numero)) {
    return res.status(400).json({ error: 'El valor no es un número válido' });
  }

  return res.json({ numero, esPrimo: esPrimo(numero) });
});

export default app;
