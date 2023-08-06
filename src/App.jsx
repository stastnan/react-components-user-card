import user from "./user.json";
import "./user.css";
import { UserCard } from "./UserCard";
import { UserCardClass } from "./UserCardClass";

function App() {
  return (
    <div>
      <UserCard
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
      <br />
      <UserCardClass
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
    </div>
  );
}

export default App;
