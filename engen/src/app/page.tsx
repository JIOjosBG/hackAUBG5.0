import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <div>{JSON.stringify(session ?? "null")}</div>
    </main>
  );
}