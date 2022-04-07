import { rest } from 'msw';

export const handlers = [
  rest.get('/http://localhost:5000/', (res, req, ctx) => {
    return res(ctx.json(['사과', '바나나']));
  }),
];
