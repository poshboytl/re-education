function AvatarPickerController(e,t){function n(){return t.find('[type="radio"]:checked')}function r(e){t.find(".avatar-list > li").removeClass("selected");var r=$(e||n());r.parents(".avatar-item").addClass("selected"),r.get(0).checked=!0}function i(){t.find(".avatar-list > li").removeClass("selected");var e=n().get(0);e&&(e.checked=!1)}e.choose=function(){e.selectedRadioElem=n(),e.selectedImgUrl=e.currentImgUrl},e.select=function(){r()},e.cancel=function(){e.selectedImgUrl?r(e.selectedRadioElem):i()}}angular.module("OpenClass",[]);