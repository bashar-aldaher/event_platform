import CategoryFilter from "@/components/shared/categoryFilter/CategoryFilter";
import Collection from "@/components/shared/collection/Collection";
import Search from "@/components/shared/search/Search";
import { getAllEvents } from "@/lib/actions/event.action";
import { SearchParamProps } from "@/types";
import React from "react";

const Events = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  // const [page, setPage] = useState(1);
  // const { data, isLoading } = useGetData(() =>
  //   getAllEvents({
  //     query: "",
  //     category: "",
  //     page: 1,
  //     limit: 6,
  //   })
  // );

  const data = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return data ? (
    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">
        Trust by <br /> Thousands of Events
      </h2>

      <div className="flex w-full flex-col gap-5 md:flex-row">
        <Search />
        <CategoryFilter />
      </div>

      <Collection
        data={data.data}
        // data={[]}
        emptyTitle="No Events Found"
        emptyStateSubtext="Come back later"
        collectionType="All_Events"
        limit={6}
        page={page}
        totalPages={data.totalPages}
        // page={1}
        // totalPages={2}
      />
    </section>
  ) : (
    <>no data</>
  );
};

export default Events;
