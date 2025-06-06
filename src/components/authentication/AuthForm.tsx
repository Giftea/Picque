"use client";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Button } from "../ui/button";
import SignupForm from "./SignupForm";
import ResetPasswordForm from "./ResetPasswordForm";
import Link from "next/link";

const AuthForm = () => {
  const [mode, setMode] = useState("login");
  return (
    <div className="space-y-6">
      <div className="flex flex-col text-center space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          {mode === "reset"
            ? "Reset Password"
            : mode === "login"
            ? "Login"
            : "Sign Up"}
        </h1>
        <p className="text-muted-foreground text-sm">
          {mode === "reset"
            ? "Enter your email to reset your password"
            : mode === "login"
            ? "Enter your email to login"
            : "Create a new account"}
        </p>
      </div>
      {mode === "login" && (
        <>
          <LoginForm />
          <div className="text-center flex justify-between">
            <Button
              variant={"link"}
              onClick={() => setMode("signup")}
              className="p-0"
            >
              Need an Account? Sign up
            </Button>

            <Button
              variant={"link"}
              onClick={() => setMode("reset")}
              className="p-0"
            >
              Forgot Password?
            </Button>
          </div>
        </>
      )}
      {mode === "reset" && (
        <>
          <ResetPasswordForm />
          <div className="text-center">
            <Button
              variant={"link"}
              onClick={() => setMode("login")}
              className="p-0"
            >
              Back to Login
            </Button>
          </div>
        </>
      )}
      {mode === "signup" && (
        <>
          <SignupForm />
          <div className="text-center">
            <Button
              variant={"link"}
              onClick={() => setMode("login")}
              className="p-0"
            >
              Have an Account? Login
            </Button>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking signup you agree to our{" "}
            <Link
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy.
            </Link>
          </p>
        </>
      )}
    </div>
  );
};

export default AuthForm;
