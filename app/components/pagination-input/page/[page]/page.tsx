import React, { Suspense } from "react";
import BasePage from "../../BasePage";

export default async function PaginationInputPage({ params }: { params: Promise<{ page?: string }> }) {
  const page = Number((await params).page) || 1;

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BasePage currentPage={page} />
      </Suspense>
    </div>
  );
}
