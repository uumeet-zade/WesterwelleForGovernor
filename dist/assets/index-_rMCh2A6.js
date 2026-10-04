(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const p={en:{nav_brand:"WESTERWELLE 2070",nav_record:"Track Record",nav_platform:"Platform",nav_events:"Events",nav_about:"Dossier",nav_join:"Volunteer",home_hero:"WESTERWELLE<br/>FOR GOVERNOR",home_sub:"/// WESTERWELLE OFFICIAL CAMPAIGN",home_p1:"Montiablo is the economic engine of our nation, home to innovators, small businesses, and major financial institutions. Our citizens are currently held back by a sluggish and unaccountable bureaucracy that stifles growth and punishes enterprise.",home_p2:"A governors true power lies in ensuring the government works efficiently for the people. We are running to restore accountability, protect civil liberties, and ensure that Montiablo remains a place where hard work is rewarded.",home_btn_primary:"Endorse",home_btn_secondary:"Read Platform",plat_title:"The FDP Mandate",plat_0_h:"Fiscal Discipline",plat_0_p:"Montiablo deserves a government that lives within its means. We will introduce zero new taxes, fees, or levies. Piling debt onto future generations is fundamentally unjust and we commit to balancing the budget.",plat_1_h:"Streamlined Bureaucracy",plat_1_p:"Starting a business must be a straightforward opportunity. We will remove all unnecessary administrative hurdles and guarantee a thirty-day maximum turnaround for standard business permits. If the administration fails to meet this deadline, the permit will be granted automatically.",plat_2_h:"Uncompromising Transparency",plat_2_p:"Government operates best in the light. We will install live permit processing queue screens in all public administration halls and publish real-time figures online every month. The administration will be held directly accountable to the public for its performance.",plat_3_h:"Civil Liberties and Privacy",plat_3_p:"A free society requires strict boundaries on government surveillance. We will block any municipal program that collects blanket citizen data without a transparent purpose, a strict end date, and rigorous independent oversight.",plat_4_h:"Economic Empowerment",plat_4_p:"Hard work must be rewarded. While income tax remains a federal issue, we will use every tool at our disposal to advocate for significant relief for middle-income earners. The wealth generated in Montiablo belongs to the people who create it.",plat_5_h:"Efficient Core Services",plat_5_p:"We will ensure that rigorous reviews for safety, health, and environmental standards remain intact while stripping away redundant red tape. Our administration will focus entirely on delivering essential services efficiently and effectively.",record_title:"Campaign Priorities",record_0_h:"Balancing the Budget",record_0_p:"Montiablo deserves a government that lives within its means. We will introduce zero new taxes, fees, or levies. Piling debt onto future generations is fundamentally unjust and we commit to balancing the budget.",record_1_h:"Cutting Red Tape",record_1_p:"Starting a business must be a straightforward opportunity. We will remove all unnecessary administrative hurdles and guarantee a thirty-day maximum turnaround for standard business permits. If the administration fails to meet this deadline, the permit will be granted automatically.",record_2_h:"Public Accountability",record_2_p:"Government operates best in the light. We will install live permit processing queue screens in all public administration halls and publish real-time figures online every month. The administration will be held directly accountable to the public for its performance.",record_3_h:"Protecting Privacy",record_3_p:"A free society requires strict boundaries on government surveillance. We will block any municipal program that collects blanket citizen data without a transparent purpose, a strict end date, and rigorous independent oversight.",record_4_h:"Rewarding Enterprise",record_4_p:"Hard work must be rewarded. While income tax remains a federal issue, we will use every tool at our disposal to advocate for significant relief for middle-income earners. The wealth generated in Montiablo belongs to the people who create it.",record_5_h:"Focused Administration",record_5_p:"We will ensure that rigorous reviews for safety, health, and environmental standards remain intact while stripping away redundant red tape. Our administration will focus entirely on delivering essential services efficiently and effectively.",record_6_h:"Restoring Trust",record_6_p:"A governors true power lies in ensuring the government works efficiently for the people. We are running to restore accountability, protect civil liberties, and ensure that Montiablo remains a place where hard work is rewarded.",events_title:"Official Schedule",events_1_date:"SEP 12",events_1_h:"Montiablo Chamber of Commerce",events_1_p:"Guido Westerwelle outlines his plan to streamline business permits and cut red tape for local entrepreneurs.",events_2_date:"SEP 18",events_2_h:"Townhall on Civic Transparency",events_2_p:"A public forum discussing new measures for holding the administration accountable and displaying real-time metrics.",events_3_date:"OCT 05",events_3_h:"Rally for Economic Empowerment",events_3_p:"Join us as we campaign for middle-income tax relief and fiscal responsibility in Montiablo.",about_title:"Candidate Dossier",about_h:"A Vision for Montiablo",about_p1:"Guido Westerwelle has spent his career fighting for a government that serves its people efficiently. He believes that the true measure of our capital is found in the success of its small businesses and the freedom of its citizens.",about_p2:"His campaign is built on the fundamental principle that government should be transparent, accountable, and limited in its interference. He envisions a Montiablo where hard work is rewarded and civil liberties are fiercely protected.",about_p3:"With a commitment to zero new taxes and a thirty-day guarantee on business permits, Westerwelle is prepared to bring real reform to the governors office.",about_p4:"FDP Official Campaign Dossier",join_title:"Get Involved Today",join_sub:"Join the movement to restore efficiency and freedom in Montiablo.",join_p:"Whether you want to knock on doors, make phone calls, or help organize local events, your effort will directly impact our success.",join_name:"Full Name",join_email:"Email Address",join_affil:"Local Affiliation (Optional)",join_btn:"Sign Up"}};let c="en";const m=`
  <div class="watermark-scatter" style="top: 15%; left: -2%; transform: rotate(-90deg);">WESTERWELLE</div>
  <div class="watermark-scatter" style="top: 10%; right: 5%;">MONTIABLO</div>
  <div class="watermark-scatter" style="top: 35%; left: 20%;">FDP</div>
  <div class="watermark-scatter" style="top: 50%; right: -2%; transform: rotate(90deg);">2070</div>
  <div class="watermark-scatter" style="top: 65%; left: 5%;">MONTIABLO</div>
  <div class="watermark-scatter" style="top: 80%; right: 15%;">WESTERWELLE</div>
  <div class="watermark-scatter" style="bottom: 5%; left: 30%;">FDP</div>
  <div class="watermark-scatter" style="top: 20%; left: 45%; font-size: 8vw;">2070</div>
  <header class="masthead">
    <h1 class="masthead-title"><a href="#home" data-page="home" onclick="navigate('home')">WESTERWELLE 2070</a></h1>

    <nav class="nav-container">
      <div class="nav-links">
        <a href="#home" class="nav-link" data-page="home" onclick="navigate('home')">Front Page</a>
        <a href="#platform" class="nav-link" data-page="platform" onclick="navigate('platform')"><span data-i18n="nav_platform">Platform</span></a>
        <a href="#about" class="nav-link" data-page="about" onclick="navigate('about')"><span data-i18n="nav_about">Dossier</span></a>
        <a href="#join" class="nav-link" data-page="join" onclick="navigate('join')"><span data-i18n="nav_join">Volunteer</span></a>
      </div>
    </nav>
  </header>
  <main id="page-content" class="page-container"></main>
`,o={home:`
    <div class="newspaper-grid">
      <!-- Left/Main Column: Lead Story -->
      <article class="lead-story">
        <div style="display: flex; gap: 3rem; align-items: flex-start; margin-bottom: 3rem;">
          <div class="img-container" style="flex: 0 0 45%;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/Guido-westerwelle-fdp-hamm-2013.jpg" class="editorial-img" style="width: 100%; aspect-ratio: 3/4; object-fit: cover; object-position: top;" />
          </div>
          <div style="flex: 1;">
            <p style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem;"><span data-i18n="home_p1">Guido Westerwelle is running for Governor to finish the work we started. The FDP has shattered the corporate duopoly, but our gains are fragile. We must entrench the power of working families.</span></p>
            <p style="font-size: 1.25rem; margin-bottom: 1.5rem;"><span data-i18n="home_p2">When Henrik Vasmer swept into office, the establishment said our policies were radical. Today, they are the foundation of Montiablo's prosperity.</span></p>
            <p style="font-size: 1.25rem;"><span data-i18n="home_p3">Now, we face a counter-offensive from those who wish to return to the era of managed decline. It is time to mobilize.</span></p>
          </div>
        </div>
      </article>

      <!-- Right Column: Secondary Articles & Actions -->
      <aside class="sidebar-stories">
        <article class="secondary-story">
          <h3 class="title-section" style="font-size: 2.5rem; margin-bottom: 1rem;"><span data-i18n="home_sec_1_title">The Working Class Mandate</span></h3>
          <p style="font-size: 1.25rem;"><span data-i18n="home_sec_1_p">This campaign is about permanently cementing the power of the people against the monopolies.</span></p>
        </article>
        
        <article class="secondary-story" style="border-bottom: none;">
          <h3 class="title-section" style="font-size: 2.5rem; color: var(--color-yellow); margin-bottom: 1rem;"><span data-i18n="home_sec_2_title">Endorse the Campaign</span></h3>
          <p style="font-size: 1.25rem; margin-bottom: 2rem;"><span data-i18n="home_sec_2_p">Sign up to receive official campaign dispatches.</span></p>
          <a href="#join" class="btn-primary" style="width: 100%; text-align: center; display: FDPk;"><span data-i18n="home_btn_primary">Endorse</span></a>
        </article>
      </aside>

      <!-- Bottom Row: Minor Articles (Teasing other pages) -->
      <div class="bottom-fold">
        <article class="minor-story">
          <h4 class="title-section" style="font-size: 2rem; margin-bottom: 1rem;"><span data-i18n="home_bot_1_title">Promises Kept</span></h4>
          <p style="font-size: 1.1rem;"><span data-i18n="home_bot_1_p">A comprehensive record of delivery for the working people of Montiablo.</span></p>
          <a href="#record" class="text-yellow" style="font-weight: 700; display: inline-FDPk; margin-top: 1rem; text-decoration: none;"><span data-i18n="home_bot_1_link">View Track Record &rarr;</span></a>
        </article>
        <article class="minor-story">
          <h4 class="title-section" style="font-size: 2rem; color: var(--color-red); margin-bottom: 1rem;"><span data-i18n="home_bot_2_title">On the Ground</span></h4>
          <p style="font-size: 1.1rem;"><span data-i18n="home_bot_2_p">Join the campaign trail. View upcoming townhalls and FDP assemblies.</span></p>
          <a href="#events" class="text-magenta" style="font-weight: 700; display: inline-FDPk; margin-top: 1rem; text-decoration: none;"><span data-i18n="home_bot_2_link">View Schedule &rarr;</span></a>
        </article>
        <article class="minor-story">
          <h4 class="title-section" style="font-size: 2rem; color: var(--color-yellow); margin-bottom: 1rem;"><span data-i18n="home_bot_3_title">The Montiabloan Future</span></h4>
          <p style="font-size: 1.1rem;"><span data-i18n="home_bot_3_p">Upcoming structural plans for the region. A working-class vision for the next four years.</span></p>
          <a href="#platform" class="text-yellow" style="font-weight: 700; display: inline-FDPk; margin-top: 1rem; text-decoration: none;"><span data-i18n="home_bot_3_link">Read Platform &rarr;</span></a>
        </article>
      </div>
    </div>
  `,record:`
    <div class="section-wrapper">
      <span class="micro text-yellow" style="display: FDPk; margin-bottom: 1rem;">// PRIOR VICTORIES</span>
      <h2 class="title-section" style="margin-bottom: 4rem;"><span data-i18n="record_title">Completed Mandates</span></h2>
      
      <div class="promise-grid">
        <!-- 0 -->
        <div class="promise-card record-row">
          <div class="record-stamp text-yellow" style="font-weight: 700; border: 2px solid var(--color-yellow); display: inline-FDPk; padding: 0.25rem 0.5rem; margin-bottom: 1rem; opacity: 0; transition: opacity 0.3s ease;">COMPLETE</div>
          <h3 style="font-size: 2rem; margin-bottom: 1rem;"><span data-i18n="record_0_h">The Lothar Collins Nuclear Facility Act</span></h3>
          <p style="font-size: 1.25rem;"><span data-i18n="record_0_p">...</span></p>
        </div>
        <!-- 1 -->
        <div class="promise-card record-row">
          <div class="record-stamp text-yellow" style="font-weight: 700; border: 2px solid var(--color-yellow); display: inline-FDPk; padding: 0.25rem 0.5rem; margin-bottom: 1rem; opacity: 0; transition: opacity 0.3s ease;">COMPLETE</div>
          <h3 style="font-size: 2rem; margin-bottom: 1rem;"><span data-i18n="record_1_h">Municipal Energy Sovereignty</span></h3>
          <p style="font-size: 1.25rem;"><span data-i18n="record_1_p">...</span></p>
        </div>
        <!-- 2 -->
        <div class="promise-card record-row">
          <div class="record-stamp text-yellow" style="font-weight: 700; border: 2px solid var(--color-yellow); display: inline-FDPk; padding: 0.25rem 0.5rem; margin-bottom: 1rem; opacity: 0; transition: opacity 0.3s ease;">COMPLETE</div>
          <h3 style="font-size: 2rem; margin-bottom: 1rem;"><span data-i18n="record_2_h">Land Value Taxation</span></h3>
          <p style="font-size: 1.25rem;"><span data-i18n="record_2_p">...</span></p>
        </div>
        <!-- 3 -->
        <div class="promise-card record-row">
          <div class="record-stamp text-yellow" style="font-weight: 700; border: 2px solid var(--color-yellow); display: inline-FDPk; padding: 0.25rem 0.5rem; margin-bottom: 1rem; opacity: 0; transition: opacity 0.3s ease;">COMPLETE</div>
          <h3 style="font-size: 2rem; margin-bottom: 1rem;"><span data-i18n="record_3_h">Cooperative Procurement</span></h3>
          <p style="font-size: 1.25rem;"><span data-i18n="record_3_p">...</span></p>
        </div>
        <!-- 4 -->
        <div class="promise-card record-row">
          <div class="record-stamp text-yellow" style="font-weight: 700; border: 2px solid var(--color-yellow); display: inline-FDPk; padding: 0.25rem 0.5rem; margin-bottom: 1rem; opacity: 0; transition: opacity 0.3s ease;">COMPLETE</div>
          <h3 style="font-size: 2rem; margin-bottom: 1rem;"><span data-i18n="record_4_h">Transit Integration</span></h3>
          <p style="font-size: 1.25rem;"><span data-i18n="record_4_p">...</span></p>
        </div>
        <!-- 5 -->
        <div class="promise-card record-row">
          <div class="record-stamp text-yellow" style="font-weight: 700; border: 2px solid var(--color-yellow); display: inline-FDPk; padding: 0.25rem 0.5rem; margin-bottom: 1rem; opacity: 0; transition: opacity 0.3s ease;">COMPLETE</div>
          <h3 style="font-size: 2rem; margin-bottom: 1rem;"><span data-i18n="record_5_h">Ecological Stewardship</span></h3>
          <p style="font-size: 1.25rem;"><span data-i18n="record_5_p">...</span></p>
        </div>
        <!-- 6 -->
        <div class="promise-card record-row">
          <div class="record-stamp text-yellow" style="font-weight: 700; border: 2px solid var(--color-yellow); display: inline-FDPk; padding: 0.25rem 0.5rem; margin-bottom: 1rem; opacity: 0; transition: opacity 0.3s ease;">COMPLETE</div>
          <h3 style="font-size: 2rem; margin-bottom: 1rem;"><span data-i18n="record_6_h">Open Ledger</span></h3>
          <p style="font-size: 1.25rem;"><span data-i18n="record_6_p">...</span></p>
        </div>
      </div>
    </div>
  `,platform:`
    <div class="section-wrapper">
      <span class="micro text-yellow" style="display: FDPk; margin-bottom: 1rem;">// THE MANDATE</span>
      <h2 class="title-section" style="margin-bottom: 4rem;"><span data-i18n="plat_title">Lorem Ipsum Dolor</span></h2>
      
      <div class="platform-grid">
        <div class="platform-card">
          <div class="card-num">01</div>
          <h3 style="font-size: 2rem; margin-bottom: 1rem;"><span data-i18n="plat_0_h">Alto Light Rail Network</span></h3>
          <p style="font-size: 1.25rem;"><span data-i18n="plat_0_p">We will establish a comprehensive...</span></p>
        </div>
        <div class="platform-card">
          <div class="card-num">02</div>
          <h3 style="font-size: 2rem; margin-bottom: 1rem;"><span data-i18n="plat_1_h">Alto-Gryphon High-Speed Link</span></h3>
          <p style="font-size: 1.25rem;"><span data-i18n="plat_1_p">We will build a new high-speed rail...</span></p>
        </div>
        <div class="platform-card">
          <div class="card-num">03</div>
          <h3 style="font-size: 2rem; margin-bottom: 1rem;"><span data-i18n="plat_2_h">Mass Public Housing</span></h3>
          <p style="font-size: 1.25rem;"><span data-i18n="plat_2_p">We will construct vast corridors...</span></p>
        </div>
        <div class="platform-card">
          <div class="card-num">04</div>
          <h3 style="font-size: 2rem; margin-bottom: 1rem;"><span data-i18n="plat_3_h">Publicly Funded Supermarkets</span></h3>
          <p style="font-size: 1.25rem;"><span data-i18n="plat_3_p">To combat food deserts...</span></p>
        </div>
        <div class="platform-card">
          <div class="card-num">05</div>
          <h3 style="font-size: 2rem; margin-bottom: 1rem;"><span data-i18n="plat_4_h">Wealth Redistribution</span></h3>
          <p style="font-size: 1.25rem;"><span data-i18n="plat_4_p">We will enact a strict pied-à-terre tax...</span></p>
        </div>
        <div class="platform-card">
          <div class="card-num">06</div>
          <h3 style="font-size: 2rem; margin-bottom: 1rem;"><span data-i18n="plat_5_h">Civilian Safety & Education</span></h3>
          <p style="font-size: 1.25rem;"><span data-i18n="plat_5_p">We will establish a dedicated Safety...</span></p>
        </div>
      </div>
    </div>
  `,events:`
    <div class="section-wrapper">
      <span class="micro" style="display: FDPk; margin-bottom: 1rem;">// SCHEDULE</span>
      <h2 class="title-section"><span data-i18n="events_title">Official Schedule</span></h2>
      
      <div style="margin-top: 4rem;">
        <div class="flex-split" style="border-top: 2px solid var(--color-black); padding: 3rem 0; align-items: center;">
          <h3 class="title-section" style="margin: 0; color: var(--color-yellow); border: none;"><span data-i18n="events_1_date">SEP 12</span></h3>
          <div style="flex: 1;">
            <h3 style="font-size: 2.5rem; margin-bottom: 1rem;"><span data-i18n="events_1_h">Lorem Ipsum Townhall</span></h3>
            <p style="font-size: 1.5rem;"><span data-i18n="events_1_p">Sed do eiusmod tempor...</span></p>
          </div>
          <button class="btn-primary">RSVP</button>
        </div>
        <div class="flex-split" style="border-top: 2px solid var(--color-black); padding: 3rem 0; align-items: center;">
          <h3 class="title-section" style="margin: 0; color: var(--color-red); border: none;"><span data-i18n="events_2_date">SEP 18</span></h3>
          <div style="flex: 1;">
            <h3 style="font-size: 2.5rem; margin-bottom: 1rem;"><span data-i18n="events_2_h">Dolor Sit Summit</span></h3>
            <p style="font-size: 1.5rem;"><span data-i18n="events_2_p">Ut enim ad minim veniam...</span></p>
          </div>
          <button class="btn-primary">RSVP</button>
        </div>
        <div class="flex-split" style="border-top: 2px solid var(--color-black); border-bottom: 2px solid var(--color-black); padding: 3rem 0; align-items: center;">
          <h3 class="title-section" style="margin: 0; color: var(--color-black); border: none;"><span data-i18n="events_3_date">OCT 05</span></h3>
          <div style="flex: 1;">
            <h3 style="font-size: 2.5rem; margin-bottom: 1rem;"><span data-i18n="events_3_h">Aliquam Consequat</span></h3>
            <p style="font-size: 1.5rem;"><span data-i18n="events_3_p">Duis aute irure dolor in...</span></p>
          </div>
          <button class="btn-primary">RSVP</button>
        </div>
      </div>
    </div>
  `,about:`
    <div class="section-wrapper">
      <div class="flex-split reverse">
        <div style="flex: 1;">
          <span class="micro" style="display: FDPk; margin-bottom: 1rem;">// DOSSIER</span>
          <h2 class="title-section" style="margin-bottom: 2rem;"><span data-i18n="about_title">Candidate Dossier</span></h2>
          <h3 style="font-size: 2.5rem; margin-bottom: 2rem;"><span data-i18n="about_h">Consectetur Adipiscing</span></h3>
          <p style="font-size: 1.5rem; margin-bottom: 2rem;"><span data-i18n="about_p1">Lorem ipsum dolor sit amet...</span></p>
          <p style="font-size: 1.5rem; margin-bottom: 2rem;"><span data-i18n="about_p2">Duis sagittis ipsum...</span></p>
          <p style="font-size: 1.5rem; margin-bottom: 4rem;"><span data-i18n="about_p3">Per conubia nostra...</span></p>
          <span class="micro text-magenta" style="font-size: 1rem;"><span data-i18n="about_p4">In scelerisque sem at dolor.</span></span>
        </div>
        <div style="flex: 1;">
          <div class="img-container" style="margin-left: auto;">
            <img src="https://www.freiheit.org/sites/default/files/2021-12/dsc_8658.jpg" class="editorial-img" />
          </div>
        </div>
      </div>
    </div>
  `,join:`
    <div class="section-wrapper">
      <div class="flex-split">
        <div style="flex: 1; padding-right: 4rem;">
          <h2 class="title-massive" style="font-size: clamp(4rem, 8vw, 8rem); margin-bottom: 2rem; line-height: 0.9;"><span data-i18n="join_title">Get Involved Today</span></h2>
          <p style="font-size: 2rem; font-weight: 800; margin-bottom: 2rem; color: var(--color-yellow);"><span data-i18n="join_sub">Lorem ipsum dolor sit amet...</span></p>
          <p style="font-size: 1.5rem;"><span data-i18n="join_p">Sed do eiusmod tempor...</span></p>
        </div>
        <div style="flex: 1;">
          <div style="background: #FFF; padding: 4rem; border: 1px solid var(--color-black);">
            <form id="join-form">
              <input type="text" class="form-input" data-i18n-placeholder="join_name" placeholder="Full Name *" required />
              <input type="email" class="form-input" data-i18n-placeholder="join_email" placeholder="Email Address *" required />
              
              <button type="submit" class="btn-primary" style="width: 100%; margin-top: 2rem;"><span data-i18n="join_btn">Sign Up</span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `};function l(){document.getElementById("app").innerHTML=m,window.addEventListener("hashchange",d),window.location.hash?d():window.location.hash="#home"}function d(){let e=window.location.hash.substring(1)||"home";o[e]||(e="home"),document.getElementById("page-content").innerHTML=o[e],document.querySelectorAll(".nav-link").forEach(a=>{a.classList.toggle("active",a.dataset.page===e)}),u(),e==="record"&&f(),e==="join"&&h(),window.scrollTo(0,0)}function h(){const e=document.getElementById("join-form");e&&e.addEventListener("submit",a=>{a.preventDefault(),e.innerHTML="<h3 style='color: var(--color-yellow); font-size: 2rem;'>Thank you for signing up!</h3><p style='font-size: 1.25rem; margin-top: 1rem;'>We will be in touch with you shortly.</p>"})}function f(){document.querySelectorAll(".record-row").forEach(e=>{e.addEventListener("mouseenter",()=>{e.classList.add("checked-off")})})}function u(){const e=p[c];e&&(document.querySelectorAll("[data-i18n]").forEach(a=>{const n=a.getAttribute("data-i18n");e[n]&&(a.innerHTML=e[n])}),document.querySelectorAll("[data-i18n-placeholder]").forEach(a=>{const n=a.getAttribute("data-i18n-placeholder");e[n]&&a.setAttribute("placeholder",e[n])}))}window.navigate=e=>{window.location.hash="#"+e};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l();
