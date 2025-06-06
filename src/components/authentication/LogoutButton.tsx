"use client";

import { logout } from "@/app/actions/auth-actions";

const LogoutButton = () => {
  const handleLogout = async () => {
    await logout();
  };
  return (
    <span
      className="inline-block w-full cursor-pointer text-destructive"
      onClick={handleLogout}
    >
      Log out
    </span>
  );
};

export default LogoutButton;
