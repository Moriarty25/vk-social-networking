import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { PATHS } from './paths';
import { Home } from '../pages/Home/Home';
import { Profile } from '../pages/Profile/Profile';
import { Feed } from '../pages/Feed/Feed';
import { Friends } from '../pages/Friends/Friends';
import { Messages } from '../pages/Messages/Messages';
import { Search } from '@vkontakte/vkui';
import { App } from '../App';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App/>}>
			<Route path={PATHS.HOME} element={<Home />} />
			<Route path={PATHS.FEED} element={<Feed id={'feed'} />} />
			<Route path={PATHS.FRIENDS} element={<Friends id={'friends'}/>}>
			</Route>
			<Route path={PATHS.MESSAGES} element={<Messages id='messages'/>}/>
			<Route path={PATHS.SEARCH} element={<Search id='search'/>}/>
			<Route path={PATHS.PROFILE} element={<Profile id='profile'/>}/>
		</Route>,
	),
);
