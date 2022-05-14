import { ComponentMeta } from '@storybook/react';
import MoreTemplate from '../MoreTemplate';

export default {
  title: 'more/페이지',
  component: MoreTemplate,
  decorators: [(Story) => <Story />],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MoreTemplate>;

export const MoreTabTemplate = () => <MoreTemplate />;

MoreTabTemplate.storyName = '전체 탭 페이지';
