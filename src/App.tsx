import { Icon28NewsfeedOutline } from '@vkontakte/icons';
import { Icon28Users3Outline } from '@vkontakte/icons';
import { Icon28SearchOutline } from '@vkontakte/icons';
import React from 'react';
import {
  AppRoot,
	Badge,
	Counter,
	Epic,
	PanelHeader,
	PanelHeaderBack,
	PanelHeaderButton,
	Platform,
	SplitCol,
	SplitLayout,
	Tabbar,
	TabbarItem,
	useAdaptivityConditionalRender,
	usePlatform,
} from '@vkontakte/vkui';
import {
  Icon28SettingsOutline,
	Icon28MessageOutline,
	Icon28UserCircleOutline,
} from '@vkontakte/icons';
import { Feed } from './pages/Feed/Feed';
import { Friends } from './pages/Friends/Friends';
import { Navigation } from './components/Navigation/Navigation';
import { Messages } from './pages/Messages/Messages';
import { Search } from './pages/Search/Search';
import { Profile } from './pages/Profile/Profile';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

export const App = () => {

    const location = window.location.pathname.slice(1)
    const platform = usePlatform();
    const { viewWidth } = useAdaptivityConditionalRender();
    const [activeStory, setActiveStory] = React.useState(location);
    // const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
    const onStoryChange = (e) =>  {      
        window.history.pushState("object or string", "Title", e.currentTarget.dataset.story);
        setActiveStory(e.currentTarget.dataset.story);
    }
    function onFriendLink(id: string) {
      console.log(id, ' this id', activeStory);
      // window.history.pushState("object or string", "Title", 'profile' + '/#' + id);
      setActiveStory(`profile`)
      console.log(id, ' this id', activeStory, 'this Active');
    }
    
    const isVKCOM = platform !== Platform.VKCOM;
  
    return (
      <AppRoot>
        <SplitLayout
          header={isVKCOM && <PanelHeader separator={false} after={ <PanelHeaderButton>
            <Icon28SettingsOutline />
          </PanelHeaderButton>}/>}
          style={{ justifyContent: 'center' }}
        >
          {viewWidth.tabletPlus && (
          <Navigation activeStory={activeStory} isVKCOM={isVKCOM} onStoryChange={onStoryChange} viewWidth={viewWidth}/>
          )}
          <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
            <Epic
              activeStory={activeStory}
              tabbar={
                viewWidth.tabletMinus && (
                  <Tabbar className={viewWidth.tabletMinus.className}>
                    <TabbarItem
                      onClick={onStoryChange}
                      selected={activeStory === 'feed'}
                      data-story="feed"
                      text="Новости"
                    >
                      <Icon28NewsfeedOutline />
                    </TabbarItem>
                    <TabbarItem
                      onClick={onStoryChange}
                      selected={activeStory === 'friends'}
                      data-story="friends"
                      text="Друзья"
                    >
                      <Icon28Users3Outline />
                    </TabbarItem>
                    <TabbarItem
                      onClick={onStoryChange}
                      selected={activeStory === 'messages'}
                      data-story="messages"
                      indicator={
                        <Counter size="s" mode="prominent">
                          12
                        </Counter>
                      }
                      text="Сообщения"
                    >
                      <Icon28MessageOutline />
                    </TabbarItem>
                    <TabbarItem
                      onClick={onStoryChange}
                      selected={activeStory === 'search'}
                      data-story="search"
                      text="Поиск"
                    >
                      <Icon28SearchOutline />
                    </TabbarItem>
                    <TabbarItem
                      onClick={onStoryChange}
                      selected={activeStory === 'profile'}
                      data-story="profile"
                      indicator={<Badge mode="prominent" />}
                      text="Профиль"
                    >
                      <Icon28UserCircleOutline />
                    </TabbarItem>
                  </Tabbar>
                )
              }
            >
              <RouterProvider router={router}/>
              <Feed id={'feed'}/>
              <Friends id={'friends'} onFriendLink={onFriendLink}/>
              <Messages id ={'messages'}/>
              <Search id={'search'}/>
              <Profile id={'profile'}/>
              {/* <RouterProvider router={router}/> */}
            </Epic>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
    );
  };
  

