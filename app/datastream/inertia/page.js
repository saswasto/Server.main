'use client'

import '../datas.css';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { useAuthState } from "react-firebase-hooks/auth";
import SignInScreen from '../../components/auth';

import { Chart as ChartJS, LinearScale, PointElement, LineElement } from 'chart.js';
import { Scatter } from 'react-chartjs-2';

firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_ApiKey,
    authDomain: process.env.NEXT_PUBLIC_AuthDomain,
    databaseURL: process.env.NEXT_PUBLIC_DatabaseURL,
    projectId: process.env.NEXT_PUBLIC_ProjectId,
    storageBucket: process.env.NEXT_PUBLIC_StorageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_MessagingSenderId,
    appId: process.env.NEXT_PUBLIC_AppId,
    measurementId: process.env.NEXT_PUBLIC_MeasurementId
})
ChartJS.register(LinearScale, PointElement, LineElement);
const collectionRef = firebase.firestore().collection('spaics-23')

export default function DataStreamPage() {
    const [user, loading, error] = useAuthState(firebase.auth())

    const [rawData] = useDocumentData(collectionRef.doc('inertia'))
    var scatterData = {};
    const chartsDatas = {}

    for (const sec in rawData) {
        for (const subsec in rawData[sec]) {
            scatterData[sec+"."+subsec]=rawData[sec][subsec]
        }
    }
    scatterData = Object.fromEntries(Object.entries(scatterData).sort((a, b) => a[0] - b[0]))

    for (const variable in scatterData[Object.keys(scatterData)[0]]) {
        chartsDatas[variable] = []
        for (const second in scatterData) {
            if (scatterData[second][variable] != null) {
                chartsDatas[variable].push({ x: parseFloat(second), y: scatterData[second][variable] })
            }
        }
    }

    const units = {
        "temperature": "°C",
        "pressure": "hPa",
        "altitude": "m",
    }

    return (
        <div style={{ paddingTop:"3rem" }}>
            {loading && <h4>You are being logged in...</h4>}
            {error && <SignInScreen/>}
            {!user && <SignInScreen/>}
            {user && <>
                <div style={{ margin:"1rem", position:"relative" }}>
                <p>
                    This Page is currently Underdevelopment, the data is randomly generated. Thanks for your support :)
                </p>
                </div>

                { Object.keys(chartsDatas).sort().map((variable) => (
                    <div key={variable} class="graphHolder">
                        <Scatter 
                            data={{ 
                                datasets: [{ 
                                    label: 'Scatter Dataset', 
                                    data: chartsDatas[variable], 
                                    backgroundColor: 'rgb(255, 99, 132)',
                                    borderColor: 'red',
                                    showLine: true,
                                }]
                            }}
                            options={{
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        title: {
                                            display: true,
                                            text: variable+" ("+units[variable]+")",
                                        }
                                    },
                                    x: {
                                        beginAtZero: true,
                                        title: {
                                            display: true,
                                            text: 'Time',
                                        }
                                    }
                                },
                                responsive: true,
                                animation: true,
                                elements: {
                                    line: {
                                        borderJoinStyle: 'round',
                                        tension: 0
                                    },
                                    point: {
                                        hoverRadius: 10,
                                        radius: 3,
                                    }
                                }
                            }}
                        />
                    </div>
                ))}
                <pre>{JSON.stringify(scatterData, null, 4)}</pre>
            </>}
        </div>
    )
}