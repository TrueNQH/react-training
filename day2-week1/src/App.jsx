import { UserCard } from './UserCard';
import './App.css'
const demoUser = {
  name: "Nguyễn Quang Huy",
  email: "nguyenquanghuyktd@gmail.com",
  role: "Frontend Engineer",
};

export default function App() {
  return (
    <div>
      <UserCard
        user={demoUser}
      />
    </div>
  );
}



