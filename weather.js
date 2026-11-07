const divNavbarSecond = document.querySelectorAll(".div-navbar-second");
const divNavbarPreviousNextOne = document.querySelectorAll(
  ".div-navbar-previous-next-one"
);
const pNavbarPreviousNextOne = document.querySelectorAll(
  ".p-navbar-previous-next-one"
);
const divNavbarPreviousNextTwo = document.querySelectorAll(
  ".div-navbar-previous-next-two"
);
const pNavbarPreviousNextTwo = document.querySelectorAll(
  ".p-navbar-previous-next-two"
);

const divCelsius = document.querySelector(".div-celsius");
const divFahrenheit = document.querySelector(".div-fahrenheit");
const divWeatherHeader = document.querySelector(".div-weather-header");
const divTableFahrenheitCelsius = document.querySelector(
  ".div-table-fahrenheit-celsius"
);
const divWeatherDetail = document.querySelector(".div-weather-detail");

const divPreviousOne = document.querySelector(".div-previous-one");
const divNextOne = document.querySelector(".div-next-one");
const weatherFoot = document.querySelector(".weather-foot");
divNavbarSecond.forEach((div) => {
  div.addEventListener("click", function () {
    removeDiv();
    this.classList.add("active-div-f-c");
  });
});
divNavbarPreviousNextOne.forEach((div) => {
  div.addEventListener("mouseover", function () {
    if (
      !this.firstElementChild.classList.contains("active-div-previous-next")
    ) {
      this.style.backgroundColor = "aliceblue";
    }
    div.addEventListener("mouseout", function () {
      this.style.backgroundColor = "white";
    });
  });
  div.addEventListener("click", function () {
    removeDivTwo();
    this.firstElementChild.classList.add("active-div-previous-next");
  });
});
divNavbarPreviousNextTwo.forEach((div) => {
  div.addEventListener("mouseover", function () {
    if (
      !this.firstElementChild.classList.contains("active-div-previous-next")
    ) {
      this.style.backgroundColor = "aliceblue";
    }
    div.addEventListener("mouseout", function () {
      this.style.backgroundColor = "white";
    });
  });
  div.addEventListener("click", function () {
    removeDivThree();
    this.firstElementChild.classList.add("active-div-previous-next");
  });
});

function removeDiv() {
  divNavbarSecond.forEach((div) => {
    div.classList.remove("active-div-f-c");
  });
}
function removeDivTwo() {
  pNavbarPreviousNextOne.forEach((p) => {
    p.classList.remove("active-div-previous-next");
  });
}
function removeDivThree() {
  pNavbarPreviousNextTwo.forEach((p) => {
    p.classList.remove("active-div-previous-next");
  });
}

