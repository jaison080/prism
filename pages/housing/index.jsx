import React from "react";
import HousingCard from "../../components/HousingCard/HousingCard";
import housingData from "../../data/housingData"
import CustomTitle from "../../utils/CustomTitle"
import Navbar from "../../components/Navbar/Navbar"

export default function Housing() {
  return (
    <>
      <CustomTitle title="Housing" />
      <Navbar />
      <div className={"housing__container"}>
        <div className={"housing__heading"}>HOUSING</div>
        <div className={"housing__list"}>
          {housingData.map((housing) => {
            return <HousingCard housing={housing} />;
          })}
        </div>
      </div>
    </>
  );
}
