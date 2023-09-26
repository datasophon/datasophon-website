import React from 'react'

import useIsBrowser from '@docusaurus/useIsBrowser'
import config from './languages.json'
import RocketIcon from "../../../static/home/rocket.svg"
import StartUp from "../../../static/home/dashboard.svg"
export default function () {
  const isBrowser = useIsBrowser();
  const language = isBrowser && location.pathname.indexOf('/en/') === 0 ? 'en' : 'zh-Hans'
  const dataSource = config?.[language];
  const clientWidth = document.body.clientWidth
  const scale =
    clientWidth > 1920 ?
      Number((clientWidth / 1920).toFixed(2)) + 0.1 :
      Number((1920 / clientWidth).toFixed(2)) + 0.1

  return (
      <div className="section bg-light pb-9 pt-7 overflow-hidden">

      {/* background overlay */}
      <div className="overlay opacity-90 z-index-n1">
        <svg style={{width: '100%', height: '100%', transform: 'scale(' + scale + ', 1)'}} xmlns="http://www.w3.org/2000/svg" width="1920" height="1000" preserveAspectRatio="xMidYMid" viewBox="0 0 1920 1000">
            <g transform="translate(960,437.5) scale(1,1) translate(-960,-437.5)"><linearGradient id="lg-0.7760586418593289" x1="0" x2="1" y1="0" y2="0">
              <stop stopColor="#6a26da" offset="0"></stop>
              <stop stopColor="#6a26da" offset="1"></stop>
            </linearGradient><path d="" fill="url(#lg-0.7760586418593289)" opacity="0.4">
              <animate attributeName="d" dur="9.090909090909092s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="0s" values="M0 0L 0 900.8905903892756Q 160 824.5535425905625 320 787.4317614095728T 640 710.0629483711157T 960 712.0566315090508T 1280 514.8176428429922T 1600 471.689689764393T 1920 458.77364194075716L 1920 0 Z;M0 0L 0 829.346982785176Q 160 850.4831339183378 320 817.3435200292954T 640 724.8364121753284T 960 689.0295326182538T 1280 511.77401741062874T 1600 432.2373222898676T 1920 416.55303634238015L 1920 0 Z;M0 0L 0 912.0190313472932Q 160 841.7725593041725 320 797.5270162908611T 640 717.9426770462146T 960 712.9508320944876T 1280 589.152563848529T 1600 588.8067646130274T 1920 514.4021372100168L 1920 0 Z;M0 0L 0 900.8905903892756Q 160 824.5535425905625 320 787.4317614095728T 640 710.0629483711157T 960 712.0566315090508T 1280 514.8176428429922T 1600 471.689689764393T 1920 458.77364194075716L 1920 0 Z"></animate>
            </path><path d="" fill="url(#lg-0.7760586418593289)" opacity="0.4">
              <animate attributeName="d" dur="9.090909090909092s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-1.8181818181818183s" values="M0 0L 0 827.4544708139075Q 160 866.3876322593079 320 841.3865148102228T 640 779.7578460878027T 960 632.6401904919576T 1280 531.5559145492318T 1600 524.5481251318911T 1920 360.3763359435678L 1920 0 Z;M0 0L 0 828.6933628046206Q 160 775.1224423048847 320 755.0009156960222T 640 742.1020824044992T 960 619.9817119723482T 1280 479.1007363335232T 1600 412.405657832232T 1920 301.8179942657829L 1920 0 Z;M0 0L 0 869.2349991099805Q 160 812.9707797118227 320 773.6346073683211T 640 757.285370327684T 960 702.3265930537362T 1280 563.7997175315782T 1600 488.23619029221726T 1920 415.23408707483486L 1920 0 Z;M0 0L 0 827.4544708139075Q 160 866.3876322593079 320 841.3865148102228T 640 779.7578460878027T 960 632.6401904919576T 1280 531.5559145492318T 1600 524.5481251318911T 1920 360.3763359435678L 1920 0 Z"></animate>
            </path><path d="" fill="url(#lg-0.7760586418593289)" opacity="0.4">
              <animate attributeName="d" dur="9.090909090909092s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-3.6363636363636367s" values="M0 0L 0 940.0688551194796Q 160 877.6485396625238 320 860.4163214315404T 640 701.1931623030107T 960 696.9509969994634T 1280 562.0459862305122T 1600 512.921695699712T 1920 365.17381292660576L 1920 0 Z;M0 0L 0 934.2343007069505Q 160 888.0672542742651 320 843.852490804164T 640 707.2194947306111T 960 589.0177399203335T 1280 507.74864249163153T 1600 417.3623372041752T 1920 329.03528513730026L 1920 0 Z;M0 0L 0 822.9988990032492Q 160 779.567140047843 320 762.0801957283911T 640 752.4764695415993T 960 660.8862186783026T 1280 536.3639741288457T 1600 568.42897974107T 1920 462.20444891583855L 1920 0 Z;M0 0L 0 940.0688551194796Q 160 877.6485396625238 320 860.4163214315404T 640 701.1931623030107T 960 696.9509969994634T 1280 562.0459862305122T 1600 512.921695699712T 1920 365.17381292660576L 1920 0 Z"></animate>
            </path><path d="" fill="url(#lg-0.7760586418593289)" opacity="0.4">
              <animate attributeName="d" dur="9.090909090909092s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-5.454545454545455s" values="M0 0L 0 861.2630442121725Q 160 818.5199984963992 320 796.751327336783T 640 706.2948390516999T 960 605.0933624826438T 1280 540.2676888839555T 1600 457.9734755207567T 1920 399.57031683975663L 1920 0 Z;M0 0L 0 840.7632225646071Q 160 761.9637420837286 320 741.2157367168404T 640 766.5452632174729T 960 606.3305897293782T 1280 503.5625569266228T 1600 530.1359653505746T 1920 459.42495325945214L 1920 0 Z;M0 0L 0 881.6034955422762Q 160 817.2083012821154 320 782.3245519138361T 640 768.2395148540494T 960 614.496648733741T 1280 585.7238500465095T 1600 478.6454802933941T 1920 424.08065226070863L 1920 0 Z;M0 0L 0 861.2630442121725Q 160 818.5199984963992 320 796.751327336783T 640 706.2948390516999T 960 605.0933624826438T 1280 540.2676888839555T 1600 457.9734755207567T 1920 399.57031683975663L 1920 0 Z"></animate>
            </path><path d="" fill="url(#lg-0.7760586418593289)" opacity="0.4">
              <animate attributeName="d" dur="9.090909090909092s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-7.272727272727273s" values="M0 0L 0 825.0928695123232Q 160 824.7898455452686 320 784.7418150373871T 640 697.2128284129802T 960 626.8251781638456T 1280 625.5626219943902T 1600 498.00215651048825T 1920 394.8100914318972L 1920 0 Z;M0 0L 0 904.204311314168Q 160 826.7247312413047 320 802.398074466922T 640 732.0554401823182T 960 721.9076568036322T 1280 654.1870451967795T 1600 490.7364381114258T 1920 393.9709317654504L 1920 0 Z;M0 0L 0 917.0412818431565Q 160 768.3114894802418 320 743.4640267726511T 640 714.9909203433641T 960 647.7888739223863T 1280 608.593382367915T 1600 447.9851245848818T 1920 318.76755070440186L 1920 0 Z;M0 0L 0 825.0928695123232Q 160 824.7898455452686 320 784.7418150373871T 640 697.2128284129802T 960 626.8251781638456T 1280 625.5626219943902T 1600 498.00215651048825T 1920 394.8100914318972L 1920 0 Z"></animate>
            </path></g>
          </svg>
      </div>

      {/* rocket moving up animation */}
      <div className="particle">
        <div className="particle-move-up d-none d-block particle-move-up-1 text-light z-index-n1 opacity-60">
          <RocketIcon width="2rem" height="2rem" />
        </div>
        <div className="particle-move-up particle-move-up-2 text-light z-index-n1 opacity-60">
          <RocketIcon width="1rem" height="1rem" />
        </div>
        <div className="particle-move-up d-none d-sm-block particle-move-up-3 text-light z-index-n1 opacity-60">
          <RocketIcon width="1.5rem" height="1.5rem" />
        </div>
        <div className="particle-move-up d-none d-xl-block particle-move-up-4 text-light z-index-n1 opacity-60">
          <RocketIcon width="1rem" height="1rem" />
        </div>
        <div className="particle-move-up d-none d-sm-block particle-move-up-5 text-light z-index-n1 opacity-60">
          <RocketIcon width="1.2rem" height="1.2rem" />
        </div>
        <div className="particle-move-up border-success text-light particle-move-up-6 z-index-n1 opacity-60">
          <RocketIcon width="2rem" height="2rem" />
        </div>
        <div className="particle-move-up particle-move-up-7 z-index-n1 text-light opacity-60">
          <RocketIcon width="1.5rem" height="1.5rem" />
        </div>
        <div className="particle-move-up particle-move-up-8 z-index-n1 text-light opacity-60">
          <RocketIcon width="1.2rem" height="1.2rem" />
        </div>
        <div className="particle-move-up particle-move-up-9 z-index-n1 text-light opacity-60">
          <RocketIcon width="2rem" height="2rem" />
        </div>
      </div>

      <div className="container-fluid px-7 pb-2">
        <div className="row justify-content-center">
          <div className="col-md-6  col-8 align-self-center pe-5" data-aos="fade-right">
            <div className="text-start mt-0">
              <div className="mb-5 system_info pt-0">
                <div className="project_title fw-bold text-white mb-3">
                  <div className="animated-gradient-text_background animated-gradient-text_background-1 project_title_organization" style={{ '--content': '"Datavane"', '--start-color': '#00DFD8', '--end-color': '#FFF' }}>
                    <span className="animated-gradient-text_foreground animated-gradient-text_foreground-1">Datavane</span>
                  </div>
                  <div className="d-flex  align-items-start">
                    <div className="animated-gradient-text_background animated-gradient-text_background-2" style={{ '--content': '"DataSophon"', '--start-color': '#FFF', '--end-color': '#00DFD8' }}>
                      <span className="animated-gradient-text_foreground animated-gradient-text_foreground-2">DataSophon</span>
                    </div>
                  </div>
                </div>
                <p className="lead text-light">{dataSource.slogan.description}</p>
              </div>
              <a className="btn datasophon-btn btn mt-30 ztop" href="https://github.com/datavane/datasophon"
                target="_blank">
                <i className="lni-github-original"></i>&nbsp;GitHub
              </a>
              <a className="btn datasophon-btn btn-green mt-30 ml-3 ztop" href="docs/current/概览"
                style={{ marginLeft: '10px' }}>
                <i className="lni-play"></i>&nbsp;Get started
              </a>
              <div style={{ marginTop: '20px' }} className="shields ztop">
                <a href="https://www.apache.org/licenses/LICENSE-2.0.html">
                  <img src="https://img.shields.io/badge/license-Apache%202-4EB1BA.svg" className="wow fadeInUp"></img>
                </a>
                <img src="https://img.shields.io/github/stars/datavane/datasophon.svg?sanitize=true" className="wow fadeInUp"></img>
                <img src="https://img.shields.io/github/forks/datavane/datasophon?sanitize=true" className="wow fadeInUp"></img>
                <img src="https://img.shields.io/github/languages/count/datavane/datasophon" className="wow fadeInUp"></img>
              </div>
            </div>
          </div>
          {/* hero image */}
          <div className="col-6 align-self-center" >
            <div className="mt-5 mt-2 text-right" data-aos="fade-up" data-aos-delay="100">
              <StartUp className="img-fluid" style={{transform: 'translateY(3.3rem)'}} />
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}
