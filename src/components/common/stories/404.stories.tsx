import { ComponentMeta } from '@storybook/react';
import NotFound from '../../../pages/404';
import Loading from '../Loading';

export default {
  title: 'error/페이지',
  component: Loading,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof Loading>;

export const NotFoundStory = () => <NotFound />;

NotFoundStory.storyName = '404 페이지';
