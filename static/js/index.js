// CONSTANTS / VARIABLES

const toggles_wrapper = $("main .content-wrapper .toggle-panel"),
      elements_wrapper = $("main .content-wrapper .element-panel"),

      toggle_el_stations = elements_wrapper.children(".stations"),
      toggle_el_stationnames = elements_wrapper.children(".stationnames"),
      toggle_el_stepfree = elements_wrapper.children(".stepfree"),
      toggle_el_farezones = elements_wrapper.children(".farezones"),
      toggle_el_river = elements_wrapper.children(".river"),
      toggle_el_showall = elements_wrapper.children(".showall"),
      toggle_el_hideall = elements_wrapper.children(".hideall"),
      
      map_el = $("#map"),
      map_svg = map_el.children("svg"),
      trains_wrapper = map_svg.children("#TRAINS-WRAPPER"),

      lines = [
        "bakerloo", "central", "circle", "district", "hc", "jubilee", "metropolitan", "northern", "piccadilly",
        "victoria", "wc", "dlr", "cablecar", "overground", "elizabeth", "thameslink", "tram"],

      linecolors = {
        "bakerloo": "#B06010", "central": "#EE3124", "circle": "#FFD200", "district": "#00853F", "hc": "#F386A1", 
        "jubilee": "#949CA1", "metropolitan": "#97005E", "northern": "#000000", "piccadilly": "#1C3F94",
        "victoria": "#009DDC", "wc": "#86CEBC", "dlr": "#00B1B0", "cablecar": "#E31937", "overground": "#F58025", 
        "elizabeth": "#1C3F94", "thameslink": "#D385A9", "tram": "#7AC143"};

var active_trains = {},

    stationsEnabled = false,
    stationNamesEnabled = false,
    stepfreeEnabled = false;


const toggle_fn_stations = () => {
  stationsEnabled = !stationsEnabled

  map_el.toggleClass("stations")
  toggle_el_stations.toggleClass("enabled")

  if (!stationsEnabled) {
    map_el.removeClass("stationnames","stepfree")
    toggle_el_stationnames.removeClass("enabled")
    toggle_el_stepfree.removeClass("enabled")

    stationNamesEnabled = false
    stepfreeEnabled = false
  }
}

const toggle_fn_stationnames = () => {
  stationNamesEnabled = !stationNamesEnabled

  map_el.toggleClass("stationnames")
  toggle_el_stationnames.toggleClass("enabled")

  if (stationNamesEnabled) {
    map_el.addClass("stations")
    toggle_el_stations.addClass("enabled")
    stationsEnabled = true
  }
}

const toggle_fn_stepfree = () => {
  stepfreeEnabled = !stepfreeEnabled

  map_el.toggleClass("stepfree")
  toggle_el_stepfree.toggleClass("enabled")

  if (stepfreeEnabled) {
    map_el.addClass("stations")
    toggle_el_stations.addClass("enabled")
    stationsEnabled = true
  }
}

// ------

const toggle_fn_farezones = () => {
  map_el.toggleClass("farezones")
  toggle_el_farezones.toggleClass("enabled")
}

const toggle_fn_river = () => {
  map_el.toggleClass("river")
  toggle_el_river.toggleClass("enabled")
}

// ------

const toggle_fn_showall = () => { map_el.addClass(lines) }
const toggle_fn_hideall = () => {  map_el.removeClass(lines) }


$(window).on("load", function () {

  // INIT TOGGLES 
  // #region

  for (let line of lines) {
    let linetoggle = toggles_wrapper.children(`.toggle.${line}`)

    // map.toggleClass(line)
    // linetoggle.toggleClass("enabled")

    linetoggle.click(function () {
      map_el.toggleClass(line)
      $(this).toggleClass("enabled")
    })
  }

  toggle_el_stations.click(toggle_fn_stations)
  toggle_el_stationnames.click(toggle_fn_stationnames)
  toggle_el_stepfree.click(toggle_fn_stepfree)
  
  toggle_el_farezones.click(toggle_fn_farezones)
  toggle_el_river.click(toggle_fn_river)
  
  toggle_el_showall.click(toggle_fn_showall)
  toggle_el_hideall.click(toggle_fn_hideall)

  toggle_fn_showall()

  toggle_fn_stations()
  toggle_fn_stationnames()
  toggle_fn_stepfree()

  // #endregion

})

