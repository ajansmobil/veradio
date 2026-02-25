langhtml = "";
var currentPagePath = (page && typeof page === "object" && page.path !== undefined) ? page.path : "";
for (const key in webmakerdata.setting.langs) {
  if (webmakerdata.setting.langs[key] === true) {
    var langUrl = (currentPagePath === "") ? `/${key}/` : `/${key}/${currentPagePath}/`;
    langhtml += `<li><a href="${langUrl}"><img height="25" src="/src/lang/${key}.png" alt="${key}"></a></li>`;
  }
}
html = html.replace(/{{langhtml}}/g, langhtml);



let backhtml = "";
for (const iterator of json.data) {
  backhtml += `
        <a href="${iterator["externalUrl"]}" target="_blank" style="text-decoration: none;">
            <img src="${iterator["img"]}" alt="${iterator["name"]}" class="modulex2-media" />
        </a>`;
}
html = html.replace(new RegExp("{{html}}", "g"), backhtml);