divFahrenheit.addEventListener("click", function () {
  divWeatherHeader.innerHTML = `
  <div class="row justify-content-center">
                <div class="col-lg-12">
                  <div class="div-partly-cloudly">
                    <img src="img/cloudly.webp" title="Cloudly" />
                    <span class="span-partly-cloudly text-white"
                      >Partly cloudy</span
                    >
                  </div>
                  <div class="div-wind-precip text-end">
                    <p class="text-white">Wind: 6.9 mph</p>
                    <p class="text-white">Precip: 0.0 in</p>
                    <p class="text-white">Pressure: 29.7 in</p>
                    <h3 class="text-white p-day me-3">84.2 °f</h3>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-lg-12">
                  <div class="weather-day d-flex justify-content-center">
                    <div class="day-by-day text-white">
                      <p>Sun</p>
                      <img
                        src="img/heavy-rain.webp"
                        class="img-day"
                        title="Heavy rain"
                      />
                      <p class="p-day">84.8 °f</p>
                    </div>
                    <div class="day-by-day text-white">
                      <p>Mon</p>
                      <img
                        src="img/heavy-rain.webp"
                        class="img-day"
                        title="Heavy rain"
                      />
                      <p class="p-day">84.2 °f</p>
                    </div>
                    <div class="day-by-day text-white">
                      <p>Tue</p>
                      <img
                        src="img/heavy-rain.webp"
                        class="img-day"
                        title="Heavy rain"
                      />
                      <p class="p-day">84.3 °f</p>
                    </div>
                    <div class="day-by-day text-white">
                      <p>Wed</p>
                      <img
                        src="img/patchy-rain-possible.webp"
                        class="img-day"
                        title="Patchy rain possible"
                      />
                      <p class="p-day">84.3 °f</p>
                    </div>
                    <div class="day-by-day text-white">
                      <p>Thu</p>
                      <img
                        src="img/moderate-rain.webp"
                        class="img-day"
                        title="Moderate rain"
                      />
                      <p class="p-day">81.7 °f</p>
                    </div>
                  </div>
                </div>
              </div>`;
  if (
    divPreviousOne.firstElementChild.classList.contains(
      "active-div-previous-next"
    )
  ) {
    divTableFahrenheitCelsius.innerHTML = `
              <div class="table-responsive">
                <table class="table table-bordered table-hover table-head">
                  <tr>
                    <td>
                      Sunrise: 05:26 AM <br />
                      Sunset: 05:46 PM
                    </td>
                    <td>Moonrise: 01:39 PM <br />Moonset: 01:26 AM</td>
                    <td style="background-color: #e4ad2b">
                      Max: <br />
                      90.8 °f
                    </td>
                    <td style="background-color: #e9d97e">
                      Min: <br />
                      81.1 °f
                    </td>
                    <td style="background-color: #f1c151">
                      Avg: <br />
                      84.3 °f
                    </td>
                    <td style="background-color: #0899ca">
                      Precip: <br />
                      0.55 in
                    </td>
                    <td style="background-color: #80f9cc">
                      Max Wind: <br />
                      13.3 mph
                    </td>
                  </tr>
                </table>
              </div>

              <div class="table-responsive">
                <table class="table table-bordered table-hover table-head">
                  <tr>
                    <td style="width: 130px"></td>
                    <td>
                      Thu 03 <br />
                      0:00 am
                    </td>
                    <td>Thu 03 <br />3:00 am</td>
                    <td>
                      Thu 03 <br />
                      6:00 am
                    </td>
                    <td>
                      Thu 03 <br />
                      9:00 am
                    </td>
                    <td>
                      Thu 03 <br />
                      12:00 pm
                    </td>
                    <td>
                      Thu 03 <br />
                      3:00 pm
                    </td>
                    <td>
                      Thu 03 <br />
                      6:00 pm
                    </td>
                    <td>
                      Thu 03 <br />
                      8:00 pm
                    </td>
                  </tr>
                  <tr>
                    <td><p>Icon</p></td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/partly-cloudly.webp"
                        title="Partly cloudly"
                      />
                    </td>
                    <td>
                      <img
                        src="img/partly-cloudly.webp"
                        title="Partly cloudly"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><p>Temp</p></td>
                    <td style="background-color: #e9d97e">
                      <p>81.9°f</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>81.3°f</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>81.1°f</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>81.9°f</p>
                    </td>
                    <td style="background-color: #e4ad2b">
                      <p>90.3°f</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>88.3°f</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>85.5°f</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>83.5°f</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Wind</p></td>
                    <td style="background-color: #9bf6f3">
                      <p>2.2 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>2.7 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.6 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.8 mph</p>
                    </td>
                    <td style="background-color: #a4f6f9">
                      <p>6.5 mph</p>
                    </td>
                    <td style="background-color: #80f9cc">
                      <p>8.1 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.8 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>2.0 mph</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Precip</p></td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.00 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.01 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.00 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.00 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #8adaf5">
                      <p>0.07 in</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Cloud</p></td>
                    <td style="background-color: #d1d3d4">
                      <p>67%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>59%</p>
                    </td>
                    <td style="background-color: #bcbfc0">
                      <p>82%</p>
                    </td>
                    <td style="background-color: #e1e3e4">
                      <p>41%</p>
                    </td>
                    <td style="background-color: #e1e3e4">
                      <p>37%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>59%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>52%</p>
                    </td>
                    <td style="background-color: #bcbfc0">
                      <p>74%</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Humidity</p></td>
                    <td>
                      <p>75%</p>
                    </td>
                    <td>
                      <p>77%</p>
                    </td>
                    <td>
                      <p>78%</p>
                    </td>
                    <td>
                      <p>75%</p>
                    </td>
                    <td>
                      <p>59%</p>
                    </td>
                    <td>
                      <p>62%</p>
                    </td>
                    <td>
                      <p>68%</p>
                    </td>
                    <td>
                      <p>74%</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Pressure</p></td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.7 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                  </tr>
                </table>
              </div>
              `;
  } else if (
    divNextOne.firstElementChild.classList.contains("active-div-previous-next")
  ) {
    divTableFahrenheitCelsius.innerHTML = `
              <div class="table-responsive">
                <table class="table table-bordered table-hover table-head">
                  <tr>
                    <td>
                      Sunrise: 05:26 AM <br />
                      Sunset: 05:46 PM
                    </td>
                    <td>Moonrise: 01:39 PM <br />Moonset: 01:26 AM</td>
                    <td style="background-color: #e4ad2b">
                      Max: <br />
                      91.8 °f
                    </td>
                    <td style="background-color: #e9d97e">
                      Min: <br />
                      80.2 °f
                    </td>
                    <td style="background-color: #f1c151">
                      Avg: <br />
                      85.0 °f
                    </td>
                    <td style="background-color: #0899ca">
                      Precip: <br />
                      0.65 in
                    </td>
                    <td style="background-color: #80f9cc">
                      Max Wind: <br />
                      8.9 mph
                    </td>
                  </tr>
                </table>
              </div>

              <div class="table-responsive">
                <table class="table table-bordered table-hover table-head">
                  <tr>
                    <td style="width: 130px"></td>
                    <td>
                      Fri 04 <br />
                      0:00 am
                    </td>
                    <td>Thu 03 <br />3:00 am</td>
                    <td>
                      Fri 04 <br />
                      6:00 am
                    </td>
                    <td>
                      Fri 04 <br />
                      9:00 am
                    </td>
                    <td>
                      Fri 04 <br />
                      12:00 pm
                    </td>
                    <td>
                      Fri 04 <br />
                      3:00 pm
                    </td>
                    <td>
                      Fri 04 <br />
                      6:00 pm
                    </td>
                    <td>
                      Fri 04 <br />
                      8:00 pm
                    </td>
                  </tr>
                  <tr>
                    <td><p>Icon</p></td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><p>Temp</p></td>
                    <td style="background-color: #e9d97e">
                      <p>81.3°f</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>80.1°f</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>79.0°f</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>82.8°f</p>
                    </td>
                    <td style="background-color: #e4ad2b">
                      <p>89.8°f</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>87.4°f</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>83.5°f</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>82.4°f</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Wind</p></td>
                    <td style="background-color: #9bf6f3">
                      <p>3.1 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>2.2 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.8 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.6 mph</p>
                    </td>
                    <td style="background-color: #a4f6f9">
                      <p>3.4 mph</p>
                    </td>
                    <td style="background-color: #80f9cc">
                      <p>7.4 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.4 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>1.8 mph</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Precip</p></td>
                    <td style="background-color: #ddf0f7">
                      <p>0.01 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.01 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.01 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.03 in</p>
                    </td>
                    <td style="background-color: #8adaf5">
                      <p>0.02 in</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Cloud</p></td>
                    <td style="background-color: #d1d3d4">
                      <p>81%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>70%</p>
                    </td>
                    <td style="background-color: #bcbfc0">
                      <p>63%</p>
                    </td>
                    <td style="background-color: #e1e3e4">
                      <p>83%</p>
                    </td>
                    <td style="background-color: #e1e3e4">
                      <p>73%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>86%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>71%</p>
                    </td>
                    <td style="background-color: #bcbfc0">
                      <p>88%</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Humidity</p></td>
                    <td>
                      <p>77%</p>
                    </td>
                    <td>
                      <p>80%</p>
                    </td>
                    <td>
                      <p>84%</p>
                    </td>
                    <td>
                      <p>72%</p>
                    </td>
                    <td>
                      <p>58%</p>
                    </td>
                    <td>
                      <p>64%</p>
                    </td>
                    <td>
                      <p>73%</p>
                    </td>
                    <td>
                      <p>76%</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Pressure</p></td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                  </tr>
                </table>
              </div>
              `;
  }

  divWeatherDetail.innerHTML = `
              <h2 class="bold-weather-next-day mt-3">
                Weather in Semarang for next 7, 10, 14 day and beyond
              </h2>
              <p class="p-weather-next-day">
                Forecasted weather in Semarang, Central Java, Indonesia for
                the next 7, 10, 14 days and beyond is predicting
                <b>maximum temperature</b>
                around 34℃ (or 93℉) on Friday 4<sup>th</sup> November at around
                11 am. Over the same period the <b>minimum temperature</b> will
                be 24℃ or 75℉ on Wednesday 9th November at around 10 pm.
              </p>
              <p class="p-weather-next-day">
                Weather forecaster is reporting for Semarang a Wednesday
                9<sup>th</sup>
                November to be the wettest day in the coming week with around
                12.10mm or 0.5 inches of rainfall. Try and stay dry and do make
                sure to carry an umbrella if you are out and about in
                Semarang.
              </p>
              <p class="p-weather-next-day">
                The weather forecast is also predicting windiest of all days
                will be Sunday 6<sup>th </sup> November as wind will reach 10mph
                or 16kmph at around 2 pm.
              </p>
              <h3 class="bold-weather-next-day">
                Best months to visit Semarang?
              </h3>
              <p class="p-weather-next-day">
                March and April are the best month to go for holiday or travel
                to Semarang. In these month temperature is at around 88°f and
                average of 204.5714 hours of sunshine in a month.
              </p>
              <h3 class="bold-weather-next-day">
                Coldest months of Semarang?
              </h3>
              <p class="p-weather-next-day">
                July and August are the coldest months with temperature at
                around 76°f.
              </p>
              <h3 class="bold-weather-next-day">
                Which months receive most rainfall in Semarang?
              </h3>
              <p class="p-weather-next-day">
                February and March receive most rainfall with precipitation
                count of 12.89 inch.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in January in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 87°f and at night it goes to
                78°f. In the month of January on average Semarang gets 11.36
                inch of rain and approximately 14 wet days in the month. For the
                most part the humidity is around 73%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in February in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 87°f and at night it goes to
                78°f. In the month of February on average Semarang gets 12.89
                inch of rain and approximately 14 wet days in the month. For the
                most part the humidity is around 75%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in March in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 88°f and at night it goes to
                78°f. In the month of March on average Semarang gets 12.00
                inch of rain and approximately 17 wet days in the month. For the
                most part the humidity is around 74%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in April in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 89°f and at night it goes to
                78°f. In the month of April on average Semarang gets 11.86
                inch of rain and approximately 15 wet days in the month. For the
                most part the humidity is around 74%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in May in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 90°f and at night it goes to
                79°f. In the month of May on average Semarang gets 8.08 inch
                of rain and approximately 11 wet days in the month. For the most
                part the humidity is around 73%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in June in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 89°f and at night it goes to
                78°f. In the month of June on average Semarang gets 6.59 inch
                of rain and approximately 7 wet days in the month. For the most
                part the humidity is around 73%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in July in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 89°f and at night it goes to
                76°f. In the month of July on average Semarang gets 4.79 inch
                of rain and approximately 6 wet days in the month. For the most
                part the humidity is around 72%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in August in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 89°f and at night it goes to
                77°f. In the month of August on average Semarang gets 3.83
                inch of rain and approximately 5 wet days in the month. For the
                most part the humidity is around 71%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in September in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 90°f and at night it goes to
                78°f. In the month of September on average Semarang gets 4.93
                inch of rain and approximately 6 wet days in the month. For the
                most part the humidity is around 68%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in October in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 90°f and at night it goes to
                79°f. In the month of October on average Semarang gets 7.65
                inch of rain and approximately 10 wet days in the month. For the
                most part the humidity is around 68%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in November in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 90°f and at night it goes to
                79°f. In the month of November on average Semarang gets 10.41
                inch of rain and approximately 15 wet days in the month. For the
                most part the humidity is around 70%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in December in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 88°f and at night it goes to
                78°f. In the month of December on average Semarang gets 9.87
                inch of rain and approximately 13 wet days in the month. For the
                most part the humidity is around 72%.
              </p>
              <h4 class="bold-weather-next-day">Buy Historical Weather Data</h4>
              <div class="row me-5">
                <div class="col-xl-5">
                  <p class="p-weather-next-day p-to-left">
                    Apart from averages, the data is also available in hourly
                    interval.
                  </p>
                </div>
                <div class="col-xl-4">
                  <ul class="ul-weather-next-day">
                    <li>Temperature(°C/°F)</li>
                    <li>Visibility (km or miles)</li>
                    <li>Pressure (mb or inches)</li>
                    <li>TCloud (%)</li>
                    <li>Humidity (%)</li>
                    <li>Wind Speed (km/h, mph, knots or m/s)</li>
                    <li>Wind Gust (km/h, mph, knots or m/s)</li>
                    <li>Snow amount (cm)</li>
                    <li>Rain amount (mm or inches)</li>
                    <li>UV Index</li>
                    <li>Wind direction (degree)</li>
                    <li>Dew point (°C/°F)</li>
                    <li>Sky condition description text</li>
                  </ul>
                </div>
                <div class="col-xl-3">
                  <a href="#">Buy Historical Weather Data</a>
                </div>
              </div>
              `;

  weatherFoot.innerHTML = `
              <div class="row justify-content-center">
              <div class="col-xl-5">
                <h4>Weather Widget #1</h4>
                <div
                  class="div-weather-foot"
                  style="
                    background-image: linear-gradient(to right, #c31432, #240b36);
                  "
                >
                  <div class="row justify-content-center">
                    <div class="col-lg-12 text-center">
                      <span class="span-partly-cloudly text-white">Semarang</span>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-12">
                      <div class="div-partly-cloudly">
                        <img src="img/cloudly.webp" title="Cloudly" />
                        <span class="span-partly-cloudly text-white"
                          >Partly cloudy</span
                        >
                      </div>
                      <div class="div-wind-precip text-end">
                        <p class="text-white">Wind: 6.9 mph</p>
                        <p class="text-white">Precip: 0.0 in</p>
                        <p class="text-white">Pressure: 29.7 in</p>
                        <h3 class="text-white p-day me-3">84.2 °f</h3>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-lg-12">
                      <div class="weather-day d-flex justify-content-center">
                        <div class="day-by-day text-white">
                          <p>Sun</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.8 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Mon</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.2 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Tue</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.3 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Wed</p>
                          <img
                            src="img/patchy-rain-possible.webp"
                            class="img-day"
                            title="Patchy rain possible"
                          />
                          <p class="p-day">84.3 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Thu</p>
                          <img
                            src="img/moderate-rain.webp"
                            class="img-day"
                            title="Moderate rain"
                          />
                          <p class="p-day">81.7 °f</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="mt-3">HTML Code</h6>
                <textarea class="w-100"><div id="weatherapi-weather-widget-1"></div><script type='text/javascript' src='https://www.weatherapi.com/weather/widget.ashx?loc=2966176&wid=1&tu=2 div=weatherapi-weather-widget-1'async></script><noscript><a href="https://www.weatherapi.com/weather/q/semarang-2966176" alt="Hour by hour Semarang weather">10 day hour by hour Semarang weather</a></noscript>
                </textarea>
              </div>
              <div class="col-xl-5">
                <h4>Weather Widget #2</h4>
                <div
                  class="div-weather-foot"
                  style="
                    background-image: linear-gradient(to right, #fc466b, #3f5efb);
                  "
                >
                  <div class="row justify-content-center">
                    <div class="col-lg-12 text-center">
                      <span class="span-partly-cloudly text-white">Semarang</span>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-12">
                      <div class="div-partly-cloudly">
                        <img src="img/cloudly.webp" title="Cloudly" />
                        <span class="span-partly-cloudly text-white"
                          >Partly cloudy</span
                        >
                      </div>
                      <div class="div-wind-precip text-end">
                        <p class="text-white">Wind: 6.9 mph</p>
                        <p class="text-white">Precip: 0.0 in</p>
                        <p class="text-white">Pressure: 29.7 in</p>
                        <h3 class="text-white p-day me-3">84.2 °f</h3>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-lg-12">
                      <div class="weather-day d-flex justify-content-center">
                        <div class="day-by-day text-white">
                          <p>Sun</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.8 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Mon</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.2 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Tue</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.3 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Wed</p>
                          <img
                            src="img/patchy-rain-possible.webp"
                            class="img-day"
                            title="Patchy rain possible"
                          />
                          <p class="p-day">84.3 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Thu</p>
                          <img
                            src="img/moderate-rain.webp"
                            class="img-day"
                            title="Moderate rain"
                          />
                          <p class="p-day">81.7 °f</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="mt-3">HTML Code</h6>
                <textarea class="w-100"><div id="weatherapi-weather-widget-2"></div><script type='text/javascript' src='https://www.weatherapi.com/weather/widget.ashx?loc=2966176&wid=2&tu=2&div=weatherapi-weather-widget-2' async></script><noscript><a href="https://www.weatherapi.com/weather/q/semarang-2966176" alt="Hour by hour Semarang weather">10 day hour by hour Semarang weather</a></noscript>
                </textarea>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-xl-5">
                <h4>Weather Widget #3</h4>
                <div
                  class="div-weather-foot"
                  style="
                    background-image: linear-gradient(
                      to right,
                      #0f0c29,
                      #302b63,
                      #24243e
                    );
                  "
                >
                  <div class="row justify-content-center">
                    <div class="col-lg-12 text-center">
                      <span class="span-partly-cloudly text-white">Semarang</span>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-12">
                      <div class="div-partly-cloudly">
                        <img src="img/cloudly.webp" title="Cloudly" />
                        <span class="span-partly-cloudly text-white"
                          >Partly cloudy</span
                        >
                      </div>
                      <div class="div-wind-precip text-end">
                        <p class="text-white">Wind: 6.9 mph</p>
                        <p class="text-white">Precip: 0.0 in</p>
                        <p class="text-white">Pressure: 29.7 in</p>
                        <h3 class="text-white p-day me-3">84.2 °f</h3>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-lg-12">
                      <div class="weather-day d-flex justify-content-center">
                        <div class="day-by-day text-white">
                          <p>Sun</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.8 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Mon</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.2 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Tue</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.3 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Wed</p>
                          <img
                            src="img/patchy-rain-possible.webp"
                            class="img-day"
                            title="Patchy rain possible"
                          />
                          <p class="p-day">84.3 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Thu</p>
                          <img
                            src="img/moderate-rain.webp"
                            class="img-day"
                            title="Moderate rain"
                          />
                          <p class="p-day">81.7 °f</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="mt-3">HTML Code</h6>
                <textarea class="w-100"><div id="weatherapi-weather-widget-3"></div><script type='text/javascript' src='https://www.weatherapi.com/weather/widget.ashx?loc=2966176&wid=3&tu=2&div=weatherapi-weather-widget-3' async></script><noscript><a href="https://www.weatherapi.com/weather/q/semarang-2966176" alt="Hour by hour Semarang weather">10 day hour by hour Semarang weather</a></noscript>
                </textarea>
              </div>
              <div class="col-xl-5">
                <h4>Weather Widget #4</h4>
                <div
                  class="div-weather-foot"
                  style="
                    background-image: linear-gradient(to right, #00f260, #0575e6);
                  "
                >
                  <div class="row justify-content-center">
                    <div class="col-lg-12 text-center">
                      <span class="span-partly-cloudly text-white">Semarang</span>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-12">
                      <div class="div-partly-cloudly">
                        <img src="img/cloudly.webp" title="Cloudly" />
                        <span class="span-partly-cloudly text-white"
                          >Partly cloudy</span
                        >
                      </div>
                      <div class="div-wind-precip text-end">
                        <p class="text-white">Wind: 6.9 mph</p>
                        <p class="text-white">Precip: 0.0 in</p>
                        <p class="text-white">Pressure: 29.7 in</p>
                        <h3 class="text-white p-day me-3">84.2 °f</h3>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-lg-12">
                      <div class="weather-day d-flex justify-content-center">
                        <div class="day-by-day text-white">
                          <p>Sun</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.8 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Mon</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.2 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Tue</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.3 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Wed</p>
                          <img
                            src="img/patchy-rain-possible.webp"
                            class="img-day"
                            title="Patchy rain possible"
                          />
                          <p class="p-day">84.3 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Thu</p>
                          <img
                            src="img/moderate-rain.webp"
                            class="img-day"
                            title="Moderate rain"
                          />
                          <p class="p-day">81.7 °f</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="mt-3">HTML Code</h6>
                <textarea class="w-100"><div id="weatherapi-weather-widget-4"></div><script type='text/javascript' src='https://www.weatherapi.com/weather/widget.ashx?loc=2966176&wid=4&tu=2&div=weatherapi-weather-widget-4' async></script><noscript><a href="https://www.weatherapi.com/weather/q/semarang-2966176" alt="Hour by hour Semarang weather">10 day hour by hour Semarang weather</a></noscript>
                </textarea>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-xl-5">
                <h4>Weather Widget #5</h4>
                <div
                  class="div-weather-foot"
                  style="
                    background-image: linear-gradient(to right, #000046, #1cb5e0);
                  "
                >
                  <div class="row justify-content-center">
                    <div class="col-lg-12 text-center">
                      <span class="span-partly-cloudly text-white">Semarang</span>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-12">
                      <div class="div-partly-cloudly">
                        <img src="img/cloudly.webp" title="Cloudly" />
                        <span class="span-partly-cloudly text-white"
                          >Partly cloudy</span
                        >
                      </div>
                      <div class="div-wind-precip text-end">
                        <p class="text-white">Wind: 6.9 mph</p>
                        <p class="text-white">Precip: 0.0 in</p>
                        <p class="text-white">Pressure: 29.7 in</p>
                        <h3 class="text-white p-day me-3">84.2 °f</h3>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-lg-12">
                      <div class="weather-day d-flex justify-content-center">
                        <div class="day-by-day text-white">
                          <p>Sun</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.8 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Mon</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.2 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Tue</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.3 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Wed</p>
                          <img
                            src="img/patchy-rain-possible.webp"
                            class="img-day"
                            title="Patchy rain possible"
                          />
                          <p class="p-day">84.3 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Thu</p>
                          <img
                            src="img/moderate-rain.webp"
                            class="img-day"
                            title="Moderate rain"
                          />
                          <p class="p-day">81.7 °f</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="mt-3">HTML Code</h6>
                <textarea class="w-100"><div id="weatherapi-weather-widget-5"></div><script type='text/javascript' src='https://www.weatherapi.com/weather/widget.ashx?loc=2966176&wid=5&tu=2&div=weatherapi-weather-widget-5' async></script><noscript><a href="https://www.weatherapi.com/weather/q/semarang-2966176" alt="Hour by hour Semarang weather">10 day hour by hour Semarang weather</a></noscript>
                </textarea>
              </div>
              <div class="col-xl-5">
                <h4>Weather Widget #6</h4>
                <div
                  class="div-weather-foot"
                  style="
                    background-image: linear-gradient(to right, #ff5f6d, #ffc371);
                  "
                >
                  <div class="row justify-content-center">
                    <div class="col-lg-12 text-center">
                      <span class="span-partly-cloudly text-white">Semarang</span>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-12">
                      <div class="div-partly-cloudly">
                        <img src="img/cloudly.webp" title="Cloudly" />
                        <span class="span-partly-cloudly text-white"
                          >Partly cloudy</span
                        >
                      </div>
                      <div class="div-wind-precip text-end">
                        <p class="text-white">Wind: 6.9 mph</p>
                        <p class="text-white">Precip: 0.0 in</p>
                        <p class="text-white">Pressure: 29.7 in</p>
                        <h3 class="text-white p-day me-3">84.2 °f</h3>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-lg-12">
                      <div class="weather-day d-flex justify-content-center">
                        <div class="day-by-day text-white">
                          <p>Sun</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.8 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Mon</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.2 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Tue</p>
                          <img
                            src="img/heavy-rain.webp"
                            class="img-day"
                            title="Heavy rain"
                          />
                          <p class="p-day">84.3 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Wed</p>
                          <img
                            src="img/patchy-rain-possible.webp"
                            class="img-day"
                            title="Patchy rain possible"
                          />
                          <p class="p-day">84.3 °f</p>
                        </div>
                        <div class="day-by-day text-white">
                          <p>Thu</p>
                          <img
                            src="img/moderate-rain.webp"
                            class="img-day"
                            title="Moderate rain"
                          />
                          <p class="p-day">81.7 °f</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="mt-3">HTML Code</h6>
                <textarea class="w-100"><div id="weatherapi-weather-widget-6"></div><script type='text/javascript' src='https://www.weatherapi.com/weather/widget.ashx?loc=2966176&wid=6&tu=2&div=weatherapi-weather-widget-6' async></script><noscript><a href="https://www.weatherapi.com/weather/q/semarang-2966176" alt="Hour by hour Semarang weather">10 day hour by hour Semarang weather</a></noscript>
                </textarea>
              </div>
            </div>`;
});

