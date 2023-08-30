"use client";

import React, {useEffect, useState} from 'react';

const VotePage = ({params}: any) => {

    const {id} = params;

    const [bvoteData, setBvoteData] = useState<Bvote | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/load', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                }),
            });

            if (response.ok) {
                const data: Bvote = await response.json();
                setBvoteData(data);
            } else {
                console.error('API request failed');
            }

            setLoading(false);

        } catch (error) {
            console.error('API request failed:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const handleButtonClick = async (option: string) => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    abstimmung: option,
                }),
            });

            if (response.ok) {
                if (bvoteData) {
                    setBvoteData({
                        ...bvoteData,
                        abstimmung: option
                    })
                }
            } else {
                console.error('API request failed');
            }
        } catch (error) {
            console.error('API request failed:', error);
        }
    };

    return (
        <main>
            {loading ?
                <>
                    <p className={"text-white"}>Daten werden geladen...</p>
                </>
                :
                <>
                    {!bvoteData ?
                        <>
                            <p className={"text-white"}>Diese Seite ist nichts für dich :D</p>
                        </>
                        :
                        <>
                            <h1 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Einladung zu
                                meinem 21.
                                Geburtstag!</h1>
                            <p className="text-gray-700 dark:text-gray-300">
                                Liebe{bvoteData?.gender == "m" ? "r" : ""} {bvoteData?.name},<br/>
                                die Zeit ist gekommen, um meinen 21. Geburtstag gebührend zu feiern! Ich lade dich
                                herzlich ein,
                                an diesem besonderen Tag mit mir anzustoßen und bis tief in die Nach zu feiern.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mt-4">
                                <strong>Datum:</strong> 4. November 2023, ab 19:00 Uhr bis in die frühen Morgenstunden
                                des 5.
                                November<br/>
                                <strong>Ort:</strong> bei mir Zuhause in Floh, Höhnbergstraße 37, 98593 Floh-Seligenthal
                            </p>

                            <h2 className="text-gray-800 dark:text-gray-200 mt-6">Was erwartet euch?</h2>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                <li>Für Bier ist gesorgt, um die Kehlen zu ölen und die Stimmung anzuheizen.</li>
                                <li>Alle weiteren Getränke könnt ihr entweder selbst mitbringen oder gegen einen kleinen
                                    Beitrag
                                    erwerben.
                                </li>
                            </ul>
                            <p className="text-gray-700 dark:text-gray-300 mt-4">
                                Denkt daran, für eine sichere Heimfahrt zu sorgen, da die Feier sicherlich ausgelassen
                                wird. Wer
                                möchte, kann gerne bei mir übernachten oder sich bei Bekannten in Leipzig nach
                                Übernachtungsmöglichkeiten umsehen.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mt-4">
                                Stimmt bitte auf dieser Seite bis zum 22. Oktober ab, ob ihr dabei sein könnt, noch
                                jemanden
                                dabei haben wollt oder leider busy seid, damit ich vorbereiten können.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mt-4">
                                Ich freue mich sehr darauf, dich wieder zu sehen und mit dir die Hütte abzureisen!
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mt-4">
                                Liebe Grüße,<br/>
                                Florian
                            </p>
                            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-6">
                                <button
                                    className={`text-white py-2 px-4 rounded ${
                                        bvoteData?.abstimmung === 'single'
                                            ? 'bg-green-700 border border-green-400 hover:bg-green-800'
                                            : 'bg-green-500 border-green-300 hover:bg-green-600'
                                    }`}
                                    onClick={() => handleButtonClick('single')}
                                >
                                    Da simmer dabei
                                </button>
                                <button
                                    className={`text-white py-2 px-4 rounded ${
                                        bvoteData?.abstimmung === 'multiple'
                                            ? 'bg-blue-700 border border-blue-400 hover:bg-blue-800'
                                            : 'bg-blue-500 hover:bg-blue-600'
                                    }`}
                                    onClick={() => handleButtonClick('multiple')}
                                >
                                    Ich komm nicht alleine
                                </button>
                                <button
                                    className={`text-white py-2 px-4 rounded ${
                                        bvoteData?.abstimmung === 'nothing'
                                            ? 'bg-black hover:bg-gray-800 border border-gray-400'
                                            : 'bg-gray-800 hover:bg-black'
                                    }`}
                                    onClick={() => handleButtonClick('nothing')}
                                >
                                    Bin busy
                                </button>
                            </div>
                        </>
                    }
                </>
            }


        </main>
    );
};

export default VotePage;

