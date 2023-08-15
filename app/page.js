'use client';
/* eslint-disable @next/next/no-img-element */

import bg1 from "./assets/backgrounds/1.png"
import RightVertConnector from "./components/home-components/rightvertconn";
import DrawnLogo from "./components/home-components/drawnlogo";
import Timeline from "./components/home-components/timeline";

import './homeStyles.css'
import Image from "next/image"
import Script from "next/script";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import GradientH1 from "./components/home-components/gradient-heading";
import { useState, useEffect } from "react";
import LeftChunk from "./components/home-components/chunkleft";
import RightChunk from "./components/home-components/chunkright";

function Photobooth() {
  const gallaryImgIDs_col1 = [
    "1qbIKmxV-mTcsYhNLWQhjay16jMR7fn1S",
    "1oZcow2RTckko4AKfLAHyw6sBjGFFtT5x",
    "1Qiy6LUy9bAVGCnQGQn6cR_oUfj5HKrT0",
    "1t4Ph3WN1wczOn3PmakHEPtFkire1ufQa",
    
    "1Q1mk4uk_bi5TkmzapC3DPx7QOgjpeUBU",
    "1OHjdO4sqVo9N9bnRlXDbIOfBfoqPwFMa",
    "11lMDA8ueORbCjOSLb8TGbl55xKF9FOjA",
    "1Ad3iGDHcNpjYSeTqoFI9CvOiNUxmUCwx"
  ]

  const gallaryImgIDs_col2 = [
    "1Q1mk4uk_bi5TkmzapC3DPx7QOgjpeUBU",
    "1OHjdO4sqVo9N9bnRlXDbIOfBfoqPwFMa",
    "11lMDA8ueORbCjOSLb8TGbl55xKF9FOjA",
    "1Ad3iGDHcNpjYSeTqoFI9CvOiNUxmUCwx",

    "1qbIKmxV-mTcsYhNLWQhjay16jMR7fn1S",
    "1oZcow2RTckko4AKfLAHyw6sBjGFFtT5x",
    "1Qiy6LUy9bAVGCnQGQn6cR_oUfj5HKrT0",
    "1t4Ph3WN1wczOn3PmakHEPtFkire1ufQa"
  ]

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setWidth(width);
    setHeight(height);
  }, []);

  if (width > height) {
    return (
      <div id="photobooth">
        <Parallax speed={-10}>
          {gallaryImgIDs_col1.map((id, index) => (
            <div className="photo" key={index}>
              <img src={ "https://drive.google.com/uc?export=view&id="+id } alt={ "photo_"+index } />
            </div>
          ))}
        </Parallax>
        <Parallax speed={-20}>
          {gallaryImgIDs_col2.map((id, index) => (
            <div className="photo" key={index}>
              <img src={ "https://drive.google.com/uc?export=view&id="+id } alt={ "photo_"+index } />
            </div>
          ))}
        </Parallax>
      </div>
    )
  } else {
    return (
      <div id="photobooth">
        <Parallax speed={-10}>
          {gallaryImgIDs_col1.concat(gallaryImgIDs_col2).map((id, index) => (
            <div className="photo" key={index}>
              <img src={ "https://drive.google.com/uc?export=view&id="+id } alt={ "photo_"+index } />
            </div>
          ))}
        </Parallax>
      </div>
    )
  }
}

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <ParallaxProvider>
    <Script id="photoboothHeightModif">
      {`
        const photobooth = document.getElementById("photobooth");
        const photoboothside = document.getElementById("photobooth-side");

        high = photobooth.offsetHeight-(window.innerHeight*0.1);
    
        photobooth.style.height = high + "px";
      `}
    </Script>
    <div style={{ position:"relative" }}>
      <div style={{
        backgroundPosition:"150% center",
        background:`linear-gradient(
          -45deg,
          #EEC643 50%,
          #FFFF00 60%,
          #EEC643 70%
        )`,
        animation:"shine 4s forwards",

        backgroundSize:"200% 100%", backgroundClip:"text", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",

        color:"#DAD2D8", position:"absolute", left:"50%", zIndex:3, textAlign:"center",
        transform:"translateX(-50%)", top:"85vh", opacity:0,
      }}>
        <p style={{ fontFamily:'"Times New Roman", Times, serif', margin:0, fontWeight:"bold" }}>
          CanSat Competition Team 2022-2023
          <br/>
          @ Amsterdam International Community School
        </p>
      </div>

      <div style={{ width:"100vw", height:"97vh", overflow:"hidden", position:"relative" }}>

        <div style={{
          position:"absolute",zIndex:-1, width:"120vw", height:"80vw", top:"50%", left:"25%", transform:"translate(-50%, -50%)",
          opacity:0, animation:"fadeIn ease 2s", animationDelay:"1s", animationFillMode:"forwards",
        }}>
          <Image src={bg1} alt="background" fill />
        </div>

        <DrawnLogo />

      </div>

      <div style={{ display:"flex", alignItems:"stretch" }}>
        <Photobooth/>
        <div id="photobooth-side" style={{ height:"fit-content", flex:"1" }}>
          <RightVertConnector/>
          <div className="right" style={{ paddingTop:0 }}>
            <h1>The Journey of a Thousand Lightyears Begins with one Step</h1>
            <p>
              Planetary exploration, technological development, cutting-edge innovation all seem so distant, so detached from reality; but we are here to change that. Two teams, one goal: bring the future to the present.
            </p>
          </div>
          <RightVertConnector/>
          <div className="right">
            <h1>On that Pursuit of Innovation</h1>
            <p>
              As challengers in the annual <a href="https://www.esa.int/Education/CanSat" target="_blank" rel="noreferrer">CanSat competition</a> and directly under the oversight of the <a href="https://www.esa.int" target="_blank" rel="noreferrer">European Space Agency</a>. Bureaus of the <a href="https://dare.tudelft.nl/projects/cansat" target="_blank" rel="noreferrer">Delft Aerospace Rocket Engineering</a> of the TU Delft will also be in collaboration with us to bring our dreams to the skies
            </p>
          </div>
          <RightVertConnector/>
          <div className="right">
            <h1>Go fast, but still Far</h1>
            <p>
              As students of the <a href="https://ibo.org">International Bacalaureate</a> from <a href="https://aics.espritscholen.nl">AICS</a>, our uniqueness lies in our particular discipline, creativity, and most importantly, passion. We composite specialization and teamwork to bring engineering and sciences to the next level.
            </p>
          </div>
        </div>
      </div>

      <div id="teams">
        <div id="team1" onClick={() => window.location.href = "/teams/inertia" }>
          <h1>Team I · Inertia</h1>
          <p>Mission: Create a new Type of Technology that Enables and Ensures of a Vertical Landing</p>
          <p>Importance in the Real World: The Proof of Concept will allow for a wide range of applications</p>
          <p> </p>
        </div>

        <div id="team2" onClick={() => window.location.href = "/teams/project-aaer" }>
          <h1>Team II · Project A.A.E.R.</h1>
          <p>- &#34;Artificial Acceleration of Ecosystem Restoration&#34;</p>
          <p>Mission: Artificially Assist & Speed Up the Environment to regain its state of Health</p>
          <p>Significance: Solution to Massive Destruction Events (Floods, Forest Fires)</p>
        </div>
      </div>

      <div style={{ textAlign:"center", padding:"0 10vw" }}>
        <h1>The CanSat Competition</h1>
        <p>The challenge brings 6 students per team to think critically and creatively as we work to design and build a model Satelite in the mere size of a soda drink can. Each team projects their unique mission while the simulation of a real space launch is undergone for the final test. The 2 teams of the AICS are structured by roles of expertise, producing the next generation of innovation and ingenuiy.</p>

        <div className="container" id="team-members" style={{ paddingLeft:"1vw", paddingRight:"1vw" }}>
          <Parallax speed={7.5} style={{ maxWidth:"24.5vw" }}>
            <div className="member">
              <img src={ "https://drive.google.com/uc?export=view&id=1O3-uG6OyX-04vf_DXUe9wAlHL-y-6Fmv" } alt="" />
              <p>Gonçalo Lopes Madeira Lau - Inertia Body Design I</p>
            </div>
            <div className="member">
              <img src={ "https://drive.google.com/uc?export=view&id=1BMIO4OVuQArv9Rf8zMysRqxwNqNsiIIT" } alt="" />
              <p>Abhishek Pillai - Inertia Software & Hardware I</p>
            </div>
            <div className="member">
              <img src={ "https://drive.google.com/uc?export=view&id=1Gu7DuMslzjtJ9ikuEkIijxFoNsA2kD7W" } alt="" />
              <p>Henry Harrison - Inertia Software & Hardware II</p>
            </div>
          </Parallax>
          <Parallax speed={-5} style={{ maxWidth:"24.5vw" }}>
            <div className="member">
              <img src={ "https://drive.google.com/uc?export=view&id=1-J5MGEz_s_XHs2T_ud2SJJNr4m-bKbbh" } alt="" />
              <p>Matei Rusu - Inertia Body Design II</p>
            </div>
            <div className="member">
              <img src={ "https://drive.google.com/uc?export=view&id=1yeV6mh4d8Yxsv0wnmSxbeoJupAwZfZAN" } alt="" />
              <p>Olive Webster - Inertia Recovery</p>
            </div>
            <div className="member">
              <img src={ "https://drive.google.com/uc?export=view&id=1bQkYBbNBOGH1bbPRhlGrbMJGvP8bMRdr" } alt="" />
              <p>Ayeesha Worgan - Inertia Public Relations</p>
            </div>
          </Parallax>
          <Parallax speed={2.5} style={{ maxWidth:"24.5vw" }}>
            <div className="member">
              <img src={ "https://drive.google.com/uc?export=view&id=1HszQ2AAU4gsxQXlL7NyGBSoC0xxxQLx3" } alt="" />
              <p>Louis Amado - AAER Body Design I</p>
            </div>
            <div className="member">
              <img src={ "https://drive.google.com/uc?export=view&id=19c5p7aFZllcbWHXaFOYFe7sTNWe_6ZP5" } alt="" />
              <p>Rishabh Kurup - AAER Software & Hardware I</p>
            </div>
            <div className="member">
              <img src={ "https://drive.google.com/uc?export=view&id=1TpOcjGNM3rPEY9vIzU5nvpljO5V9Lr2e" } alt="" />
              <p>Eklavya Kukreja - AAER Software & Hardware II</p>
            </div>
          </Parallax>
          <Parallax speed={-10} style={{ maxWidth:"24.5vw" }}>
            <div className="member">
              <img src={ "https://drive.google.com/uc?export=view&id=1OmxoQVHulbyZy03O9lUWibHP6y1Uv5B5" } alt="" />
              <p>Daksh Bhalla - AAER Body Design II</p>
            </div>
            <div className="member">
              <img src={ "https://drive.google.com/uc?export=view&id=1BOB2slaBulYK2BprW1YiB6a1SeLtBTt3" } alt="" />
              <p>Palmis Yahoo - AAER Recovery</p>
            </div>
            <div className="member">
              <img src={ "https://drive.google.com/uc?export=view&id=1I2OwdZDNOjTeTJdmOo9N5Zz6sk9ZkixA" } alt="" />
              <p>Hank Zhong - AAER Public Relations; Software</p>
            </div>
          </Parallax>
        </div>
      </div>

      <div className="container" style={{ textAlign:"center", paddingLeft:"5vw", paddingRight:"5vw", paddingBottom:0 }}>
        <div style={{ overflow:"hidden" }}>
          <LeftChunk/>
        </div>
        <div style={{ overflow:"hidden" }}>
          <RightChunk/>
        </div>
      </div>

      <div className="container">
        <Timeline/>
      </div>

      <div style={{ backgroundColor:"rgb(21,21,21)" }}>

        <div className="container" style={{ paddingBottom:0 }}>
          <GradientH1 style={{ fontSize:"4rem", paddingBottom:0, background:"linear-gradient(90deg, purple 0%, aqua 50%, #DAD2D8 100%)"}}>
            Sponsors
          </GradientH1>
        </div>
        <div className="container" style={{ padding:0 }}>
          <div className="sponsor" onClick={() => window.open("https://aics.espritscholen.nl/")}>
            <img src={ "https://drive.google.com/uc?export=view&id=1iLmAUPxS_WUaA6BPehAs9EdVA63vZ4c1" } alt="sponsor1" />
            <p>Amsterdam International Community School</p>
          </div>
        </div>

        <div className="container" style={{ padding:0 }}>
          <GradientH1 style={{ fontSize:"4rem", paddingBottom:0, background:"linear-gradient(90deg, darkred 0%, red 50%, #DAD2D8 75%)"}}>
            Supporters & Partners
          </GradientH1>
        </div>
        <div className="container" style={{ paddingTop:0 }}>
          <div className="supporter">
            <img src={ "https://drive.google.com/uc?export=view&id=1-ijwidEOF1YFLUlCKnrYMpqq6YcN3kl1" } alt="supporter2" />
            <p>European Space Agency<br/>/ ESERO</p>
          </div>
          <div className="supporter">
            <img src={ "https://drive.google.com/uc?export=view&id=1_rvNyrdg-YAPzqxJ3_s8X-9UO5rtFUKT" } alt="supporter3" />
            <p>Delft Aerospace Rocket Engineering</p>
          </div>
          <div className="partner" onClick={() => {
            window.open("https://sites.google.com/aics.espritscholen.nl/studentdashboard/homepage")
          }}>
            <img src={ "https://drive.google.com/uc?export=view&id=1iLmAUPxS_WUaA6BPehAs9EdVA63vZ4c1" } alt="supporter1" />
            <p>Student Council<br/>of the AICS</p>
          </div>
          <div className="partner" onClick={() => {window.open("https://webv2.mediaataics.repl.co/home/")}}>
            <img src={ "https://drive.google.com/uc?export=view&id=1TtxeO8-cmVweMEXSZrVg88xEFeKUl8DF" } alt="supporter2" />
            <p>ACE Media Team<br/>(AICS)</p>
          </div>
        </div>

        <div className="container" style={{ padding:0 }}>
          <GradientH1 style={{ fontSize:"4rem", paddingBottom:0, background:"linear-gradient(90deg,brown 0%,gold 50%, #DAD2D8 75%)"}}>
            The Mentors
          </GradientH1>
        </div>
        <div className="container" style={{ paddingTop:0 }}>
          <div className="container" style={{ maxWidth:"60rem" }}>
            <div className="mentor">
              <img src={ "https://drive.google.com/uc?export=view&id=1177HByDiOIzYkaACDJvmSg2axmqkpfDu" } alt="mentor1" />
              <p>Mr Matt Decovsky</p>
            </div>
            <div className="mentor">
              <img src={ "https://drive.google.com/uc?export=view&id=1RseO_Eukc3giP_r9o229ZkmYmiikBG9A" } alt="mentor2" />
              <p>Grayson Hoare</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ minHeight:"50vh", padding:"10vh 0", textAlign:"center" }}>
        <h1>Want to know More?</h1>
        <img src={ "https://drive.google.com/uc?export=view&id=1-vBrrFCIrNFedbToIUhim1CU5gmrOOSk" } alt="logo" style={{ width:"20vw" }}/>
        <div className="container" style={{ padding:0, width:"60vw", left:"50%", transform:"translateX(-50%)", position:"absolute", alignItems:"center" }}>
          <div style={{ padding:0 }}><a href="#teams">Teams Statuses</a></div>
          <div style={{ padding:0 }}><a href="/legacy">Our History</a></div>
          <div style={{ padding:0 }}><a href="#contact">Our Contact Info</a></div>
        </div>
      </div>
    </div>
    </ParallaxProvider>
  )
}