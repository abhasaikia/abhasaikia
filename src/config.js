
export const layer = [
  //Administrator boundary start
  {
    id: 1,
    text: "State Boundary",
    show: false,
    class: "Administrator",
    layer: "NEC:ner_states"
  },
  {
    id: 2,
    text: "District Boundary",
    show: false,
    class: "Administrator",
    layer: "analytic:ner_boundary"
  },
  // Administrator boundary end

  // Land Use and Land Cover Start
  {
    id: 3,
    text: "Year(2000)",
    show: false,
    class: "Malaria",
    layer: "Malaria: Year 2000",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 4,
    text: "Year(2001)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2001",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 5,
    text: "Year(2002)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2002",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 6,
    text: "Year(2003)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2003",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 7,
    text: "Year(2004)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2004",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 8,
    text: "Year(2005)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2005",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 9,
    text: "Year(2007)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2007",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 10,
    text: "Year(2008)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2008",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 11,
    text: "Year(2009)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2009",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 12,
    text: "Year(2010)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2010",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 13,
    text: "Year(2011)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2011",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 14,
    text: "Year(2012)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2012",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 15,
    text: "Year(2013)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2013",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 16,
    text: "Year(2014)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2014",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 17,
    text: "Year(2015)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2015",
    link: "http://localhost:8080/geoserver/malria/wms/"

  },
  {
    id: 18,
    text: "Year(2016)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2016",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 19,
    text: "Year(2017)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2017",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 20,
    text: "Year(2018)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2018",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },
  {
    id: 21,
    text: "Year(2019)",
    show: false,
    class: "Malaria",
    layer: "Malaria:Year 2019",
    link: "http://localhost:8080/geoserver/malria/wms/"
  },

  // Land Use and Land Cover end

  // Census strat
  {
    id: 6,
    text: "Census",
    show: false,
    class: "Census",
    layer: "analytic:ner_census"
  },

  // census end



]

// maps configuration
export const maps = [

  //maps start 
  {
    id: 'Cartodb',
    text: "Cartodb",
    show: false,
    class: "Maps",
    layer: "analytic:ner_boundary",
    link: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    format: 'image/png',
    domain: " "
  },
  {
    id: 'Bhuvan',
    text: "Bhuvan",
    show: false,
    class: "Maps",
    layer: "india3",
   // link: "https://bhuvan-vec1.nrsc.gov.in/bhuvan/gwc/service/wms/",
    link: "http://localhost:8080/geoserver/malria/wms/",
    format: 'image/png',
    domain: " "

  }
  ,
  {
    id: 'BhuvanSatellite',
    text: "BhuvanSatellite",
    show: false,
    class: "Maps",
    layer: "bhuvan_imagery2",
    link: "https://bhuvan-ras2.nrsc.gov.in/tilecache/tilecache.py?",
    format: 'png/jpeg',
    domain: " "
  }
  ,
  {
    id: 'Open_Street',
    text: "Open Street",
    show: false,
    class: "Maps",
    layer: "bhuvan_imagery2",
    link: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    format: 'png/jpeg',
    domain: " "
  }
  ,
  {
    id: 'Google_Map',
    text: "Google Map",
    show: false,
    class: "Maps",
    layer: "analytic:ner_boundary",
    link: "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    format: 'image/png',
    domain: "['mt0','mt1','mt2','mt3']"
  }
  ,
  {
    id: 'Google_Satellite',
    text: "Google Satellite",
    show: false,
    class: "Maps",
    layer: "analytic:ner_boundary",
    link: "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    format: 'image/png',
    domain: ['mt0', 'mt1', 'mt2', 'mt3']
  }
  //maps end

]

// analytics layer
export const analytics = [

  {
    id: 2,
    text: "District Boundary",
    show: false,
    class: "Admin",
    layer: "analytic:ner_boundary"
  },
  {
    id: 3,
    text: "Land Use",
    show: false,
    class: "Natural Resource",
    layer: "analytic:ner_boundary"
  },
  {
    id: 4,
    text: "Wetlands",
    show: false,
    class: "Natural Resource",
    layer: "analytic:ner_boundary"
  },
  {
    id: 5,
    text: "Agriculture",
    show: false,
    class: "Agri",
    layer: "analytic:ner_boundary"
  },
  {
    id: 6,
    text: "Cropland",
    show: false,
    class: "Agri",
    layer: "analytic:ner_boundary"
  },
  {
    id: 7,
    text: "Disaster",
    show: false,
    class: "Disaster",
    layer: "analytic:ner_boundary"
  }
]

// side pannel visibility
export const panelVisibilty = [

  {
    id: "Vegetation",
    text: "Vegetation",
    show: false
  },
  {
    id: "Layer",
    text: "Layer",
    show: true
  },
  {
    id: "Weather",
    text: "Weather",
    show: false
  },
  {
    id: "Satellite_Imagery",
    text: "Satellite_Imagery",
    show: false
  },
  {
    id: "Vedas_Services",
    text: "Vedas_Services",
    show: false
  },
  {
    id: "Water_Resources",
    text: "Water_Resources",
    show: false
  }
]

//list of dates


