import { FC } from 'react';
import {
	Group,
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Placeholder,
	View,
} from '@vkontakte/vkui';
import { Icon28MessageOutline } from '@vkontakte/icons';

type TFeedProps = {
	id: string;
};

export const Messages: FC<TFeedProps> = ({ id }) => {
	return (
        <View id={id} activePanel={id}>
        <Panel id={id}>
          <PanelHeader before={<PanelHeaderBack />}>Сообщения</PanelHeader>
          <Group style={{ height: '1000px' }}>
            <Placeholder icon={<Icon28MessageOutline width={56} height={56} />}></Placeholder>
          </Group>
        </Panel>
      </View>
	);
};

