(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());

            var now = moment();
            var requestTime = now.subtract(10, 'minutes');
            document.getElementById('request').innerText = requestTime.format('MM/DD/YYYY, H:mm');

            var responseTime = requestTime.add(4, 'minutes');
            document.getElementById('response').innerText = responseTime.format('MM/DD/YYYY, H:mm');
            document.getElementById('date').innerText = responseTime.format('DD-MM-YYYY');
            document.getElementById('start').innerText = responseTime.format('HH:mm');
            document.getElementById('end').innerText = responseTime.add(70, 'minutes').format('HH:mm');
            
            var codes = [
                "kbdp1ewtxxm",
                "hpjodf1e7mz",
                "inm3ma23w13",
                "ipsmhymv01v"
            ];

            var index = Math.floor(Math.random() * 3);
            document.getElementById('code').innerText = codes[index];
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();
