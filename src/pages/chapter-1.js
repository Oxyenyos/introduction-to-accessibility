import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, BlockQuote, Nav, Question } from "../components/common"

const Chapter1 = () => {
  const [userResponse, setUserResponse] = useState()
  return (
    <Layout>
      <SEO title="Page two" />
      {userResponse === undefined ? (
        <section class="question-area">
          <Question>Can you read the below given text easily?</Question>
          <p style={{ fontSize: "2rem", color: "#eee" }}>"Read me now"</p>

          <Button onClick={() => setUserResponse(false)}>
            Yes, no problem!
          </Button>
          <Button onClick={() => setUserResponse(true)}>
            Not easy to read it
          </Button>
        </section>
      ) : null}

      {userResponse && (
        <section class="explanation">
          <h1>Color Contrast</h1>

          <p>
            Exactly! This is because the color contrast of the text is very less
            with respect to its background.{" "}
            <mark>
              Users of the Internet have varying eye sight levels and it's
              important to have a good contrast so that everyone can read your
              websites without strain
            </mark>
            .
          </p>

          <p>
            This is why there is a recommended guideline just to prevent this
            issue. It says so:
          </p>

          <BlockQuote
            authorLink="https://www.w3.org/TR/WCAG21/#contrast-minimum"
            authorLabel="w3.org"
          >
            The visual presentation of text and images of text has a contrast
            ratio of at least 4.5:1.
          </BlockQuote>

          <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum">
            Read more about Color contrast guidelines.
          </a>
        </section>
      )}

      <Nav nextLink="/chapter-2/" />
    </Layout>
  )
}

export default Chapter1
