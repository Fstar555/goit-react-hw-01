import FriendListItem from "../FriendsListItem/FriendListItem";
import clsx from "clsx";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={clsx(css.list)}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
