const navIconTexts = document.querySelectorAll(".nav-icon-text");
const contentBody = document.querySelector(".content-body");
const spanWebsite = document.querySelector(".span-website");
const spanAPI = document.querySelector(".span-api");
const spanSLA = document.querySelector(".span-sla");
navIconTexts.forEach((nav) => {
  fadeContentBody();
  nav.addEventListener("click", function () {
    contentBody.classList.add("opacity-nil");
    fadeContentBody();

    removeDiv();
    removeIcon();
    removeText();

    this.classList.add("active-div");
    this.firstElementChild.childNodes[0].classList.add("active-icon");
    this.firstElementChild.childNodes[1].classList.add("active-text");
  });
});

function fadeContentBody() {
  setTimeout(() => {
    contentBody.classList.remove("opacity-nil");
  }, 300);
}
function removeDiv() {
  navIconTexts.forEach((nav) => {
    nav.classList.remove("active-div");
  });
}
function removeText() {
  navIconTexts.forEach((nav) => {
    nav.firstElementChild.childNodes[1].classList.remove("active-text");
  });
}
function removeIcon() {
  navIconTexts.forEach((nav) => {
    nav.firstElementChild.childNodes[0].classList.remove("active-icon");
  });
}

spanWebsite.addEventListener("click", function () {
  contentBody.innerHTML = `<p class="p-content-header">
    Please read these terms of use carefully before you start to use
    the WeatherAPI.com site. By using our site, you indicate that
    you accept these terms of use and that you agree to abide by
    them. If you do not agree to these terms of use, please refrain
    from using our site.
  </p>
  <h3>Reliance on information posted & Disclaimer</h3>
  <p class="p-content-body">
    The materials contained on our site are provided for general
    information purposes only and do not claim to be or constitute
    legal or other professional advice and shall not be relied upon
    as such.
  </p>
  <p class="p-content-body">
    We do not accept any responsibility for any loss which may arise
    from accessing or reliance on the information on this site and
    to the fullest extent permitted by Scottish law, we exclude all
    liability for loss or damages direct or indirect arising from
    use of this site.
  </p>
  <h3>Accessing our site</h3>
  <p class="p-content-body">
    Access to our site is permitted on a temporary basis, and we
    reserve the right to withdraw or amend the service we provide on
    our site without notice (see below). We will not be liable if
    for any reason our site is unavailable at any time or for any
    period.
  </p>
  <h3>Copyright</h3>
  <p class="p-content-body">
    We are the owner or the licensee of all intellectual property
    rights in our site, and in the material published on it. Those
    works are protected by copyright laws and treaties around the
    world. All such rights are reserved.
  </p>
  <p class="p-content-body">
    You may print off one copy, and may download extracts, of any
    page(s) from our site for your personal reference and you may
    draw the attention of others within your organisation to
    material posted on our site.
  </p>
  <p class="p-content-body">
    You must not modify the paper or digital copies of any materials
    you have printed off or downloaded in any way, and you must not
    use any illustrations, photographs, video or audio sequences or
    any graphics separately from any accompanying text.
  </p>
  <p class="p-content-body">
    Our status (and that of any identified contributors) as the
    authors of material on our site must always be acknowledged.
  </p>
  <p class="p-content-body">
    You must not use any part of the materials on our site for
    commercial purposes without obtaining a licence to do so from us
    or our licensors.
  </p>
  <p class="p-content-body">
    If you print off, copy or download any part of our site in
    breach of these terms of use, your right to use our site will
    cease immediately and you must, at our option, return or destroy
    any copies of the materials you have made.
  </p>
  <h3>Payment</h3>
  <p class="p-content-body">
    You agree to pay the full price for the service you purchase
    from the Website. We reserve the right to charge extra charges
    for your credit card or PayPal account for any products
    purchased from the Website. You are responsible for the timely
    payment of all fees and for providing us with a valid credit
    card or PayPal account details for payment of all fees. No
    refunds will be given after monthly or longer period fees have
    been made.
  </p>
  <h3>Our site changes regularly</h3>
  <p class="p-content-body">
    We aim to update our site regularly, and may change the content
    at any time. If the need arises, we may suspend access to our
    site, or close it indefinitely. Any of the material on our site
    may be out of date at any given time, and we are under no
    obligation to update such material.
  </p>
  <h3>Our liability</h3>
  <p class="p-content-body">
    The material displayed on our site is provided without any
    guarantees, conditions or warranties as to its accuracy. To the
    extent permitted by law, we, and third parties connected to us
    hereby expressly exclude:
  </p>
  <ul class="ul-website ms-2">
    <li>
      All conditions, warranties and other terms which might
      otherwise be implied by statute, common law or the law of
      equity.
    </li>
    <li>
      Any liability for any direct, indirect or consequential loss
      or damage incurred by any user in connection with our site or
      in connection with the use, inability to use, or results of
      the use of our site, any websites linked to it and any
      materials posted on it, including, without limitation any
      liability for:
    </li>
    <li>loss of income or revenue;</li>
    <li>loss of business;</li>
    <li>loss of profits or contracts;</li>
    <li>loss of anticipated savings;</li>
    <li>loss of data;</li>
    <li>loss of goodwill;</li>
    <li>wasted management or office time; and</li>
  </ul>
  <p class="p-content-body">
    for any other loss or damage of any kind, however arising and
    whether caused by tort (including negligence), breach of
    contract or otherwise, even if foreseeable, provided that this
    condition shall not prevent claims for loss of or damage to your
    tangible property or any other claims for direct financial loss
    that are not excluded by any of the categories set out above.
  </p>
  <p class="p-content-body">
    This does not affect our liability for death or personal injury
    arising from our negligence, nor our liability for fraudulent
    misrepresentation or misrepresentation as to a fundamental
    matter, nor any other liability which cannot be excluded or
    limited under applicable law.
  </p>
  <h3>Information about you and your visits to our site</h3>
  <p class="p-content-body">
    We process information about you in accordance with our
    <a href="privacypolicy.html">privacy policy</a>.
  </p>
  <p class="p-content-body">
    By using our site, you consent to such processing and you
    warrant that all data provided by you is accurate.
  </p>
  <h3>Viruses, hacking and other offences</h3>
  <p class="p-content-body">
    You must not misuse our site by knowingly introducing viruses,
    trojans, worms, logic bombs or other material which is malicious
    or technologically harmful. You must not attempt to gain
    unauthorised access to our site, the server on which our site is
    stored or any server, computer or database connected to our
    site. You must not attack our site via a denial-of-service
    attack or a distributed denial-of service attack.
  </p>
  <p class="p-content-body">
    By breaching this provision, you would commit a criminal offence
    under the Computer Misuse Act 1990. We will report any such
    breach to the relevant law enforcement authorities and we will
    co-operate with those authorities by disclosing your identity to
    them. In the event of such a breach, your right to use our site
    will cease immediately.
  </p>
  <p class="p-content-body">
    We will not be liable for any loss or damage caused by a
    distributed denial-of-service attack, viruses or other
    technologically harmful material that may infect your computer
    equipment, computer programs, data or other proprietary material
    due to your use of our site or to your downloading of any
    material posted on it, or on any website linked to it.
  </p>
  <h3>Links from our site</h3>
  <p class="p-content-body">
    Where our site contains links to other sites and resources
    provided by third parties, these links are provided for your
    information only. We have no control over the contents of those
    sites or resources, and accept no responsibility for them or for
    any loss or damage that may arise from your use of them. When
    accessing a site via our website we advise you check their terms
    of use and privacy policies to ensure compliance and determine
    how they may use your information.
  </p>
  <h3>Variations</h3>
  <p class="p-content-body">
    We may revise these terms of use at any time by amending this
    page. You are expected to check this page from time to time to
    take notice of any changes we made, as they are binding on you.
    Some of the provisions contained in these terms of use may also
    be superseded by provisions or notices published elsewhere on
    our site.
  </p>
  <h3>Your concerns</h3>
  <p class="p-content-body">
    If you have any concerns about material which appears on our
    site, please
    <a href="contact.html">contact us</a>.
  </p>
  <p class="p-content-body mt-5">
    Thank you for visiting our site.
  </p>`;
});

