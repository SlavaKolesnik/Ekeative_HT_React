import { useForm } from 'react-hook-form'
import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import countriesData from '../counrty.json'

const PersonalData = ({ setPersonalData }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
    })

    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    const [itin, setItin] = useState('')
    const [formCompleted, setFormCompleted] = useState(false)
    const [termsAgreed, setTermsAgreed] = useState(false)

    useEffect(() => {
        checkFormCompletion()
    }, [selectedDate, selectedCountry, selectedCity, itin, termsAgreed])

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value)
        setSelectedCity('')
    }

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value)
    }

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    const handleItinChange = (e) => {
        let value = e.target.value
        value = value.replace(/\D/g, '')

        if (value.length > 3 && value.length <= 5) {
            value = value.slice(0, 3) + '-' + value.slice(3)
        } else if (value.length > 5) {
            value =
                value.slice(0, 3) +
                '-' +
                value.slice(3, 5) +
                '-' +
                value.slice(5, 8)
        }

        value = value.slice(0, 9)
        setItin(value)
    }

    const handleTermsAgreement = (e) => {
        setTermsAgreed(e.target.checked)
    }

    const checkFormCompletion = () => {
        const isFormValid =
            selectedDate &&
            selectedCountry &&
            selectedCity &&
            itin &&
            termsAgreed
        setFormCompleted(isFormValid)
    }

    const onSubmit = (data) => {
        const personalData = {
            selectedDate,
            selectedCountry,
            selectedCity,
            itin,
            termsAgreed,
        }
        localStorage.setItem('personalData', JSON.stringify(personalData))

        setPersonalData(true)
        console.log(data)
    }
    return (
        <div>
            <div className="mb-8">
                <label className="roboto-xs">
                    <input
                        type="checkbox"
                        className="pt-4 mr-4"
                        onChange={handleTermsAgreement}
                    />
                    <span className="text-black font-normal">
                        I agree with{' '}
                    </span>
                    <a href="#">Terms of use</a>
                </label>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="border p-8 mb-8">
                    <h2 className="h2">Personal Data</h2>
                    <p className="poppins-xxs mb-6">
                        Specify exactly as in your passport
                    </p>
                    <label htmlFor="" className="poppins-small">
                        First Name
                        <input
                            className="px-2 pb-2 mt-4 block border-b-[1px] w-full roboto-small mb-8"
                            {...register('firstName', {
                                required: "Обов'язкове введення",
                                minLength: {
                                    value: 2,
                                    message: 'Мінімум 2 символа',
                                },
                            })}
                        />
                    </label>
                    {errors?.firstName && (
                        <div className="h-10 text-red-700">
                            <p>
                                &#x2717;{errors?.firstName?.message || 'Error!'}
                            </p>
                        </div>
                    )}
                    <label htmlFor="">
                        Last Name
                        <input
                            className="px-2 pb-2 mt-4 block border-b-[1px] w-full roboto-small mb-8"
                            {...register('lastName', {
                                required: "Обов'язкове введення",
                                minLength: {
                                    value: 2,
                                    message: 'Мінімум 2 символа',
                                },
                            })}
                        />
                    </label>
                    {errors?.lastName && (
                        <div className="h-10  text-red-700">
                            <p>
                                &#x2717;{errors?.lastName?.message || 'Error!'}
                            </p>
                        </div>
                    )}
                    <div>
                        <h2 className="poppins-small ">Date of Birth</h2>
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd.MM.yyyy"
                            placeholderText="01.01.2024 &emsp;&emsp;&emsp;&#9660;"
                            showYearDropdown
                            scrollableYearDropdown
                            yearDropdownItemNumber={70}
                            className="form-control px-2 pb-2 mt-4 mb-6 block border-b-[1px] w-1/2 roboto-small"
                            defaultValue={new Date()}
                        />
                    </div>
                    <div className="">
                        <label
                            className="block poppins-small"
                            htmlFor="country"
                        >
                            Country:
                        </label>
                        <select
                            id="country"
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            className="pb-2 px-2 mt-4 mb-6 block border-b-[1px] roboto-small w-full"
                        >
                            <option value="">Select Country</option>
                            {countriesData.data.map((country, index) => (
                                <option key={index} value={country.country}>
                                    {country.country}
                                </option>
                            ))}
                        </select>
                        {selectedCountry && (
                            <div className="form-group">
                                <label
                                    className="block poppins-small"
                                    htmlFor="city "
                                >
                                    City:
                                </label>
                                <select
                                    id="city"
                                    value={selectedCity}
                                    onChange={handleCityChange}
                                    className="form-control px-2 pb-2 mt-4 border-b-[1px] roboto-small  w-full"
                                >
                                    <option value="">Select City</option>
                                    {countriesData.data
                                        .find(
                                            (country) =>
                                                country.country ===
                                                selectedCountry
                                        )
                                        ?.cities.map((city, index) => (
                                            <option key={index} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        )}
                    </div>
                </div>
                <div className="border p-8">
                    <input
                        {...register('itin', {
                            required: "Поле обов'язково має бути заповнене!",
                            minLength: {
                                value: 9,
                                message: 'Мінімум 2 символа',
                            },
                        })}
                        placeholder="Your ITIN"
                        className="px-2 pb-2 mt-4 block border-b-[1px] w-full roboto-small"
                        value={itin}
                        onChange={handleItinChange}
                    />
                    {errors?.itin && (
                        <div className="h-2 text-red-700">
                            <p>&#x2717; {errors?.itin?.message}</p>
                        </div>
                    )}
                    {!errors.itin && (
                        <div className="h-2 text-gray-400">
                            <p>&#10003; Your ITIN!</p>
                        </div>
                    )}
                </div>
                <div className="py-8 ">
                    <input
                        type="submit"
                        className={`button block border-gray-400 border-[1.5px] px-6 py-3 rounded profile-button ${
                            formCompleted ? '' : 'opacity-50 cursor-not-allowed'
                        }`}
                        value="Go next →"
                        disabled={!formCompleted}
                    />
                </div>
            </form>
        </div>
    )
}

export default PersonalData
