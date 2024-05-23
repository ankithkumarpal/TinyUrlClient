import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async () => {
    try {
      // Make axios call to your backend API
      const response = await axios.post(
        "https://tnyurl.azurewebsites.net/generate/tiny-url",
        {
          longUrl: longUrl,
        }
      );

      setShortUrl(response.data.url);
    } catch (error) {
      // Handle errors (e.g., display error message)
      console.error("Error:", error);
    }
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      alert('Short URL copied to clipboard!');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  return (
    <div
      className="main"
      style={{
        backgroundColor: "",
        width: "100vw",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        fontFamily: "Arial, Helvetica, sans-serif",
        overflowX:"hidden"
      }}
    >
      <h1
        className="header"
        style={{
          color: "grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          color: "#6b70c2",
          textAlign:"center",
          marginLeft:"2rem"
        }}
      >
        Convert Long Url to short Url
      </h1>

      <div
        className="input-section"
        style={{
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <input
          type="text"
          placeholder="Enter your long url"
          style={{
            height: "inherit",
            border: "none",
            width: "70%",
            borderRadius: "16px",
            border: "1px solid grey",
            paddingLeft: "3rem",
            fontSize: "1.3rem",
          }}
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
      </div>
       
      {shortUrl && (
  <div
    className="input-section"
    style={{
      height: "4rem",
      marginTop: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    <div style={{ marginTop: "4rem" }}>Generated short url</div>
    <div>&darr;</div>
    <div style={{ marginRight: "2rem", marginTop: "1.2rem" }}>
      {shortUrl}{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-copy"
        viewBox="0 0 16 16"
        onClick={handleCopyClick}
      >
        <path
          fill-rule="evenodd"
          d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
        />
      </svg>
    </div>
  </div>
)}


      <div
        className="button"
        style={{
          width: "inherit",
          height: "2rem",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "center",
          marginTop:"1rem"
        }}
      >
        <button
          style={{
            backgroundColor: "#6b70c2",
            border: "none",
            borderRadius: "10px",
            width: "7rem",
            height: "3rem",
            fontSize: "1.3rem",
            color:"white"
          }}
          onClick={handleSubmit}
        >
          Convert
        </button>
      </div>

      <div
        className="content"
        style={{
          marginTop: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            backgroundColor: "#6b70c2",
            padding: "1rem",
            borderRadius: "10px",
            fontSize: "1.4rem",
            color:"white"
          }}
        >
          Few facts about this site
        </h1>
        <p style={{ width: "70%" }}>
          &#10148; Our TinyURL conversion system is designed for both
          scalability and compactness. It has the remarkable capacity to
          generate a whopping <b>365 billion</b> unique TinyURLs, which equates
          to an impressive <b>100 million</b> unique URLs per day.
        </p>
        <p style={{ width: "70%" }}>
          &#10148; This achievement is made possible by the implementation of
          the Twitter Snowflake schema, which generates 365 unique identifiers
          on a daily basis.
        </p>
        <p style={{ width: "70%" }}>
          &#10148; We utilize <b>base 62</b> conversion techniques to ensure
          that each TinyURL is not only compact but also robust. This approach
          allows us to create TinyURLs that are concise in length while
          maintaining usability and reliability.
        </p>
        <p style={{ width: "70%" }}>
          <b>&#10148; Distributed System</b>: Our system operates seamlessly in{" "}
          <b>distributed environments</b>, mitigating the risk of collisions and
          ensuring consistent performance across multiple nodes with the help of
          workerId and datacenterId used in the Twitter Snowflake schema.
        </p>
      </div>
    </div>
  );
}

export default Home;
