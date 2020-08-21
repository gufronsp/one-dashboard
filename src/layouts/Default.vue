<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item 
          link
          v-for="menu in menus"
          :key="menu.name">
          <v-list-item-action>
            <v-icon>mdi-{{menu.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{menu.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
      <v-container
        class="fill-height"
        fluid
      >
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
        icon: 'view-dashboard',
        type: 'item',
        childs: []
      },
      {
        name: 'UI Elements',
        icon: 'devices',
        type: 'group',
        childs: [
          {
            name: 'General'
          }
        ]
      }
    ]
  })
}
</script>