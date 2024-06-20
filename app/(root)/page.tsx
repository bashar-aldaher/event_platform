import Events from "@/components/home/events/Events";
import Header from "@/components/home/header/Header";
import { SearchParamProps } from "@/types";

export default function Home({ searchParams }: SearchParamProps) {
  const searchParam = searchParams;

  return (
    <>
      <Header />
      <Events searchParams={searchParam} />
    </>
  );
}
