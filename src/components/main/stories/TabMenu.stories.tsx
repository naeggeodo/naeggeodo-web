import { ComponentMeta } from '@storybook/react';
import TabMenu from '../TabMenu';

export default {
  title: 'main/컴포넌트',
  component: TabMenu,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TabMenu>;

export const Tab = () => <TabMenu />;

Tab.storyName = '하단 메뉴 탭';
