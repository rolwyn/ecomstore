import ProductCard from "./product-card";

interface Product {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner: string | null;
}

interface ProductsData {
  products: Product[];
}

const ProductList = ( { data, title, limit }: { data: ProductsData; title?: string; limit?: number }) => {

  const limitedData = limit ? data.products.slice(0, limit) : data.products

  // console.log(data.products);
  // data.products.map((product) => console.log(product))
  return ( <div className="my-10">
    <h2 className="h2-bold mb-4">{ title }</h2>
    { data.products.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        { limitedData.map((product) => (
          <ProductCard key={product.slug} product={product} />
        )
        )}
      </div>
    ): (
      <div>
        <p>No products found</p>
      </div>
    )}
  </div> );
}
 
export default ProductList;