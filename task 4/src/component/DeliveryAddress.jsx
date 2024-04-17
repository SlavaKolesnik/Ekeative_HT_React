import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import countriesData from '../counrty.json'

const DeliveryAddress = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
    })

    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [address, setAddress] = useState('')
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    useEffect(() => {
        setIsButtonDisabled(!(address && zipCode))
    }, [address, zipCode])

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value)
        setSelectedCity('')
    }

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value)
    }

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value)
    }

    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }

    const phone = localStorage.getItem('phoneNumber'),
        personalData = localStorage.getItem('personalData'),
        userCredentials = localStorage.getItem('userCredentials')

    const onSubmit = (data) => {
        console.log(phone, personalData, userCredentials)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="border p-8 mb-8">
                    <h2 className="h2">Delivery address</h2>
                    <p className="poppins-xxs mb-6">Used for shipping orders</p>
                    <div className="">
                        <label htmlFor="" className="poppins-small">
                            Address:
                            <input
                                className="px-2 pb-2 mt-4 block border-b-[1px] w-full roboto-small"
                                {...register('address', {
                                    required: "Обов'язкове введення",
                                    minLength: {
                                        value: 2,
                                        message: 'Мінімум 2 символа',
                                    },
                                })}
                                value={address}
                                onChange={handleAddressChange}
                            />
                        </label>
                        <div className="h-10 text-red-700">
                            {errors?.address && (
                                <p>
                                    &#x2717;
                                    {errors?.address?.message || 'Error!'}
                                </p>
                            )}
                        </div>
                        {selectedCountry && (
                            <div className="form-group mb-8">
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
                                    className="form-control px-2 pb-2 mt-4 border-b-[1px] roboto-small w-full"
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
                        <div className="flex">
                            <div className="inline w-full">
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
                                    className="pb-2 px-2 mt-4 mb-6 block border-b-[1px] roboto-small w-[180px]"
                                >
                                    <option value="">Select Country</option>
                                    {countriesData.data.map(
                                        (country, index) => (
                                            <option
                                                key={index}
                                                value={country.country}
                                            >
                                                {country.country}
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>
                            <div className="">
                                <label
                                    htmlFor=""
                                    className="block poppins-small"
                                >
                                    Zip code
                                </label>
                                <input
                                    className="pb-[3px] px-2 mt-4 ml-2 mb-6 block border-b-[1px] roboto-small w-[180px]"
                                    type="tel"
                                    placeholder=" — — — — "
                                    value={zipCode}
                                    maxLength={5}
                                    onChange={handleZipCodeChange}
                                    pattern="\d*"
                                />
                            </div>
                        </div>
                        <p className="block poppins-small">Optional</p>
                    </div>
                </div>
                <button
                    type="submit"
                    className="register-button px-4 py-2 mb-8"
                    disabled={isButtonDisabled}
                >
                    Register Now
                </button>
            </form>
        </div>
    )
}

export default DeliveryAddress
