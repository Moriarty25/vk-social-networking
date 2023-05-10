import { FC, useState } from 'react';
import {
	Avatar,
	Badge,
	Card,
	CardGrid,
	CardScroll,
	Cell,
	CellButton,
	ContentCard,
	Counter,
	Div,
	File,
	Group,
	Header,
	Headline,
	IconButton,
	InfoRow,
	Link,
	MiniInfoCell,
	ModalCardBase,
	Panel,
	PanelHeader,
	PanelHeaderBack,
	PanelHeaderButton,
	Placeholder,
	Separator,
	SimpleCell,
	Spacing,
	TabbarItem,
	Text,
	Title,
	UsersStack,
	View,
	WriteBar,
	WriteBarIcon,
} from '@vkontakte/vkui';
import {
	Icon20HomeOutline,
	Icon20CalendarOutline,
	Icon20EducationOutline,
	Icon20FollowersOutline,
	Icon20ArticleOutline,
	Icon28EditOutline,
	Icon28DoorArrowLeftOutline,
	Icon20LikeOutline,
	Icon28AttachOutline,
	Icon28SettingsOutline,
	Icon24Attach,
	Icon20Attach,
	Icon36Picture,
	// SmileOutlineIcon,
	Icon28DeleteOutline,
	Icon20GlobeOutline,
} from '@vkontakte/icons';
import { Post } from '../../components/Post/Post';
import { ProifleInfo } from './components/ProfileInfo/ProfileInfo';

type TFeedProps = {
	id: string;
};
const data = [{id:0, text:'Hi'}, {id:1, text: 'GoodBye!'}]

export const Profile: FC<TFeedProps> = ({ id }) => {
	const [text3, setText3] = useState('');
	const postElements = data.map((post)=>{
		return (
			<Post key={post.id} text={post.text}/>
		)
	})

	const [isEditActive, setIsEditActive] = useState(false);
	function onEditProfile() {
        setIsEditActive(!isEditActive);
    }
	console.log(isEditActive);
	
	return (
		<View id={id} activePanel={id}>
			<Panel id={id}>
				<PanelHeader before={<PanelHeaderBack /> }>Профиль</PanelHeader>
				{/* {isEditActive ? (<div>555</div>) : (<ProifleInfo onEditProfile={onEditProfile}/>)} */}
				<ProifleInfo/>
				<Group>
					<WriteBar
					
						value={text3}
						onChange={e => setText3(e.target.value)}
						// before={<File size='s' mode='tertiary' before={<WriteBarIcon role={'presentation'} aria-label={'attach'} mode="attach" count={1}/>}></File>}
						// before={<WriteBarIcon mod/>}
						before={<Div style={{padding: '12px 4px'}}> <File before={<Icon24Attach title='Прикрепить изображение' />} mode='link'>{''}</File></Div>}
						after={<WriteBarIcon aria-label={'send'} mode="send" disabled={text3.length === 0} />}
						placeholder="Опубликовать запись"
						
					/>
					{/* <Separator /> */}
					{/* <ModalCardBase
					style={{ width: 92, marginBottom: 20 }}
					icon={<Icon36Picture key="icon" mode='#'/>}
					></ModalCardBase> */}

				</Group>
				<Header mode="secondary">Записи</Header>
					<Post text='nice view' src='https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80'/>
					<Post text='Анахайм выбирает меня под 1 номером! Я несказанно счастлив...' src='https://avatars.mds.yandex.net/get-images-cbir/4755998/eLGYsoxux_UFQQpgl-GWpw4752/ocr'/>
					{postElements}
				<Group>
					<CellButton before={<Icon28EditOutline />}>Редактировать профиль</CellButton>
					<CellButton before={<Icon28DoorArrowLeftOutline />} mode="danger">
						Выйти
					</CellButton>
				</Group>
				<Spacing size={16} />
			</Panel>
		</View>
	);
};
