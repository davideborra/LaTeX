var level = 1;

Vue.component("modal", {
    template: "#modal-template"
  });

var app = new Vue({
    el: "#vueContainer",
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
        }       
    }
});