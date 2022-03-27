import QuickMessageComp from '../QuickMessageComp';

export default {
  title: 'chatting/components/QuickMessageComp',
  component: QuickMessageComp,
  decorators: [
    () => (
      <div style={{ height: '100vh', width: '100vw' }}>
        <QuickMessageComp />
      </div>
    ),
  ],
};

export const example = () => <QuickMessageComp />;
