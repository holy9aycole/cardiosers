import React from "react";
import SustainableCard from "components/SustainabilityCard";
import sust from "assets/images/sustainable.png";

const data = [
  {
    image: sust,
    title: "The 5’S",
    description:
      "RMZ were the first to use the 5S - hitherto a concept used in manufacturing units – in the real estate industry.",
  },
  {
    image: sust,
    title: "LEED Arc",
    description:
      "RMZ were the first to use the 5S - hitherto a concept used in manufacturing units – in the real estate industry.",
  },
  {
    image: sust,
    title: "Sewage Treatment",
    description:
      "RMZ were the first to use the 5S - hitherto a concept used in manufacturing units – in the real estate industry.",
  },
  {
    image: sust,
    title: "G+ Offices",
    description:
      "RMZ were the first to use the 5S - hitherto a concept used in manufacturing units – in the real estate industry.",
  },
  {
    image: sust,
    title: "The 5’S",
    description:
      "RMZ were the first to use the 5S - hitherto a concept used in manufacturing units – in the real estate industry.",
  },
  {
    image: sust,
    title: "The 5’S",
    description:
      "RMZ were the first to use the 5S - hitherto a concept used in manufacturing units – in the real estate industry.",
  },
];

export default function Sustainability() {
  return (
    <div>
      <div>
        <SustainableCard data={data} />
      </div>
    </div>
  );
}
