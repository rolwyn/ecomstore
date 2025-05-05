// const delay = (ms: number | undefined) => new Promise((resolve) => setTimeout(resolve, ms))
import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

export const metadata = {
  title: 'Home Page',
}

const HomePage = async () => {
  return <>
    <ProductList data={sampleData} title="Newest Arrivals" limit={10}/>
  </>
}
 
export default HomePage;