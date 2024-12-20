import React from "react";
import CategoryAccordion from "./CategoryAccordion";
import { productCategory } from "@/docs/product";

interface Props {
  setViewSearchOptionHandler: React.MouseEventHandler;
  viewSearchOption: boolean;
  setKeywordHandler: React.ChangeEventHandler;
  searchQuery: {keyword: string, category: number[]}
}

const SearchOptionWrapper = ({
  viewSearchOption,
  setViewSearchOptionHandler,
  setKeywordHandler,
  searchQuery
}: Props) => {
  return (
    <div onClick={setViewSearchOptionHandler} style={{visibility: viewSearchOption ? "visible" : "hidden"}} className="fixed top-0 left-0 bg-black/30 w-full h-screen z-20">
      <div
        style={{ right: viewSearchOption ? "0px" : "-20rem" }}
        className="fixed top-0 -right-80 h-screen bg-[#F6F3F1] shadow-lg px-8 py-16 border-l-2 w-80 transition-all ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 left-2 text-2xl"
          onClick={setViewSearchOptionHandler}
        >
          ×
        </button>
        <dl>
          <div>
            <dt>キーワードで探す</dt>
            <dd>
              <input type="text" value={searchQuery.keyword} onChange={setKeywordHandler}/>
            </dd>
          </div>
          <div>
            <dt>カテゴリで探す</dt>
            <dd>
              <dl>
                {productCategory.map((item, i) => (
                  <CategoryAccordion key={i} category={item}/>
                ))}
              </dl>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default SearchOptionWrapper;
