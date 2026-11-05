/*
 * Minimal dependency-free integration: every WhatsApp entry point receives the
 * same pre-filled message. The links remain usable even if JavaScript is blocked.
 */
(function () {
  "use strict";

  if (typeof document === "undefined") {
    return;
  }

  var whatsappNumber = "351911911843";
  var quoteMessage = "Olá! Vim através do Instagram da GG Motors e gostaria de pedir um orçamento para o meu carro.";
  var whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(quoteMessage);
  var links = document.querySelectorAll(".js-whatsapp");

  for (var index = 0; index < links.length; index += 1) {
    links[index].href = whatsappUrl;
  }
})();
