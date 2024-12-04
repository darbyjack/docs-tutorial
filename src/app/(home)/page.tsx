'use client';

import { Navbar } from "@/components/home/navbar"
import { TemplatesGallery } from "@/components/home/templates-gallery"
import { DocumentsTable } from "@/components/home/documents-table";
import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useSearchParam } from "@/hooks/use-search-param";

const Home = () => {
  const [search] = useSearchParam();
  const { results, status, loadMore } = usePaginatedQuery(api.documents.get, { search }, { initialNumItems: 5 });

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </div>
  )
}

export default Home