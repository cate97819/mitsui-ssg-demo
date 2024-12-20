'use client'
import { Favorite } from '@/libs/localStorage';
import React, { useEffect } from 'react'

interface Props {
  id: string,
  item: any,
  setFavoriteHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FavoriteButton = ({ id, item, setFavoriteHandler}: Props) => {
  
  return (
    <button value={id} onClick={setFavoriteHandler} className={`absolute top-5 right-5 w-5 h-5 clip ${item.isFavorite ? "bg-pink-300" : "bg-slate-700"}`}></button>
  )
}

export default FavoriteButton