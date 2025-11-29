
const fs = require('fs');
const path = require('path');
const { MenuComposite, MenuItem } = require('../patterns/compositeMenu');
const dataPath = path.join(__dirname,'../sample_data/menu.json');
let raw = fs.readFileSync(dataPath);
let json = JSON.parse(raw);

function buildMenu(d){
  const root = new MenuComposite(d.name || 'MENU');
  (d.categories || []).forEach(cat => {
    const catComp = new MenuComposite(cat.name);
    (cat.items || []).forEach(it => catComp.add(new MenuItem(it.id, it.name, it.price, it.description)));
    root.add(catComp);
  });
  return root;
}
const root = buildMenu(json);
module.exports = { getMenu(){ return root.toJSON(); } };
