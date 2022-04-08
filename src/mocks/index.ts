const initMockApi = () => {
  if (typeof window === 'undefined') {
    const { server } = require('./server');
    console.log('server open 🔥');
    server.listen();
  } else {
    const { worker } = require('./browser');
    console.log('browser open ✨');
    worker.start();
  }
};

export default initMockApi;