spanAPI.addEventListener("click", function () {
  contentBody.innerHTML = `<p class="p-content-header">
  IMPORTANT--READ CAREFULLY: These Terms and Conditions of Service (these
  "Terms and Conditions") apply to our API. The data currently provided or
  becoming available in the future (the "Services") will be subject to these
  Terms and Conditions. By accessing and using the Services, you will be
  deemed to have agreed to abide by these Terms and Conditions and any other
  written rules, restrictions, disclaimers, terms, and conditions published
  or provided to you in conjunction with the Services. WeatherAPI.com
  reserves the right to modify these Terms and Conditions from time to time.
  Any such modification will be notified to you by email and will govern
  your use of the Services commencing from the later of the time it is
  posted on our website or the time that you receive the email notification.
  You will receive no less than ninety days notice in writing of any change
  to your rights to access and/or use the data that is made available
  through the Services.
</p>
<h3>LIMITED RIGHT TO USE SERVICES</h3>
<p class="p-content-body">
  WeatherAPI.com grants you the right to access, use, and view the standard
  (free) Services, together with any Premium Services for which you have
  subscribed and agreed to pay the applicable subscription fees, You may
  access, view and make copies of the data in the API for your personal or
  commercial use, including making the data in the API available in online
  and/or mobile applications/services (a single API key/subscription may be
  used in respect of one online or mobile application/service only) which
  are, as applicable, sold or resold by you or your group companies or other
  third parties authorised by you (‘Representatives’). If you are Free API
  user then for all uses of the data, you will credit WeatherAPI.com by name
  or brand logo as the source of the data. You may not transfer your access
  privileges or disclose your password to any third party. WeatherAPI.com
  reserves the right to modify or terminate any of the Services at any time.
  You agree not to sell our weather data to any third party. As a condition
  of your use of the Services, you warrant to WeatherAPI.com that you will
  not use the Services for any purpose that is unlawful or prohibited by
  these Terms and Conditions. If you violate any of these Terms and
  Conditions, your authorization to use the Services automatically
  terminates and you must immediately destroy any downloaded or printed
  materials.
</p>
<h3>CHARGES AND PAYMENT</h3>
<p class="p-content-body">
  You agree to pay the subscription fees for any Premium Services for which
  you subscribe, as indicated via. Website, email or telephonic conversation
  for such Services, unless and until you cancel your subscription.
  WeatherAPI.com reserves the right to modify the subscription fees upon
  notice of such modifications to ongoing subscribers from time to time, as
  to periods for which such fees have not yet been paid. WeatherAPI.com will
  not be required to refund any previously collected subscription fees for
  any period after you have cancelled your subscription. WeatherAPI.com
  reserves the right to appoint one or more third parties to provide billing
  and collection fulfillment services. In such case, you will be asked to
  enter into an agreement with such third party for payment of the
  subscription fees, as a condition of receiving the Services. You are
  responsible for all charges associated with connecting to the Services,
  including, without limitation, all cable or telephone access and telephone
  and computer equipment necessary to access the Services.
</p>
<h3>SUBSCRIBER REFUND POLICY</h3>
<p class="p-content-body">
  You may cancel the service at any time, and will not be billed for
  additional subscription periods. However, when refunds are requested for
  subscription periods wholly or partially completed, this policy will
  govern the outcome of that request.
</p>
<p class="p-content-body">
  No refunds will be given after monthly or longer period fees have been
  made.
</p>
<h3>
  EVENTS BEYOND WeatherAPI.com'S CONTROL/UNCERTAINTY OF WEATHER PREDICTIONS
</h3>
<p class="p-content-body">
  WeatherAPI.com's ability to deliver the Services may be delayed, impaired,
  or interrupted by various events beyond WeatherAPI.com's control
  including, without limitation, malfunctions in data transmission,
  communications or equipment; failure by your Internet service provider or
  other third parties to transmit information; or war, riot, acts of
  terrorism, severe weather, or national disasters. The information and
  content provided as part of the Services may change very rapidly. Factors
  such as the speed of transmission and loading of such information on your
  computer equipment, the frequency with which you refresh the information,
  and other factors outside WeatherAPI.com's control, may delay the
  availability of such information. Weather information and weather
  predictions are by their nature of indeterminate reliability. Persons
  engaging in activities that could give rise to injury, death, or loss of
  property or profits as a result of adverse weather conditions do so at
  their own risk. You should consult governmental weather reports,
  bulletins, and advisories in planning any high risk weather-related
  activities.
</p>
<h3>PROPRIETARY RIGHTS</h3>
<p class="p-content-body">
  The contents of the Services, including any text, graphics, audio, and
  video, are copyrighted and may not be distributed, modified, reproduced,
  or used, in whole or in part, without the prior written consent of
  WeatherAPI.com.. You will not remove, alter, or obscure any copyright,
  trademark, and other proprietary notices displayed in conjunction with
  such content. WeatherAPI.com has applied for and/or obtained patents
  protecting certain aspects of the Services. You are not entitled to any
  rights under such patents, which rights can only be granted pursuant to a
  separate written patent license agreement. Any rights not expressly
  granted by these Terms and Conditions or any applicable license agreements
  are reserved by WeatherAPI.com.
</p>
<h3>LIMITATION OF LIABILITY</h3>
<p class="p-content-body">
  WeatherAPI.com, ITS THIRD PARTY PROVIDERS, AND ITS OR THEIR AFFILIATES AND
  REPRESENTATIVES ARE NEITHER RESPONSIBLE NOR LIABLE FOR ANY INDIRECT,
  INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES
  (INCLUDING, WITHOUT LIMITATION, THOSE RESULTING sFROM LOST PROFITS, LOST
  DATA, OR BUSINESS INTERRUPTION) ARISING OUT OF OR RELATING IN ANY WAY TO
  THE SERVICES, SITE-RELATED SERVICES AND PRODUCTS, CONTENT OR INFORMATION
  CONTAINED WITHIN THE SERVICES, AND/OR ANY HYPERLINKED WEBSITE, WHETHER
  BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER
  OR NOT ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. WeatherAPI.com SHALL
  NOT UNDER ANY CIRCUMSTANCES BE LIABLE FOR DAMAGES IN EXCESS OF THE AMOUNT
  YOU HAVE PAID AS SUBSCRIPTION FEES FOR THE SERVICES. APPLICABLE LAW MAY
  NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL
  DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
</p>
<h3>INDEMNIFICATION</h3>
<p class="p-content-body">
  WeatherAPI.com agrees to indemnify and to hold you, your Representatives
  and your/their customers employees and agents, harmless from and against
  any loss, liability, damage or expense (including reasonable attorney’s
  fees) arising as a consequence of the Site and/or the Services and
  its/their use of them in accordance with these Terms and Conditions
  infringing the copyright, trade mark or other intellectual property rights
  of any person. WeatherAPI.com's liability in respect of this indemnity
  shall not be subject to the limitations and exclusions in the clause
  headed 'Limitation of Liability'.
</p>
<h3>ACCURACY AND INTEGRITY OF INFORMATION</h3>
<p class="p-content-body">
  Although WeatherAPI.com attempts to ensure the integrity and accuracy of
  the Services, it makes no guarantees whatsoever as to the correctness or
  accuracy of the information and content provided as part of the Services.
  It is possible that the Services could include technical or typographical
  errors, inaccuracies or other errors, and that unauthorized additions,
  deletions, and alterations could be made to the Services by third parties.
  The nature and content of the Services may be changed or updated without
  notice.
</p>
<h3>COLLECTION OF SUBSCRIBER INFORMATION</h3>
<p class="p-content-body">
  WeatherAPI.com collects information that you provide to us directly, and
  also collects limited information through "cookies" that we place on your
  browser. Such information may be used by us for a variety of purposes,
  including statistical analysis, and identification of products and
  services that may be of interest to you. WeatherAPI.com will not knowingly
  share personally identifiable information about you with any third party.
  We do not knowingly collect information from children. Third party
  suppliers, partners, and advertisers may place "cookies" on your browser
  to collect limited information when you are browsing on the Internet.
</p>
<h3>FORUMS AND OTHER INTERACTIVE AREAS</h3>
<p class="p-content-body">
  WeatherAPI.com may, but is not obligated to, monitor or review any areas
  of the Services where visitors transmit or post Communications or
  communicate with each other, including, but not limited to, chat rooms,
  bulletin boards, and other user forums, and the content of any such
  Communications. WeatherAPI.com will not, however, have any liability
  related to the content of any such Communications, whether or not arising
  under the laws of copyright, libel, privacy, obscenity, or otherwise.
  WeatherAPI.com retains the right to remove, in its sole discretion,
  Communications that include any material deemed infringing, abusive,
  defamatory, obscene, or otherwise inappropriate.
</p>
<h3>LINKS OR POINTERS TO OTHER SITES</h3>
<p class="p-content-body">
  WeatherAPI.com makes no representations whatsoever about any other Web
  site that you may access through the Services. When you access a
  non-WeatherAPI.com site, please understand that it is independent from
  WeatherAPI.com, and that WeatherAPI.com has no control over the content on
  that Web site. In addition, a hyperlink to a non-WeatherAPI.com Web site
  does not mean that WeatherAPI.com endorses or accepts any responsibility
  for the content, or the use, of the linked site. It is up to you to take
  precautions to ensure that whatever you select for your use or download is
  free of such items as viruses, worms, Trojan horses, and other items of a
  destructive nature. If you decide to access any of the third party sites
  linked to the Services, you do this entirely at your own risk.
</p>
<h3>FORWARD-LOOKING STATEMENTS</h3>
<p class="p-content-body">
  The Services may contain forward-looking statements regarding
  WeatherAPI.com's business, customers, partners, future products and
  services, or other factors that may affect future earnings or financial
  results. Such statements involve risks and uncertainties, which could
  cause actual results to vary materially from those, expressed in or
  indicated by the forward-looking statements. Examples of these risks
  include delays in development, competitive service and product offerings,
  and lack of market acceptance.
</p>
<h3>ENTIRE AGREEMENT</h3>
<p class="p-content-body">
  These Terms and Conditions constitute the entire agreement between
  WeatherAPI.com and you pertaining to the subject matter hereof. In its
  sole discretion, WeatherAPI.com may from time-to-time revise these Terms
  and Conditions by updating this posting. You should, therefore,
  periodically visit this page to review the current Terms and Conditions,
  so you are aware of any such revisions to which you are bound. Certain
  provisions of these Terms and Conditions may be superseded by expressly
  designated legal notices or terms located on particular pages within the
  Services. Any waiver of any term or condition shall not be effective
  unless in a written document signed by an authorized representative of
  WeatherAPI.com.
</p>
<h3>LEGAL AUTHORITY</h3>
<p class="p-content-body">
  You represent that you are 16 years of age or older, of legal age to enter
  into contracts, and have full authority and competency to enter into and
  be legally bound by these Terms and Conditions.
</p>`;
});

