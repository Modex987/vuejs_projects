const Debounce = {
    data() {
        return {
            timeOut: null,
            timeIntervall: null,
        }
    },

    methods: {
        debounce(func, wait = 1000){
            clearTimeout(this.timeOut)
            this.timeOut = setTimeout(func, wait)
        },
        
        // debounce(func, wait = 1000){
        //     clearTimeout(this.timeOut)
        //     this.timeOut = setTimeout(func, wait)
        // }
    }
}

export default  Debounce