
langhtml = "";
var currentPagePath = (page && typeof page === "object" && page.path !== undefined) ? page.path : "";
for (const key in webmakerdata.setting.langs) {
  if (webmakerdata.setting.langs[key] === true) {
    var langUrl = (currentPagePath === "") ? `/${key}/` : `/${key}/${currentPagePath}/`;
    langhtml += `<li><a href="${langUrl}"><img height="25" src="/src/lang/${key}.png" alt="${key}"></a></li>`;
  }
}
html = html.replace(/{{langhtml}}/g, langhtml);
