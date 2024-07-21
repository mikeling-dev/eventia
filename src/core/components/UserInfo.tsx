import logout from "@/features/auth/mutations/logout";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { Routes } from "@blitzjs/next";
import { useMutation } from "@blitzjs/rpc";
import { Button } from "@mantine/core";
import Link from "next/link";

export default function UserInfo() {
  const currentUser = useCurrentUser();
  return (
    <>
      <div>
        User id: <code>{currentUser?.id}</code>
        <br />
        User role: <code>{currentUser?.role}</code>
      </div>
    </>
  );
}
