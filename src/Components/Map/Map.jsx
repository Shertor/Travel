import { React, useRef, useEffect, useState } from "react";
import L from "leaflet";

import "./Map.css";

import site from "../../fonts/icons/bx-arch.svg";

// import turkey_2018 from "./imgs/turkey_2018.jpg";

export default function Map() {
  const mapElement = useRef(null);
  const [latlng, setLatLng] = useState(null);

  useEffect(() => {
    if (!mapElement.current) {
      return;
    }

    const map = L.map(mapElement.current, {
      attributionControl: false,
      attribution: false,
    }).setView([38.77201938541064, 29.608154296875004], 7);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    L.control
      .attribution({
        prefix: `© OpenStreetMap`,
      })
      .addTo(map);

    map.addEventListener("mousemove", (event) => {
      setLatLng(event.latlng);
    });

    const IconType = L.Icon.extend({
      options: {
        shadowUrl: "",
        iconSize: [24, 24],
        shadowSize: [0, 0],
        iconAnchor: [24 / 2, 24 / 2],
        shadowAnchor: [0, 0],
        popupAnchor: [24 / 2, 24 / 2],
      },
    });

    const icon = new IconType({ iconUrl: site });

    const marker = L.marker([41.007178035183784, 28.97828578948975], {
      icon,
    });

    addPopup(marker, {
      header: "Istanbul",
      attributes: {
        Desc: "",
        "": `<img src='./imgs/turkey_2018.jpg' style='width: 300px;'/>`,
      },
    });

    marker.addTo(map);

    function addPopup(object, popup) {
      // if (popup.header.length < 1) return object;

      function formPopupLine(key, value) {
        if (!key && value)
          return `<tr class='cg-popup-line'><td colspan=2>${value}</td></tr>`;
        else if (!value && key)
          return `<tr class='cg-popup-line'><td colspan=2>${key}</td></tr>`;
        else if (key && value)
          return `<tr class='cg-popup-line'><td>${key}</td><td>${value}</td></tr>`;
        else return "";
      }

      let contentClick = "";
      let contentHover = "";

      if (popup.attributes) {
        contentClick = `<table class='cg-popup-content'><tr><th></th><th></th></tr>`;

        const keys = Object.keys(popup.attributes);

        if (popup.hoverKeys && popup.hoverKeys.length > 0) {
          contentHover = contentClick;
          keys
            .filter((key) => popup.hoverKeys.includes(key))
            .forEach((key) => {
              contentHover += formPopupLine(key, popup.attributes[key]);
            });
          contentHover += `</table>`;
        }

        keys.forEach((key) => {
          contentClick += formPopupLine(key, popup.attributes[key]);
        });

        contentClick += `</table>`;
      }

      const html = `<div class='cg-popup-wrapper'><div class='cg-popup-header'>${popup.header}</div>${contentClick}</div>`;
      const htmlHover = `<div class='cg-popup-wrapper'><div class='cg-popup-header'>${popup.header}</div>${contentHover}</div>`;

      const changedObj = object.bindPopup(html);

      changedObj.on("mouseover", (event) => {
        map.openPopup(htmlHover, event.latlng);
      });

      return changedObj;
    }
  }, []);

  return (
    <>
      <div style={{ height: "100%" }} ref={mapElement} />
      <div className="coords">
        {latlng ? `${latlng.lat}, ${latlng.lng}` : ""}
      </div>
    </>
  );
}
