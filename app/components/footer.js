'use client'

import KofiButton from "kofi-button";
/* eslint-disable @next/next/no-img-element */

import Script from "next/script";

export default function Footer() {
    return (
        <>
        <footer id="contact">
            <div className="panel" style={{ fontFamily:"Poppins" }}>
                <a href="/teams/inertia">Inertia</a>
                <div style={{
                    background:"linear-gradient(90deg, rgb(0,212,255) 0%, rgb(48,64,192) 100%)",
                    backgroundClip:"text", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"
                 }}>
                    <a href="./"><h1 style={{ fontSize:"2rem" }}>Teams of the CanSat Competition</h1></a>
                </div>
                <a href="/teams/project-aaer">Project AAER</a>
            </div>
            <p><a href="mailto:spaics@aics.espritscholen.nl">©SPAICS 2022-2023</a></p>
            <p>Website under the <a href="https://en.wikipedia.org/wiki/MIT_License">MIT License</a> (Source Repository on Github Below)</p>
            <div className="panel">
                <a href="https://github.com/zLuminate/SPAICS" target="_blank" rel="noreferrer">
                    <img
                        src={ "https://drive.google.com/uc?export=view&id=1Af-cF2NpUWts7b_k_LwZb3IKqlR-Q1ts" }
                        alt="Website Github Repo"
                    />
                </a>
                <a href="https://www.instagram.com/spaics_/" target="_blank" rel="noreferrer">
                    <img
                        src={ "https://drive.google.com/uc?export=view&id=18NjFs4WzeE7xLv71KQvR1vl2we5Ahm4_" }
                        alt="SPAICS Instagram"
                    />
                </a>
                <a href="https://www.youtube.com/@spaics" target="_blank" rel="noreferrer">
                    <img
                        src={ "https://drive.google.com/uc?export=view&id=1ywCSh6aXcQScxiCplJpbDxOM8cvOM7kY" }
                        alt="SPAICS Youtube"
                    />
                </a>
                <a href="https://www.tiktok.com/@spaics_" target="_blank" rel="noreferrer">
                    <img
                        src={ "https://drive.google.com/uc?export=view&id=1_mSf272M6HWDqXngIpFDXMCJgc4RsbIP" }
                        alt="SPAICS TikTok" style={{ scale:"1.375" }}
                    />
                </a>
                <a href="mailto:spaics@aics.espritscholen.nl" target="_blank" rel="noreferrer">
                    <img
                        src={ "https://drive.google.com/uc?export=view&id=1M1Ue4DSuX11qgFwS7VMUqcsyQ__qAzI8" }
                        alt="SPAICS Email"
                    />
                </a>
            </div>
            <div className="panel" id="bottomPanel">
                <KofiButton
                    kofiID="spaics23"
                    title="Buy the team a coffee"
                />
            </div>
        </footer>
        </>
    );
}