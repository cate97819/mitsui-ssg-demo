import { Favorite } from '@/libs/localStorage';
import React, { useEffect, useState } from 'react'

interface Props {
  id: string,
  favorite: Favorite[]
  setFavoriteHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FavoriteButton = ({id, favorite, setFavoriteHandler}: Props) => {
  
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    const target = favorite.find((item) => item.id === id);
    if(target) {
      setIsFavorite(target.isFavorite);
    }
  },[favorite])

if (isFavorite) {
  return (
    <button value={id} onClick={setFavoriteHandler} className='absolute top-5 right-5 w-5 h-5 clip bg-pink-400'></button>
  )
}
return (
  <button value={id} onClick={setFavoriteHandler} className='absolute top-5 right-5 w-5 h-5 clip bg-slate-700'></button>
)

}

export default FavoriteButton