spanSLA.addEventListener("click", function () {
  contentBody.innerHTML = `<h1>Service Level Agreement</h1>
  <p class="p-content-body">
    This Service Level Agreement (“SLA”) is a policy governing the use of API
    under the terms of the WeatherAPI.com Terms of Service (the “Terms of
    Service”) between WeatherAPI.com (“us” or “we”) and users of
    WeatherAPI.com High Volume (HV) API Services (“you”). This SLA applies
    separately to each account using WeatherAPI.com Services. Unless otherwise
    provided herein, this SLA is subject to the terms of the Terms of Service.
    WeatherAPI.com reserves the right to change the terms of this SLA in
    accordance with the Terms of Service.
  </p>
  <p class="p-content-body">
    WeatherAPI.com services for High Volume (HV) API customers are guaranteed
    to be available and responsive 99.9% of the time. If we don't meet this
    guarantee you are eligible for a service credit.
  </p>
  <h2>1. Service Commitment</h2>
  <p class="p-content-body">
    WeatherAPI.com will use commercially reasonable efforts to make
    WeatherAPI.com instances available with a Monthly Uptime Percentage
    (defined below) of 99.9%, in each case during any monthly billing cycle
    (the “Service Commitment”). In the event WeatherAPI.com does not meet the
    Service Commitment, you will be eligible to receive a Service Credit as
    described below.
  </p>
  <h2>2. Definitions</h2>
  <p class="p-content-body">
    The following capitalized terms shall be given the meaning set forth
    below:
  </p>
  <ul class="ul-sla ms-2">
    <li>
      “Monthly Uptime Percentage”
      <span class="p-content-body"
        >is calculated by subtracting from 99.9% the percentage of continuous
        5 minute periods during the month in which a WeatherAPI.com instance
        was in a state of “Unavailable.” Monthly Uptime Percentage
        measurements exclude downtime resulting directly or indirectly from
        any WeatherAPI.com SLA Exclusion (defined below).</span
      >
    </li>
    <li>
      “Unavailable” <span class="p-content-body">and</span> “Unavailability”
      <span class="p-content-body"
        >means when a running WeatherAPI.com instance has no external
        connectivity.</span
      >
    </li>
    <li>
      <span class="p-content-body">A</span> “Service Credit”
      <span class="p-content-body"
        >is a credit, calculated as set forth below, that we may credit back
        to an eligible account.</span
      >
    </li>
  </ul>
  <h2>3. Service Commitments and Service Credits</h2>
  <p class="p-content-body">
    Service Credits are calculated as a percentage of the total charges paid
    by you (excluding one-time payments such as upfront payments) for a
    WeatherAPI.com instance for the monthly billing cycle in which the
    Unavailability occurred in accordance with the schedule below.
  </p>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Monthly Uptime Percentage</th>
        <th>Service Credit Percentage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>100% - 99.9%</td>
        <td>0%</td>
      </tr>
      <tr>
        <td>99.89% - 99%</td>
        <td>10%</td>
      </tr>
      <tr>
        <td>Less than 99%</td>
        <td>25%</td>
      </tr>
    </tbody>
  </table>
  <h2>4. Credit Request and Payment Procedures</h2>
  <p class="p-content-body">
    To receive a Service Credit, you must submit a claim by sending an email
    via <a href="contact.html">Support Center</a>. To be eligible, the credit
    request must be received by us by the end of the second billing cycle
    after which the incident occurred and must include:
  </p>
  <ul class="ul-website ms-2">
    <li>i. the words “SLA Credit Request” in the subject line;</li>
    <li>
      ii. the dates and times of each Unavailability incident that you are
      claiming;
    </li>
    <li>iii. the affected WeatherAPI.com instance urls; and</li>
    <li>
      iv. your request logs that document the errors and corroborate your
      claimed outage (any confidential or sensitive information in these logs
      should be removed or replaced with asterisks).
    </li>
  </ul>
  <p class="p-content-body">
    If the Monthly Uptime Percentage of such request is confirmed by us and is
    less than the Service Commitment, then we will issue the Service Credit to
    you within one billing cycle following the month in which your request is
    confirmed by us. Your failure to provide the request and other information
    as required above will disqualify you from receiving a Service Credit.
  </p>
  <h2>5. WeatherAPI.com SLA Exclusions</h2>
  <p class="p-content-body">
    The Service Commitment does not apply to any unavailability, suspension or
    termination of WeatherAPI.com Services, or any other WeatherAPI.com or
    WeatherAPI.com Services performance issues: (i) caused by factors outside
    of our reasonable control, including, without limitation, any force
    majeure event or Internet access or related problems beyond the
    demarcation point of WeatherAPI.com Services or its direct hosting
    subcontractors (i.e beyond the point in the network where WeatherAPI.com
    maintains access and control over the WeatherAPI.com Services); (ii) that
    result from any actions or inactions of you or any third party (other than
    WeatherAPI.com’s direct hosting subcontractor); (iii) that result from
    your equipment, software or other technology and/or third party equipment,
    software or other technology (other than third party equipment within our
    direct control); (iv) that result from any scheduled maintenance; or (vi)
    arising from our suspension and termination of your right to use
    WeatherAPI.com Services in connection with any breach by you of the Terms
    of Service or otherwise in accordance with the Terms of Service
    (collectively, the “WeatherAPI.com SLA Exclusions”). If availability is
    impacted by factors other than those used in our Monthly Uptime Percentage
    calculation, then we may issue a Service Credit considering such factors
    at our discretion.
  </p>`;
});
