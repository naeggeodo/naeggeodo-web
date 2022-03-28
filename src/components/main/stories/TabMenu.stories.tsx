import TabMenu from '../TabMenu';

export default {
  title: 'main/components',
  component: '탭메뉴',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Tab = () => <TabMenu />;

Tab.storyName = '하단 메뉴 탭';
