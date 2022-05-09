import { SETPAGE } from "./types";

/*export function incrementLikes(){
    return {
        type:INCREMENT
    }
}
export function decrementLikes(){
    return {
        type:DECREMENT
    }
}
export function onAdded(){
    return {
        type:ADD
    }
}
export function onReduced(){
    return {
        type:REDUCE
    }
}*/
export const setPages = (page,count) => {
    return {
      type: SETPAGE,
      page: page,
      count:count
    };
  };