import React from 'react';

const SignInPage = ({ params }) => {
  console.log(params);
  return <div className="text-7xl">SignInPage</div>;
};

export default SignInPage;
//if there is no page in parent then we use [[...sign-in]] but params would be empty
