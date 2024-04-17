import { useState, useEffect } from 'react'

const ConfirmationCode = ({ submittedPhone, setStepThree }) => {
    const [confirmationCode, setConfirmationCode] = useState('')
    const [isNumberVisible, setIsNumberVisible] = useState(true)
    const [phoneNumberInput, setPhoneNumberInput] = useState('')

    useEffect(() => {
        if (!isNumberVisible && phoneNumberInput) {
            localStorage.setItem('phoneNumber', phoneNumberInput)
        }
    }, [isNumberVisible, phoneNumberInput])

    const handleChange = (e) => {
        const value = e.target.value
        const regex = /^[0-9]{0,11}$/
        if (regex.test(value)) {
            setPhoneNumberInput(value)
        }
    }

    const handleSendAgain = () => {
        setConfirmationCode('')
        alert('Your PIN code is: 9090')
    }

    const handlePenClick = () => {
        setIsNumberVisible(!isNumberVisible)
    }

    const handleConfirm = () => {
        if (confirmationCode === '9090') {
            localStorage.setItem(
                'phoneNumber',
                submittedPhone.slice(1, submittedPhone.length - 1)
            )
            setStepThree(true)
        }
    }

    return (
        <div className="mt-8">
            <div className="border p-4 rounded-md mb-8 roboto-small">
                <p
                    id="staticNumber"
                    className={isNumberVisible ? '' : 'hidden'}
                >
                    {submittedPhone.slice(1, submittedPhone.length - 1)}
                </p>
                <div
                    id="changeNumber"
                    className={
                        isNumberVisible
                            ? 'flex flex-inline hidden'
                            : 'flex flex-inline'
                    }
                >
                    <p>+</p>
                    <input
                        id="phoneNumberInput"
                        type="tel"
                        maxLength={11}
                        className="border-b-[1.5px] border-blue-500 w-[296px] mr-8"
                        placeholder="Enter phone number"
                        value={phoneNumberInput}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-inline justify-between">
                    <p className="poppins-xs ">Number not confirmed yet</p>
                    <img
                        id="pen"
                        src="https://raw.githubusercontent.com/SlavaKolesnik/img_for_project/908c83a41b860c889be3a2b66e197813fae73051/Pen.svg"
                        alt=""
                        onClick={handlePenClick}
                    />
                </div>
            </div>
            <div className="mb-8">
                <p className="poppins-small mb-2">Confirmation code</p>
                <div className="flex flex-inline justify-between mb-2">
                    <input
                        className="roboto-small border-b-[1.5px] border-blue-500 w-[296px] mr-8"
                        type="tel"
                        placeholder=" — — — — "
                        value={confirmationCode}
                        maxLength={4}
                        onChange={(e) => setConfirmationCode(e.target.value)}
                    />
                    <div className="flex flex-inline" onClick={handleSendAgain}>
                        <img
                            className="w-4 mr-2 "
                            src="https://raw.githubusercontent.com/SlavaKolesnik/img_for_project/908c83a41b860c889be3a2b66e197813fae73051/Reload.svg"
                            alt=""
                        />
                        <p className="mt-1 roboto-xs">Send again</p>
                    </div>
                </div>
                <p className="poppins-m">
                    Confirm phone number with code from SMS message
                </p>
            </div>
            <div>
                <input
                    type="submit"
                    className="button block border-gray-400 border-[1.5px] px-6 py-3 rounded mb-8"
                    value="Confirm"
                    onClick={handleConfirm}
                />
            </div>
        </div>
    )
}

export default ConfirmationCode
