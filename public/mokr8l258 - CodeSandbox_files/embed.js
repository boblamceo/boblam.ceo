if (!window.hasOwnProperty('_codefund_theme')) {
  window._codefund_theme = '#cf_ad {  margin: 0 auto;  max-width: 330px;  border: none;  background-color: rgba(0,0,0,0.05);}#cf_ad .cf-wrapper {     border-radius: 0px;     display: block;     padding: 14px 10px;     overflow: hidden;     font-size: 12px;     line-height: 1.4;     text-align: left;     font-family: Helvetica;}#cf_ad .cf-img-wrapper {     float: left;     margin-right: 15px;}#cf_ad .cf-img {     vertical-align: middle;     border-style: none;     max-width: 130px;}#cf_ad .cf-text {     color: rgba(255,255,255,0.8);     text-decoration: none;}#cf_ad .cf-powered-by {     margin-top: 5px;     font-size: 12px;     display: block;     color: #777;     text-decoration: none;}';
}

if (!window.hasOwnProperty('_codefund_template')) {
  window._codefund_template = '&lt;div id=&quot;cf_ad&quot;&gt;  &lt;span&gt;    &lt;span class=&quot;cf-wrapper&quot;&gt;      &lt;a href=&quot;{{link}}&quot; class=&quot;cf-img-wrapper&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;&gt;        &lt;img src=&quot;{{large_image_url}}&quot; alt=&quot;&quot; border=&quot;0&quot; height=&quot;100&quot; width=&quot;130&quot; class=&quot;cf-img&quot;&gt;      &lt;/a&gt;      &lt;a href=&quot;{{link}}&quot; class=&quot;cf-text&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;&gt;        &lt;strong&gt;{{headline}}&lt;/strong&gt; {{description}}      &lt;/a&gt;            &lt;a href=&quot;{{poweredByLink}}&quot; class=&quot;cf-powered-by&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;&gt;        ads via codefund.io        &lt;img src=&quot;{{pixel}}&quot; width=&quot;1&quot; height=&quot;1&quot; style=&quot;width: 1px; height: 1px;&quot; /&gt;      &lt;/a&gt;    &lt;/span&gt;  &lt;/span&gt;&lt;/div&gt;';
}

var buildJsonUrl = function(url){
    browserWidth = window.innerWidth;
    browserHeight = window.innerHeight;

    return url + '?width=' + browserWidth + '&height=' + browserHeight;
  };

var _codefund = {
  init: function(config) {
    this.render = this.render.bind(this);
    this.targetId = config.targetId;
    this.jsonUrl = buildJsonUrl('https://codefund.io/t/s/1fc4e04d-9622-4844-81f9-7522c7d19ac7/details.json');
  },

  serve: function() {
    this.loadJSON(this.jsonUrl, this.render);
  },

  render: function(ad) {
    this.cleanAd();
    this.addTheme();
    this.insertAd(ad);
  },

  cleanAd: function() {
    var cfStyle = document.getElementById('cf-style');
    if (cfStyle != null) {
      cfStyle.remove();
    }

    var cfAd = document.getElementById(this.targetId);
    if (cfAd != null) {
      cfAd.innerHTML = "";
    }
  },

  addTheme: function() {
    var css = this.decodeHtml(window._codefund_theme);
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.setAttribute('id', 'cf-style');
    if (s.styleSheet) { // IE
      s.styleSheet.cssText = css;
    } else {
      s.appendChild(document.createTextNode(css));
    }
    head.appendChild(s);
  },

  insertAd: function (ad) {
    var rawHtml = this.decodeHtml(window._codefund_template);
    var html = this.injectVariableIntoTemplate(rawHtml, ad);
    var el = document.createElement("span");
    el.innerHTML = html;

    const script = document.getElementById(this.targetId);
    if (ad.link === "") {
      console.log('CodeFund does not have a advertiser for you at this time.');
    } else {
      if (script && ad.link !== "") {
        script.appendChild(el);
      } else {
        console.log('CodeFund target does not exist. You must create an element in the DOM with id="' + this.targetId + '"');
      }
    }
  },

  hideAd: function () {
    var cfAd = document.getElementById(this.targetId);
    cfAd.style.display = "none";
  },

  decodeHtml: function (text) {
    var entities = [
      ['amp', '&'],
      ['apos', '\''],
      ['#x27', '\''],
      ['#x2F', '/'],
      ['#39', '\''],
      ['#47', '/'],
      ['lt', '<'],
      ['gt', '>'],
      ['nbsp', ' '],
      ['quot', '"']
    ];

    for (var i = 0, max = entities.length; i < max; ++i)
      text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);

    return text;
  },

  injectVariableIntoTemplate: function (template, data) {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        var re = new RegExp('{{' + key + '}}', 'g');
        template = template.replace(re, data[key]);
      }
    }
    return template;
  },

  loadJSON: function(url, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", url, true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState === 4 && xobj.status === 200) {
        const json = JSON.parse(xobj.responseText);
        callback(json);
      }
    };
    xobj.send(null);
  }
}

_codefund.init({
  targetId: 'codefund_ad'
});
_codefund.serve();
