import { useState } from 'react';
import { UserWithFriends } from '../../../../common/types/user';
import { Post } from '../../../../components/application/post';
import { Tabs, Loader } from '../../../../components';
import { Friend } from '../../../../components/application/friend';
import { TabContainer } from './index.styled';

const tabs = ['Posts', 'Amigos em comum'];

interface Props {
  user: UserWithFriends | null;
}

export const Content = ({ user }: Props) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  if (!user) return <Loader />;

  return (
    <>
      <Tabs tabs={tabs} value={selectedTab} onChange={onTabChange} />
      <TabContainer>
        {selectedTab === tabs[0] &&
          user.posts.map((post) => (
            <Post key={'post-' + post.id} post={post} />
          ))}
        {selectedTab === tabs[1] &&
          user.friends.map((friend) => (
            <Friend key={'friend-' + friend.id} user={friend} />
          ))}
      </TabContainer>
    </>
  );
};