divCelsius.addEventListener("click", function () {
  divWeatherHeader.innerHTML = `
  <div class="row justify-content-center">
                <div class="col-lg-12">
                  <div class="div-partly-cloudly">
                    <img src="img/cloudly.webp" title="Cloudly" />
                    <span class="span-partly-cloudly text-white"
                      >Partly cloudy</span
                    >
                  </div>
                  <div class="div-wind-precip text-end">
                    <p class="text-white">Wind: 6.9 mph</p>
                    <p class="text-white">Precip: 0.0 in</p>
                    <p class="text-white">Pressure: 29.7 in</p>
                    <h3 class="text-white p-day me-3">29.0 °c</h3>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-lg-12">
                  <div class="weather-day d-flex justify-content-center">
                    <div class="day-by-day text-white">
                      <p>Sun</p>
                      <img
                        src="img/heavy-rain.webp"
                        class="img-day"
                        title="Heavy rain"
                      />
                      <p class="p-day">29.3 °c</p>
                    </div>
                    <div class="day-by-day text-white">
                      <p>Mon</p>
                      <img
                        src="img/heavy-rain.webp"
                        class="img-day"
                        title="Heavy rain"
                      />
                      <p class="p-day">29.1 °c</p>
                    </div>
                    <div class="day-by-day text-white">
                      <p>Tue</p>
                      <img
                        src="img/heavy-rain.webp"
                        class="img-day"
                        title="Heavy rain"
                      />
                      <p class="p-day">29.1 °c</p>
                    </div>
                    <div class="day-by-day text-white">
                      <p>Wed</p>
                      <img
                        src="img/patchy-rain-possible.webp"
                        class="img-day"
                        title="Patchy rain possible"
                      />
                      <p class="p-day">29.1 °c</p>
                    </div>
                    <div class="day-by-day text-white">
                      <p>Thu</p>
                      <img
                        src="img/moderate-rain.webp"
                        class="img-day"
                        title="Moderate rain"
                      />
                      <p class="p-day">27.6 °c</p>
                    </div>
                  </div>
                </div>
              </div>`;

  if (
    divPreviousOne.firstElementChild.classList.contains(
      "active-div-previous-next"
    )
  ) {
    divTableFahrenheitCelsius.innerHTML = `
              <div class="table-responsive">
                <table class="table table-bordered table-hover table-head">
                  <tr>
                    <td>
                      Sunrise: 05:26 AM <br />
                      Sunset: 05:46 PM
                    </td>
                    <td>Moonrise: 01:39 PM <br />Moonset: 01:26 AM</td>
                    <td style="background-color: #e4ad2b">
                      Max: <br />
                      32.7 °c
                    </td>
                    <td style="background-color: #e9d97e">
                      Min: <br />
                      27.3 °c
                    </td>
                    <td style="background-color: #f1c151">
                      Avg: <br />
                      29.1 °c
                    </td>
                    <td style="background-color: #0899ca">
                      Precip: <br />
                      0.55 in
                    </td>
                    <td style="background-color: #80f9cc">
                      Max Wind: <br />
                      13.3 mph
                    </td>
                  </tr>
                </table>
              </div>

              <div class="table-responsive">
                <table class="table table-bordered table-hover table-head">
                  <tr>
                    <td style="width: 130px"></td>
                    <td>
                      Thu 03 <br />
                      0:00 am
                    </td>
                    <td>Thu 03 <br />3:00 am</td>
                    <td>
                      Thu 03 <br />
                      6:00 am
                    </td>
                    <td>
                      Thu 03 <br />
                      9:00 am
                    </td>
                    <td>
                      Thu 03 <br />
                      12:00 pm
                    </td>
                    <td>
                      Thu 03 <br />
                      3:00 pm
                    </td>
                    <td>
                      Thu 03 <br />
                      6:00 pm
                    </td>
                    <td>
                      Thu 03 <br />
                      8:00 pm
                    </td>
                  </tr>
                  <tr>
                    <td><p>Icon</p></td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/partly-cloudly.webp"
                        title="Partly cloudly"
                      />
                    </td>
                    <td>
                      <img
                        src="img/partly-cloudly.webp"
                        title="Partly cloudly"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><p>Temp</p></td>
                    <td style="background-color: #e9d97e">
                      <p>27.7 °c</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>27.4 °c</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>27.3 °c</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>27.7 °c</p>
                    </td>
                    <td style="background-color: #e4ad2b">
                      <p>32.4 °c</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>31.3 °c</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>29.7 °c</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>28.6 °c</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Wind</p></td>
                    <td style="background-color: #9bf6f3">
                      <p>2.2 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>2.7 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.6 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.8 mph</p>
                    </td>
                    <td style="background-color: #a4f6f9">
                      <p>6.5 mph</p>
                    </td>
                    <td style="background-color: #80f9cc">
                      <p>8.1 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.8 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>2.0 mph</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Precip</p></td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.00 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.01 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.00 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.00 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #8adaf5">
                      <p>0.07 in</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Cloud</p></td>
                    <td style="background-color: #d1d3d4">
                      <p>67%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>59%</p>
                    </td>
                    <td style="background-color: #bcbfc0">
                      <p>82%</p>
                    </td>
                    <td style="background-color: #e1e3e4">
                      <p>41%</p>
                    </td>
                    <td style="background-color: #e1e3e4">
                      <p>37%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>59%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>52%</p>
                    </td>
                    <td style="background-color: #bcbfc0">
                      <p>74%</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Humidity</p></td>
                    <td>
                      <p>75%</p>
                    </td>
                    <td>
                      <p>77%</p>
                    </td>
                    <td>
                      <p>78%</p>
                    </td>
                    <td>
                      <p>75%</p>
                    </td>
                    <td>
                      <p>59%</p>
                    </td>
                    <td>
                      <p>62%</p>
                    </td>
                    <td>
                      <p>68%</p>
                    </td>
                    <td>
                      <p>74%</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Pressure</p></td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.7 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                  </tr>
                </table>
              </div>
              `;
  } else if (
    divNextOne.firstElementChild.classList.contains("active-div-previous-next")
  ) {
    divTableFahrenheitCelsius.innerHTML = `
              <div class="table-responsive">
                <table class="table table-bordered table-hover table-head">
                  <tr>
                    <td>
                      Sunrise: 05:26 AM <br />
                      Sunset: 05:46 PM
                    </td>
                    <td>Moonrise: 01:39 PM <br />Moonset: 01:26 AM</td>
                    <td style="background-color: #e4ad2b">
                      Max: <br />
                      33.2 °c
                    </td>
                    <td style="background-color: #e9d97e">
                      Min: <br />
                      26.8 °c
                    </td>
                    <td style="background-color: #f1c151">
                      Avg: <br />
                      29.4 °c
                    </td>
                    <td style="background-color: #0899ca">
                      Precip: <br />
                      0.65 in
                    </td>
                    <td style="background-color: #80f9cc">
                      Max Wind: <br />
                      8.9 mph
                    </td>
                  </tr>
                </table>
              </div>

              <div class="table-responsive">
                <table class="table table-bordered table-hover table-head">
                  <tr>
                    <td style="width: 130px"></td>
                    <td>
                      Fri 04 <br />
                      0:00 am
                    </td>
                    <td>Thu 03 <br />3:00 am</td>
                    <td>
                      Fri 04 <br />
                      6:00 am
                    </td>
                    <td>
                      Fri 04 <br />
                      9:00 am
                    </td>
                    <td>
                      Fri 04 <br />
                      12:00 pm
                    </td>
                    <td>
                      Fri 04 <br />
                      3:00 pm
                    </td>
                    <td>
                      Fri 04 <br />
                      6:00 pm
                    </td>
                    <td>
                      Fri 04 <br />
                      8:00 pm
                    </td>
                  </tr>
                  <tr>
                    <td><p>Icon</p></td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><p>Temp</p></td>
                    <td style="background-color: #e9d97e">
                      <p>27.4°c</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>26.7°c</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>26.1°c</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>28.2°c</p>
                    </td>
                    <td style="background-color: #e4ad2b">
                      <p>32.1°c</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>30.8°c</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>28.6°c</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>28.0°c</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Wind</p></td>
                    <td style="background-color: #9bf6f3">
                      <p>3.1 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>2.2 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.8 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.6 mph</p>
                    </td>
                    <td style="background-color: #a4f6f9">
                      <p>3.4 mph</p>
                    </td>
                    <td style="background-color: #80f9cc">
                      <p>7.4 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.4 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>1.8 mph</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Precip</p></td>
                    <td style="background-color: #ddf0f7">
                      <p>0.01 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.01 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.01 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.03 in</p>
                    </td>
                    <td style="background-color: #8adaf5">
                      <p>0.02 in</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Cloud</p></td>
                    <td style="background-color: #d1d3d4">
                      <p>81%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>70%</p>
                    </td>
                    <td style="background-color: #bcbfc0">
                      <p>63%</p>
                    </td>
                    <td style="background-color: #e1e3e4">
                      <p>83%</p>
                    </td>
                    <td style="background-color: #e1e3e4">
                      <p>73%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>86%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>71%</p>
                    </td>
                    <td style="background-color: #bcbfc0">
                      <p>88%</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Humidity</p></td>
                    <td>
                      <p>77%</p>
                    </td>
                    <td>
                      <p>80%</p>
                    </td>
                    <td>
                      <p>84%</p>
                    </td>
                    <td>
                      <p>72%</p>
                    </td>
                    <td>
                      <p>58%</p>
                    </td>
                    <td>
                      <p>64%</p>
                    </td>
                    <td>
                      <p>73%</p>
                    </td>
                    <td>
                      <p>76%</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Pressure</p></td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                  </tr>
                </table>
              </div>
              `;
  }

  divWeatherDetail.innerHTML = `
              <h2 class="bold-weather-next-day mt-3">
                Weather in Semarang for next 7, 10, 14 day and beyond
              </h2>
              <p class="p-weather-next-day">
                Forecasted weather in Semarang, Central Java, Indonesia for
                the next 7, 10, 14 days and beyond is predicting
                <b>maximum temperature</b>
                around 34℃ (or 93℉) on Friday 4<sup>th</sup> November at around
                11 am. Over the same period the <b>minimum temperature</b> will
                be 24℃ or 75℉ on Wednesday 9th November at around 10 pm.
              </p>
              <p class="p-weather-next-day">
                Weather forecaster is reporting for Semarang a Wednesday
                9<sup>th</sup>
                November to be the wettest day in the coming week with around
                12.10mm or 0.5 inches of rainfall. Try and stay dry and do make
                sure to carry an umbrella if you are out and about in
                Semarang.
              </p>
              <p class="p-weather-next-day">
                The weather forecast is also predicting windiest of all days
                will be Sunday 6<sup>th </sup> November as wind will reach 10mph
                or 16kmph at around 2 pm.
              </p>
              <h3 class="bold-weather-next-day">
                Best months to visit Semarang?
              </h3>
              <p class="p-weather-next-day">
                March and April are the best month to go for holiday or travel
                to Semarang. In these month temperature is at around 31.1°c and
                average of 204.5714 hours of sunshine in a month.
              </p>
              <h3 class="bold-weather-next-day">
                Coldest months of Semarang?
              </h3>
              <p class="p-weather-next-day">
                July and August are the coldest months with temperature at
                around 24.4°c.
              </p>
              <h3 class="bold-weather-next-day">
                Which months receive most rainfall in Semarang?
              </h3>
              <p class="p-weather-next-day">
                February and March receive most rainfall with precipitation
                count of 12.89 inch.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in January in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 30.6°c and at night it goes to
                25.6°c. In the month of January on average Semarang gets 11.36
                inch of rain and approximately 14 wet days in the month. For the
                most part the humidity is around 73%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in February in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 30.6°c and at night it goes to
                25.6°c. In the month of February on average Semarang gets 12.89
                inch of rain and approximately 14 wet days in the month. For the
                most part the humidity is around 75%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in March in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 31.1°c and at night it goes to
                25.6°c. In the month of March on average Semarang gets 12.00
                inch of rain and approximately 17 wet days in the month. For the
                most part the humidity is around 74%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in April in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 31.7°c and at night it goes to
                25.6°c. In the month of April on average Semarang gets 11.86
                inch of rain and approximately 15 wet days in the month. For the
                most part the humidity is around 74%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in May in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 32.2°c and at night it goes to
                26.1°c. In the month of May on average Semarang gets 8.08 inch
                of rain and approximately 11 wet days in the month. For the most
                part the humidity is around 73%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in June in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 31.7°c and at night it goes to
                25.6°c. In the month of June on average Semarang gets 6.59 inch
                of rain and approximately 7 wet days in the month. For the most
                part the humidity is around 73%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in July in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 31.7°c and at night it goes to
                24.4°c. In the month of July on average Semarang gets 4.79 inch
                of rain and approximately 6 wet days in the month. For the most
                part the humidity is around 72%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in August in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 31.7°c and at night it goes to
                25°c. In the month of August on average Semarang gets 3.83
                inch of rain and approximately 5 wet days in the month. For the
                most part the humidity is around 71%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in September in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 32.2°c and at night it goes to
                25.6°c. In the month of September on average Semarang gets 4.93
                inch of rain and approximately 6 wet days in the month. For the
                most part the humidity is around 68%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in October in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 32.2°c and at night it goes to
                26.1°c. In the month of October on average Semarang gets 7.65
                inch of rain and approximately 10 wet days in the month. For the
                most part the humidity is around 68%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in November in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 32.2°c and at night it goes to
                26.1°c. In the month of November on average Semarang gets 10.41
                inch of rain and approximately 15 wet days in the month. For the
                most part the humidity is around 70%.
              </p>
              <h4 class="bold-weather-next-day">
                How is the weather in December in Semarang, Central Java,
                Indonesia?
              </h4>
              <p class="p-weather-next-day">
                Daytime temperature stays around 31.1°c and at night it goes to
                25.6°c. In the month of December on average Semarang gets 9.87
                inch of rain and approximately 13 wet days in the month. For the
                most part the humidity is around 72%.
              </p>
              <h4 class="bold-weather-next-day">Buy Historical Weather Data</h4>
              <div class="row me-5">
                <div class="col-xl-5">
                  <p class="p-weather-next-day p-to-left">
                    Apart from averages, the data is also available in hourly
                    interval.
                  </p>
                </div>
                <div class="col-xl-4">
                  <ul class="ul-weather-next-day">
                    <li>Temperature(°C/°F)</li>
                    <li>Visibility (km or miles)</li>
                    <li>Pressure (mb or inches)</li>
                    <li>TCloud (%)</li>
                    <li>Humidity (%)</li>
                    <li>Wind Speed (km/h, mph, knots or m/s)</li>
                    <li>Wind Gust (km/h, mph, knots or m/s)</li>
                    <li>Snow amount (cm)</li>
                    <li>Rain amount (mm or inches)</li>
                    <li>UV Index</li>
                    <li>Wind direction (degree)</li>
                    <li>Dew point (°C/°F)</li>
                    <li>Sky condition description text</li>
                  </ul>
                </div>
                <div class="col-xl-3">
                  <a href="#">Buy Historical Weather Data</a>
                </div>
              </div>
              `;

  weatherFoot.innerHTML = `
  <div class="row justify-content-center">
  <div class="col-xl-5">
    <h4>Weather Widget #1</h4>
    <div
      class="div-weather-foot"
      style="
        background-image: linear-gradient(to right, #c31432, #240b36);
      "
    >
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <span class="span-partly-cloudly text-white">Semarang</span>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="div-partly-cloudly">
            <img src="img/cloudly.webp" title="Cloudly" />
            <span class="span-partly-cloudly text-white"
              >Partly cloudy</span
            >
          </div>
          <div class="div-wind-precip text-end">
            <p class="text-white">Wind: 6.9 mph</p>
            <p class="text-white">Precip: 0.0 in</p>
            <p class="text-white">Pressure: 29.7 in</p>
            <h3 class="text-white p-day me-3">29.0 °c</h3>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-12">
          <div class="weather-day d-flex justify-content-center">
            <div class="day-by-day text-white">
              <p>Sun</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.3 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Mon</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Tue</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Wed</p>
              <img
                src="img/patchy-rain-possible.webp"
                class="img-day"
                title="Patchy rain possible"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Thu</p>
              <img
                src="img/moderate-rain.webp"
                class="img-day"
                title="Moderate rain"
              />
              <p class="p-day">27.6 °c</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h6 class="mt-3">HTML Code</h6>
    <textarea class="w-100"><div id="weatherapi-weather-widget-1"></div><script type='text/javascript' src='https://www.weatherapi.com/weather/widget.ashx?loc=2966176&wid=1&tu=2 div=weatherapi-weather-widget-1'async></script><noscript><a href="https://www.weatherapi.com/weather/q/semarang-2966176" alt="Hour by hour Semarang weather">10 day hour by hour Semarang weather</a></noscript>
    </textarea>
  </div>
  <div class="col-xl-5">
    <h4>Weather Widget #2</h4>
    <div
      class="div-weather-foot"
      style="
        background-image: linear-gradient(to right, #fc466b, #3f5efb);
      "
    >
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <span class="span-partly-cloudly text-white">Semarang</span>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="div-partly-cloudly">
            <img src="img/cloudly.webp" title="Cloudly" />
            <span class="span-partly-cloudly text-white"
              >Partly cloudy</span
            >
          </div>
          <div class="div-wind-precip text-end">
            <p class="text-white">Wind: 6.9 mph</p>
            <p class="text-white">Precip: 0.0 in</p>
            <p class="text-white">Pressure: 29.7 in</p>
            <h3 class="text-white p-day me-3">29.0 °c</h3>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-12">
          <div class="weather-day d-flex justify-content-center">
            <div class="day-by-day text-white">
              <p>Sun</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.3 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Mon</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Tue</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Wed</p>
              <img
                src="img/patchy-rain-possible.webp"
                class="img-day"
                title="Patchy rain possible"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Thu</p>
              <img
                src="img/moderate-rain.webp"
                class="img-day"
                title="Moderate rain"
              />
              <p class="p-day">27.6 °c</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h6 class="mt-3">HTML Code</h6>
    <textarea class="w-100"><div id="weatherapi-weather-widget-2"></div><script type='text/javascript' src='https://www.weatherapi.com/weather/widget.ashx?loc=2966176&wid=2&tu=2&div=weatherapi-weather-widget-2' async></script><noscript><a href="https://www.weatherapi.com/weather/q/semarang-2966176" alt="Hour by hour Semarang weather">10 day hour by hour Semarang weather</a></noscript>
    </textarea>
  </div>
</div>
<div class="row justify-content-center">
  <div class="col-xl-5">
    <h4>Weather Widget #3</h4>
    <div
      class="div-weather-foot"
      style="
        background-image: linear-gradient(
          to right,
          #0f0c29,
          #302b63,
          #24243e
        );
      "
    >
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <span class="span-partly-cloudly text-white">Semarang</span>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="div-partly-cloudly">
            <img src="img/cloudly.webp" title="Cloudly" />
            <span class="span-partly-cloudly text-white"
              >Partly cloudy</span
            >
          </div>
          <div class="div-wind-precip text-end">
            <p class="text-white">Wind: 6.9 mph</p>
            <p class="text-white">Precip: 0.0 in</p>
            <p class="text-white">Pressure: 29.7 in</p>
            <h3 class="text-white p-day me-3">29.0 °c</h3>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-12">
          <div class="weather-day d-flex justify-content-center">
            <div class="day-by-day text-white">
              <p>Sun</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.3 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Mon</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Tue</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Wed</p>
              <img
                src="img/patchy-rain-possible.webp"
                class="img-day"
                title="Patchy rain possible"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Thu</p>
              <img
                src="img/moderate-rain.webp"
                class="img-day"
                title="Moderate rain"
              />
              <p class="p-day">27.6 °c</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h6 class="mt-3">HTML Code</h6>
    <textarea class="w-100"><div id="weatherapi-weather-widget-3"></div><script type='text/javascript' src='https://www.weatherapi.com/weather/widget.ashx?loc=2966176&wid=3&tu=2&div=weatherapi-weather-widget-3' async></script><noscript><a href="https://www.weatherapi.com/weather/q/semarang-2966176" alt="Hour by hour Semarang weather">10 day hour by hour Semarang weather</a></noscript>
    </textarea>
  </div>
  <div class="col-xl-5">
    <h4>Weather Widget #4</h4>
    <div
      class="div-weather-foot"
      style="
        background-image: linear-gradient(to right, #00f260, #0575e6);
      "
    >
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <span class="span-partly-cloudly text-white">Semarang</span>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="div-partly-cloudly">
            <img src="img/cloudly.webp" title="Cloudly" />
            <span class="span-partly-cloudly text-white"
              >Partly cloudy</span
            >
          </div>
          <div class="div-wind-precip text-end">
            <p class="text-white">Wind: 6.9 mph</p>
            <p class="text-white">Precip: 0.0 in</p>
            <p class="text-white">Pressure: 29.7 in</p>
            <h3 class="text-white p-day me-3">29.0 °c</h3>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-12">
          <div class="weather-day d-flex justify-content-center">
            <div class="day-by-day text-white">
              <p>Sun</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.3 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Mon</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Tue</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Wed</p>
              <img
                src="img/patchy-rain-possible.webp"
                class="img-day"
                title="Patchy rain possible"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Thu</p>
              <img
                src="img/moderate-rain.webp"
                class="img-day"
                title="Moderate rain"
              />
              <p class="p-day">27.6 °c</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h6 class="mt-3">HTML Code</h6>
    <textarea class="w-100"><div id="weatherapi-weather-widget-4"></div><script type='text/javascript' src='https://www.weatherapi.com/weather/widget.ashx?loc=2966176&wid=4&tu=2&div=weatherapi-weather-widget-4' async></script><noscript><a href="https://www.weatherapi.com/weather/q/semarang-2966176" alt="Hour by hour Semarang weather">10 day hour by hour Semarang weather</a></noscript>
    </textarea>
  </div>
</div>
<div class="row justify-content-center">
  <div class="col-xl-5">
    <h4>Weather Widget #5</h4>
    <div
      class="div-weather-foot"
      style="
        background-image: linear-gradient(to right, #000046, #1cb5e0);
      "
    >
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <span class="span-partly-cloudly text-white">Semarang</span>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="div-partly-cloudly">
            <img src="img/cloudly.webp" title="Cloudly" />
            <span class="span-partly-cloudly text-white"
              >Partly cloudy</span
            >
          </div>
          <div class="div-wind-precip text-end">
            <p class="text-white">Wind: 6.9 mph</p>
            <p class="text-white">Precip: 0.0 in</p>
            <p class="text-white">Pressure: 29.7 in</p>
            <h3 class="text-white p-day me-3">29.0 °c</h3>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-12">
          <div class="weather-day d-flex justify-content-center">
            <div class="day-by-day text-white">
              <p>Sun</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.3 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Mon</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Tue</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Wed</p>
              <img
                src="img/patchy-rain-possible.webp"
                class="img-day"
                title="Patchy rain possible"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Thu</p>
              <img
                src="img/moderate-rain.webp"
                class="img-day"
                title="Moderate rain"
              />
              <p class="p-day">27.6 °c</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h6 class="mt-3">HTML Code</h6>
    <textarea class="w-100"><div id="weatherapi-weather-widget-5"></div><script type='text/javascript' src='https://www.weatherapi.com/weather/widget.ashx?loc=2966176&wid=5&tu=2&div=weatherapi-weather-widget-5' async></script><noscript><a href="https://www.weatherapi.com/weather/q/semarang-2966176" alt="Hour by hour Semarang weather">10 day hour by hour Semarang weather</a></noscript>
    </textarea>
  </div>
  <div class="col-xl-5">
    <h4>Weather Widget #6</h4>
    <div
      class="div-weather-foot"
      style="
        background-image: linear-gradient(to right, #ff5f6d, #ffc371);
      "
    >
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <span class="span-partly-cloudly text-white">Semarang</span>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="div-partly-cloudly">
            <img src="img/cloudly.webp" title="Cloudly" />
            <span class="span-partly-cloudly text-white"
              >Partly cloudy</span
            >
          </div>
          <div class="div-wind-precip text-end">
            <p class="text-white">Wind: 6.9 mph</p>
            <p class="text-white">Precip: 0.0 in</p>
            <p class="text-white">Pressure: 29.7 in</p>
            <h3 class="text-white p-day me-3">29.0 °c</h3>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-12">
          <div class="weather-day d-flex justify-content-center">
            <div class="day-by-day text-white">
              <p>Sun</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.3 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Mon</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Tue</p>
              <img
                src="img/heavy-rain.webp"
                class="img-day"
                title="Heavy rain"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Wed</p>
              <img
                src="img/patchy-rain-possible.webp"
                class="img-day"
                title="Patchy rain possible"
              />
              <p class="p-day">29.1 °c</p>
            </div>
            <div class="day-by-day text-white">
              <p>Thu</p>
              <img
                src="img/moderate-rain.webp"
                class="img-day"
                title="Moderate rain"
              />
              <p class="p-day">27.6 °c</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h6 class="mt-3">HTML Code</h6>
    <textarea class="w-100"><div id="weatherapi-weather-widget-6"></div><script type='text/javascript' src='https://www.weatherapi.com/weather/widget.ashx?loc=2966176&wid=6&tu=2&div=weatherapi-weather-widget-6' async></script><noscript><a href="https://www.weatherapi.com/weather/q/semarang-2966176" alt="Hour by hour Semarang weather">10 day hour by hour Semarang weather</a></noscript>
    </textarea>
  </div>
</div>`;
});

