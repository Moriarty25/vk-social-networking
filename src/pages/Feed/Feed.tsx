import { FC } from 'react';
import { Cell, Group, Panel, PanelHeader, PanelHeaderBack, Switch, View } from '@vkontakte/vkui';
import { Post } from '../../components/Post/Post';

type TFeedProps = {
	id: string;
};

export const Feed: FC<TFeedProps> = ({ id }) => {
	return (
		<View id={id} activePanel={id}>
			<Panel id={id}>
				<PanelHeader before={<PanelHeaderBack />}>Новости</PanelHeader>
				<Group>
					<Cell disabled Component="label" after={<Switch />}>
						Только с фотографиями
					</Cell>
				</Group>
				<Post
					text="nice view"
					src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
				/>
				<Post
					text="Анахайм выбирает меня под 1 номером! Я несказанно счастлив..."
					src="https://avatars.mds.yandex.net/get-images-cbir/4755998/eLGYsoxux_UFQQpgl-GWpw4752/ocr"
				/>
			</Panel>
		</View>
	);
};
