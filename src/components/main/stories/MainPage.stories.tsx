import Home from '../../../pages';
import ChatRoomItem from '../ChatRoomItem';
import { Tab } from './TabMenu.stories';

export default {
  title: 'main/페이지',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Main = () => <Home />;

Main.storyName = '메인페이지';
