langhtml = "";
var currentPagePath = (page && typeof page === "object" && page.path !== undefined) ? page.path : "";
for (var key in webmakerdata.setting.langs) {
  if (webmakerdata.setting.langs[key] === true) {
    var langUrl = (currentPagePath === "") ? `/${key}/` : `/${key}/${currentPagePath}/`;
    langhtml += `<li><a href="${langUrl}"><img height="25" src="/src/lang/${key}.png" alt="${key}"></a></li>`;
  }
}
html = html.replace(/{{langhtml}}/g, langhtml);



var backhtml = "";
var i;
for (i = 0; i < json.data.length; i++) {
  var iterator = json.data[i];
  backhtml += "\n        <a href=\"" + iterator["externalUrl"] + "\" target=\"_blank\" style=\"text-decoration: none; cursor: pointer;\">\n            <img src=\"" + iterator["img"] + "\" alt=\"" + iterator["name"] + "\" class=\"modulex2-media\" />\n        </a>";
}
html = html.replace(new RegExp("{{html}}", "g"), backhtml);
