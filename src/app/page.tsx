import ConstructionBanner from "@/components/ConstructionBanner";
import { SignIn } from "@/components/SignIn";
import { HydrateClient, trpc } from "@/trpc/server";

export default async function Home() {
  void trpc.hello.prefetch({text: "What's up, friend?"});

  return (
    <HydrateClient>
      <ConstructionBanner />
      <SignIn />
      <div>
        <h1>Lanezy | A Highly Customizable Kanban Experience</h1>
      </div>
    </HydrateClient>
  );
}
