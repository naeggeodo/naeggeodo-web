import '@testing-library/jest-dom';
import { server } from './mocks/server';

beforeAll(() => {
  console.log('✨✨✨ mock server is listen ✨✨✨');
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
