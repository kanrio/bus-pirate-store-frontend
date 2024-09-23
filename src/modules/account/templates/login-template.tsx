"use client"

import { useState } from "react"

import Register from "@modules/account/components/register"
import Login from "@modules/account/components/login"
import ResetPassword from "@modules/account/components/reset-password"
import { useSearchParams } from "next/navigation"

export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
  RESET_PASSWORD = "reset-password",
}

const LoginTemplate = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const [currentView, setCurrentView] = useState(
    token ? "reset-password" : "sign-in"
  )

  return (
    <div className="w-full flex justify-start px-8 py-8">
      {currentView === "sign-in" ? (
        <>
          <Login setCurrentView={setCurrentView} />
        </>
      ) : currentView === "register" ? (
        <Register setCurrentView={setCurrentView} />
      ) : (
        <ResetPassword setCurrentView={setCurrentView} />
      )}
    </div>
  )
}

export default LoginTemplate
