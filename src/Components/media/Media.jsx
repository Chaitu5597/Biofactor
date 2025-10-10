import React from "react";
import { Button } from "react-bootstrap";

const Media = () => {
    const news = [
        {
            title: "Biofactor, UoH join hands for nanotech in agriculture",
            description:
                "Biofactor has signed an MoU with the University of Hyderabad's School of Engineering Sciences & Technology to develop nanotechnology-driven solutions for sustainable farming, enhancing crop productivity and reducing chemical dependency.",
            image:
                "https://timesofindia.indiatimes.com/thumb/msid-118857982,width-800,height-600,quality-70,overlay-timesofindia/photo.jpg",
            link:
                "https://timesofindia.indiatimes.com/articleshow/118857982.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
            date: "2025-03-11",
        },
        {
            title: "Recognized as Top 10 Innovative Startups",
            description:
                "Business Daily recognized us as one of the top 10 most innovative startups of 2025.",
            image: "https://source.unsplash.com/600x400/?startup,success",
            link: "https://www.businessdaily.com/innovative-startups-2025",
            date: "2025-08-15",
        },
        {
            title: "Partnership with Global Enterprises",
            description:
                "We announced a strategic partnership with global enterprises to accelerate digital transformation.",
            image: "https://source.unsplash.com/600x400/?business,partnership",
            link: "https://www.example.com/global-partnership-article",
            date: "2025-07-10",
        },
    ];

    const companyStats = [
        {
            label: "States Operated",
            value: ">18",
            description: "Biofactor operates in more than 18 States.",
        },
        {
            label: "Families Employed",
            value: "400+",
            description: "More than 400+ families work for Biofactor.",
        },
        {
            label: "Acres Impacted",
            value: "1,00,000+",
            description: "Biofactor changed over 1L acres of agricultural lands.",
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-6">
            {/* Page Heading */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-green-700 mb-2">
                    Media & Company Updates
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Stay updated with our latest news, achievements, and organizational
                    growth.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Latest News Section */}
                <div className="md:col-span-2 space-y-8">
                    {news.slice(0, 3).map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
                        >
                            {/* Image with Date Overlay */}
                            <div className="relative w-full md:w-[400px] flex-shrink-0">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-64 md:h-full object-cover"
                                />
                                <span className="absolute top-4 left-4 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-lg shadow">
                                    {new Date(item.date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </span>
                            </div>

                            {/* Text Content */}
                            <div className="p-6 flex flex-col justify-between flex-1">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{item.description}</p>
                                </div>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 font-semibold hover:underline"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                    {/* See More Button with custom width */}
                    <div className="mt-8 flex justify-left align-left">
                        <a
                            href="https://theprint.in/india/biofactor-uoh-ink-pact-for-nano-enabled-agriculture/2541702/"
                            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-green-700 transition w-40 text-center block"
                        >
                            See More
                        </a>
                    </div>

                </div>

                {/* Company Data Section */}
                <div className="bg-white p-10 rounded-2xl shadow flex flex-col items-start">
                    <h2 className="text-3xl font-bold text-green-700 mb-2">
                        Growing the Future of Agriculture
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Innovative solutions for sustainable farming
                    </p>
                    <div className="space-y-6 w-full">
                        {companyStats.map((stat, index) => (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-col items-start gap-4"
                            >
                                <p className="text-4xl font-extrabold text-green-700 sm:w-32">
                                    {stat.value}
                                </p>
                                <div>
                                    <p className="text-gray-800 font-semibold">{stat.label}</p>
                                    <p className="text-gray-600">{stat.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Media;
