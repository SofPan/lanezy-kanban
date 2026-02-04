import { HydrateClient } from "@/trpc/server";

export default async function Home() {

  return (
    <HydrateClient>
      <div>
        <a href="/auth/signin">Sign In</a>
        <h1>Lanezy | A Highly Customizable Kanban Experience</h1>
      </div>
    </HydrateClient>
  );
}
