import Link from 'next/link';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
import DrinksList from '@/components/DrinksList';

// const fetchCatFacts = async () => {
//   await new Promise((resolve, reject) => setTimeout(resolve, 1000));
//   const response = await fetch(url);
//   //throw error

//   if (!response.ok) {
//     throw new Error('Failed to fetch');
//   }
//   const data = await response.json();
//   return data;
// };

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }

  const data = await response.json();
  return data;
};

const DrinksPage = async () => {
  // const data = await fetchCatFacts();
  const data = await fetchDrinks();
  // console.log(data);
  return (
    <div>
      <h1 className="text-4xl"> Drinks Page</h1>
      <DrinksList drinks={data.drinks} />
      {/* <Link href="/">Home</Link> */}
    </div>
  );
};
export default DrinksPage;
