export const addCommaIfNotLast = (  item: unknown,index: number,array: unknown[]) => 
    index !== array.length - 1 ? `${item}, ` : `${item}`;