import userData from "../../userData.json";
import FriendsList from "../FriendList/FriendList";
import friends from "../../friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../transaction.json";
import clsx from "clsx";
import css from "./App.module.css";
import { Profile } from "../Profile/Profile";

export default function App() {
  return (
    <div className={clsx(css.container)}>
      <Profile userData={userData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
