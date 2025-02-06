import {concatMap, defaultIfEmpty, interval, map, mergeAll, mergeMap, of, reduce, scan, startWith, take,} from 'rxjs'

let obj = [
    {age:17 , name:'ahmed'},
    {age:19 , name:'moha'},
    {age:55 , name:'moha'}
]

of().pipe(
    defaultIfEmpty(1),
    startWith(3),
    scan((acc , cur) => acc + cur)
).subscribe(console.log)



