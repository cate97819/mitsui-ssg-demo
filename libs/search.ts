import { Exhibitor } from "@/docs/exhibitor";
import { Product } from "@/docs/product";
import { Favorite } from "./localStorage";

export const exhibitorSearch = (data: Exhibitor[], keyword: string, categories: number[], exp: boolean, eco: boolean, setFavorite: boolean , favorite: Favorite[]) => {

  const keywordFilter = (data: Exhibitor[], keyword: string) => {
    return data.filter((item) => {
      return item.name.includes(keyword) || item.description.includes(keyword);      
    })
  }

  const categoryFilter = (data: Exhibitor[], categories: number[]) => {
    return data.filter((exhibitor) => {
      return exhibitor.categoryId.some((catId) => {
        return categories.includes(catId)
      });
    })
  };

  const exportFilter = (data: Exhibitor[]) => {
    return data.filter((item) => {
      return item.export === true
    })
  }

  const ecologyFilter = (data: Exhibitor[]) => {
    return data.filter((item) => {
      return item.ecology === true
    })
  }

  const favoriteFilter = (data: Exhibitor[], favorite: Favorite[]) => {
    const favoriteArray = favorite.filter((item) => item.isFavorite === true);
    const ids: string[] = [];
    favoriteArray.map((item) => ids.push(item.id));
    const newArray = data.filter((item) => ids.includes(item.id));
    return newArray;
  }

  let newArray = data;
  if ( keyword ) {
    newArray = keywordFilter(data, keyword);
  }
  if ( categories.length > 0 ) {
    newArray = categoryFilter(newArray, categories);
  }
  if( exp ) {
    newArray = exportFilter(newArray);
  }
  if( eco ) {
    newArray = ecologyFilter(newArray);
  }
  if ( setFavorite ) {
    newArray = favoriteFilter(newArray, favorite);

  }
    return newArray;
}

export const productSearch = (data: Product[], keyword: string, categories: number[], smallCategories: number[]) => {
  const keywordFilter = (data: Product[], keyword: string) => {
    return data.filter((item) => {
      return item.name.includes(keyword) || item.description.includes(keyword);      
    })
  }

  const categoryFilter = (data: Product[], categories: number[]) => {
    return data.filter((product) => {
      return product.categoryId.some((catId) => {
        return categories.includes(catId)
      });
    })
  };

  const smallCategoryFilter = (data: Product[], smallCategories: number[]) => {
    return data.filter((product) => {
      return product.categoryId.some((catId) => {
        return smallCategories.includes(catId)
      });
    })
  };

  let newArray = data;
  if ( keyword ) {
    newArray = keywordFilter(data, keyword);
  }
  if ( categories.length > 0 ) {
    newArray = categoryFilter(newArray, categories);
  }
  if ( smallCategories.length > 0 ) {
    newArray = smallCategoryFilter(newArray, smallCategories);
  }
  return newArray;
}