divPreviousOne.addEventListener("click", function () {
  if (divFahrenheit.classList.contains("active-div-f-c")) {
    divTableFahrenheitCelsius.innerHTML = `
              <div class="table-responsive">
                <table class="table table-bordered table-hover table-head">
                  <tr>
                    <td>
                      Sunrise: 05:26 AM <br />
                      Sunset: 05:46 PM
                    </td>
                    <td>Moonrise: 01:39 PM <br />Moonset: 01:26 AM</td>
                    <td style="background-color: #e4ad2b">
                      Max: <br />
                      90.8 °f
                    </td>
                    <td style="background-color: #e9d97e">
                      Min: <br />
                      81.1 °f
                    </td>
                    <td style="background-color: #f1c151">
                      Avg: <br />
                      84.3 °f
                    </td>
                    <td style="background-color: #0899ca">
                      Precip: <br />
                      0.55 in
                    </td>
                    <td style="background-color: #80f9cc">
                      Max Wind: <br />
                      13.3 mph
                    </td>
                  </tr>
                </table>
              </div>

              <div class="table-responsive">
                <table class="table table-bordered table-hover table-head">
                  <tr>
                    <td style="width: 130px"></td>
                    <td>
                      Thu 03 <br />
                      0:00 am
                    </td>
                    <td>Thu 03 <br />3:00 am</td>
                    <td>
                      Thu 03 <br />
                      6:00 am
                    </td>
                    <td>
                      Thu 03 <br />
                      9:00 am
                    </td>
                    <td>
                      Thu 03 <br />
                      12:00 pm
                    </td>
                    <td>
                      Thu 03 <br />
                      3:00 pm
                    </td>
                    <td>
                      Thu 03 <br />
                      6:00 pm
                    </td>
                    <td>
                      Thu 03 <br />
                      8:00 pm
                    </td>
                  </tr>
                  <tr>
                    <td><p>Icon</p></td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/partly-cloudly.webp"
                        title="Partly cloudly"
                      />
                    </td>
                    <td>
                      <img
                        src="img/partly-cloudly.webp"
                        title="Partly cloudly"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><p>Temp</p></td>
                    <td style="background-color: #e9d97e">
                      <p>81.9°f</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>81.3°f</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>81.1°f</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>81.9°f</p>
                    </td>
                    <td style="background-color: #e4ad2b">
                      <p>90.3°f</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>88.3°f</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>85.5°f</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>83.5°f</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Wind</p></td>
                    <td style="background-color: #9bf6f3">
                      <p>2.2 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>2.7 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.6 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.8 mph</p>
                    </td>
                    <td style="background-color: #a4f6f9">
                      <p>6.5 mph</p>
                    </td>
                    <td style="background-color: #80f9cc">
                      <p>8.1 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.8 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>2.0 mph</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Precip</p></td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.00 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.01 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.00 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.00 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #8adaf5">
                      <p>0.07 in</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Cloud</p></td>
                    <td style="background-color: #d1d3d4">
                      <p>67%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>59%</p>
                    </td>
                    <td style="background-color: #bcbfc0">
                      <p>82%</p>
                    </td>
                    <td style="background-color: #e1e3e4">
                      <p>41%</p>
                    </td>
                    <td style="background-color: #e1e3e4">
                      <p>37%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>59%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>52%</p>
                    </td>
                    <td style="background-color: #bcbfc0">
                      <p>74%</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Humidity</p></td>
                    <td>
                      <p>75%</p>
                    </td>
                    <td>
                      <p>77%</p>
                    </td>
                    <td>
                      <p>78%</p>
                    </td>
                    <td>
                      <p>75%</p>
                    </td>
                    <td>
                      <p>59%</p>
                    </td>
                    <td>
                      <p>62%</p>
                    </td>
                    <td>
                      <p>68%</p>
                    </td>
                    <td>
                      <p>74%</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Pressure</p></td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.7 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                  </tr>
                </table>
              </div>
              `;
  } else if (divCelsius.classList.contains("active-div-f-c")) {
    divTableFahrenheitCelsius.innerHTML = `
              <div class="table-responsive">
                <table class="table table-bordered table-hover table-head">
                  <tr>
                    <td>
                      Sunrise: 05:26 AM <br />
                      Sunset: 05:46 PM
                    </td>
                    <td>Moonrise: 01:39 PM <br />Moonset: 01:26 AM</td>
                    <td style="background-color: #e4ad2b">
                      Max: <br />
                      32.7 °c
                    </td>
                    <td style="background-color: #e9d97e">
                      Min: <br />
                      27.3 °c
                    </td>
                    <td style="background-color: #f1c151">
                      Avg: <br />
                      29.1 °c
                    </td>
                    <td style="background-color: #0899ca">
                      Precip: <br />
                      0.55 in
                    </td>
                    <td style="background-color: #80f9cc">
                      Max Wind: <br />
                      13.3 mph
                    </td>
                  </tr>
                </table>
              </div>

              <div class="table-responsive">
                <table class="table table-bordered table-hover table-head">
                  <tr>
                    <td style="width: 130px"></td>
                    <td>
                      Thu 03 <br />
                      0:00 am
                    </td>
                    <td>Thu 03 <br />3:00 am</td>
                    <td>
                      Thu 03 <br />
                      6:00 am
                    </td>
                    <td>
                      Thu 03 <br />
                      9:00 am
                    </td>
                    <td>
                      Thu 03 <br />
                      12:00 pm
                    </td>
                    <td>
                      Thu 03 <br />
                      3:00 pm
                    </td>
                    <td>
                      Thu 03 <br />
                      6:00 pm
                    </td>
                    <td>
                      Thu 03 <br />
                      8:00 pm
                    </td>
                  </tr>
                  <tr>
                    <td><p>Icon</p></td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/partly-cloudly.webp"
                        title="Partly cloudly"
                      />
                    </td>
                    <td>
                      <img
                        src="img/partly-cloudly.webp"
                        title="Partly cloudly"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><p>Temp</p></td>
                    <td style="background-color: #e9d97e">
                      <p>27.7 °c</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>27.4 °c</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>27.3 °c</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>27.7 °c</p>
                    </td>
                    <td style="background-color: #e4ad2b">
                      <p>32.4 °c</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>31.3 °c</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>29.7 °c</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>28.6 °c</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Wind</p></td>
                    <td style="background-color: #9bf6f3">
                      <p>2.2 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>2.7 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.6 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.8 mph</p>
                    </td>
                    <td style="background-color: #a4f6f9">
                      <p>6.5 mph</p>
                    </td>
                    <td style="background-color: #80f9cc">
                      <p>8.1 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.8 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>2.0 mph</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Precip</p></td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.00 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.01 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.00 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.00 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #8adaf5">
                      <p>0.07 in</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Cloud</p></td>
                    <td style="background-color: #d1d3d4">
                      <p>67%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>59%</p>
                    </td>
                    <td style="background-color: #bcbfc0">
                      <p>82%</p>
                    </td>
                    <td style="background-color: #e1e3e4">
                      <p>41%</p>
                    </td>
                    <td style="background-color: #e1e3e4">
                      <p>37%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>59%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>52%</p>
                    </td>
                    <td style="background-color: #bcbfc0">
                      <p>74%</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Humidity</p></td>
                    <td>
                      <p>75%</p>
                    </td>
                    <td>
                      <p>77%</p>
                    </td>
                    <td>
                      <p>78%</p>
                    </td>
                    <td>
                      <p>75%</p>
                    </td>
                    <td>
                      <p>59%</p>
                    </td>
                    <td>
                      <p>62%</p>
                    </td>
                    <td>
                      <p>68%</p>
                    </td>
                    <td>
                      <p>74%</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Pressure</p></td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.7 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                  </tr>
                </table>
              </div>
              `;
  }
});

