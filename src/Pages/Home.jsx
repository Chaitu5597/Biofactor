import React from "react";
import { motion } from "framer-motion"; // for animation

// Reusable animation variants
const fadeInUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        backgroundImage:
          "url('https://www.biofactor.in/wp-content/uploads/2024/08/BG-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", }}>
      {/* ===== Section 1 ===== */}
     <section
  style={{
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "rgba(3,10,26,0.85)", // overlay directly on section
    display: "flex",
    justifyContent: "center", // horizontal center
    alignItems: "center",     // vertical center
  }}
>
  <motion.h1
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
    style={{
      fontSize: "5rem",
      fontWeight: "bold",
      color: "white",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      margin: 0,
      padding: 0,
    }}
  >
    Microbs
  </motion.h1>
     </section>



      {/* ===== Section 2 ===== */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5%",
          backgroundColor: "rgba(3,10,26,255)",
        }}
      >
        {/* Left - Image */}
        <motion.img
          src="https://www.biofactor.in/wp-content/uploads/2024/08/minurals-slide2.png"
          alt="Biotech Illustration"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "50%",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            flexShrink: 0,
          }}
        />

        {/* Right - Text (with scroll) */}
        <motion.div
          className="hide-scrollbar"
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
            textAlign: "left",
            maxWidth: "100%",
            padding: "20px",
            backgroundColor: "rgba(3,10,26,255)",
            borderRadius: "10px",
            maxHeight: "70vh",
            overflowY: "auto",

            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          {[
            "Our research is a journey into this quiet alliance, where plants and microbes engage in a delicate dance of mutual support. With each discovery, we uncover the profound ways in which these microbes enhance growth, fortify against disease, and bring forth abundance from the earth. At Biofactor, we have carefully curated a collection of plant growth-promoting bacteria and fungi, each one a testament to nature’s adaptability, finely tuned to flourish in the diverse climates of our world.",
            "Among our treasures are 35 proprietary microbial strains, each one a unique strain of life, patented under the Budapest Treaty at the International Depository Authority. These strains are not merely tools—they are living forces, crafted by nature and nurtured by science, designed to bolster plant resilience in the face of adversity.",
            "To ensure these microbial allies reach their full potential, we employ advanced technologies like bioencapsulation and sustainable release mechanisms. These innovations allow the microbes to slowly unfurl their gifts, nourishing the soil and plants in a gentle, continuous flow. Through careful acclimatization and the subtle art of stress induction, we unlock their deepest potential, offering a sustainable alternative to the harsh chemicals that have ravaged the land.",
          ].map((text, index) => (
            <motion.p
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              style={{
                marginBottom: "60%",
                fontSize: "20px",
                lineHeight: "1.6",
                padding: "0 50px 10px 0",
                fontFamily: "Arial, sans-serif",
                marginRight: "20px",
              }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </section>
 {/* // ===== Section 3 ===== */ }
      <section
  style={{
    position: "relative",
    minHeight: "50vh",
    width: "100%",
   backgroundColor: "rgba(3,10,26,255)", // overlay directly on section
    display: "flex",
    justifyContent: "center", // horizontal center
    alignItems: "center",     // vertical center
    padding: "0 15%",
  }}
>
  <motion.p
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
    style={{
      fontSize: "1rem",
      
      color: "white",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      margin: 0,
      padding: 0,
    }}
  >
    In the end, these microbes are more than just a solution—they are the heartbeat of a new agricultural future. Through their unseen work, we promise world where the soil breathes with life once more, where plants rise strong and green, and where the soil, tenderly healed, offers its bounty in return.
  </motion.p>
     </section>
    </div>
  );
};

export default Home;
