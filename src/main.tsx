import ReactDOM from 'react-dom';
import {
	AdaptivityProvider,
	ConfigProvider,
	AppRoot,
	SplitLayout,
	SplitCol,
	View,
	Panel,
	PanelHeader,
	Header,
	Group,
	SimpleCell,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const App = () => {
	return (
		<AppRoot>
			
			<SplitLayout header={<PanelHeader separator={false} />}>
				<SplitCol autoSpaced>
					<View activePanel="main">
						<Panel id="main">
							<PanelHeader>VKUI</PanelHeader>
							<Group header={<Header mode="secondary">Items</Header>}>
								<SimpleCell>Hello</SimpleCell>
								<SimpleCell>World</SimpleCell>
                <RouterProvider router={router} />
							</Group>
						</Panel>
					</View>
				</SplitCol>
			</SplitLayout>
		</AppRoot>
	);
};

ReactDOM.render(
	<ConfigProvider>
		<AdaptivityProvider>
			<App />
		</AdaptivityProvider>
	</ConfigProvider>,
	document.getElementById('root'),
);
