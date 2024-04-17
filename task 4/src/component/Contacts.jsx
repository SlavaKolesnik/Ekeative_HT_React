import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
    FaSkype,
    FaFacebook,
    FaInstagramSquare,
    FaYoutube,
    FaTiktok,
    FaTwitter,
    FaDiscord,
    FaLinkedin,
    FaViber,
} from 'react-icons/fa'
import SocialNetworkInput from './SocialNetworkInput'

const Contacts = ({ setContacts }) => {
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [socialNetworksData, setSocialNetworksData] = useState([
        {
            selectedSocialNetwork: '',
            showDropdown: false,
        },
    ])

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: 'onBlur',
    })

    const socialNetworks = [
        { name: 'Skype', icon: <FaSkype /> },
        { name: 'Facebook', icon: <FaFacebook /> },
        { name: 'Instagram', icon: <FaInstagramSquare /> },
        { name: 'YouTube', icon: <FaYoutube /> },
        { name: 'TikTok', icon: <FaTiktok /> },
        { name: 'Twitter', icon: <FaTwitter /> },
        { name: 'Discord', icon: <FaDiscord /> },
        { name: 'Linkedin', icon: <FaLinkedin /> },
        { name: 'Viber', icon: <FaViber /> },
    ]

    useEffect(() => {
        const userCredentials = JSON.parse(
            localStorage.getItem('userCredentials')
        )
        if (userCredentials) {
            setEmail(userCredentials.email || '')
        }
    }, [])

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const phone = localStorage.getItem('phoneNumber')

    const handlePhoneNumberChange = (event) => {
        const value = event.target.value
        setPhoneNumber(value)
        localStorage.setItem('phoneNumber', value)
    }

    const addMoreSocialNetwork = () => {
        const newSocialNetworksData = [
            ...socialNetworksData,
            { selectedSocialNetwork: '', showDropdown: false },
        ]
        setSocialNetworksData(newSocialNetworksData)
    }

    const onSubmit = (data) => {
        const userCredentials = {
            email,
            phoneNumber,
            socialNetworksData: socialNetworksData.map(
                (networkData, index) => ({
                    selectedSocialNetwork: networkData.selectedSocialNetwork,
                    userInput: data[`socialNet${index}`],
                })
            ),
        }
        localStorage.setItem('userCredentials', JSON.stringify(userCredentials))
        setContacts(true)
    }

    const updateSocialNetworkData = (index, key, value) => {
        const updatedData = [...socialNetworksData]
        updatedData[index][key] = value
        setSocialNetworksData(updatedData)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border p-8 mb-8">
                <h2 className="h2">Contacts</h2>
                <p className="poppins-xxs mb-6">
                    These contacts are used to inform about orders
                </p>
                <div
                    id="mail"
                    className="text-xl text-gray-400 mb-8 border-b border-gray-400"
                >
                    <div className="inline mr-4">&#9993;</div>
                    <input
                        className="text-black roboto-small"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Email"
                    />
                    <hr className="mt-1" />
                </div>
                <div className="mb-8">
                    <i className="fa-solid fa-phone mr-4 text-gray-400"></i>
                    <input
                        className="text-black roboto-small"
                        type="tel"
                        value={phone}
                        onChange={handlePhoneNumberChange}
                        placeholder="Phone Number"
                    />
                    <hr className="mt-1" />
                </div>
                <h2 className="h2">Social network</h2>
                <p className="poppins-xxs mb-6">
                    Indicate the desired communication method
                </p>
                {socialNetworksData.map((data, index) => (
                    <SocialNetworkInput
                        key={index}
                        socialNetworks={socialNetworks}
                        selectedSocialNetwork={data.selectedSocialNetwork}
                        setSelectedSocialNetwork={(value) => {
                            updateSocialNetworkData(
                                index,
                                'selectedSocialNetwork',
                                value
                            )
                        }}
                        showDropdown={data.showDropdown}
                        setShowDropdown={(value) => {
                            updateSocialNetworkData(
                                index,
                                'showDropdown',
                                value
                            )
                        }}
                        register={register}
                        index={index}
                    />
                ))}

                <div>
                    <button
                        id="add-more"
                        className="mt-8 button-more"
                        type="button"
                        onClick={addMoreSocialNetwork}
                    >
                        + Add More
                    </button>
                </div>
            </div>

            <div className="py-8">
                <input
                    type="submit"
                    className="button block border-gray-400 border-[1.5px] px-6 py-3 rounded profile-button"
                    value="Save"
                />
            </div>
        </form>
    )
}

export default Contacts
