const SocialNetworkInput = ({
    socialNetworks,
    selectedSocialNetwork,
    showDropdown,
    setShowDropdown,
    setSelectedSocialNetwork,
    register,
    index,
}) => {
    return (
        <div id="SocialList" className="flex">
            <div className="custom-dropdown w-1/2 mr-2 mt-7">
                <div
                    className="selected-option"
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    {selectedSocialNetwork ? (
                        <div className="selected-option-content">
                            {
                                socialNetworks.find(
                                    (network) =>
                                        network.name === selectedSocialNetwork
                                ).icon
                            }{' '}
                            {selectedSocialNetwork}
                        </div>
                    ) : (
                        <span className="roboto-small">
                            Select Social Network
                        </span>
                    )}
                </div>
                {showDropdown && (
                    <div className="dropdown-options">
                        {socialNetworks.map((network, idx) => (
                            <div
                                key={idx}
                                className="option"
                                onClick={() => {
                                    setSelectedSocialNetwork(network.name)
                                    setShowDropdown(false)
                                }}
                            >
                                {network.icon} {network.name}
                            </div>
                        ))}
                    </div>
                )}
                <hr className="mt-2" />
            </div>
            <div>
                <input
                    className="ml-4 pb-2 mt-7 border-b-[1px] w-[160px] roboto-small"
                    {...register(`socialNet${index}`, {
                        required: "Обов'язкове введення",
                        minLength: {
                            value: 2,
                            message: 'Мінімум 2 символа',
                        },
                    })}
                />
            </div>
        </div>
    )
}

export default SocialNetworkInput
