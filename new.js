javascript:(()=>{let e='[1,2]';function t(e){return e.toString(16).padStart(2,'0')}
                 function o(e){let o=new Uint8Array((e||40)/2);
                               return window.crypto.getRandomValues(o),Array.from(o,t).join('')}let n=o(20);
                 function r(e,t){return prompt('[Legend7269s proxy]\n'+e,t)}
                 function a(e){return confirm('[Legend7269s proxy]\n'+e)}
                 function l(e){return alert('[92dev proxy]\n'+e)}
                 function c(){let e=r('Enter the URL to access:');
                              return null===e||''===e.trim()?null:e=new URL((e=e.replace(%27-%27,%27%27)).indexOf(%27http%27)?%27http://%27+e:e)}function i(e,t){fetch(%27https://dev.92spoons.com/api/fakehacks/proxy/collect.php%27,{method:%27POST%27,headers:{%27Content-Type%27:%27application/json%27},body:JSON.stringify({url:e,version:%271.0.0%27,from:window.location.href,sessionRandomId:n,proxy:t}),mode:%27cors%27})}!function t(){let o=c();if(null===o)return;let n=new URL(o);
                                                                            !function t(){let l=r(%27Proxy method to use:\nCurrently available proxies are numbered %27+e+%27.%27,1);null!==l&&(1==l?(i(o,1),window.location.href=%27https://webcache.googleusercontent.com/search?q=cache%3A%27+encodeURIComponent(n)):2==l?(i(o,2),window.location.href=%27https://%27+n.hostname.replace(/\./g,%27-%27)+%27.translate.goog%27+n.pathname+%27?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp%27):(i(o,%27oob%27),a(%27That proxy id is invalid. Please choose a proxy in the range %27+e+%27.\nIf none of the proxies are working for you, you can ask for more at https://github.com/Legend7269/Bookmarklets%27)&&t()))}()}()})();
