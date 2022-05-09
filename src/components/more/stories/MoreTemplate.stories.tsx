import { ComponentMeta } from '@storybook/react';
import MoreTemplate from '../MoreTemplate';

export default {
  title: 'more/페이지',
  component: MoreTemplate,
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
} as ComponentMeta<typeof MoreTemplate>;

export const MoreTabTemplate = () => <MoreTemplate />;

MoreTabTemplate.storyName = '전체 탭 페이지';
