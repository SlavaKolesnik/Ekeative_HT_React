import React, { useState } from 'react'
import LogoCompany from './LogoCompany'
import Close from './Close'
import CountryCode from './CountryCode'
import ConfirmationCode from './ConfirmationCode'
import EmailAndPass from './EmailAndPass'
import ProfileInfo from './ProfileInfo'

const RegistrationPhone = () => {
    const [isLockVisible, setIsLockVisible] = useState(true)
    const [submittedPhone, setSubmittedPhone] = useState('')
    const [stepThree, setStepThree] = useState(false)
    const [emailAndPass, setEmailAndPass] = useState(false)

    const handleSendCode = () => {
        setIsLockVisible(false)
    }

    return (
        <div className="grid mt-11 ml-20 mr-11 grid-cols-3">
            <LogoCompany />
            <div className="w-[456px]">
                <div
                    className={`${
                        emailAndPass ? 'hidden' : ''
                    } flex flex-inline mb-20 border-gray-400 text-gray-400`}
                >
                    <div className="text-blue-600">&#9679;</div>
                    <hr className="w-6 border-gray-400 mt-2 ml-1 mr-1" />
                    <div
                        id="empty-two"
                        className={`${isLockVisible ? '' : 'hidden'}`}
                    >
                        &#9675;
                    </div>
                    <div
                        id="sketched-two"
                        className={`text-blue-600 ${
                            isLockVisible ? 'hidden' : 'block'
                        }`}
                    >
                        &#9679;
                    </div>
                    <hr className="w-6 border-gray-400 mt-2 ml-1 mr-1" />
                    <div
                        id="empty-tree"
                        className={`${!stepThree ? '' : 'hidden'}`}
                    >
                        &#9675;
                    </div>
                    <div
                        id="sketched-three"
                        className={`text-blue-600 ${
                            stepThree ? 'block' : 'hidden'
                        }`}
                    >
                        &#9679;
                    </div>
                </div>
                <div className="relative">
                    <div className={`${emailAndPass ? 'hidden' : ''}`}>
                        <h1 className="poppins mb-4">Registration</h1>
                        <p className="roboto">
                            Fill in the registration data. It will take a couple
                            of minutes.
                            <br />
                            All you need is a phone number and e-mail
                        </p>
                    </div>

                    <div className="absolute">
                        <div
                            className={` bg-gray-200 p-4 my-8  flex flex-inline rounded-md ${
                                isLockVisible ? '' : 'hidden'
                            }`}
                        >
                            <img
                                src="https://raw.githubusercontent.com/SlavaKolesnik/img_for_project/dc8dae7df058077a19ad822823976f0d42a4fc26/Code.svg"
                                alt="lock"
                            />
                            <p id="lock" className={`px-4 poppins-small`}>
                                We take privacy issues seriously. You can be
                                sure <br /> that your personal data is securely
                                protected.
                            </p>
                            <p className="text-gray-500 font-bold text-4xl pl-8 ">
                                &#215;
                            </p>
                        </div>
                        <div className={`${isLockVisible ? '' : 'hidden'}`}>
                            <CountryCode
                                onSendCode={handleSendCode}
                                setSubmittedPhone={setSubmittedPhone}
                            />
                        </div>
                        <div
                            className={`${isLockVisible ? 'hidden' : 'block'} ${
                                !stepThree ? '' : 'hidden'
                            }`}
                        >
                            <ConfirmationCode
                                submittedPhone={submittedPhone}
                                setStepThree={setStepThree}
                            />
                        </div>
                        {stepThree && !emailAndPass && (
                            <EmailAndPass
                                submittedPhone={submittedPhone}
                                setEmailAndPass={setEmailAndPass}
                            />
                        )}
                        {emailAndPass && <ProfileInfo />}
                    </div>
                </div>
            </div>
            <Close />
        </div>
    )
}

export default RegistrationPhone
