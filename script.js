var app = new Vue({
    el: "#vueContainer",
    data: {
        width: 10,
        menuIsVisible: false,
        menuItems: [
            {
                name: "Appunti",
                pageSrc: "../appunti"
            },
            {
                name: "LaTeX",
                pageSrc: "../LaTeX"
            },
            {
                name: "Informatica",
                pageSrc: "../informatica"
            }
        ],
    },
    mounted(){
    },
    methods: {
        showMenu(){
            this.menuIsVisible = !this.menuIsVisible;
        }
    }
});