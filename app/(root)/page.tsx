const delay = (ms: number | undefined) => new Promise((resolve) => setTimeout(resolve, ms))

export const metadata = {
  title: 'Home Page',
}

const HomePage = async () => {
  await delay(2000)
  return <>ecom Store</>
}
 
export default HomePage;