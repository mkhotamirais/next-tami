"use client";

import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Image from "next/image";

export default function BasePage({ currentPage }: { currentPage: number }) {
  const [pending, setPending] = useState(false);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 8;

  useEffect(() => {
    const getData = async () => {
      setPending(true);
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(currentPage - 1) * limit}`);
      const data = await res.json();

      setData(data.products);
      setTotalPages(Math.ceil(data.total / limit));
      setPending(false);
    };
    getData();
  }, [currentPage]);

  return (
    <div>
      <h1 className="h1">Pagination Input</h1>
      {pending ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {data.map((item: { id: string; title: string; thumbnail: string }) => (
            <div key={item.id}>
              <Image src={item.thumbnail} alt={item.title} width={100} height={100} loading="eager" />
              {item.title}
            </div>
          ))}
        </div>
      )}
      <Pagination totalPages={totalPages} currentPage={currentPage} path="/components/pagination-input/page" />
    </div>
  );
}
