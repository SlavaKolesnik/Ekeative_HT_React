import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const EmailAndPass = ({ setEmailAndPass }) => {
    const phoneNumber = localStorage.getItem('phoneNumber')
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        mode: 'onBlur',
    })

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    const registerUser = async () => {
        try {
            await register(credentials.email, credentials.password)
            reset()
            localStorage.setItem('userCredentials', JSON.stringify(credentials))
            setEmailAndPass(true)
        } catch (error) {
            console.error('Помилка реєстрації:', error)
        }
    }

    return (
        <div className="w-[456px]">
            <div className="border p-4 rounded-md mb-8 roboto-small ">
                {phoneNumber && <p id="staticNumber">{phoneNumber}</p>}
                <div className="flex flex-inline justify-between">
                    <p className="poppins-xs ">&#10003; Number confirmed</p>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit(registerUser)}>
                    <div className="border p-6 mb-8 ">
                        <label
                            className="poppins-small block mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            {...register('email', {
                                required:
                                    "Поле обов'язково має бути заповнене!",
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i,
                                    message: 'Це не електронна адреса!',
                                },
                            })}
                            className="roboto-small border-b-[1px] mb-6 pl-2 w-full "
                            id="email"
                            type="email"
                            value={credentials.email}
                            onChange={(e) =>
                                setCredentials({
                                    ...credentials,
                                    email: e.target.value,
                                })
                            }
                        />
                        <div className="h-6 text-red-700">
                            {errors?.email && (
                                <p>
                                    &#x2717;{errors?.email?.message || 'Error'}
                                </p>
                            )}
                        </div>
                        <label
                            className="poppins-small block"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            {...register('password', {
                                required:
                                    "Поле обов'язково має бути заповнене!",
                                pattern: {
                                    value: /^.{8,}$/,
                                    message: 'Не надійний пароль!',
                                },
                            })}
                            className="roboto-small border-b-[1px] mb-6 pl-2 w-full"
                            id="password"
                            type="password"
                            value={credentials.password}
                            onChange={(e) =>
                                setCredentials({
                                    ...credentials,
                                    password: e.target.value,
                                })
                            }
                        />

                        {errors?.pass && (
                            <div className="h-2 text-red-700">
                                <p>&#x2717;{errors?.pass?.message}</p>
                            </div>
                        )}
                        {!errors?.pass && credentials.password.length >= 8 && (
                            <div className="h-2 text-green-700">
                                <p>&#10003; Пароль надійний!</p>
                            </div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className={`register-button px-4 py-2 ${
                            isValid ? '' : 'opacity-50 cursor-not-allowed '
                        }`}
                        disabled={!isValid}
                    >
                        Register Now
                    </button>
                    <div className="mb-8"></div>
                </form>
            </div>
        </div>
    )
}

export default EmailAndPass
