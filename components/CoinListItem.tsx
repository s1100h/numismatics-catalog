import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import DeleteAdminsItem from './DeleteAdminsItem';
import { CoinLinkItem } from '../interfaces';
import { makeUrl } from '../utils/helpers';

type Props = {
  coin: CoinLinkItem
  authed: boolean
}

export default function CoinListItem({
  coin,
  authed = false,
}: Props): JSX.Element {
  return (
    <li className="coin-item">
      <Link
        href={`/coin/${encodeURIComponent(coin._id)}/${encodeURIComponent(
          makeUrl(coin.title),
        )}`}
      >
        <a>
          <FontAwesomeIcon icon={faLink} className="small-icon" />
          {coin.title}
        </a>
      </Link>
      {' '}
      {authed && <DeleteAdminsItem type="coins" deleteId={coin._id} />}
      <style jsx>
        {`
          li {
            font-family: 'Tajawal Bold';
            font-size: 1.3rem;
            list-style-type: none;
            margin-bottom: 1em;
          }

          a {
            color: #feaa0d;
          }
        `}
      </style>
    </li>
  );
}
