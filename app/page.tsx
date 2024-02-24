import GridOption from "@/components/GridOption";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-3 m-3 sm:m-6 xl:mx-[7.5rem] ">
        <GridOption 
          title="Sweet gifts for free"
          image="https://links.papareact.com/1dy"
          className="bg-pink-200 h-full md:h-32"
        />
        <GridOption 
          title="Shop wardrobe"
          image="http://tinyurl.com/4xa6e9wd"
          className="bg-blue-100 col-span-2 row-span-2"
        />
        <GridOption 
          title="Shop Home"
          image="https://links.papareact.com/szu"
          className="bg-pink-200 row-span-2"
        />
        <GridOption 
          title="Shop Electronics"
          image="http://tinyurl.com/48z68mc9"
          className="bg-pink-200 h-64"
        />
        <GridOption 
          title="Shop Toys"
          image="https://links.papareact.com/pj2"
          className="bg-green-100 h-64 col-span-2"
        />
        <GridOption 
          title="All you need for Match Day"
          image="https://links.papareact.com/m8e"
          className="bg-red-100 col-span-2 row-span-2"
        />
        <GridOption 
          title="Shop Gadgets"
          image="http://tinyurl.com/5n6jhwnv"
          className="bg-orange-100 h-64"
        />
        <GridOption 
          title="Shop Beauty"
          image="https://links.papareact.com/4y0"
          className="bg-blue-100 h-64"
        />
        <GridOption 
          title="Shop Sports"
          image="https://links.papareact.com/sq2"
          className="bg-blue-100 h-64"
        />
        <GridOption 
          title="Enjoy Free Shipping"
          image="https://links.papareact.com/9fh"
          className="bg-rose-100 h-64"
        />
        <GridOption 
          title="Flash Deals"
          image="https://links.papareact.com/qx7"
          className="bg-orange-200 h-64 col-span-2"
        />
      </div>
    </main>
  );
}
