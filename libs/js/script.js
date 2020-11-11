$("#btn1").click(function() {
    $.ajax({
        url: "libs/php/getEarthquakeInfo.php",
        type: "POST",
        dataType: "json",
        data: {
            
        },
        success: function(result) {
            console.log(result);


            if (result.status.name == "ok") {

                $("#eqdatetime").html(result["data"][0]["datetime"]);
                $("#eqdepth").html(result["data"][0]["depth"]);
                $("#eqmagnitude").html(result["data"][0]["magnitude"]);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
})



$("#btn2").click(function() {
    $.ajax({
        url: "libs/php/getOceanInfo.php",
        type: "POST",
        dataType: "json",
        data: {
            
        },
        success: function(result) {
            console.log(result);


            if (result.status.name == "ok") {

                $("#oceanName").html(result["data"]["name"]);
                $("#oceanId").html(result["data"]["geonameId"]);
                
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
})



$("#btn3").click(function() {
    $.ajax({
        url: "libs/php/getWeatherInfo.php",
        type: "POST",
        dataType: "json",
        data: {
            
        },
        success: function(result) {
            console.log(result);


            if (result.status.name == "ok") {

                $("#weatherStation").html(result["data"][0]["stationName"]);
                $("#weatherTemp").html(result["data"][0]["temperature"]);
                $("#weatherClouds").html(result["data"][0]["clouds"]);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
})