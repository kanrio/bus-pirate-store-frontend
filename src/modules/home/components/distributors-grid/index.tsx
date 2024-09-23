import React from "react"

const DistributorLogoGrid = () => {
  const distributors = [
    { name: "DirtyPCBs", url: "https://dirtypcbs.com/store/designer/browse/ian", logo: "/dirtypcbs.png" },
    { name: "blinkinlabs", url: "https://shop.blinkinlabs.com/collections/development-tools", logo: "/blinkinlabs.png" },

  ]

  return (
    <>
      <div className="py-16 px-4">
        <h2 className="text-2xl font-bold mb-6 text-ui-fg-base">
          Distributors
        </h2>
        <div className="grid grid-cols-5 gap-6  w-full">
            {distributors
            .sort(() => Math.random() - 0.5)
            .map((distributor, index) => (
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
