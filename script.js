var level = 1;
var app = new Vue({
    el: "#vueContainer",
    data: {
        menuIsVisible: false,
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
        this.menuItems=loadLinks(0);
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