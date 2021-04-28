sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
        "use strict";

        return Controller.extend("project3.controller.View1", {
            onInit: function () {
                var vUrl = "/ProductSet";
                var oModel = this.getView().getModel();
                oModel.read(vUrl, {
                    success: function(oParam1, oParam2){
                        var aux1 = 1;
                    },
                    error: function(oParam3){
                        var aux2 = 2;
                    }
                })
            },
            metodo1: function () {

            },
            metodo2: function () {

            },
        });
    });
