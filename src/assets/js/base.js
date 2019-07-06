!function(e){var o={};function t(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)t.d(n,a,function(o){return e[o]}.bind(null,a));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){e.exports=t(1)},function(e,o,t){const n=t(2);document.addEventListener("DOMContentLoaded",()=>{n.setDaytimeMsg(),n.setRandBg(),n.setRandQuote(),n.setTime(),setInterval(n.setTime,1e3)}),document.oncontextmenu=()=>!1;const a=document.getElementById("settingsModal"),i=document.getElementById("openSettingsModal"),r=document.getElementsByClassName("close2")[0];i.onclick=()=>{a.style.display="block"},r.onclick=()=>{a.style.display="none"},window.onclick=e=>{e.target===a&&(a.style.display="none")}},function(e,o,t){const n=t(3),a=t(4),i=t(5),r=t(6),s=t(7),c=navigator.language;e.exports=class{static setDaytimeMsg(){i.contains.call(r.itcodes,c)&&a.itMsgSet(),i.contains.call(r.nlcodes,c)&&a.nlMsgSet(),i.contains.call(r.frcodes,c)&&a.frMsgSet(),i.contains.call(r.spcodes,c)&&a.spMsgSet(),i.contains.call(r.ficodes,c)&&a.fiMsgSet(),i.contains.call(r.decodes,c)&&a.spMsgSet(),i.contains.call(r.hecodes,c)&&a.heMsgSet(),i.contains.call(r.rucodes,c)&&a.ruMsgSet(),i.contains.call(r.arcodes,c)&&a.arMsgSet(),i.contains.call(r.svcodes,c)?a.svMsgSet():a.engMsgSet()}static setRandBg(){document.body.classList.add(i.pickFromArray(n))}static setRandQuote(){const e=i.getRandIndex(s.authors);i.contains.call(r.itcodes,c)&&(document.querySelector("blockquote").innerHTML=`"${s.it[e]}"`),i.contains.call(r.ptcodes,c)&&(document.querySelector("blockquote").innerHTML=`"${s.pt[e]}"`||`"${s.eng[e]}"`),i.contains.call(r.spcodes,c)?document.querySelector("blockquote").innerHTML=`"${s.sp[e]}"`:document.querySelector("blockquote").innerHTML=`"${s.eng[e]}"`,document.querySelector("cite").innerHTML=s.authors[e]}static setTime(){const e=new Date,o=[i.formatTimeUnit(e.getHours()),i.formatTimeUnit(e.getMinutes()),i.formatTimeUnit(e.getSeconds())];document.querySelector("time").innerHTML=o.join(":")}}},function(e,o){e.exports=["mountain","sunrise","butterfly","leaves","river","sea","space","ice","waterfall","lake","sunset","desert","canyon","rose","forest","cherry","clouds","autumn","winter","flowers","sunrise","rocks","trees","mountains","beach"]},function(e,o){const t=(new Date).getHours();e.exports=class{static engMsgSet(){let e="Good evening";t<12?e="Good morning":t<18&&(e="Good afternoon"),document.querySelector(".greeting").innerHTML=e}static itMsgSet(){let e="Buongiorno";t>18&&(e="Buonasera"),document.querySelector(".greeting").innerHTML=e}static nlMsgSet(){let e="Goedemiddag";t<12?e="Goedemorgen":t>18&&(e="Goedenavond"),document.querySelector(".greeting").innerHTML=e}static frMsgSet(){let e="Bonsoir";t<12?e="Bonjour":t>18&&(e="Bonne après-midi"),document.querySelector(".greeting").innerHTML=e}static spMsgSet(){let e="Buenas Tardes";t<12?e="Buenos Días":t>18&&(e="Buenas Noches"),document.querySelector(".greeting").innerHTML=e}static fiMsgSet(){let e="Hyvää iltaa";t<12?e="Hyvää huomenta":t>18&&(e="Hyvää iltapäivää"),document.querySelector(".greeting").innerHTML=e}static deMsgSet(){let e="Guten Abend";t<12?e="Guten Morgen":t>18&&(e="Guten Nachmittag"),document.querySelector(".greeting").innerHTML=e}static heMsgSet(){let e="ערב טוב";t<12?e="בוקר טוב":t>18&&(e="אחר הצהריים טובים"),document.querySelector(".greeting").innerHTML=e}static ruMsgSet(){let e="Добрый Вечер";t<12?e="добрый утро":t>18&&(e="добрый день"),document.querySelector(".greeting").innerHTML=e}static arMsgSet(){let e="مساء الخير";t<12?e="صباح الخير":t>18&&(e="مساء الخير"),document.querySelector(".greeting").innerHTML=e}static svMsgSet(){let e="God kväll";t<12&&(e="God morgon"),document.querySelector(".greeting").innerHTML=e}}},function(e,o){e.exports=class{static formatTimeUnit(e){return e<10?"0"+e:e}static getRandIndex(e){return Math.floor(Math.random()*(e.length-1))}static pickFromArray(e){return e[Math.floor(Math.random()*(e.length-1))]}static contains(e){const o=e!=e;let t;return(t=o||"function"!=typeof Array.prototype.indexOf?e=>{let t=-1,n=-1;for(t=0;t<this.length;t++){const a=this[t];if(o&&a!=a||a===e){n=t;break}}return n}:Array.prototype.indexOf).call(this,e)>-1}}},function(e,o){e.exports={itcodes:["it","it-IT","it-CH"],nlcodes:["nl","nl-BE"],frcodes:["fr","fr-BE","fr-CA","fr-FR","fr-LU","fr-MC","fr-CH"],ptcodes:["pt","pt-BR"],spcodes:["es","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-ES","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-PY","es-SV","es-UY","es-VE"],ficodes:["fi"],decodes:["de","de-AT","de-DE","de-LI","de-LU","de-CH"],hecodes:["he"],rucodes:["ru","ru-MO"],arcodes:["ar","ar-DZ","ar-BH","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LB","ar-LY","ar-QA","ar-SA","ar-SY","ar-TN","ar-AE","ar-YE"],svcodes:["sv","sv-FI","sv-SV"]}},function(e,o){e.exports={eng:["Time goes on. So whatever you’re going to do, do it. Do it now. Don’t wait.","All our dreams can come true, if we have the courage to pursue them.","It does not matter how slowly you go as long as you do not stop.","Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.","If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles","Everything you’ve ever wanted is on the other side of fear.","Success is not final, failure is not fatal: it is the courage to continue that counts.","There is only one thing that makes a dream impossible to achieve: the fear of failure.","Your true success in life begins only when you make the commitment to become excellent at what you do.","Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going.","Too many of us are not living our dreams because we are living our fears.","Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed.","If you can tune into your purpose and really align with it, setting goals so that your vision is an expression of that purpose, then life flows much more easily.","Whatever the mind can conceive and believe, it can achieve.","Don’t wish it were easier. Wish you were better.","A champion is defined not by their wins but by how they can recover when they fall.","Motivation comes from working on things we care about.","With the right kind of coaching and determination you can accomplish anything.","Some people look for a beautiful place. Others make a place beautiful.","Life is like riding a bicycle. To keep your balance, you must keep moving."],ita:["Il tempo passa. Quindi qualunque cosa che farai, falla. Falla ora. Non aspettare","Tutti i nostri sogni possono diventare reali, se abbiamo il coraggio di seguirli.","Non importa quanto lentamente vai fino a quando non ti fermi","Credi in te stesso. Sei più coraggioso di quanto pensi, più talentuoso di quanto credi, e capace più di quanto puoi immaginare.","Se ci credi funzionerà, vedrai delle opportunità. Se non ci credi, vedrai solamente ostacoli","Tutti i tuoi desideri sono opposti alla paura","Il successo non è la fine, il fallimento non è fatale: è il coraggio per continuare quello che conta.","C'è solo una cosa che fa i sogni impossibili: la paura di fallire","Il vero successo nella tua vita inizia solo quando fai il sacrificio per diventare eccellente a quello che ami.","Credi in te stesso, sfida i tuoi problemi, scava nel profondo del tuo io per sconfiggere le tue paure. Mai arrendersi per qualcun'altro. Tu devi continuare.","Troppe persone non vivono i loro sogni per vivere nelle loro paure",'Tempi difficili non fanno eroi. È durante i tempi duri che "l\'eroe" in noi viene rivelato.',"Se puoi sintonizzare sul tuo senso e allinearti a quest'ultimo, impostando i tuoi obiettivi in modo che la tua visione sia un'espressione di quel senso, La tua vita scorre molto più facilmente","Qualunque cosa la mente può immaginare e crederese, si può realizzare","Non desiderare che fosse stato più facile. Desidera che tu fossi stato migliore.","Un campione si definisce non dalle sue vittorie ma da come recupera quando cade","La motivazione viene dal lavorare so cose che amiamo","Con il giusto tipo di allenamento e determinazione puoi fare tutto","Alcune persone cercano un posto indimenticabile. Altre lo transformano in un posto mozzafiato.","La vita è come andare in bicicletta. Per tenerti in equilibrio, devi continuare a muoverti"],spa:["El tiempo continúa. Así que lo que sea que vayas a hacer, hazlo. Hazlo ahora. No esperes","Todos nuestros sueños pueden hacerse realidad, si tenemos el coraje de perseguirlos.","No importa qué tan lento vayas, siempre y cuando no te detengas.","Cree en ti mismo. Eres más valiente de lo que crees, más talentoso de lo que sabes y capaz de más de lo que imaginas.","Si crees que funcionará, verás oportunidades. Si crees que no, verás obstáculos ","Todo lo que siempre has querido está al otro lado del miedo","El éxito no es definitivo, el fracaso no es fatal: el coraje para continuar es lo que cuenta","Solo hay una cosa que hace que un sueño sea imposible de lograr: el miedo al fracaso","Tu verdadero éxito en la vida comienza solo cuando te comprometes a ser excelente en lo que haces","Cree en ti mismo, asume tus desafíos, excava profundo dentro de ti mismo para vencer tus miedos. Nunca dejes que nadie te derribe. Tienes que seguir adelante.","Muchos de nosotros no estamos viviendo nuestros sueños porque estamos viviendo nuestros miedos","Los tiempos difíciles no crean héroes. Es durante los momentos difíciles en que se revela el héroe dentro de nosotros.","Si  puedes sincornizarte con tu propósito, y realmente alinearte con él, estableciendo metas para que tu visión sea una expresión de ese propósito, entonces la vida fluye mucho más fácilmente","Lo que la mente pueda concebir y creer, lo puede lograr","No desees que sea fácil. Desea ser mejor.","Un campeón se define no por sus victorias, sino por cómo pueden recuperarse cuando caen","La motivación viene de trabajar en cosas que nos importan","Con el entrenamiento y la determinación adecuados, puedes lograr cualquier cosa","Algunas personas buscan un lugar hermoso. Otras, hacen un lugar hermoso."],pt:["O tempo continua. Então o que quer que você vai fazer,faça. Faça agora. Não espere.","Todos os sonhos podem virar verdade,se tivermos a coragem de persegui-los.","Não importa o quão devagar você for,desde que você não pare.","Acredite em si mesmo. Você é mais corajoso que pensa,mais talentoso que sabe,e capaz de mais que imagina.","Se você acredita que vai dar certo,você verá oportunidades. Se você acredita que não vai,você vera obstáculos."],authors:["Robert De Niro","Walt Disney","Confucius","Roy T. Bennett","Wayne Dyer","George Addair","Winston Churchill","Paulo Coelho","Brian Tracy","Chantal Sutherland","Les Brown","Bob Riley","Jack Canfield","Napoleon Hill","Jim Rohn","Serena Williams","Sheryl Sandberg","Reese Witherspoon","Hazrat Inayat Khan","Albert Einstein"]}}]);