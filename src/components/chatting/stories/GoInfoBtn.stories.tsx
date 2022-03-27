import GoInfoBtn from '../GoInfoBtn';

export default {
  title: 'chatting/components/GoInfoBtn',
  component: GoInfoBtn,
  decorators: [
    () => (
      <div style={{ height: '100vh', width: '100vw' }}>
        <GoInfoBtn />
      </div>
    ),
  ],
};

export const example = () => <GoInfoBtn />;
