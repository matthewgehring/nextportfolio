import React from "react"
import { Map, Marker } from "pigeon-maps"
import Image from "next/image"
import CircleMarker from "./CircleMarker"

const MapPop = () => {
  return (
    <Map height={300} defaultCenter={[37.7749, -122.4194]} defaultZoom={11} mouseEvents={false}>
      <Marker width={100} height={-50} anchor={[37.7749, -122.4194]} > <CircleMarker emoji={"🤠"}/></Marker>
    </Map>
  )
}

export default MapPop;