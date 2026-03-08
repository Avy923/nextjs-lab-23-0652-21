import Hello from "./components/Hello";
import UserCard from "./components/UserCard";

export default function Page() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Hello/>

      <UserCard
        name="Person 1"
        role="Dev 1"
        description="Active"
      />

      <UserCard
        name="Person 2"
        role="Dev 2"
        description="Active"
      />

    </main>
  );
}
