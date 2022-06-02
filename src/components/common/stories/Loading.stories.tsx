import { ComponentMeta } from '@storybook/react';
import Loading from '../Loading';

export default {
  title: 'main/컴포넌트',
  component: Loading,
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Loading>;

export const LoadingStory = () => <Loading />;

LoadingStory.storyName = '로딩 컴포넌트';
