/**
 * Created by chenkai3 on 2016/3/28.
 */

/**
 * 匀速运动
 * @param dom
 * @param distance
 * @param duration
 */
function uniformVelocity(dom, distance, duration) {
    "use strict";
    dom.addEventListener('click', function (e) {
        /*  console.warn(e.offsetX);
         console.warn(e.clientX);*/
        var self = dom, startTime = Date.now();
        requestAnimationFrame(function step() {
            var p = Math.min(1.0, (Date.now() - startTime) / duration);
            self.style.transform = 'translateX(' + (distance * p) + 'px) ';
            if (p < 1.0) requestAnimationFrame(step);

        });

    })

}

/**
 * 匀加速运动
 * @param dom
 * @param distance
 * @param duration
 */
function uniformAcceleration(dom, distance, duration) {
    "use strict";
    dom.addEventListener('click', function (e) {
        /*  console.warn(e.offsetX);
         console.warn(e.clientX);*/
        var self = dom, startTime = Date.now();
        requestAnimationFrame(function step() {
            var p = Math.min(1.0, (Date.now() - startTime) / duration);
            self.style.transform = 'translateX(' + (distance * p * p) + 'px) ';
            if (p < 1.0) requestAnimationFrame(step);

        });

    })

}