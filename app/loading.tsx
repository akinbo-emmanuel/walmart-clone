import { Skeleton } from "@/components/ui/skeleton";


const loading = () => {
  return (
    <main className="">
        <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6 ">
            <Skeleton className="bg-pink-200 h-full md:h-32"/>
            <Skeleton className="bg-blue-100 col-span-2 row-span-2"/>
            <Skeleton className="bg-pink-200 row-span-2"/>
            <Skeleton className="bg-pink-200 h-64"/>
            <Skeleton className="bg-green-100 h-64 col-span-2"/>
            <Skeleton className="bg-red-100 col-span-2 row-span-2"/>
            <Skeleton className="bg-orange-100 h-64"/>
            <Skeleton className="bg-blue-100 h-64"/>
            <Skeleton className="bg-rose-100 h-64"/>
            <Skeleton className="bg-blue-100 h-64"/>
            <Skeleton className="bg-orange-200 h-64 col-span-2"/>
        </div>
    </main>
  )
}

export default loading;
