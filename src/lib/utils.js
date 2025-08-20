// created to apply lot of classNames to a div

import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'


export const cn =(...inputs)=>{
    return twMerge(clsx(inputs));
}
