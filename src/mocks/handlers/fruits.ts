import { rest } from 'msw';

export const getFruits = rest.get('/fruits', (req, res, ctx) =>
  res(ctx.json(['사과', '바나나'])),
);
