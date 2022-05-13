import { ComponentMeta } from '@storybook/react';
import CreateTabMenu from '../CreateTabMenu';

export default {
  title: 'create/컴포넌트',
  component: CreateTabMenu,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CreateTabMenu>;

export const CreateTabMenuStory = () => <CreateTabMenu />;

CreateTabMenuStory.storyName = '내꺼톡 생성 헤더 탭메뉴';
