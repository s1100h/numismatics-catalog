import React from 'react';
import CoinLisItem from '../components/CoinListItem';
import CoinList from '../components/CoinList';

export default { title: 'Coin List' };

const collectionName = 'Calico Kings and Queens of Spain';

const breadCrumbLinks = [
  {
    title: 'Calico Kings and Queens of Spain',
    link:
      '/collection/5f85b9f3b4c7a8143087211a/calico-kings-and-queens-of-spain',
  },
  {
    title: 'King Alfonso XII, 1874 1885',
    link: '/coin/5f85b9f4b4c7a8143087211b/king-alfonso-xii,-1874-1885',
  },
];

const coinList = [
  {
    id: '123456',
    title: 'King Ferdinand VI, 1746 - 1759',
    link: '/coin/5f85ba1ab4c7a81430872126/king-ferdinand-vi%2C-1746---1759',
    categoryId: '5f85ba1ab4c7a81430872126',
    count: 0,
  },
  {
    id: '7891011',
    title: 'King Alfonso XII, 1874-1885',
    link: '/coin/5f85b9f4b4c7a8143087211b/king-alfonso-xii%2C-1874-1885',
    categoryId: '5f85b9f4b4c7a8143087211b',
    count: 0,
  },
];

export const Item = () => <CoinLisItem coin={coinList[0]} authed={false} />;
export const All = () => (
  <CoinList
    collectionName={collectionName}
    coinList={coinList}
    breadCrumbLinks={breadCrumbLinks}
  />
);
