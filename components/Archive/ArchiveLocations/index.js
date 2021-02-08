const ArchiveLocations= ({locations, lang, selectedLocation, setSelectedLocation}) => {

    const cityList = locations.filter((location) => location.type === 'city');
    const regionList = locations.filter((location) => location.type === 'region');
  
    return (
      <nav className="archive__locations">
        {/* <h3>CITIES</h3> */}
        <ul>
          {
            cityList.map((location, index) => (
              <li className={`archive__locations__city${selectedLocation === index ? ' archive__locations__city--selected':''}`} onClick={() => setSelectedLocation(index)} key={`${location}--${index}`}>{location.name}</li>
            ))
          }
        </ul>
        {/* <h3>REGIONS</h3> */}
        <ul>
          {
            regionList.map((location, index) => (
              <li className={`archive__locations__city${selectedLocation === index+cityList.length ? ' archive__locations__city--selected':''}`} onClick={() => setSelectedLocation(index+cityList.length)} key={`${location}--${index+cityList.length}`}>{location.name}</li>
            ))
          }
        </ul>
      </nav>
    )
  }
  
  export default ArchiveLocations
  