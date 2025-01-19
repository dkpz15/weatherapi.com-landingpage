const navCurrent = document.querySelector(".nav-current");
const navForecast = document.querySelector(".nav-forecast");
const navSearch = document.querySelector(".nav-search");
const navHistory = document.querySelector(".nav-history");
const navFuture = document.querySelector(".nav-future");
const navAstronomy = document.querySelector(".nav-astronomy");
const navTimezone = document.querySelector(".nav-timezone");
const navSports = document.querySelector(".nav-sports");
const navTabsContent = document.querySelector(".nav-tabs-content");
const navTabsLink = document.querySelectorAll(".nav-tabs-link");

navTabsLink.forEach((nav) => {
  nav.addEventListener("click", function () {
    removeActive();
    this.classList.add("active");
  });
});

function removeActive() {
  navTabsLink.forEach((nav) => {
    nav.classList.remove("active");
  });
}

navCurrent.addEventListener("click", function () {
  navTabsContent.innerHTML = `<hr />
    <table class="ms-2">
      <tr>
        <th width="230px">Parameter</th>
        <th width="155px">Value</th>
        <th width="140px">Type</th>
        <th width="195px">Location</th>
        <th width="300px">Description</th>
      </tr>
    </table>
    <div class="div-line w-100 mt-3"></div>
    <table class="ms-2 mt-2">
      <tr>
        <td class="fw-bold" width="230px">aqi</td>
        <td width="155px">
          <select>
            <option value="no" selected>no</option>
            <option value="yes">yes</option>
          </select>
        </td>
        <td width="140px">string</td>
        <td width="195px">query</td>
        <td width="300px">Get air quality data</td>
      </tr>
    </table>
    <button class="text-white" type="submit">
      Show Response
    </button>`;
});

navForecast.addEventListener("click", function () {
  navTabsContent.innerHTML = `<hr />
    <table class="ms-2">
      <tr>
        <th width="140px">Parameter</th>
        <th width="90px">Value</th>
        <th width="105px">Type</th>
        <th width="120px">Location</th>
        <th width="300px">Description</th>
      </tr>
    </table>
    <div class="div-line w-100 mt-3"></div>
    <table class="ms-2 mt-2">
      <tr>
        <td class="fw-bold" width="140px">days</td>
        <td width="90px">
          <select class="mt-1">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </td>
        <td width="105px">integer</td>
        <td width="120px">query</td>
        <td width="300px">Number of days of weather forecast. Value ranges from 1 to 10</td>
      </tr>
    </table>
    <hr />
    <table class="ms-2 mt-2">
      <tr>
        <td class="fw-bold" width="140px">aqi</td>
        <td width="90px">
         <select class="mt-1">
            <option value="no" selected>no</option>
            <option value="yes">yes</option>
         </select>
        </td>
        <td width="105px">string</td>
        <td width="120px">query</td>
        <td width="300px">Get air quality data</td>
      </tr>
    </table>
    <hr />
    <table class="ms-2 mt-2">
      <tr>
        <td class="fw-bold" width="140px">alerts</td>
        <td width="90px">
         <select class="mt-1">
            <option value="no" selected>no</option>
            <option value="yes">yes</option>
         </select>
        </td>
        <td width="105px">string</td>
        <td width="120px">query</td>
        <td width="300px">Get weather alert data</td>
      </tr>
    </table>
    <button class="text-white" type="submit">
      Show Response
    </button>`;
});

navSearch.addEventListener("click", function () {
  navTabsContent.innerHTML = `<button class="text-white" type="submit">
    Show Response
  </button>`;
});

navHistory.addEventListener("click", function () {
  navTabsContent.innerHTML = `<hr />
    <table class="ms-2">
      <tr>
        <th width="110px">Parameter</th>
        <th width="300px">Value</th>
        <th width="70px">Type</th>
        <th width="95px">Location</th>
        <th width="300px">Description</th>
      </tr>
    </table>
    <div class="div-line w-100 mt-3"></div>
    <table class="ms-2 table-body-two">
      <tr>
        <td class="fw-bold" width="110px">dt</td>
        <td width="300px">
          <input
            type="text"
            value="2010-01-01"
            class="mt-1 ps-1"
          />
        </td>
        <td width="70px">string</td>
        <td width="95px">query</td>
        <td width="300px">
          <p class="p-pass-two">
            Date on or after 1st Jan, 2010 in yyyy-MM-dd format
          </p>
        </td>
      </tr>
    </table>
    <button class="text-white button-history mt-1" type="submit">
    Show Response
  </button>`;
});

navFuture.addEventListener("click", function () {
  const date = new Date();
  const getYear = date.getFullYear();
  const getMonth = date.getMonth();
  const getDate = date.getDate();

  if (getMonth == 11) {
    getMonth = -1;
  }
  navTabsContent.innerHTML = `<hr />
    <table class="ms-2">
      <tr>
        <th width="110px">Parameter</th>
        <th width="300px">Value</th>
        <th width="70px">Type</th>
        <th width="95px">Location</th>
        <th width="300px">Description</th>
      </tr>
    </table>
    <div class="div-line w-100 mt-3"></div>
    <table class="ms-2 table-body-three">
      <tr>
        <td class="fw-bold" width="110px">dt</td>
        <td width="300px">
          <input
            type="text"
            value="${getYear}-${
    getMonth > 9 ? `${getMonth + 2}` : `0${getMonth + 2}`
  }-${getDate > 9 ? `${getDate}` : `0${getDate}`}"
            class="mt-1 ps-1"
          />
        </td>
        <td width="70px">string</td>
        <td width="95px">query</td>
        <td width="300px">
          <p class="p-pass-three">
          Date between 14 days and 300 days from today in the future in yyyy-MM-dd format
          </p>
        </td>
      </tr>
    </table>
    <button class="text-white button-future" type="submit">
    Show Response
  </button>`;
});

navAstronomy.addEventListener("click", function () {
  const date = new Date();
  const getYear = date.getFullYear();
  const getMonth = date.getMonth();
  const getDate = date.getDate();

  navTabsContent.innerHTML = `<hr />
    <table class="ms-2">
      <tr>
        <th width="110px">Parameter</th>
        <th width="300px">Value</th>
        <th width="70px">Type</th>
        <th width="95px">Location</th>
        <th width="300px">Description</th>
      </tr>
    </table>
    <div class="div-line w-100 mt-3"></div>
    <table class="ms-2">
      <tr>
        <td class="fw-bold" width="110px">dt</td>
        <td width="300px">
          <input
            type="text"
            value="${getYear}-${
    getMonth > 9 ? `${getMonth + 1}` : `0${getMonth + 1}`
  }-${getDate > 9 ? `${getDate}` : `0${getDate}`}"
            class="mt-1 ps-1"
          />
        </td>
        <td width="70px">string</td>
        <td width="95px">query</td>
        <td width="300px">
          <p class="p-pass-four">
          Date in yyyy-MM-dd format
          </p>
        </td>
      </tr>
    </table>
    <button class="text-white" type="submit">
    Show Response
  </button>`;
});

navTimezone.addEventListener("click", function () {
  navTabsContent.innerHTML = `<button class="text-white" type="submit">
    Show Response
  </button>`;
});

navSports.addEventListener("click", function () {
  navTabsContent.innerHTML = `<button class="text-white" type="submit">
      Show Response
    </button>`;
});
