import {
	Avatar,
	Button,
	Card,
	CardGrid,
	CellButton,
	DatePicker,
	Div,
	FormItem,
	FormLayout,
	FormLayoutGroup,
	Group,
	InfoRow,
	Input,
	MiniInfoCell,
	SimpleCell,
	Spacing,
	Textarea,
	Title,
} from '@vkontakte/vkui';
import {
	Icon20HomeOutline,
	Icon20CalendarOutline,
	Icon20EducationOutline,
	Icon20FollowersOutline,
	Icon20ArticleOutline,
	Icon28EditOutline,

} from '@vkontakte/icons';
import { FC, useState } from 'react';

type TProfileInfoProps = {
	// onEditProfile: () => void;
};

const addressItems = [
	{ label: 'Город', name: 'city' },
	{ label: 'Место учебы', name: 'education' },
];

export const ProifleInfo: FC<TProfileInfoProps> = ({}) => {
	const [isEditActive, setIsEditActive] = useState(false);
	function onEditProfile() {
		setIsEditActive(true);
	}
	function onSaveEditing() {
		setIsEditActive(false);
	}

	return (
		<Group style={{}}>
			<Spacing size={16} />
			<SimpleCell
				before={<Avatar size={96} src="" initials="CB" gradientColor="blue" />}
				subtitle="нет статуса"
				disabled
			>
				<Title level="1">Connor Bedard</Title>
			</SimpleCell>
			{/* <Spacing size={16} /> */}
			{!isEditActive ? (
				<>
					<Div>
						<CellButton onClick={onEditProfile} before={<Icon28EditOutline />}>
							Редактировать профиль
						</CellButton>
					</Div>
					<CardGrid size="l" spaced>
						<Card>
							<MiniInfoCell before={<Icon20ArticleOutline />} textWrap="short">
								O себе
							</MiniInfoCell>

							<MiniInfoCell before={<Icon20FollowersOutline />}>77 друзей</MiniInfoCell>
							<MiniInfoCell mode="accent" before={<Icon20CalendarOutline />}>
								<InfoRow header="Возраст">18</InfoRow>
							</MiniInfoCell>
							<MiniInfoCell mode="accent" before={<Icon20HomeOutline />}>
								<InfoRow header="Город">Санкт-Петербург</InfoRow>
							</MiniInfoCell>
							<MiniInfoCell mode="accent" before={<Icon20EducationOutline />}>
								<InfoRow header="Место учебы">СПбГУ ГА</InfoRow>
							</MiniInfoCell>
						</Card>
					</CardGrid>
				</>
			) : (
				<>
					<Spacing size={16} />
					<CardGrid style={{ justifyContent: 'center' }}>
						{/* <Card> */}

						<FormLayout>
							<FormLayoutGroup mode="horizontal">
								<FormItem top="Имя">
									<Input />
								</FormItem>
								<FormItem top="Фамилия">
									<Input />
								</FormItem>
							</FormLayoutGroup>
							<FormLayoutGroup>
								<FormItem top="Дата рождения">
									<FormLayoutGroup>
										<DatePicker
											min={{ day: 1, month: 1, year: 1901 }}
											max={{ day: 1, month: 1, year: 2023 }}
											defaultValue={{ day: 2, month: 4, year: 1994 }}
											onDateChange={value => {
												console.log(value);
											}}
										/>
									</FormLayoutGroup>
								</FormItem>
							</FormLayoutGroup>
							{addressItems.map(({ label, name }) => (
								<FormItem top={label} key={name}>
									<Input name={name} />
								</FormItem>
							))}

							<FormItem top="О себе">
								<Textarea placeholder="Увлечения, хобби, источники вдохновения" />
							</FormItem>
							<FormItem>
								<Button size="l" stretched onClick={onSaveEditing}>
									Сохранить
								</Button>
							</FormItem>
						</FormLayout>
					</CardGrid>
				</>
			)}
		</Group>
	);
};
