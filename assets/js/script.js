! function ($) {
    "use strict";
    $(".icons-menu").on("click", function () {
        if ($("#sidebar").hasClass("show")) { $("#sidebar").removeClass("show") }
        else { $("#sidebar").addClass("show") }
    });
    $( "#btn-form-submit" ).on( "click", function( event ) {
        function validateForm() {
            var fields = ["toko", "lat", "lng", "alamat", "alamatalt", "nobl", "deskel", "kec", "kabkot", "prov", "pstl", "jaser"],
                fieldalt = {
                    "toko":"Nama Toko",
                    "lat":"Latitude",
                    "lng":"Longitude",
                    "alamat":"Alamat",
                    "alamatalt":"Alamat Lengkap",
                    "nobl":"No/Blok",
                    "deskel":"Desa/Kelurahan",
                    "kec":"Kecamatan",
                    "kabkot":"Kabupaten/Kota",
                    "prov":"Provinsi",
                    "pstl": "Postal",
                    "jaser":"Jasa Service"
                }
            var fieldname, i, l = fields.length;
            for (i = 0; i < l; i++) {
                fieldname = fields[i];
                if (document.forms["form-tt"][fieldname].value === "") {
                    fieldname = fieldname.replace(/\w/g, i => fieldalt[i])
                    alert(fieldname + " can not be empty");
                    return false;
                }
            }
            return true;
        };
        validateForm();
        event.preventDefault();
    });
}(jQuery);