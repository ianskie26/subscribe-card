import { type } from "@testing-library/user-event/dist/type"
import React from "react"

export default function App() {

  let submitBtn = document.getElementById("btn")

  const [formData, setFormData] = React.useState(
    {
      "email": "",
      "isAccepting": false,
      "isSubscribing": false,
      "isOnboarding": false
    }
  )

    function handleChange(event) {
      const {name, type, value, checked} = event.target
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value
        }
      })
    }

    function handleSubmit(event) {
      event.preventDefault()
      console.log(formData)

      if(formData.isSubscribing && formData.isOnboarding) {
        console.log("Thank you for subscribing to our newsletter and onboarding emails.")
      } else if (formData.isOnboarding) {
        console.log("You are subscribed to our onboarding emails.")
      } else if(formData.isSubscribing) {
        console.log("Thank you for subscribing to our newsletter.")
      } else {
        console.log("Download should begin shortly...")
      }
    }


  return (
    <div className="form--container">
      <form className="form" onSubmit={handleSubmit}>  
        <h1>Try it now!</h1>
        <p>Free trial, no obligation</p>
        <label htmlFor="workEmail">Work Email Address</label>
        <input
          id="workEmail"
          type="email"
          className="form--input"
          placeholder="Enter your work email address"
          name="email"
          onChange={handleChange}
        />
        <div className="form--marketing">
          <input
            type="checkbox"
            id="acceptTOS"
            name="isAccepting"
            onChange={handleChange}
            checked={formData.isAccepting}
          />
          <label htmlFor="acceptTOS">I Agree to the <u>Terms and Conditions</u></label>
          <br />
          <input
            type="checkbox"
            id="newsletter"
            name="isSubscribing"
            onChange={handleChange}
            checked={formData.isSubscribing}
          />
          <label htmlFor="newsletter">Subscribe to our newsletter</label>
          <br />
          <input
            type="checkbox"
            id="trial"
            name="isOnboarding"
            onChange={handleChange}
            checked={formData.isOnboarding}
          />
          <label htmlFor="trial">Subscribe to our trial onboarding emails</label>
        </div>
        <button id="btn" disabled={!formData.isAccepting ? true : false}>Download Now</button>
      </form>
    </div>
  )
}