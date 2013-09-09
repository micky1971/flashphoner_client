/**
 Copyright (c) 2013 Flashphoner
 All rights reserved. This Code and the accompanying materials
 are made available under the terms of the GNU Public License v2.0
 which accompanies this distribution, and is available at
 http://www.gnu.org/licenses/old-licenses/gpl-2.0.html

 Contributors:
 Flashphoner - initial API and implementation

 This code and accompanying materials also available under LGPL and MPL license for Flashphoner buyers. Other license versions by negatiation. Write us support@flashphoner.com with any questions.
 */
var UIManagerFlash = function () {

}

UIManagerFlash.prototype = {
    requestUnmute: function() {
        trace("requestUnmute");

        $('#video_requestUnmuteDiv').removeClass().addClass('securityDiv');
        $('#closeButton_video_requestUnmuteDiv').css('visibility', 'hidden');
        $('#sendVideo').css('visibility', 'hidden');
        $('#requestUnmuteText').show();

        $('#video').width(214);
        $('#video').height(138);
        getElement('video').style.top = "35px";

        this.viewAccessMessage();

    },

    requestUnmuteC2C: function() {
        trace("requestUnmuteC2C");
        $('.back').show();
        $('.request').show();
        $('#flash').removeClass('init').addClass('security');
        this.viewAccessMessage();
    },

    closeRequestUnmute: function() {
        trace("closeRequestUnmute");
        $('#video_requestUnmuteDiv').removeClass().addClass('closed');
        getElement('video').style.top = "20px";
    },

    closeRequestUnmuteC2C: function() {
        trace("closeRequestUnmuteC2C");
        $('.back').hide();
        $('.request').hide();
        $('#flash').addClass('init').removeClass('security');
    },

    viewAccessMessage: function() {
        trace("viewAccessMessage");
        flashphoner.viewAccessMessage();

    }

}