import Events from "@/components/home/events/Events";
import Header from "@/components/home/header/Header";

export default function Home() {
  const params = { id: "1" };
  const searchParams = { page: "1" };
  
  return (
    <>
      <Header />
      <Events params={params} searchParams={searchParams} />
    </>
  );
}
