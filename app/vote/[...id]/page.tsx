"use client";

import React, {useState} from 'react';

const Home = ({params}: any) => {

    console.log(params);

    const name = "Candy";
    const gender = "m";
    const id = params.id;

    const [selectedOption, setSelectedOption] = useState('');

    const handleButtonClick = async (option: string) => {
        setSelectedOption(option);

        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    selectedOption: option,
                }),
            });

            if (response.ok) {
                console.log('API request successful');
            } else {
                console.error('API request failed');
            }
        } catch (error) {
            console.error('API request failed:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="max-w-md p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md w-full mx-4 md:mx-0">
                <h1 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Einladung zum 21. Geburtstag Bash!</h1>
                <p className="text-gray-700 dark:text-gray-300">
                    Liebe{gender == "m" ? "r" : ""} {name},<br />
                    die Zeit ist gekommen, um meinen 21. Geburtstag gebührend zu feiern! Ich lade euch herzlich ein, an diesem besonderen Tag mit mir anzustoßen und eine unvergessliche Nacht zu erleben.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                    <strong>Datum:</strong> 4. November 2023, ab 19:00 Uhr bis in die frühen Morgenstunden des 5. November<br />
                    <strong>Ort:</strong> Die Destille, [Adresse der Destille einfügen]
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                    Lasst uns in der gemütlichen Atmosphäre der Destille zusammentreffen und den Abend genießen. Die Party startet um 19:00 Uhr – bringt eure gute Laune mit!
                </p>
                <h2 className="text-gray-800 dark:text-gray-200 mt-6">Was erwartet euch?</h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Für Bier ist gesorgt, um die Kehlen zu ölen und die Stimmung anzuheizen.</li>
                    <li>Alle weiteren Getränke könnt ihr entweder selbst mitbringen oder gegen einen kleinen Beitrag erwerben.</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                    Denkt daran, für eine sichere Heimfahrt zu sorgen, da die Feier sicherlich ausgelassen wird. Wer möchte, kann gerne bei mir übernachten oder sich bei Bekannten in Leipzig nach Übernachtungsmöglichkeiten umsehen.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                    Bitte gebt mir bis zum 22. Oktober Bescheid, ob ihr dabei sein könnt, damit wir alles perfekt vorbereiten können.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                    Ich freue mich wahnsinnig darauf, diesen besonderen Tag mit euch zu verbringen und gemeinsam eine unvergessliche Nacht zu erleben!
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                    Liebe Grüße,<br />
                    [Dein Name]
                </p>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-6">
                    <button
                        className={`${
                            selectedOption === 'single'
                                ? 'bg-green-600 border-white border'
                                : 'bg-green-500 hover:bg-green-600'
                        } text-white py-2 px-4 rounded`}
                        onClick={() => handleButtonClick('single')}
                    >
                        Da simmer dabei
                    </button>
                    <button
                        className={`${
                            selectedOption === 'multiple'
                                ? 'bg-blue-600 border-white border'
                                : 'bg-blue-500 hover:bg-blue-600'
                        } text-white py-2 px-4 rounded`}
                        onClick={() => handleButtonClick('multiple')}
                    >
                        Ich komm nicht alleine
                    </button>
                    <button
                        className={`${
                            selectedOption === 'nothing'
                                ? 'bg-black hover:bg-gray-800 border-white border'
                                : 'bg-gray-800 hover:bg-black'
                        } text-white py-2 px-4 rounded`}
                        onClick={() => handleButtonClick('nothing')}
                    >
                        Bin bussy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;

