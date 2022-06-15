import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import TagButton from '../createForm/TagButton';

export default {
  title: 'create/컴포넌트',
  component: TagButton,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            height: '100vh',
            gap: '10px',
            paddingTop: '20px',
            paddingLeft: '20px',
          }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TagButton>;

const datas = ['치킨', '피자', '중식', '고기', '해산물'];

export const TagButtonStory = () => {
  return datas.map((data) => <TagButton key={data} item={data} />);
};

TagButtonStory.storyName = '태그 버튼';
