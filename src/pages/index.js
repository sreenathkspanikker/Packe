import React from "react"
import { Layout } from "../components"
import Logo from "../assets/images/logo.svg"

export default function Home() {
  return (
    <Layout className="app-home">
      <div className="box">
        <Logo className="app-logo" />
        <h2>We Pack We Deliver</h2>
        <h1>Coming Soon</h1>
      </div>
    </Layout>
  )
}
