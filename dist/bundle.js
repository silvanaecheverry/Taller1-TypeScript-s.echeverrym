(()=>{"use strict";var e,n,t={449:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Serie=void 0;n.Serie=function(e){var n=e.id,t=e.name,i=e.channel,a=e.seasons,s=e.description,o=e.webpage,r=e.image;this.id=n,this.name=t,this.channel=i,this.seasons=a,this.description=s,this.webpage=o,this.image=r}},662:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.createSeriesTable=function(e){var n=e.map((function(e){return"\n        <tr>\n          <td>".concat(e.id,"</td>\n          <td>").concat(e.name,"</td>\n          <td>").concat(e.channel,"</td>\n          <td>").concat(e.seasons,"</td>\n        </tr>\n      ")})).join(""),t=(e.reduce((function(e,n){return e+n.seasons}),0)/e.length).toFixed(1),i="</tbody></table>\n    <p>Seasons average: ".concat(t,"</p>");return"".concat('\n    <table class="table">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Channel</th>\n          <th>Seasons</th>\n        </tr>\n      </thead>\n      <tbody>\n  ').concat(n).concat(i)}},533:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.series=void 0;var i=t(449);n.series=[new i.Serie({id:1,name:"Breaking Bad",channel:"AMC",seasons:5,description:"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer",webpage:"https://www.amc.com/shows/breaking-bad",image:"https://i.imgur.com/GGje0vc.jpg"}),new i.Serie({id:2,name:"Orange Is the New Black",channel:"Netflix",seasons:6,description:"The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary",webpage:"https://www.netflix.com/co/title/70242311",image:"https://i.imgur.com/EvKe48G.jpg"}),new i.Serie({id:3,name:"Game of Thrones",channel:"HBO",seasons:7,description:"American fantasy drama",webpage:"https://www.hbo.com/game-of-thrones",image:"https://i.imgur.com/TDCEV1S.jpg"}),new i.Serie({id:4,name:"The Big Bang Theory",channel:"CBS",seasons:12,description:"Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",webpage:"https://www.cbs.com/shows/big_bang_theory/about/",image:"https://i.imgur.com/uAEpVWk.jpg"}),new i.Serie({id:5,name:"Sherlock",channel:"BBC",seasons:4,description:"Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",webpage:"https://www.bbc.co.uk/programmes/b018ttws",image:"https://i.imgur.com/02B7qhj.jpg"}),new i.Serie({id:6,name:"A Very English Scandal",channel:"BBC",seasons:2,description:"A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",webpage:"https://www.bbc.co.uk/programmes/p065smy4",image:"https://i.imgur.com/D4y3DrQ.jpg"})]}},i={};function a(e){var n=i[e];if(void 0!==n)return n.exports;var s=i[e]={exports:{}};return t[e](s,s.exports,a),s.exports}e=a(533),n=a(662),document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("series-container");t&&(t.innerHTML=(0,n.createSeriesTable)(e.series))}))})();