import { SignUp } from "@clerk/nextjs";

import React from "react";

export const SignUpPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
