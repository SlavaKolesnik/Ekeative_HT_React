import React, { useState } from 'react'
import axios from 'axios'

function App() {
    const [longUrl, setLongUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [error, setError] = useState('')

    const handleChange = (event) => {
        setLongUrl(event.target.value)
        setError('')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!longUrl.trim()) {
            setError('Будь ласка, введіть дійсний URL')
            return
        }
        try {
            const response = await axios.post(
                'https://cleanuri.com/api/v1/shorten',
                {
                    url: longUrl,
                }
            )
            const data = response.data
            if (data.error) {
                setError(data.error)
                setShortUrl('')
            } else {
                setShortUrl(data.result_url)
                setError('')
            }
        } catch (error) {
            console.error('Помилка:', error)
            setError('Щось пішло не за планом!')
            setShortUrl('')
        }
    }

    return (
        <div className="bg-gradient-to-r from-violet-200 to-pink-200 min-h-screen flex justify-center items-center">
            <div>
                <form onSubmit={handleSubmit}>
                    <label className="text-center block mb-4 text-3xl font-medium text-gray-900 dark:text-white">
                        Введіть ваш URL:
                        <input
                            type="text"
                            value={longUrl}
                            className="mt-2 text-3xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[800px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={handleChange}
                        />
                    </label>
                    <button
                        type="submit"
                        className="block text-2xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-auto"
                    >
                        Вкоротити
                    </button>
                </form>
                {error && <p>Помилка: {error}</p>}
                {shortUrl && (
                    <p className="text-center">
                        Короткий URL: <a href={shortUrl}>{shortUrl}</a>
                    </p>
                )}
            </div>
        </div>
    )
}

export default App
