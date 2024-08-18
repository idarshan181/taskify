import { UserButton } from "@clerk/nextjs";

const ProtectedPage = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1>Protected Page!!</h1>
      <UserButton showName userProfileMode="modal" />
    </div>
  );
};

export default ProtectedPage;
