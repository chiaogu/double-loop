webpackJsonp([2],{3:function(n,e,r){n.exports=r("qFA3")},IND1:function(n,e){n.exports="'use strict';\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function() {\n    navigator.serviceWorker.register('service-worker.js').then(function(reg) {\n      reg.onupdatefound = function() {\n        var installingWorker = reg.installing;\n\n        installingWorker.onstatechange = function() {\n          switch (installingWorker.state) {\n            case 'installed':\n              if (navigator.serviceWorker.controller) {\n                location.reload();\n              } \n              break;\n\n            case 'redundant':\n              break;\n          }\n        };\n      };\n    }).catch(function(e) {\n      console.error('Error during service worker registration:', e);\n    });\n  });\n}"},KF6U:function(n,e){n.exports=function(n){"undefined"!=typeof execScript?execScript(n):eval.call(null,n)}},qFA3:function(n,e,r){r("KF6U")(r("IND1"))}},[3]);