import React from "react"

const DistributorLogoGrid = () => {
  const distributors = [
    { name: "Distributor 1", url: "#", logo: "https://placehold.co/80x80" },
    { name: "Distributor 2", url: "#", logo: "https://placehold.co/80x80" },
    { name: "Distributor 3", url: "#", logo: "https://placehold.co/80x80" },
    { name: "Distributor 4", url: "#", logo: "https://placehold.co/80x80" },
    { name: "Distributor 5", url: "#", logo: "https://placehold.co/80x80" },
    { name: "Distributor 6", url: "#", logo: "https://placehold.co/80x80" },
    { name: "Distributor 7", url: "#", logo: "https://placehold.co/80x80" },
    { name: "Distributor 8", url: "#", logo: "https://placehold.co/80x80" },
    { name: "Distributor 9", url: "#", logo: "https://placehold.co/80x80" },
    { name: "Distributor 10", url: "#", logo: "https://placehold.co/80x80" },
  ]

  return (
    <>
      <div className="py-16 px-4">
        <h2 className="text-2xl font-bold mb-6 text-ui-fg-base">
          Distributors
        </h2>
        <div className="grid grid-cols-5 gap-6  w-full">
          {distributors.map((distributor, index) => (
            <a
              key={index}
              href={distributor.url}
              className="flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={distributor.logo}
                alt={distributor.name}
                width={"100%"}
                className="rounded"
              />
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default DistributorLogoGrid
