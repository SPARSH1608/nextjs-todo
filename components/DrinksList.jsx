// import React from 'react';
// import Link from 'next/link';
// const DrinksList = ({ drinks }) => {
//   return (
//     <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
//       {drinks.map((drink) => {
//         return (
//           <div>
//             {' '}
//             {/* <h1 className="my-3">{drink.strDrink}</h1> */}
//             <Link href={`/drinks/${drink.idDrink}`}>{drink.strDrink}</Link>
//             <img className="w-30 xl:w-38" src={drink.strDrinkThumb} alt="" />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default DrinksList;

//to use fill prop there should always be a parent element with
// display block and relative display
import Link from 'next/link';
import Image from 'next/image';
const DrinksList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6">
      {drinks.map((drink) => {
        return (
          <li key={drink.idDrink} className="">
            <Link
              className="text-xl font-medium"
              href={`/drinks/${drink.idDrink}`}
            >
              <div className="relative h-48 mb-4">
                <Image
                  src={drink.strDrinkThumb}
                  fill
                  sizes="(max-width:768px) 100 vw , (max-width:2300px) 50vw"
                  alt={drink.strDrink}
                  className="rounded-medium object-cover"
                />
              </div>
              {drink.strDrink}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DrinksList;
