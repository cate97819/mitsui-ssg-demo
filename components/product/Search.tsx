"use client";
import React, { useEffect, useState } from "react";
import SearchOptionWrapper from "./SearchOptionWrapper";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/props/siteConfig";
import { productCategory, products } from "@/docs/product";
import Link from "next/link";
import CategoryLabel from "../product/CategoryLabel";
import SmallCategoryLabel from "./SmallCategoryLabel";
import { productSearch } from "@/libs/search";

const Search = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("cat");

  const [viewSearchOption, setViewSearchOption] = useState(false);
  const [searchQuery, setSearchQuery] = useState<{
    keyword: string;
    category: number[];
    smallCategories: number[];
  }>({
    keyword: "",
    category: [],
    smallCategories: [],
  });

  const [productList, setProductList] = useState(products);

  const setKeywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchQuery((prev) => ({ ...prev, keyword: value }));
  };

  const setCategoryHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const id = e.currentTarget.id;
    const value = parseInt(e.currentTarget.value);
    switch (id) {
      case "reset":
        setSearchQuery((prev) => ({ ...prev, category: [] }));
        break;
      case "change":
        if (searchQuery.category.length === 0) {
          const prevArray: number[] = [];
          prevArray.push(value);
          setSearchQuery((prev) => ({ ...prev, category: prevArray }));
        } else {
          if (searchQuery.category.includes(value)) {
            const prevArray: number[] = [...searchQuery.category];
            const targetIndex = prevArray.findIndex((item) => item == -value);
            prevArray.splice(targetIndex, 1);
            setSearchQuery((prev) => ({ ...prev, category: prevArray }));
          } else {
            const prevArray: number[] = [...searchQuery.category];
            prevArray.push(value);
            setSearchQuery((prev) => ({ ...prev, category: prevArray }));
          }
        }
    }
  };

  const setViewSearchOptionHandler = () => {
    setViewSearchOption(!viewSearchOption);
  };

  useEffect(() => {
    if (category) {
      const array: number[] = [];
      array.push(parseInt(category));
      setSearchQuery((prev) => ({ ...prev, category: array }));
    }
  }, [category]);

  useEffect(() => {
    const array = productSearch(products, searchQuery.keyword, searchQuery.category, searchQuery.smallCategories)
    setProductList(array);
  },[searchQuery])

  return (
    <div>
      <SearchOptionWrapper
        setViewSearchOptionHandler={setViewSearchOptionHandler}
        viewSearchOption={viewSearchOption}
        setKeywordHandler={setKeywordHandler}
        searchQuery={searchQuery}
      />
      <div className="bg-red-800 py-16">
        <h1
          style={{ maxWidth: siteConfig.contentsWidth }}
          className="flex flex-col text-2xl mx-auto w-full text-white gap-1 px-2"
        >
          商品一覧
          <span className="text-sm px-0.5">EXHIBITOR</span>
        </h1>
      </div>
      <div
        style={{ maxWidth: siteConfig.contentsWidth + "px" }}
        className="mx-auto w-full flex flex-row justify-center items-center"
      >
        <ul className="flex flex-row text-sm gap-4 py-4 justify-center">
          {searchQuery.category.length === 0 ? (
            <li>
              <div className="border-[2px] rounded-full px-2 border-[#D71517] bg-[#D71517] text-white py-0.5">
                ALL
              </div>
            </li>
          ) : (
            <li>
              <button
                id="reset"
                className="border-[2px] border-slate-300 text-slate-800 hover:bg-slate-100 rounded-full px-2 py-0.5 transition-all ease-in-out"
                onClick={setCategoryHandler}
              >
                ALL
              </button>
            </li>
          )}
          {productCategory.map((item, i) => (
            <li key={i}>
              {searchQuery.category.includes(item.id) ? (
                <button
                  id="change"
                  value={item.id}
                  className="border-[2px] rounded-full text-white border-[#D71517] bg-[#D71517] px-2 py-0.5 hover:bg-red-700 hover:border-red-700 transition-all ease-in-out"
                  onClick={setCategoryHandler}
                >
                  {item.label}
                </button>
              ) : (
                <button
                  id="change"
                  value={item.id}
                  className="border-[2px] text-slate-800 border-slate-300 hover:bg-slate-100 rounded-full px-2 py-0.5 transition-all ease-in-out"
                  onClick={setCategoryHandler}
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
        <button
          onClick={setViewSearchOptionHandler}
          className="mx-4 text-white bg-[#D71517] rounded-full flex flex-row px-4 pb-0.5 items-center text-sm hover:bg-red-800 transition-all ease-in-out"
        >
          詳細検索
          <img src="/images/search.svg" alt="" className="w-8 p-1 " />
        </button>
      </div>
      <div
        style={{ width: siteConfig.contentsWidth + "px" }}
        className="grid grid-cols-2 mx-auto gap-4"
      >
        {productList.map((item, i) => (
          <div key={i} className="p-4 border-2 rounded-lg flex flex-col gap-2">
            <div className="grid grid-cols-[30%_1fr] gap-4 ">
              <div className="w-full aspect-video bg-slate-700"></div>
              <div>
                <h2 className="p-2 font-bold">
                  <Link href={`/exhibitor/${item.id}`}>{item.name}</Link>
                </h2>
                <Link href={`/exhibitor/${item.id}`}>
                  <p className="text-sm p-2">
                    {item.description.slice(0, 90)}…
                  </p>
                </Link>
              </div>
            </div>
            <ul className="flex flex-row text-sm gap-2 items-center">
              {item.categoryId.map((id, i) => (
                <CategoryLabel key={i} id={id} />
              ))}
              {item.smallCategoryId.map((id, i) => (
                <SmallCategoryLabel key={i} id={id} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
