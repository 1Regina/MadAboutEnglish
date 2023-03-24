import { useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Autocomplete,
  DirectionsRenderer,
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { BlueFont } from "../Theme";
import ButtonMap from "../Location/ButtonMap";
import Footer from "../../Footer";

const center = { lat: 1.318768530876835, lng: 103.84333604171032 };

const markers = [
  {
    id: 1,
    name: "Novena MRT",
    position: { lat: 1.3204276996022408, lng: 103.84379953095512 },
  },
  {
    id: 2,
    name: "United Square",
    position: { lat: 1.3173845562678757, lng: 103.8436365021306},
  },
];

const centerMarker = [
    {
    id: 3,
    name: "187 Thomson Road #02-187A, Goldhill Centre Singapore - 307360",
    position: {lat: 1.318768530876835, lng: 103.84333604171032 },
  },
]



const Location = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  console.log("isLoaded", isLoaded);

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(undefined);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [activeMarker, setActiveMarker] = useState(null);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();

  if (!isLoaded) {
    return <Typography> Not Loading</Typography>;
  }

  const handleActiveMarker = async (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  async function calculateRoute() {
    if (originRef.current.value === "") {
      return;
    }

    console.log(originRef.current.value);

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: center,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.TRANSIT,
    });
    console.log("results", results);
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(undefined);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    window.location.reload();
  }

  return (
    <div>
      <Box paddingTop={15}>
        <Box
          maxWidth={1120}
          // maxWidth={1100}
          // maxHeight={500}
          // alignItems="center"
          // justifyContent={"center"}
          margin="auto"
          // marginTop={1}
          padding={2}
          borderRadius={5}
          boxShadow="5px 5px 10px #ccc"
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              // width: "48vw",
              height: "70vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <GoogleMap
              center={center}
              zoom={17}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={(map) => setMap(map)}
            >
              {/* <MarkerF position={center} onClick={() => handleActiveMarker(3)} /> */}

              {centerMarker.map(({ id, name, position }) => (
                <MarkerF
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                >
                  {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>{name}</div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}

              {markers.map(({ id, name, position }) => (
                <MarkerF
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                  icon="https://maps.gstatic.com/mapfiles/ms2/micons/ylw-pushpin.png"
                >
                  {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>{name}</div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
            <Box
              sx={{
                top: 70,
                left: 10,
                position: "absolute",
                maxWidth: 360,
                maxHeight: 180,
                backgroundColor: "white",
                border: 1,
                borderRadius: 2,
                borderColor: "action",
                margin: 1,
                padding: 2,
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                // alignItems: "left",
                // justifyContent: "left",
                justifyContent:"center",
                marginTop:5
              }}

            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "left",
                  marginLeft: -1
                }}
              >
                <LocationOnIcon
                  sx={{ borderRadius: 3, fontSize: 40 }}
                  color="warning"
                />
                <b>
                  187 Thomson, Road #02-187A, Goldhill Centre Singapore - 307360
                </b>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                marginTop={2}
              >
                <Autocomplete restrictions={{ country: ["sg"] }}>
                  <input
                    type={"text"}
                    variant="outlined"
                    placeholder="Origin"
                    ref={originRef}
                    size={38}
                  ></input>
                </Autocomplete>

                <CancelPresentationIcon
                  onClick={clearRoute}
                  sx={{ borderRadius: 3, fontSize: 35, ml: 1 }}
                  color="action"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ButtonMap
                  word={"Calculate Route"}
                  handleSubmit={calculateRoute}
                ></ButtonMap>
                <NearMeRoundedIcon
                  onClick={() => {
                    map.panTo(center);
                    map.setZoom(15);
                  }}
                  sx={{ borderRadius: 3, fontSize: 40, ml: 3 }}
                  color="primary"
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginRight: 2,
                  }}
                >
                  <BlueFont>Distance:</BlueFont>
                  <Typography sx={{ ml: 1 }}>{distance} </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: 3,
                  }}
                >
                  <BlueFont>Duration:</BlueFont>
                  <Typography sx={{ ml: 1 }}>{duration} </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </div>
  );
}

export default Location