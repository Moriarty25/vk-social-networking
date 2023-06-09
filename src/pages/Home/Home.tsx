import {
	Group,
	Header,
	Panel,
	PanelHeader,
	SimpleCell,
	SplitCol,
	SplitLayout,
	View,
} from '@vkontakte/vkui';

export const Home = () => {
	return (
		<SplitLayout header={<PanelHeader separator={false} />}>
			<SplitCol autoSpaced>
				<View activePanel="main">
					<Panel id="main">
						<PanelHeader>VKUI</PanelHeader>
						<Group header={<Header mode="secondary">Items</Header>}>
							<SimpleCell>Hello</SimpleCell>
							<SimpleCell>World</SimpleCell>
						</Group>
					</Panel>
				</View>
			</SplitCol>
		</SplitLayout>
	);
};
