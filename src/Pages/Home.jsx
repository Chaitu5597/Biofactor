import React from "react";
import { motion } from "framer-motion"; // for animation
import { DiJava } from "react-icons/di";

// Reusable animation variants
const fadeInUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Home = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* ===== Section 1 ===== */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          backgroundImage:
            "url('https://www.biofactor.in/wp-content/uploads/2024/08/minurals-slide2.png')", // ✅ Background image from Section 2
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(3,10,26,0.85)", // dark overlay
            zIndex: 1,
          }}
        ></div>

        {/* Title */}
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
            padding: "15% 0 0 0",
            zIndex: 2,
            position: "relative",
            
          }}
        >
          Microbs
        </motion.h1>

         <div
         style={{marginTop:'30%',padding:'10px 50px',position:'relative',zIndex:2 , }}>
        <motion.p
        initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
         style={{padding:'50px 50px',color:'white',position:'relative',zIndex:2,backgroundColor:'rgba(3,10,26,0.6)', borderRadius:'20px',fontSize:'20px',textAlign:'left',fontFamily: "Arial, sans-serif", }}>
          
          Beneath the surface of the soil, in the shadowy realms where roots stretch out in silent communion with the earth, there lies a world teeming with life—a hidden symphony of microbes, soil, and plants. This delicate balance, once thriving, has been disrupted by decades of relentless cultivation, the land scarred by the overuse of chemical fertilizers, pesticides, and extractive farming practices. As the soil weakens, we face a looming threat, a world where the promise of harvest is no longer certain, and the specter of food insecurity darkens the horizon.
        </motion.p>

         </div>

         <div
         style={{marginTop:'30%',padding:'10px 50px',position:'relative',zIndex:2 ,}}> 
        <motion.p
         initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
         style={{padding:'50px 50px',color:'white',position:'relative',zIndex:2,backgroundColor:'rgba(3,10,26,0.8)', borderRadius:'20px',fontSize:'20px',textAlign:'left',fontFamily: "Arial, sans-serif",paddingBottom:'100px' }}>
          
          Yet, within this fragile earth, there is hope. At Biofactor, we believe the answer lies not in further exploitation, but in the nurturing touch of nature’s smallest allies. Beneficial microbes, those invisible stewards of the soil, hold the power to restore what has been lost. These tiny architects can fix nitrogen from the air, transforming it into life-giving sustenance for plants. They weave through the soil, delivering essential nutrients and standing guard against the stresses that threaten to wither the green world above.
        </motion.p>

         </div>
        
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
          paddingTop: "20%",
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
            padding: "10px",
            backgroundColor: "rgba(3,10,26,255)",
            borderRadius: "10px",
            maxHeight: "70vh",
            overflowY: "auto",
            marginLeft: "60px",
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
              // initial="hidden"
              // whileInView="visible"
              // viewport={{ once: false, amount: 0.2 }}
              // transition={{ duration: 0.8, delay: index * 0.2 }}
               initial={{ x: 200, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ duration: 1.2 }}
              viewport={{ once: false }}
              style={{
                marginBottom: "60%",
                fontSize: "20px",
                lineHeight: "1.5",
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

      {/* ===== Section 3 ===== */}
      <section
        style={{
          position: "relative",
          minHeight: "50vh",
          width: "100%",
          backgroundColor: "rgba(3,10,26,255)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 18%",
           
        }}
      >
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            fontSize: "20px",
            color: "white",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
           margin: "20% 0 10% 0",
            padding:0,
          }}
        >
          In the end, these microbes are more than just a solution—they are the
          heartbeat of a new agricultural future. Through their unseen work, we
          promise world where the soil breathes with life once more, where
          plants rise strong and green, and where the soil, tenderly healed,
          offers its bounty in return.
        </motion.p>
      </section>


      <section>

      </section>
    </div>
  );
};

export default Home;
