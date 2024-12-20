import React from "react";

interface Props {
  setViewSearchOptionHandler: React.MouseEventHandler;
  viewSearchOption: boolean;
  setOptionHandler: React.ChangeEventHandler;
  setKeywordHandler: React.ChangeEventHandler;
  searchQuery: {keyword: string, zone: number[], isExport: boolean, isEcology: boolean, favoriteFilter: boolean}
}

const SearchOptionWrapper = ({
  viewSearchOption,
  setViewSearchOptionHandler,
  setOptionHandler,
  setKeywordHandler,
  searchQuery
}: Props) => {
  return (
    <div onClick={setViewSearchOptionHandler} style={{visibility: viewSearchOption ? "visible" : "hidden"}} className="fixed top-0 left-0 z-20 bg-black/30 w-full h-screen">
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
              <input type="text" onChange={setKeywordHandler}/>
            </dd>
          </div>
          <div>
            <dt>出展ゾーンで探す</dt>
            <dd></dd>
          </div>
          <div>
            <dt>条件で探す</dt>
            <dd>
              <ul>
                <li>
                  <input id="export" type="checkbox" checked={searchQuery.isExport} onChange={setOptionHandler}/>
                  <label htmlFor="export">輸出対応可能な出展社のみ表示</label>
                </li>
                <li>
                  <input id="ecology" type="checkbox" checked={searchQuery.isEcology} onChange={setOptionHandler}/>
                  <label htmlFor="ecology">環境に配慮した出展社のみ表示</label>
                </li>
                <li>
                  <input id="favorite" type="checkbox" checked={searchQuery.favoriteFilter} onChange={setOptionHandler} />
                  <label htmlFor="favorite">お気に入りした出展者のみ表示</label>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default SearchOptionWrapper;
