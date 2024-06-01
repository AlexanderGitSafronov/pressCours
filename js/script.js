document.querySelector('#hamburger').addEventListener('click', ()=>{
 
  document.querySelector('#hamburger').classList.toggle("is-closed");
  document.querySelector('#hamburger').classList.toggle("is-open");
  document.querySelector('.header__menu').classList.toggle("active")
})



function _createForOfIteratorHelper(e, r) {
  var t, n, o, a, i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (i)
      return n = !(t = !0),
      {
          s: function() {
              i = i.call(e)
          },
          n: function() {
              var e = i.next();
              return t = e.done,
              e
          },
          e: function(e) {
              n = !0,
              o = e
          },
          f: function() {
              try {
                  t || null == i.return || i.return()
              } finally {
                  if (n)
                      throw o
              }
          }
      };
  if (Array.isArray(e) || (i = _unsupportedIterableToArray(e)) || r && e && "number" == typeof e.length)
      return i && (e = i),
      a = 0,
      {
          s: r = function() {}
          ,
          n: function() {
              return a >= e.length ? {
                  done: !0
              } : {
                  done: !1,
                  value: e[a++]
              }
          },
          e: function(e) {
              throw e
          },
          f: r
      };
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}
function _unsupportedIterableToArray(e, r) {
  var t;
  if (e)
      return "string" == typeof e ? _arrayLikeToArray(e, r) : "Map" === (t = "Object" === (t = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : t) || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(e, r) : void 0
}
function _arrayLikeToArray(e, r) {
  (null == r || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
      n[t] = e[t];
  return n
}
document.addEventListener("DOMContentLoaded", function() {
  $(".results__slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: !0,
      infinite: !0,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 1
          }
      }]
  });
  var e, r = _createForOfIteratorHelper(document.querySelectorAll('a[href*="#order"]'));
  try {
      for (r.s(); !(e = r.n()).done; )
          e.value.addEventListener("click", function(e) {
              e.preventDefault();
              var r = document.getElementById("mainFormaSubmitBtn");
              r.style = "margin-bottom: 100px;",
              document.querySelector(".form__button").scrollIntoView({
                  behavior: "smooth",
                  block: "end"
              }),
              setTimeout(function() {
                  r.style = "margin-bottom: 20px;"
              }, 3e3)
          })
  } catch (e) {
      r.e(e)
  } finally {
      r.f()
  }
});


