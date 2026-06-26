# WebYapar sayfa haritası

> **Otomatik:** `talimatlar/web/dogrula.js` her tam koşu sonunda (hata/uyarı olsa da) bu dosyayı yazar/günceller. ELO ajan bağlamında proje kökündeki `page_map.md` — sayfa/modül yapısı için **birincil özet**; tam metin `lib/session/queue.js` ile sistem istemine eklenir (çok uzunsa kısaltma notu verilir).

**Veri kökü:** `D:/matrix/public/data/proje/veradio/web`
**Proje adı (özet):** web
**Aktif diller (tr önde):** tr

## Sayfalar (kategori listesi + `page/<id>/index.json`)

| Sayfa id | Kategori json | path (slug) | status | modulestatus (satır) | detay dosyası |
| --- | --- | --- | --- | --- | --- |
| `nfss0szb0c` | `page.json` | yeni-sayfa-ouph | play |  | `page/nfss0szb0c/index.json` |
| `gr6zgehrac` | `page.json` | bilgilendirme | play |  | `page/gr6zgehrac/index.json` |
| `olowwkkcfh` | `page.json` | iletisim | play |  | `page/olowwkkcfh/index.json` |
| `hakkimizda` | `bilgilendirme.json` | hakkimizda | play |  | `page/hakkimizda/index.json` |
| `misyon` | `bilgilendirme.json` | misyon | play |  | `page/misyon/index.json` |
| `vizyon` | `bilgilendirme.json` | vizyon | play |  | `page/vizyon/index.json` |
| `kalitepolitikamiz` | `bilgilendirme.json` | kalite-politikamiz | play |  | `page/kalitepolitikamiz/index.json` |
| `gizlilikpolitikasi` | `bilgilendirme.json` | gizlilik-politikasi | play |  | `page/gizlilikpolitikasi/index.json` |
| `kisiselveriler` | `bilgilendirme.json` | kisisel-veriler | play |  | `page/kisiselveriler/index.json` |
| `kullanicahaklari` | `bilgilendirme.json` | kullanicihaklari | play |  | `page/kullanicahaklari/index.json` |
| `yasaluyari` | `bilgilendirme.json` | yasal-uyari | play |  | `page/yasaluyari/index.json` |
| `eyozte0qlj` | `user.json` | user | play |  | `page/eyozte0qlj/index.json` |
| `vqaq8yx90g` | `kapali.json` | login | play |  | `page/vqaq8yx90g/index.json` |

## Modüller (`modules.json`)

| id | local | path |
| --- | --- | --- |
| toijiy | header | code |
| w0cn43 | footer | footer-1 |
| cwurqi | body | map |
| k5wklo | body | contact-3 |
| jc1rhg | body | page-desing-sade |
| k3o6l7 | body | login |
| arzcdr | body | code |
| juutwj | body | tema-1 |

## Şablon (`desing.json`) modül kimlikleri

- **header:** `toijiy`
- **headerdefault:** `toijiy`
- **body:** `arzcdr`
- **footer:** `w0cn43`
- **footerdefault:** `w0cn43`

## Notlar

- Bu dosya **yapı özetidir**; DIL/SEO/R kuralları `dogrula.js` çıktısında denetlenir.
- Liste satırı ile `page/<id>/index.json` birleşimi render sırasında `Object.assign` ile uyumludur (`kurallar.md` / müfettiş akışı).
