import MinorCategory from "@/components/categories/MinorCategory";

export default function Home() {
  const products = [
    { img: '/images/apples.png', title: 'Red Foreign Apple(200 pieces)', price: '50.00',weight: '1', stars: 1},
    {img: '/images/cracker.png', title: 'Enzo Crackers', price: '70.00',weight: '1', stars: 4},
    {img: '/images/carrot.png', title: 'Carrots', price: '30.00',weight: '1', stars: 3},
    { img: '/images/onions.png', title: 'P.Prateepthong Fried Onion', price: '20.00',weight: '1', stars: 2},
    { img: '/images/apples.png', title: 'Red Foreign Apple(200 pieces)', price: '50.00',weight: '1', stars: 2},
    {img: '/images/cracker.png', title: 'Enzo Crackers', price: '70.00',weight: '1', stars: 1},
    {img: '/images/carrot.png', title: 'Carrots', price: '30.00',weight: '1', stars: 1},
    { img: '/images/onions.png', title: 'P.Prateepthong Fried Onion', price: '20.00',weight: '1', stars: 4},
  ]
  return (
    <>
      <div className="flex h-[80vh] justify-start items-center flex-col ">
        <div className="w-full h-[80vh] bg-[url('/images/banner.png')] bg-cover bg-center">
          <div className="w-full h-full flex justify-center items-end backdrop-brightness-50">
            <button className="bg-white text-black mb-10 font-bold py-2 px-4 rounded">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <MinorCategory title="GROCERI FAVORITES" type="Favs" products={products}/>
      <MinorCategory title="WEEKLY DEALS (UP TO 50% OFF)" type="WeeklyDeals" products={products} />
      <MinorCategory title="BEST SELLERS" type="BestSellers" products={products} />
    </>
  )
}
