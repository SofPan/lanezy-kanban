import PageFrame from "@/components/PageFrame";
import { HydrateClient } from "@/trpc/server";
import { SessionProvider } from "next-auth/react";

export default async function Home() {

  return (
    <SessionProvider>
      <HydrateClient>
        <PageFrame />
      </HydrateClient>
    </SessionProvider>
  );
}
