(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{cbbN:function(e,t,i){"use strict";i.r(t);var a=i("bK5c"),s=i("o6Jv"),r=i("drIN"),n=i("bPGi"),o=i("uWAl"),p=i("XnmN"),c=i("KhOx"),f=i("uiEG");t.default=[{relevant:function(e){return e.pixelWidth<=100||e.pixelHeight<=100},state:function(e,t){if(e instanceof a.a){var i=e.states.create(t);return i.properties.minLabelPosition=1,i.properties.maxLabelPosition=0,i}}},{relevant:function(e){return e.pixelWidth<=200},state:function(e,t){var i;return e instanceof r.a?((i=e.states.create(t)).properties.inside=!0,i):e instanceof n.a?((i=e.states.create(t)).properties.inside=!0,i):e instanceof c.a?((i=e.states.create(t)).properties.disabled=!0,i):e instanceof f.a?((i=e.states.create(t)).properties.layout="vertical",i):e instanceof o.a?((i=e.states.create(t)).properties.marginLeft=0,i.properties.marginRight=0,i):e instanceof p.a&&("left"==e.position||"right"==e.position)?((i=e.states.create(t)).properties.position="bottom",i):void 0}},{relevant:function(e){return e.pixelHeight<=200},state:function(e,t){var i;return e instanceof s.a?((i=e.states.create(t)).properties.inside=!0,i):e instanceof n.a?((i=e.states.create(t)).properties.inside=!0,i):e instanceof c.a?((i=e.states.create(t)).properties.disabled=!0,i):e instanceof f.a?((i=e.states.create(t)).properties.layout="horizontal",i):e instanceof o.a?((i=e.states.create(t)).properties.marginTop=0,i.properties.marginBottom=0,i):e instanceof p.a&&("bottom"==e.position||"top"==e.position)?((i=e.states.create(t)).properties.position="right",i):void 0}},{relevant:function(e){return e.pixelWidth<=200&&e.pixelHeight<=200},state:function(e,t){var i;return e instanceof p.a?((i=e.states.create(t)).properties.disabled=!0,i):e instanceof f.a?((i=e.states.create(t)).properties.disabled=!0,i):void 0}}]}}]);