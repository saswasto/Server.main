'use client'

import "./aaer.css"

import React, { useRef, useState } from 'react'
import { MotionDiv, MotionH1, MotionP } from "../../components/motionComponents"
import AAER_Model from "../../components/cansat_aaer"

export default function TeamAAER() {
  const members = [
    [
      "https://drive.google.com/uc?export=view&id=19c5p7aFZllcbWHXaFOYFe7sTNWe_6ZP5",
      "Rishabh Kurup",
      "Hardware & Software Engineer",
      "Rishabh combines the on-screen computer logics with the physical electronics. From data collection to transmission and processing, he will work on the designing of all sensory-related systems. Circuits, programming, data analytics are all his forte."
    ],
    [
      "https://drive.google.com/uc?export=view&id=1I2OwdZDNOjTeTJdmOo9N5Zz6sk9ZkixA",
      "Hank Zhong",
      "Public Outreach Officer",
      "Hank is in charge of the media presence and the various forms of outreach, to capture the knowledge & experiences all while making the project accessible, understandable, and engaging. His skills with software also allowed for several extensions, including the website & the teams' data-streams."
    ],
    [
      "https://drive.google.com/uc?export=view&id=1BOB2slaBulYK2BprW1YiB6a1SeLtBTt3",
      "Palmis Yahoo",
      "Recovery System Designer",
      "Palmis coordinates the method of recovery for the CanSat, making sure that our CanSat maximizes its ability to land with safety and precision. She is responsible to make sure the CanSat is able to withstand the harsh conditions of the atmosphere and the great fall."
    ],
    [
      "https://drive.google.com/uc?export=view&id=1HszQ2AAU4gsxQXlL7NyGBSoC0xxxQLx3",
      "Louis Amado",
      "CanSat Body Architect",
      "Louis will establish the basis of the mission by maintaining the structural integrity of the CanSat through the design of the body. He will put all the various systems to form a unit of solidity, versatility, and value. Therefore making the success of our secondary mission possible."
    ],
    [
      "https://drive.google.com/uc?export=view&id=1TpOcjGNM3rPEY9vIzU5nvpljO5V9Lr2e",
      "Eklavya Kukreja",
      "Hardware & Software Engineer",
      "Eklavya is working largely with code as well as the subject of electrical engineering. He will be working relatively more on the moving parts of the CanSat and their deployments based off of the data sensed from the surroundings."
    ],
    [
      "https://drive.google.com/uc?export=view&id=1OmxoQVHulbyZy03O9lUWibHP6y1Uv5B5",
      "Daksh Bhalla",
      "CanSat Body Architect",
      "Daksh implements all the aspects of the CanSat into one cohesive unit. The management of component sizing as well as layering / composition creating in the final CanSat is what he will focus on. Brainstorming & creating models at speed is where he shines."
    ]
  ]

  return(
    <div id="TeamAAER">
      <div style={{ height:"calc(100vh - 6rem)", position:"relative", marginBottom:"3rem" }}>
        <div style={{ position:"absolute", top:"50%", transform:"translateY(-50%)" }}>
          <h2 style={{ animationDelay:"1s", padding:0, margin:0 }} id="aaerSubHeading">NL CanSat Competition Team</h2>
          <h1 id="aaerHeading" style={{ animationDelay:"1.25s", padding:0, lineHeight:"150%" }}>SPAICS Project AAER</h1>
          <h2 style={{ animationDelay:"2.5s", padding:0, margin:0, marginBottom:"5vh" }} id="aaerSubHeading">Artificial Acceleration of Ecosystem Restoration</h2>
        </div>
      </div>

      <div className="page">
        <MotionH1>The Idea</MotionH1>
        <MotionP>Industrial agriculture is responsible for 85% of tree environmental issues, with deforestation being the most prominent. It is defined as the reduction or clearance of woodlands caused by either man-made or natural factors. To address this issue, we plan to develop a method of reversing the process, thus the “Artificial Acceleration of Ecosystem Restoration”. To balance the financial expenditure per unit and engineering outputs, we will be limiting ourselves to the size of a standard 330ml soda can.</MotionP>
      </div>

      <div className="page">
        <MotionH1>The Values</MotionH1>
        <MotionP>In the modern world where the effects of global warming are becoming more and more of a concern, our research and creation will be able to take part in a wide spectrum of applications. The simple concept of deploying plantlife remotely is able to act as great help to minimise the effects of forest fires, mudslides, woodland floodings, even post-warfare zones of destruction. The remotely and mass-scale distributable Can-sized payloads, on the other hand, can also be noteworthily used for  efficient agricultural purposes.</MotionP>
      </div>

      <div className="page">
        <MotionH1>The Mission</MotionH1>
        <MotionP>To achieve the mission of ecosystem replenishment, our goal is to mobilise the concept of seed bombs planted in the ground to restart plant cultivation in areas where men are unable to reach. The CanSat will contain moist seeds wrapped in a mixture of compost, clay, maximising the chance of survival. In combination with an engineered set of sensors and transmitting systems, the CanSat will not only be reusable but also use the range of surrounding data in order to remotely and efficiently detect the success probability of the deployed seeds.</MotionP>
      </div>

      <div className="page">
        <MotionH1>Meet Us</MotionH1>
        <div className="membersList">
          {members.map((member, index) => {
            return(
              <MotionDiv key={index} delayInc={index/2} style={{ paddingBottom:"3rem" }}>
                <img src={member[0]} alt={member[1]}/>
                <h4>{member[2]}</h4>
                <h3>{member[1]}</h3>
                <p>{member[3]}</p>
              </MotionDiv>
            )
          })}
        </div>
      </div>

      <div className="page">
        <MotionH1>Our CanSat</MotionH1>
        <AAER_Model style={{ height: "90vh", width: "90vw", border: "1px white solid" }}/>
        <p>(3D models are undergoing debug)</p>
      </div>

    </div>
  )
}