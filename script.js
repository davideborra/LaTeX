var level = 1;

Vue.component("modal", {
    template: "#modal-template"
  });

var app = new Vue({
    el: "#vueContainer",
    dark: false,
    data: {
        menuIsVisible: false,
        showModal: false,
        menuItems: [
            {
                name: "",
                pageSrc: ""
            }
        ],
    },
    mounted(){
        checkCookie();
        setDark(dark, level);
        this.menuItems=loadLinks(level);
        app.dark = dark;
    },
    methods: {
        showMenu(){
            this.menuIsVisible = !this.menuIsVisible;
        },
        changeTheme(){
            if(dark){
                setDark(false, level);
            }else{
                setDark(true, level);
            }
            app.dark = dark;
        }       
    }
});