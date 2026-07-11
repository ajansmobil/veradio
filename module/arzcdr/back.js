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
  var svUrl = iterator["externalUrl"] || iterator["url"] || "";
  var svAlt = iterator["name"] || "";
  var svImg = "<img src=\"" + iterator["img"] + "\" alt=\"" + svAlt + "\" class=\"modulex2-media\" />";
  if (svUrl) {
    backhtml += "\n        <a href=\"" + svUrl + "\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration: none; cursor: pointer;\">\n            " + svImg + "\n        </a>";
  } else {
    backhtml += "\n        <span style=\"text-decoration: none;\">\n            " + svImg + "\n        </span>";
  }
}
html = html.replace(new RegExp("{{html}}", "g"), backhtml);
