import React from 'react'
import CropProtection from './CropProtection'
import { pictures } from '../../assets/images/pictires'
import Elements from './Elements';

const AgriculturePage = () => {



  const cropData = [
    {
      image: pictures.soilborndisease,
      title: "Soil borne diseases",
      description:
        "Soil-borne diseases arise from an unseen world, where fungal pathogens lurk beneath the surface. These silent destroyers breach the plant’s defenses, infiltrating roots and disrupting the vascular system. As they siphon off vital nutrients, the plant’s growth is stunted, and in time, it may perish. In this battle beneath the soil, plant-beneficial microbes emerge as natural allies. These microbes employ various strategies like antagonism, microbicidal activity and competitive inhibition to defend plants. Harnessing these natural warriors offers a sustainable solution to soil-borne diseases, reducing the dependence on chemical pesticides and promoting healthier crops.",
      products: ["Invictus v", "Invictus H", "Neolife", "IINM Chakra", "Nematoff"],
    },
    {
      image: pictures.sucking,
      title: "Sucking Pests",
      description:
        "Sucking pests are a formidable threat to plant health, feeding on the sap that flows through a plant’s veins. These tiny marauders—such as aphids, whiteflies, thrips, mites, mealybugs, and leafhoppers—cause widespread damage and reducing productivity. Traditional chemical pesticides, while effective but come with significant drawbacks. As a result, biological pesticides have risen as a more sustainable alternative, which target sucking pests precisely, reducing the negative impacts of chemical treatments. Additionally, biological pesticides manage populations over the long term, making them a critical component of integrated pest management (IPM) strategies.",
      products: ["Prithvi", "Elixir", "DFNDR", "Native Neem"],
    },
    {
      image: pictures.Biolarvicides,
      title: "Biolarvicides",
      description:
        "Biolarvicides, nature’s quiet guardians, stand against the relentless larvae of Helicoverpa, Spodoptera, and Lepidoptera, whose insatiable appetites ravage crops, stripping plants of their vitality. These tiny destroyers feast on leaves, stems, and fruits, leaving a trail of diminished yields and weakened harvests. In response, biolarvicides offer a targeted, harmonious solution. Harnessing the power of beneficial microorganisms, they either infect the larvae or release toxins that bring their destruction to an end. Unlike synthetic chemicals, this approach preserves the delicate balance of ecosystems, allowing farmers to protect their crops while embracing sustainability. Biolarvicides guide agriculture towards a future where nature and cultivation thrive together.",
      products: ["DFUS", "Native Neem"],
    },
    {
      image: pictures.Foliar,
      title: "Foliar plant diseases",
      description:
        "Foliar plant diseases, borne on the wind or in the soil, creep across the landscape, leaving behind spots, wilting leaves, and early death in their wake. Fungi like Fusarium, Cercospora, Alternaria, Pseudomonas and Xanthomonas along with stealthy bacteria and viruses, slowly sap the life from plants, dimming their once-strong capacity for growth and harvest. Though synthetic treatments have long been a weapon against these foes, they often come at a steep cost, harming the environment and delicate ecosystems. Now, a more harmonious approach takes root. Beneficial microbes and marker molecules bolster the plant’s own defenses, weaving resilience into its very being. Biofactor’s innovative products guide this transformation, nurturing healthier crops and fostering a sustainable balance between growth and nature’s rhythms.",
      products: ["Pentazia", "BSL 4", "Nutriton", "Virnx", "Native Neem"],
    },
  ];




  return (
    <>
      <div className="container  flex flex-col justify-center text-gray-500 items-center my-10">

        
          <Elements/>
        
        <section className='p-6 rounded-lg shadow-md w-full"'>
          <h1 className="text-2xl sm:text-3xl font-bold text-center font-medium">
            Crop Protection
          </h1>

          {cropData.map((crop, index) => (

            <CropProtection
              key={index}
              image={crop.image}
              title={crop.title}
              description={crop.description}
              products={crop.products}
              index={index}
              
            />
          ))}
        </section>
      </div>

    </>
  )
}

export default AgriculturePage