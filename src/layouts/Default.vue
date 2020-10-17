<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <div 
          v-for="menu in menus"
          :key="menu.name">
          <v-list-item
            v-if="menu.type == 'item'"
            :to="menu.link"
            link
          >
            <v-list-item-action>
              <v-icon v-text="menu.icon"></v-icon>
            </v-list-item-action>
            <v-list-item-title>{{menu.name}}</v-list-item-title>
          </v-list-item>

          <v-list-group
            v-if="menu.type == 'group'"
            :prepend-icon="menu.icon"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-title>{{menu.name}}</v-list-item-title>
            </template>

            <v-list-item
              v-for="child in menu.childs"
              :key="child.name" 
              :to="child.link"
              link
            >
              <v-list-item-title>{{child.name}}</v-list-item-title>
              <v-list-item-action>
                <v-icon v-text="child.icon"></v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  props: {
    source: String,
  },

  data: () => ({
    drawer: null,
    title: 'One Dashboard',
    menus: [
      {
        name: 'Dashboard',
        icon: 'mdi-view-dashboard',
        type: 'item',
        link: '/',
        childs: []
      },
      {
        name: 'UI Elements',
        icon: 'mdi-devices',
        type: 'group',
        link: null,
        childs: [
          {
            name: 'General',
            icon: 'mdi-menu-right',
            type: 'item',
            link: '/ui-elements/general',
            childs: []
          }
        ]
      }
    ]
  })
}
</script>