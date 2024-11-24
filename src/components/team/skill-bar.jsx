import React, { useEffect, useRef } from 'react'

const SkillBar = ({ percentage }) => {
    const skillPerRef = useRef(null)

    useEffect(() => {
        const skillPer = skillPerRef.current
        const datapercentage = parseFloat(percentage)
        skillPer.style.width = datapercentage + '%'

        let animatedValue = 0
        let startTime = null

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime
            const stepPercentage = progress / 1000 // Dividing by duration in milliseconds (1000ms = 1s)

            if (stepPercentage < 1) {
                animatedValue = datapercentage * stepPercentage
                skillPer.setAttribute(
                    'data-percentage',
                    Math.floor(animatedValue) + '%'
                )
                requestAnimationFrame(animate)
            } else {
                animatedValue = datapercentage
                skillPer.setAttribute(
                    'data-percentage',
                    Math.floor(animatedValue) + '%'
                )
            }
        }

        requestAnimationFrame(animate)
    }, [percentage])

    return (
        <div ref={skillPerRef} className="skill-per" data-percentage="0"></div>
    )
}

export default SkillBar
