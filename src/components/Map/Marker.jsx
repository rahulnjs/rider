import React from "react";
import { AdvancedMarker } from "@vis.gl/react-google-maps";
import Image from "../../images";
import "./Marker.scss";

const Marker = ({ style, position, active, onToggle, type, text }) => {
  return (
    <AdvancedMarker
      position={position}
      className={`marker ${active ? "active" : ""}`}
      zIndex={active ? 2 : 1}
      onClick={onToggle}
    >
      <Image type={type} style={style} text={text} />
    </AdvancedMarker>
  );
};

export default Marker;