divNextOne.addEventListener("click", function () {
  if (divFahrenheit.classList.contains("active-div-f-c")) {
    divTableFahrenheitCelsius.innerHTML = `
              <div class="table-responsive">
                <table class="table table-bordered table-hover table-head">
                  <tr>
                    <td>
                      Sunrise: 05:26 AM <br />
                      Sunset: 05:46 PM
                    </td>
                    <td>Moonrise: 01:39 PM <br />Moonset: 01:26 AM</td>
                    <td style="background-color: #e4ad2b">
                      Max: <br />
                      91.8 °f
                    </td>
                    <td style="background-color: #e9d97e">
                      Min: <br />
                      80.2 °f
                    </td>
                    <td style="background-color: #f1c151">
                      Avg: <br />
                      85.0 °f
                    </td>
                    <td style="background-color: #0899ca">
                      Precip: <br />
                      0.65 in
                    </td>
                    <td style="background-color: #80f9cc">
                      Max Wind: <br />
                      8.9 mph
                    </td>
                  </tr>
                </table>
              </div>

              <div class="table-responsive">
                <table class="table table-bordered table-hover table-head">
                  <tr>
                    <td style="width: 130px"></td>
                    <td>
                      Fri 04 <br />
                      0:00 am
                    </td>
                    <td>Thu 03 <br />3:00 am</td>
                    <td>
                      Fri 04 <br />
                      6:00 am
                    </td>
                    <td>
                      Fri 04 <br />
                      9:00 am
                    </td>
                    <td>
                      Fri 04 <br />
                      12:00 pm
                    </td>
                    <td>
                      Fri 04 <br />
                      3:00 pm
                    </td>
                    <td>
                      Fri 04 <br />
                      6:00 pm
                    </td>
                    <td>
                      Fri 04 <br />
                      8:00 pm
                    </td>
                  </tr>
                  <tr>
                    <td><p>Icon</p></td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><p>Temp</p></td>
                    <td style="background-color: #e9d97e">
                      <p>81.3°f</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>80.1°f</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>79.0°f</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>82.8°f</p>
                    </td>
                    <td style="background-color: #e4ad2b">
                      <p>89.8°f</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>87.4°f</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>83.5°f</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>82.4°f</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Wind</p></td>
                    <td style="background-color: #9bf6f3">
                      <p>3.1 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>2.2 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.8 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.6 mph</p>
                    </td>
                    <td style="background-color: #a4f6f9">
                      <p>3.4 mph</p>
                    </td>
                    <td style="background-color: #80f9cc">
                      <p>7.4 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.4 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>1.8 mph</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Precip</p></td>
                    <td style="background-color: #ddf0f7">
                      <p>0.01 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.01 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.01 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.03 in</p>
                    </td>
                    <td style="background-color: #8adaf5">
                      <p>0.02 in</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Cloud</p></td>
                    <td style="background-color: #d1d3d4">
                      <p>81%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>70%</p>
                    </td>
                    <td style="background-color: #bcbfc0">
                      <p>63%</p>
                    </td>
                    <td style="background-color: #e1e3e4">
                      <p>83%</p>
                    </td>
                    <td style="background-color: #e1e3e4">
                      <p>73%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>86%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>71%</p>
                    </td>
                    <td style="background-color: #bcbfc0">
                      <p>88%</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Humidity</p></td>
                    <td>
                      <p>77%</p>
                    </td>
                    <td>
                      <p>80%</p>
                    </td>
                    <td>
                      <p>84%</p>
                    </td>
                    <td>
                      <p>72%</p>
                    </td>
                    <td>
                      <p>58%</p>
                    </td>
                    <td>
                      <p>64%</p>
                    </td>
                    <td>
                      <p>73%</p>
                    </td>
                    <td>
                      <p>76%</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Pressure</p></td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                  </tr>
                </table>
              </div>
              `;
  } else if (divCelsius.classList.contains("active-div-f-c")) {
    divTableFahrenheitCelsius.innerHTML = `
              <div class="table-responsive">
                <table class="table table-bordered table-hover table-head">
                  <tr>
                    <td>
                      Sunrise: 05:26 AM <br />
                      Sunset: 05:46 PM
                    </td>
                    <td>Moonrise: 01:39 PM <br />Moonset: 01:26 AM</td>
                    <td style="background-color: #e4ad2b">
                      Max: <br />
                      33.2 °c
                    </td>
                    <td style="background-color: #e9d97e">
                      Min: <br />
                      26.8 °c
                    </td>
                    <td style="background-color: #f1c151">
                      Avg: <br />
                      29.4 °c
                    </td>
                    <td style="background-color: #0899ca">
                      Precip: <br />
                      0.65 in
                    </td>
                    <td style="background-color: #80f9cc">
                      Max Wind: <br />
                      8.9 mph
                    </td>
                  </tr>
                </table>
              </div>

              <div class="table-responsive">
                <table class="table table-bordered table-hover table-head">
                  <tr>
                    <td style="width: 130px"></td>
                    <td>
                      Fri 04 <br />
                      0:00 am
                    </td>
                    <td>Thu 03 <br />3:00 am</td>
                    <td>
                      Fri 04 <br />
                      6:00 am
                    </td>
                    <td>
                      Fri 04 <br />
                      9:00 am
                    </td>
                    <td>
                      Fri 04 <br />
                      12:00 pm
                    </td>
                    <td>
                      Fri 04 <br />
                      3:00 pm
                    </td>
                    <td>
                      Fri 04 <br />
                      6:00 pm
                    </td>
                    <td>
                      Fri 04 <br />
                      8:00 pm
                    </td>
                  </tr>
                  <tr>
                    <td><p>Icon</p></td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/patchy-rain-possible.webp"
                        title="Patchy rain possible"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                    <td>
                      <img
                        src="img/light-rain-shower.webp"
                        title="Light rain shower"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><p>Temp</p></td>
                    <td style="background-color: #e9d97e">
                      <p>27.4°c</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>26.7°c</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>26.1°c</p>
                    </td>
                    <td style="background-color: #e9d97e">
                      <p>28.2°c</p>
                    </td>
                    <td style="background-color: #e4ad2b">
                      <p>32.1°c</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>30.8°c</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>28.6°c</p>
                    </td>
                    <td style="background-color: #f1c151">
                      <p>28.0°c</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Wind</p></td>
                    <td style="background-color: #9bf6f3">
                      <p>3.1 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>2.2 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.8 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.6 mph</p>
                    </td>
                    <td style="background-color: #a4f6f9">
                      <p>3.4 mph</p>
                    </td>
                    <td style="background-color: #80f9cc">
                      <p>7.4 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>3.4 mph</p>
                    </td>
                    <td style="background-color: #9bf6f3">
                      <p>1.8 mph</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Precip</p></td>
                    <td style="background-color: #ddf0f7">
                      <p>0.01 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.01 in</p>
                    </td>
                    <td style="background-color: #ffffff">
                      <p>0.01 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.02 in</p>
                    </td>
                    <td style="background-color: #ddf0f7">
                      <p>0.03 in</p>
                    </td>
                    <td style="background-color: #8adaf5">
                      <p>0.02 in</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Cloud</p></td>
                    <td style="background-color: #d1d3d4">
                      <p>81%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>70%</p>
                    </td>
                    <td style="background-color: #bcbfc0">
                      <p>63%</p>
                    </td>
                    <td style="background-color: #e1e3e4">
                      <p>83%</p>
                    </td>
                    <td style="background-color: #e1e3e4">
                      <p>73%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>86%</p>
                    </td>
                    <td style="background-color: #d1d3d4">
                      <p>71%</p>
                    </td>
                    <td style="background-color: #bcbfc0">
                      <p>88%</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Humidity</p></td>
                    <td>
                      <p>77%</p>
                    </td>
                    <td>
                      <p>80%</p>
                    </td>
                    <td>
                      <p>84%</p>
                    </td>
                    <td>
                      <p>72%</p>
                    </td>
                    <td>
                      <p>58%</p>
                    </td>
                    <td>
                      <p>64%</p>
                    </td>
                    <td>
                      <p>73%</p>
                    </td>
                    <td>
                      <p>76%</p>
                    </td>
                  </tr>
                  <tr>
                    <td><p>Pressure</p></td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.8 in</p>
                    </td>
                    <td style="background-color: #7fecf9">
                      <p>29.9 in</p>
                    </td>
                  </tr>
                </table>
              </div>
              `;
  }
});
