import { SignIn } from "@clerk/nextjs";

import React from "react";

export const SignInPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
