import request from 'supertest';
import app from '../src/app';

describe('GET /api/primo/:numero', () => {
  it('debe devolver que 5 es primo', async () => {
    const res = await request(app).get('/api/primo/5');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ numero: 5, esPrimo: true });
  });

  it('debe devolver que 10 no es primo', async () => {
    const res = await request(app).get('/api/primo/10');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ numero: 10, esPrimo: false });
  });

  it('debe manejar errores de entrada inválida', async () => {
    const res = await request(app).get('/api/primo/abc');
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: 'El valor no es un número válido' });
  });
});
