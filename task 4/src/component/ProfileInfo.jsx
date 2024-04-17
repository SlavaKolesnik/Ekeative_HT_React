import { useState } from 'react'
import Conatacts from './Contacts'
import DeliveryAddress from './DeliveryAddress'
import PersonalData from './PersonalData'

const ProfileInfo = () => {
    const [personalData, setPersonalData] = useState(false)
    const [contacts, setContacts] = useState(false)
    return (
        <div>
            <div className="flex flex-inline mb-20 border-gray-400 text-gray-400">
                <div className="text-blue-600">&#9679;</div>
                <hr className="w-6 border-gray-400 mt-2 ml-1 mr-1" />
                <div
                    id="empty-two"
                    className={`${personalData ? 'hidden' : ''}`}
                >
                    &#9675;
                </div>
                <div
                    id="sketched-two"
                    className={`${personalData ? '' : 'hidden'} text-blue-600`}
                >
                    &#9679;
                </div>
                <hr className="w-6 border-gray-400 mt-2 ml-1 mr-1" />
                <div id="empty-tree" className={`${contacts ? 'hidden' : ''}`}>
                    &#9675;
                </div>
                <div
                    id="sketched-three"
                    className={`${contacts ? '' : 'hidden'} text-blue-600`}
                >
                    &#9679;
                </div>
            </div>
            <div className="mb-8">
                <h1 className="poppins mb-4">Profile info</h1>
                <p className="roboto">
                    Fill in the data for profile. It will take a couple
                    of minutes. <br />
                    You only need a passport
                </p>
            </div>
            <div>
                <div className={`${personalData ? 'hidden' : ''}`}>
                    <PersonalData setPersonalData={setPersonalData} />
                </div>
                <div
                    className={`${personalData ? '' : 'hidden'} ${
                        contacts ? 'hidden' : ''
                    }`}
                >
                    <Conatacts setContacts={setContacts} />
                </div>
                <div className={`${contacts ? '' : 'hidden'}`}>
                    <DeliveryAddress />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
