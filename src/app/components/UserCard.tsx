interface UserCardProps {
  name: string;
  role: string;
  description?: string;
}

export default function UserCard({ name, role, description }: UserCardProps) {
  return (
    <div className="w-64 h-40 p-4 bg-blue-100 border border-blue-300 shadow-md">
      <h2 className="text-lg font-bold text-blue-800">{name}</h2>
      <p className="text-blue-600">{role}</p>
      <p className="text-blue-500">{description ?? "None"}</p>
    </div>
  );
}
