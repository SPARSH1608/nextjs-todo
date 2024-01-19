import Link from 'next/link';
import Image from 'next/image';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
``;
import drinkImg from './drink.jpg';
console.log(drinkImg);

const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`);
  if (!response.ok) {
    throw new Error('failed to fetch a drink');
  }
  const data = response.json();
  return data;
};

const SingleDrinkPage = async ({ params }) => {
  console.log(params.id);
  const data = await getSingleDrink(params.id);
  console.log(data.drinks[0].strDrink);
  return (
    <div>
      <div>
        <h1 className="">{data.drinks[0].strDrink}</h1>
        {/* <img
          className="w-1/2"
          src={data.drinks[0].strDrinkThumb}
          alt="drink page"
        /> */}
        {/* <Image
          src={drinkImg}
          className="w-48 h-48 rounded-md"
          alt="drink image"
        /> */}
        {/* <img className="mt-5" src={drinkImg.src} alt="" /> */}

        <Image
          src={data.drinks[0].strDrinkThumb}
          width={300}
          height={300}
          className="w-48 h-48 rounded-xl shadow-xl mb-4"
          priority
          alt={data.drinks[0].strDrink}
        />
      </div>
      <Link href="/drinks" className="btn btn-primary mt-5">
        Home Page
      </Link>
    </div>
  );
};

export default SingleDrinkPage;
