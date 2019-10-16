import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md"
  }
});

// export default new Vuetify({
//   icons: {
//     iconfont: "md"
//   },
//   theme: {
//     primary: "#F32735",
//     secondary: "#FFC629",
//     tertiary: "#54565A"
//   }
// });
