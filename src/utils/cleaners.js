const setParks = (results) => {
  return results.data.reduce((acc, park) => {
    const { designation, latLong, name, images, states, url, weatherInfo, description, parkCode, directionsInfo, entranceFees, activities } = park;
    if (designation.includes('National Park')) {
      const parkCoord = updateCoordinates(latLong);
      const parkStates = updateParkStates(states);
      const newPark = {
        name,
        lat: parkCoord[0],
        lon: parkCoord[1],
        images,
        states: parkStates,
        url,
        weatherInfo,
        description,
        parkCode,
        directionsInfo,
        entranceFees,
        activities,
      }
      acc = [...acc, newPark]
    }
    return acc
  }, []);
}

const setUsStates = (results) => {
  return Object.keys(results.states1810).reduce((acc, state) => {
    acc = [...acc, { ...results.states1810[state], name: state}];
    return acc
  }, []);
}

const updateCoordinates = (latLong) => {
  const coords = latLong.split(',');
  const newLat = coords[0].substring(4);
  const newLong = coords[1].substring(6);
  return [newLat, newLong]
}

const updateParkStates = (states) => {
  return states.split(',')
}

export default {
  setParks,
  setUsStates,
}