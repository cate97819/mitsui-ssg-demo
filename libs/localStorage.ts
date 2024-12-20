import { useCallback, useState } from "react"

export type Favorite = {
  id: string,
  isFavorite: boolean,
}

const getLocalStorageValue = (key: string, initValue: Favorite[]) => {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(key);
    if (item) {
      const json = JSON.parse(item);
      return json
    }
    
    return initValue;
  }
}

export const useLocalStorage = (key: string, initValue: Favorite[]) => {
  const [value, setValue] = useState(() => getLocalStorageValue(key, initValue));

  const setLocalStorageValue = useCallback(
    (setStateAction: Favorite[] | ((prevState: Favorite[]) => Favorite[])) => {
      const newValue =
      setStateAction instanceof Function
      ? setStateAction(value)
      : setStateAction;
      const favorite = JSON.stringify(newValue)

      localStorage.setItem(key, favorite);
      setValue(() => newValue);
    },
    [key, value]
  )

  return [value, setLocalStorageValue] as const;
}