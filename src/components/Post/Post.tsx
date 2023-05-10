import { FC } from 'react';
import {
	Avatar,
	Card,
	CellButton,
	ContentCard,
	Div,
	Separator,
	SimpleCell,
	Spacing,
	Text,
} from '@vkontakte/vkui';
import { Icon20LikeOutline } from '@vkontakte/icons';

type TPostProps = {
    src?: string;
    text?: string;
};

export const Post: FC<TPostProps> = ({src, text}) => {
	return (
		<>
			<ContentCard
				mode="outline"
				onClick={() => {}}
				src={src}
				alt="Picture of Post"
				subtitle={
					<SimpleCell
						before={<Avatar size={32} src="#" initials="CB" gradientColor="blue" />}
						disabled
					>
						<Text style={{ fontSize: '10px', fontWeight: '600' }}>Connor Bedard</Text>
					</SimpleCell>
				}
				text={<Div>{text}</Div>}
				header={<Separator/>}
				caption={
					<Card style={{ width: '64px' }} mode="outline">
						<CellButton indicator={4}>
							<Icon20LikeOutline />
						</CellButton>
					</Card>
				}
				maxHeight={600}
			/>
			<Spacing size={16} />
		</>
	);
};
