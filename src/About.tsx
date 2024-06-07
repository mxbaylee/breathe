import React from 'react'
import './About.css'

export const About = () => {
  return (
    <>
      <div className="about-page">
        <p>
          Feeling stressed or overwhelmed? Box breathing can help. This simple yet powerful technique, rooted in ancient practices, slows down your breath and activates your body's <a href="https://en.wikipedia.org/wiki/Parasympathetic_nervous_system" rel="noreferrer" target="_blank">parasympathetic nervous system</a>, responsible for relaxation. This shift can lead to a cascade of benefits, including reduced stress and anxiety, improved focus and concentration, lower blood pressure, and better sleep.  Whether you're a seasoned meditator or just looking for a quick way to de-stress, box breathing can be a valuable tool for your well-being.
        </p>
        <p>
          <b>Circle breathing</b> is a variation of box breathing that uses a circular visualization to guide your inhales, holds, and exhales. Just like a calm lake reflecting the sky, circle breathing helps you create a sense of inner peace.
        </p>
        <p>How to do Circle Breathing:</p>
        <ol className="sequence">
          <li><strong>Find a comfortable position.</strong> Sit upright in a chair with your feet flat on the floor, or lie down on your back. Close your eyes gently if you find it helps you focus.</li>
          <li><strong>Imagine a circle in front of you.</strong> As you inhale slowly through your nose for a count of four, visualize the circle expanding outwards. Feel your belly inflate as your lungs fill with air.</li>
          <li><strong>Hold your breath for a count of four.</strong> Picture the circle staying fully expanded, like a perfect bubble.</li>
          <li><strong>Exhale slowly through your mouth for a count of four.</strong> Imagine the circle shrinking inwards, releasing all the tension and stress with your breath.</li>
          <li><strong>Hold your breath again for a count of four.</strong> This brief pause marks the end of one cycle.</li>
          <li><strong>Repeat steps 1-5 for 3-5 minutes</strong>, or as long as you feel comfortable.</li>
        </ol>
        <p>Additional Reading:</p>
        <ul className="external-links">
          <li><a href="https://www.webmd.com/balance/what-is-box-breathing"           rel="noreferrer" target="_blank">Box Breathing</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Diaphragmatic_breathing" rel="noreferrer" target="_blank">Diaphragmatic Breathing</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Conscious_breathing" rel="noreferrer" target="_blank">Conscious Breathing</a></li>
        </ul>
      </div>
    </>
  )
}
