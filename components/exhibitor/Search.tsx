'use client'
import React, { useEffect, useState } from 'react'
import SearchOptionWrapper from './SearchOptionWrapper'
import { siteConfig } from '@/props/siteConfig';
import { exhibitorCategory, exhibitors } from '@/docs/exhibitor';
import { exhibitorSearch } from '@/libs/search';
import CategoryLabel from './CategoryLabel';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Favorite, useLocalStorage } from '@/libs/localStorage';
import FavoriteButton from '../ui/FavoriteButton';

const Search = () => {

  const searchParams = useSearchParams();
  const ecologyProd = searchParams.has("eco");
  const exportProd = searchParams.has("exp");
  const category = searchParams.get("cat");

  const [viewSearchOption, setViewSearchOption] = useState(false);
  const [searchQuery, setSearchQuery] = useState<{keyword: string, zone: number[], isExport: boolean, isEcology: boolean, favoriteFilter: boolean}>({
    keyword: "",
    zone: [],
    isExport: false,
    isEcology: false, 
    favoriteFilter: false,
  })
  const [exhibitorList, setExhibitorList] = useState(exhibitors);

  const initFavoriteArray: Favorite[] = [];
  exhibitors.map((item) => initFavoriteArray.push({id: item.id, isFavorite: false}));

  // お気に入り機能
  const [favorite, setFavorite] = useLocalStorage("exhibitorFavorite", initFavoriteArray);

  const setFavoriteHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const target = e.currentTarget.value;
    const ary: Favorite[] = [];
    favorite.map((item:Favorite) => item.id === target ? ary.push({id: target, isFavorite: !item.isFavorite}) : ary.push(item));
    setFavorite(ary);
  }

  useEffect(() => {

  },[favorite])

  const setOptionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.id;
    switch (target) {
      case "export" :
      setSearchQuery(prev => ({...prev, isExport: !prev.isExport}));
      break;
      case "ecology" :
      setSearchQuery(prev => ({...prev, isEcology: !prev.isEcology}));
      case "favorite" :
      setSearchQuery(prev => ({...prev, favoriteFilter: !prev.favoriteFilter}));
      break;
    }
  }

  const setKeywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchQuery(prev => ({...prev, keyword: value}));
  }

  const setZoneHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const id = e.currentTarget.id;
    const value = parseInt(e.currentTarget.value);
    switch( id ) {
      case "reset" :
        setSearchQuery(prev => ({...prev, zone: []}));
        break;
      case "change" :
        if ( searchQuery.zone.length === 0 ) {
          // 出展ゾーンを選択されていないとき（配列が空）
          const prevArray: number[] = [];
          prevArray.push(value);
          setSearchQuery(prev => ({...prev, zone: prevArray}));
        } else {
          // 既に出展ゾーンを選択されているとき
          if (searchQuery.zone.includes(value)) {
            const prevArray: number[] = [...searchQuery.zone];
            const targetIndex = prevArray.findIndex((item) => item === value);
            prevArray.splice(targetIndex, 1);
            setSearchQuery(prev => ({...prev, zone: prevArray}));
          } else {
            const prevArray: number[] = [...searchQuery.zone];
            prevArray.push(value);
            setSearchQuery(prev => ({...prev, zone: prevArray}));
          }
        }
      break;
    }
  }

  const setViewSearchOptionHandler = () => {
    setViewSearchOption(!viewSearchOption);
  }

  useEffect(() => {
    if (exportProd) {
      setSearchQuery(prev => ({...prev, isExport: true}));
    }
    
    if (ecologyProd) {
      setSearchQuery(prev => ({...prev, isEcology: true}));
    }
  },[exportProd, ecologyProd])
  
  useEffect(() => {
    if(category) {
      const ary: number[] = []
      ary.push(parseInt(category));
      setSearchQuery(prev => ({...prev, zone: ary}));
    }
  },[category])

  useEffect(() => {
    const array = exhibitorSearch(exhibitors, searchQuery.keyword, searchQuery.zone, searchQuery.isExport, searchQuery.isEcology, searchQuery.favoriteFilter , favorite);
    setExhibitorList(array);
  },[searchQuery])

  return (
    <div>
      <SearchOptionWrapper viewSearchOption={viewSearchOption} setViewSearchOptionHandler={setViewSearchOptionHandler} setOptionHandler={setOptionHandler} setKeywordHandler={setKeywordHandler} searchQuery={searchQuery}/>
      <div className='bg-red-800 py-16'>
        <h1 style={{maxWidth: siteConfig.contentsWidth}} className='flex flex-col text-2xl mx-auto w-full text-white gap-1 px-2'>
          出展社一覧
          <span className='text-sm px-0.5'>EXHIBITOR</span>
        </h1>
      </div>
      <div style={{maxWidth: siteConfig.contentsWidth + "px"}} className='mx-auto w-full flex flex-row justify-center items-center'>
        <ul className='flex flex-row text-sm gap-4 py-4 justify-center'>
          { searchQuery.zone.length === 0 ?
            <li>
              <div className='border-[2px] rounded-full px-2 border-[#D71517] bg-[#D71517] text-white py-0.5'>ALL</div>
            </li>
          :
            <li>
              <button id='reset' className='border-[2px] border-slate-300 text-slate-800 hover:bg-slate-100 rounded-full px-2 py-0.5 transition-all ease-in-out' onClick={setZoneHandler}>ALL</button>
            </li>
          }
          { exhibitorCategory.map((item, i) => (
            <li key={i}>
              {searchQuery.zone.includes(item.id) ? 
              <button id='change' value={item.id} className='border-[2px] rounded-full text-white border-[#D71517] bg-[#D71517] px-2 py-0.5 hover:bg-red-700 hover:border-red-700 transition-all ease-in-out' onClick={setZoneHandler}>{item.label}</button>
              :
              <button id='change' value={item.id} className='border-[2px] text-slate-800 border-slate-300 hover:bg-slate-100 rounded-full px-2 py-0.5 transition-all ease-in-out' onClick={setZoneHandler}>{item.label}</button>
              }
            </li>
          ))}
        </ul>
        <button onClick={setViewSearchOptionHandler} className='mx-4 text-white bg-[#D71517] rounded-full flex flex-row px-4 pb-0.5 items-center text-sm hover:bg-red-800 transition-all ease-in-out'>
          詳細検索
          <img src="/images/search.svg" alt="" className='w-8 p-1 '/>
        </button>
      </div>
      <div style={{width: siteConfig.contentsWidth + "px"}} className='grid grid-cols-2 mx-auto gap-4'>
        {exhibitorList.map((item, i) => (
          <div key={i} className='relative p-4 border-2 rounded-lg flex flex-col gap-2'>
            <FavoriteButton id={item.id} favorite={favorite} setFavoriteHandler={setFavoriteHandler}/>
            <div className='grid grid-cols-[30%_1fr] gap-4 '>
              <Link href={`/exhibitor/${item.id}`}>
                <img src={`/images/exhibitors/${item.id}.png`} alt="" className='w-full aspect-video'/>
              </Link>
              <div>
                <h2 className='p-2 font-bold'>
                  <Link href={`/exhibitor/${item.id}`}>
                    {item.name}
                  </Link>
                </h2>
                <Link href={`/exhibitor/${item.id}`}>
                  <p className='text-sm p-2'>
                    {item.description.slice(0, 90)}…
                  </p>
                </Link>
              </div>
            </div>
            <ul className='flex flex-row text-sm gap-2 items-center'>
              {item.categoryId.map((id, i) => (
                <CategoryLabel key={i} id={id}/>
              ))}
              {item.export && 
                <li className='border-slate-500 px-2 py-0.5 border-[1px]'>
                  輸出対応可能
                </li>
              }
              {item.ecology &&
                <li className='border-slate-500 px-2 py-0.5 border-[1px]'>
                  環境に配慮した商品
                </li>
              }
            </ul>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Search