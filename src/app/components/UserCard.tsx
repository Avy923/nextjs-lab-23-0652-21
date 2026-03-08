interface UserCardProps {
  name: string;
  role: string;
  description?: string;
}

export default function UserCard({ name, role, description }: UserCardProps) {
  return (
    <div className="p-4 bg-blue-100 rounded-md shadow">
      <h2 className="text-lg font-bold text-blue-800">{name}</h2>
      <p className="text-blue-600">{role}</p>
      <p className="text-blue-500">
        {description ?? "None"}
      </p>
    </div>
  );
}
