import fetchProduct from "@/lib/fetchProduct";
import { notFound } from "next/navigation";

type Props ={
    searchParams:{
        url: string;
    }
}

async function ProductPage ({ searchParams: { url } }: Props) {
    const product = await fetchProduct(url);
    if (!product) return notFound();

    return (
        <div>
            
        </div>
    )
}

export default ProductPage