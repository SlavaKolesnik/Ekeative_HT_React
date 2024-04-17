// CountryCode.jsx
import React, { useState } from 'react'
import numbJson from '../numb.json'
import { useForm } from 'react-hook-form'

const CountryCode = ({ onSendCode, setSubmittedPhone }) => {
    const { register, handleSubmit } = useForm()
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleChange = (event) => {
        const value = event.target.value
        if (value.length <= 10) {
            setPhoneNumber(value)
        }
    }

    const onSubmit = (data) => {
        const phone = JSON.stringify(data.countryCode + data.phoneNumber)
        setSubmittedPhone(phone)
        alert(phone)
        if (onSendCode) {
            onSendCode()
            alert('Ваш пінкод: 9090')
        }
    }

    const codeList = numbJson.data.map((country) => (
        <option key={country.code} value={country.dial_code}>
            {country.dial_code}
        </option>
    ))

    return (
        <div className="mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="border p-8 rounded-md mb-8">
                    <p className="poppins-small mb-10">
                        Enter your phone number
                    </p>
                    <div className="roboto-small">
                        <select
                            {...register('countryCode')}
                            className="mr-6 border-b-2 p-2"
                        >
                            {codeList}
                        </select>
                        <input
                            {...register('phoneNumber')}
                            className="p-2 border-b-2 w-[264px]"
                            type="number"
                            value={phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <input
                    type="submit"
                    className="button block border-gray-400 border-[1.5px] px-6 py-3 rounded mb-8"
                    value="Send Code"
                />
            </form>
        </div>
    )
}

export default CountryCode
