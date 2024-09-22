"use client"

import React, { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Input from "@modules/common/components/input"
import { generatePasswordToken, resetPassword } from "@modules/account/actions"
import { useFormState } from "react-dom"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import ErrorMessage from "@modules/checkout/components/error-message"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const ResetPassword = ({ setCurrentView }: Props) => {
  const [successState, setSuccessState] = React.useState(false)
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const email = searchParams.get("email")

  const [message, generateFormAction] = useFormState(generatePasswordToken, {
    error: false,
    success: false,
  })

  const [state, formAction] = useFormState(resetPassword, {
    token,
    email,
  })
  const clearState = () => {
    setSuccessState(false)
  }

  useEffect(() => {
    setSuccessState(state?.success)
  }, [state])

  if (successState) {
    window.location.href = `/account`
  }

  if (!token || !email) {
    return (
      <div
        className="max-w-sm w-full flex flex-col items-center"
        data-testid="login-page"
      >
        <p className="text-center txt-compact-medium mb-8">
          Reset your password
        </p>
        <form className="w-full" action={generateFormAction}>
          <div className="flex flex-col w-full gap-y-2">
            <Input
              label="Email"
              name="email"
              type="email"
              title="Enter a valid email address."
              autoComplete="email"
              required
              data-testid="email-input"
            />
          </div>
          {message.success && (
            <p className="txt-compact-medium text-ui-fg-base mt-3 mb-8">
              Password reset, if the account exists and email will be sent now
              to the provided address.
            </p>
          )}
          {state.error && <p className="text-red-500 mt-4">{state.error}</p>}
          <SubmitButton
            data-testid="reset-password-btn"
            className="w-full mt-6"
          >
            Reset Password
          </SubmitButton>
        </form>
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          Already a member?{" "}
          <button
            onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
            className="underline"
          >
            Sign in
          </button>
          .
        </span>
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          Not a member?{" "}
          <button
            onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
            className="underline"
            data-testid="register-button"
          >
            Join us
          </button>
          .
        </span>        
      </div>
    )
  }

  return (
    <div
      className="max-w-sm w-full flex flex-col items-center"
      data-testid="login-page"
    >
      <p className="text-center text-base-regular text-ui-fg-base mb-8">
        Confirm your password
      </p>
      <form className="w-full" action={formAction} onReset={() => clearState()}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="New password"
            type="password"
            name="new_password"
            required
            data-testid="new-password-input"
          />
          <Input
            label="Confirm password"
            type="password"
            name="confirm_password"
            required
            data-testid="confirm-password-input"
          />
        </div>
        {successState && (
          <p className="text-green-500 mt-4">
            Password reset email was sent to the provide address!
          </p>
        )}
        <ErrorMessage
          error={message.error}
          data-testid="reset-password-error-message"
        />
        <SubmitButton data-testid="new-password" className="w-full mt-6">
          Confirm Reset Password
        </SubmitButton>
      </form>
    </div>
  )
}

export default ResetPassword
