// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

import {
	AdaptivityProvider,
	ConfigProvider,
	WebviewType,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { App } from './App';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

// ReactDOM.render(
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	
	<ConfigProvider webviewType={WebviewType.INTERNAL}>
		<AdaptivityProvider>
			{/* <App /> */}
			<RouterProvider router={router}/>
		</AdaptivityProvider>
	</ConfigProvider>,
);
