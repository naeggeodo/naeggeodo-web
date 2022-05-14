import { rest } from 'msw';
// ** API SERVER START
// ** npx msw init ./public --save

export const handlers = [
  rest.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`, (req, res, ctx) => {
    return res(
      ctx.json({
        categories: [
          {
            idx: 0,
            category: 'ALL',
          },
          {
            idx: 1,
            category: 'CHICKEN',
          },
          {
            idx: 2,
            category: 'JAPANESE',
          },
          {
            idx: 3,
            category: 'CHINESE',
          },
          {
            idx: 4,
            category: 'KOREAN',
          },
          {
            idx: 5,
            category: 'SNACKS',
          },
          {
            idx: 6,
            category: 'STEW',
          },
          {
            idx: 7,
            category: 'PIZZA',
          },
          {
            idx: 8,
            category: 'WESTERN',
          },
          {
            idx: 9,
            category: 'GRILLED_MEAT',
          },
          {
            idx: 10,
            category: 'PORK_FEET',
          },
          {
            idx: 11,
            category: 'DESSERT',
          },
          {
            idx: 12,
            category: 'FASTFOOD',
          },
        ],
      }),
    );
  }),
];
