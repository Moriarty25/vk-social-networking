import { FC } from 'react';
import {
	Avatar,
	Button,
	ButtonGroup,
	Group,
	Panel,
	PanelHeader,
	PanelHeaderBack,
	RichCell,
	View,
} from '@vkontakte/vkui';

type TFeedProps = {
	id: string;
};

export const Search: FC<TFeedProps> = ({ id }) => {
	return (
        <View id={id} activePanel={id}>
        <Panel id={id}>
          <PanelHeader before={<PanelHeaderBack />}>Поиск</PanelHeader>
          <Group style={{ height: '1000px' }}>
				<RichCell
						before={<Avatar size={48} src={''} initials='CB' gradientColor={'l-blue'} />}
						// text="Держи за обед в EZO"
						caption="Санкт-Петербург"
						after="+ 1 232 ₽"
						afterCaption="Комиссия 1%"
						actions={
							<ButtonGroup mode="horizontal" gap="s" stretched>
								<Button mode="primary" appearance="positive" size="s">
									Добавить в друзья
								</Button>
							</ButtonGroup>
						}
						multiline
						disabled
					>
						Тарас Иванов
					</RichCell>
					<RichCell
						before={<Avatar size={48} src={''} />}
						caption="Вчера в 20:30"
						after="- 1 800 ₽"
					>
						Михаил Лихачев
					</RichCell>
				{/* </Group> */}
          </Group>
        </Panel>
      </View>
	);
};

