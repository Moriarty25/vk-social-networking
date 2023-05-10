import { FC } from 'react';
import { Cell, Group, Panel, PanelHeader, SplitCol } from '@vkontakte/vkui';
import {
	Icon28NewsfeedOutline,
	Icon28MessageOutline,
	Icon28UserCircleOutline,
	Icon28SearchOutline,
	Icon28Users3Outline,
} from '@vkontakte/icons';
import { AdaptiveViewWidth } from '@vkontakte/vkui/dist/hooks/useAdaptivityConditionalRender/types';

type TNavigationProps = {
  viewWidth: AdaptiveViewWidth;
  isVKCOM: boolean;
  activeStory: string;
  onStoryChange: () => void;
}

export const Navigation: FC<TNavigationProps> = ({ viewWidth, isVKCOM, activeStory, onStoryChange }) => {
	return (
		<SplitCol className={viewWidth.tabletPlus.className} fixed width={280} maxWidth={280}>
			<Panel>
				{isVKCOM && <PanelHeader/>}
				<Group>
					<Cell
						disabled={activeStory === 'feed'}
						style={
							activeStory === 'feed'
								? {
										backgroundColor: 'var(--vkui--color_background_secondary)',
										borderRadius: 8,
								  }
								: {}
						}
						data-story="feed"
						onClick={onStoryChange}
						before={<Icon28NewsfeedOutline />}
					>
						feed
					</Cell>
					<Cell
						disabled={activeStory === 'friends'}
						style={
							activeStory === 'friends'
								? {
										backgroundColor: 'var(--vkui--color_background_secondary)',
										borderRadius: 8,
								  }
								: {}
						}
						data-story="friends"
						onClick={onStoryChange}
						before={<Icon28Users3Outline />}
					>
						friends
					</Cell>
					<Cell
						disabled={activeStory === 'messages'}
						style={
							activeStory === 'messages'
								? {
										backgroundColor: 'var(--vkui--color_background_secondary)',
										borderRadius: 8,
								  }
								: {}
						}
						data-story="messages"
						onClick={onStoryChange}
						before={<Icon28MessageOutline />}
					>
						messages
					</Cell>
					<Cell
						disabled={activeStory === 'search'}
						style={
							activeStory === 'search'
								? {
										backgroundColor: 'var(--vkui--color_background_secondary)',
										borderRadius: 8,
								  }
								: {}
						}
						data-story="search"
						onClick={onStoryChange}
						before={<Icon28SearchOutline />}
					>
						search
					</Cell>
					<Cell
						disabled={activeStory === 'profile'}
						style={
							activeStory === 'profile'
								? {
										backgroundColor: 'var(--vkui--color_background_secondary)',
										borderRadius: 8,
								  }
								: {}
						}
						data-story="profile"
						onClick={onStoryChange}
						before={<Icon28UserCircleOutline />}
					>
						profile
					</Cell>
				</Group>
			</Panel>
		</SplitCol>
	);
};
