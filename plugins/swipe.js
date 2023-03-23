export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('swipe', {
        beforeMount: function ($el, binding) {
            let touchStartPos = 0;
            let touchStopPos = 0;
            const touchMinLength = 40;


            let startMouse = 0;

            $el.addEventListener("wheel",(e)=>{
                if (e.deltaY> 120) {
                    binding.value(1);
                }
                if (e.deltaY<-120) {
                    binding.value(-1);
                }
            })

            window.addEventListener("keydown",(e)=> {
                if (e.key === "ArrowDown") {
                    binding.value(1);
                }
                if (e.key === "ArrowUp") {
                    binding.value(-1);
                }

            })
            $el.addEventListener("touchstart", (e) => {
                //e.preventDefault();
                if (
                    e.type == "touchstart" ||
                    e.type == "touchmove" ||
                    e.type == "touchend" ||
                    e.type == "touchcancel"
                ) {
                    const touch = e.touches[0] || e.changedTouches[0];
                    touchStartPos = touch.pageY;
                }
            });

            $el.addEventListener("touchend", (e) => {
                //e.preventDefault();

                if (
                    e.type == "touchstart" ||
                    e.type == "touchmove" ||
                    e.type == "touchend" ||
                    e.type == "touchcancel"
                ) {
                    const touch = e.touches[0] || e.changedTouches[0];
                    touchStopPos = touch.pageY;
                }

                // Value is a function
                if (touchStartPos + touchMinLength < touchStopPos) {
                    binding.value(-1);
                } else if (touchStartPos > touchStopPos + touchMinLength) {
                    binding.value(1);
                }
            });
        },
    })
})