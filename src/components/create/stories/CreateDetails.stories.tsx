import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import CreateDetails from '../createForm/CreateDetails';

export default {
  title: 'create/페이지',
  component: CreateDetails,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div style={{ height: '120vh' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof CreateDetails>;

const Template = (args) => <CreateDetails {...args} />;
export const CreateDetailsStory = Template.bind({});

CreateDetailsStory.storyName = '내꺼톡 생성 디테일';
