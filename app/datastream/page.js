'use client'

import './datas.css';
import { useEffect } from 'react';
// import AAER_Model from "../components/cansat_aaer"
// import Inertia_Model from "../components/cansat_inertia"

export default function DataStreamPage() {
    useEffect(() => {
        window.location.href = "/datastream/aaer"
    }, [])
}