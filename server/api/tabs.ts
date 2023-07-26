export default defineEventHandler((event) => {
    return useStorage().getItem('mock:tabs');
})

const initialTabs = {
  "tab1": {
      "title": "Marketing",
      "icon": "icon-marketing",
      "active": ["plugin1", "plugin2", "plugin4"],
      "disabled": ["plugin3"],
      "inactive": ["plugin5", "plugin6"]
    },
    "tab2": {
      "title": "Finance",
      "icon": "icon-finance",
      "active": ["plugin7", "plugin8"],
      "disabled": ["plugin9"],
      "inactive": ["plugin10"]
    },
    "tab3": {
      "title": "Personnel",
      "icon": "icon-people",
      "active": ["plugin11"],
      "disabled": ["plugin12"],
      "inactive": ["plugin13"]
    }
}

useStorage().setItem('mock:tabs', initialTabs);