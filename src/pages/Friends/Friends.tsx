import { FC } from 'react';
import {
	Avatar,
	Button,
	Div,
	Footer,
	Group,
	Link,
	Panel,
	PanelHeader,
	PanelHeaderBack,
	RichCell,
	Separator,
	View,
} from '@vkontakte/vkui';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';

type TFeedProps = {
	id: string;
	onFriendLink?: (id: string) => void;
};

export const Friends: FC<TFeedProps> = ({ id, onFriendLink }) => {
	const navigate = useNavigate();

	function goToProfile() {
		if (onFriendLink) onFriendLink(PATHS.PROFILE);
		navigate(PATHS.PROFILE);
	}

	return (
		<View id={id} activePanel={id}>
			<Panel id={id}>
				<PanelHeader before={<PanelHeaderBack />}>Друзья</PanelHeader>
				<Group>
					<Div>
						<RichCell
							before={<Avatar size={48} src={''} initials="CB" gradientColor={'l-blue'} />}
							// text="Держи за обед в EZO"
							caption="Санкт-Петербург"
							after={<Button>Удалить из друзей</Button>}
							multiline
							disabled
						>
							<Link onClick={goToProfile}>Тарас Иванов</Link>
						</RichCell>
					</Div>
					<Separator />
					<Div>
						<RichCell
							before={<Avatar size={48} src={''} initials="CB" gradientColor={'l-blue'} />}
							// text="Держи за обед в EZO"
							caption="Санкт-Петербург"
							after={<Button>Удалить из друзей</Button>}
							multiline
							disabled
						>
							<Link onClick={goToProfile}>Тарас Иванов</Link>
						</RichCell>
						{/* </Card> */}
					</Div>
					<Separator />
					<Div>
						<RichCell
							before={<Avatar size={48} src={''} initials="CB" gradientColor={'l-blue'} />}
							caption="Санкт-Петербург"
							after={<Button>Удалить из друзей</Button>}
							multiline
							disabled
						>
							<Link onClick={goToProfile}>Тарас Иванов</Link>
						</RichCell>
					</Div>
					<Separator />
					<Footer></Footer>
				</Group>
			</Panel>
		</View>
	);
};
