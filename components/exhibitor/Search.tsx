'use client'
import React, { useEffect, useState } from 'react'
import SearchOptionWrapper from './SearchOptionWrapper'
import { siteConfig } from '@/props/siteConfig';
import { exhibitorCategory, exhibitors } from '@/docs/exhibitor';
import { exhibitorSearch } from '@/libs/search';
import CategoryLabel from './CategoryLabel';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
// import { Favorite, useLocalStorage } from '@/libs/localStorage';
// import FavoriteButton from '../ui/FavoriteButton';

// type ExhibitorData = {
//   isFavorite: boolean;
// } & Exhibitor

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

  // const exhibitorData: ExhibitorData[] = [];
  // exhibitors.map((item) => exhibitorData.push({...item, isFavorite: false}));
  
  const [exhibitorList, setExhibitorList] = useState(exhibitors);

  
  // お気に入り機能
  // const initFavoriteArray: Favorite[] = [];
  // exhibitors.map((item) => initFavoriteArray.push({id: item.id, isFavorite: false}));

  // const [favorite, setFavorite] = useLocalStorage("exhibitorFavorite", initFavoriteArray);

  // const setFavoriteHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
  //   const target = e.currentTarget.value;
  //   const ary: Favorite[] = [];
  //   favorite.map((item:Favorite) => item.id === target ? ary.push({id: target, isFavorite: !item.isFavorite}) : ary.push(item));
  //   setFavorite(ary);
  //   const listArray: ExhibitorData[] = [];
  //   exhibitorList.map((item) => item.id === target ? listArray.push({...item, id: target, isFavorite: !item.isFavorite}) : listArray.push(item));
  //   setExhibitorList(listArray);
  // }

  // useEffect(() => {
  //   const targetArray: string[] = [];
  //   const target = favorite.map((item) => item.isFavorite === true && targetArray.push(item.id));
  //   const array: ExhibitorData[] = [];
  //   exhibitorList.map((item) => target.includes(item) ? array.push({...item, id: item.id, isFavorite: true}) : array.push({...item, id: item.id, isFavorite: false}));
  //   setExhibitorList(array);
  // },[favorite])

  // useEffect(() => {
  //   console.log(exhibitorList);

  // }, [exhibitorList])

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
    const array = exhibitorSearch(exhibitors, searchQuery.keyword, searchQuery.zone, searchQuery.isExport, searchQuery.isEcology, searchQuery.favoriteFilter);
    setExhibitorList(array);
  },[searchQuery])

  return (
    <div className='w-full'>
      <SearchOptionWrapper viewSearchOption={viewSearchOption} setViewSearchOptionHandler={setViewSearchOptionHandler} setOptionHandler={setOptionHandler} setKeywordHandler={setKeywordHandler} searchQuery={searchQuery}/>
      <div className='bg-red-800 py-16'>
        <h1 style={{maxWidth: siteConfig.contentsWidth}} className='flex flex-col text-2xl mx-auto w-full text-white gap-1 px-2'>
          出展社一覧
          <span className='text-sm px-0.5'>EXHIBITOR</span>
        </h1>
      </div>
      <div style={{maxWidth: siteConfig.contentsWidth + "px"}} className='text-xs md:text-base grid grid-cols-[max-content_1fr_max-content] mx-auto w-fit flex-row justify-center items-center gap-4 px-2'>
          { searchQuery.zone.length === 0 ?
            <div className='border-[2px] rounded-full px-2 border-[#D71517] bg-[#D71517] text-white py-0.5'>ALL</div>
          :
            <button id='reset' className='border-[2px] border-slate-300 text-slate-800 hover:bg-slate-100 rounded-full px-2 py-0.5 transition-all ease-in-out' onClick={setZoneHandler}>ALL</button>
          }
        <ul className='flex flex-row gap-4 py-4 justify-center overflow-x-scroll hidden-scrollbar lg:overflow-x-visible'>
          <span className='flex flex-row gap-2 overflow-x-scroll hidden-scrollbar lg:overflow-x-visible w-fit text-nowrap'>
          { exhibitorCategory.map((item, i) => (
            <li key={i} className=''>
              {searchQuery.zone.includes(item.id) ? 
              <button id='change' value={item.id} className='border-[2px] rounded-full text-white border-[#D71517] bg-[#D71517] px-2 py-0.5 hover:bg-red-700 hover:border-red-700 transition-all ease-in-out' onClick={setZoneHandler}>{item.label}</button>
              :
              <button id='change' value={item.id} className='border-[2px] text-slate-800 border-slate-300 hover:bg-slate-100 rounded-full px-2 py-0.5 transition-all ease-in-out' onClick={setZoneHandler}>{item.label}</button>
            }
            </li>
          ))}
          </span>
        </ul>
        <button onClick={setViewSearchOptionHandler} className='text-white border-[2px] border-[#D71517] bg-[#D71517] rounded-full flex flex-row px-4 py-0.5 items-center hover:bg-red-800 transition-all ease-in-out'>
          詳細検索
          <img src="/images/search.svg" alt="" className='max-w-8'/>
        </button>
      </div>
      <div style={{maxWidth: siteConfig.contentsWidth + "px"}} className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-4 w-full'>
        {exhibitorList.map((item, i) => (
          <div key={i} className='relative p-4 border-2 rounded-lg flex flex-col gap-2'>
            {/* <FavoriteButton id={item.id} item={item} setFavoriteHandler={setFavoriteHandler}/> */}
            <div className='grid grid-cols-[30%_1fr] gap-4 '>
              <Link href={`/exhibitor/${item.id}`} className='flex items-center'>
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