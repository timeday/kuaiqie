// JavaScript Document
var icon = "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";

$().ready(function() {
    //绑定事件
    $(".doing").click(function() {
        if ($(this).hasClass("disabled")) {
            alert("请导入图片！");
        } else {
            setNavStatus($(this).parent());
            switch ($(this).attr("id")) {
            case "append":
                appendOuter();
                break;

            case "clear":
                $("#myPannel").empty();
                $("#myWidgets").hide();
                break;

            case "code":
                viewCode($(this));
                break;

            case "export":
                //exportZip();
                break;

            case "ruler":
                loadRuler($(this));
                break;

            case "fullbanner":
                fullBanner();
                break;

            case "bgcolor":
                bgColor($(this));
                break;

            case "splitrow":
                splitRow();
                break;

            case "mergerow":
                mergeDown($(".cur").parent());
                break;

            case "columns":
                splitColumn($(this));
                break;

            case "link":
                addLink($(this));
                break;

            case "ignore":
                ignore($(this));
                break;

            default:
                //doiing
            }
        }
    });
    //关闭
    $(".takeIt").click(function() {
        if ($(this).parents("li").hasClass("on")) {
            $(this).parents("li").removeClass("on");
        }
    });
    //设置
    $(".set-btn").click(function() {
        if ($(this).attr("id") == "set-data") {
            setData();
        } else if ($(this).attr("id") == "auto-create") {
            setData();
            autoCreate();
        } else if ($(this).attr("id") == "set-bg-color") {
            setBgColor();
        } else if ($(this).attr("id") == "set-bg-cancel") {
            setBgCancel();
        } else if ($(this).attr("id") == "split-column") {
            doSplitColumn();
        } else if ($(this).attr("id") == "split-column-cancel") {
            splitColumnCancel();
        } else if ($(this).attr("id") == "add-link") {
            $(".cur").html('<a href="' + $("#linkurl").val() + '"></a>');
            $("#myWidgets").hide();
        } else if ($(this).attr("id") == "export-zip") {
            $("#overflow").show();
            $("#html-code").val(domToCode());
            $("#css-code").val(domToCss());
            if (exportZip($("#my-project").val())) {
                $("#overflow").fadeOut("fast");
            }
        } else if ($(this).attr("id") == "reset-data") {
            $("#page-title").val("");
            $("#page-keywords").val("");
            $("#page-description").val("");
            $("#my-project").val("myproject");
        }
    });
    //关闭
    $(".closeIt").click(function() {
        $(this).parent().hide();
        $("#code").parent().removeClass("on");
    });
    //获得焦点
    $("#myPannel").on("click", ".outer-section", function() {
        var next = $(this).next();
        var handler = $(this).children(".outer-handler");
        var wrapper = $(this).children(".outer-wrapper");
        $(".outer-section").filter(".ui-resizable").resizable('destroy');
        var defaults = {
            containment: "#myPannel",
            handles: "s",
            minWidth: $("#myPannel").width(),
            start: function(event, ui) {
                $("#myWidgets").hide();
            },
            resize: function(event, ui) {
                setHeight($(this), $(this).height());
            },
            stop: function() {
                $(".cur").click();
            }
        };
        var height = 0;
        if (next.length > 0) {
            height = $(this).height() + next.height();
            var options = {
                maxHeight: height - 20,
                resize: function(event, ui) {
                    setHeight($(this), $(this).height());
                    setHeight(next, height - $(this).height(), true);
                }
            };
            $.extend(defaults, options);
        }
        $(this).resizable(defaults);
        $(".outer-wrapper").removeClass("cur");
        wrapper.addClass("cur");
        attchWidgets(wrapper);
    });
    //测量
    $("#myPannel").on("dblclick", function(e) {
        if (e.target == this) {
            var x_axis = y_axis = 0;
            x_axis = $("#myPannel").offset().left - $("#myCanvas").offset().left;
            y_axis = $(document).scrollTop();
            pickOutCanvas(x_axis, y_axis, {
                width: $(window).width(),
                height: $(window).height(),
                paddingTop: y_axis,
                paddingLeft: $(this).offset().left
            });
            stopBubble(e);
        }
    });
    $("#myPannel").on("dblclick", ".outer-wrapper", function(e) {
        if (e.target == this) {
            var x_axis = y_axis = width = 0;
            var offset = $(this).offset();
            x_axis = offset.left - $("#myCanvas").offset().left;
            if ($(this).hasClass("outer-banner")) {
                width = sectionWidth;
            } else {
                width = wrapperWidth;
            }
            y_axis = offset.top - 45;
            pickOutCanvas(x_axis, y_axis, {
                width: width,
                height: $(this).outerHeight(true),
                paddingTop: y_axis,
                paddingLeft: offset.left
            });
            stopBubble(e);
        }
    });
    //删除
    $("#myPannel").on("click", ".removeIt", function() {
        mergeDown($(this).parent());
    });
    //插入
    $("#myPannel").on("mouseenter", ".outer-wrapper div, .outer-wrapper a", function() {
        if ($(this).is("a")) {
            $(this).replaceWith('<div ref="' + $(this).attr("href") + '">' + $(this).text() + '</div');
        }
        if ($(this).children(".removeIt").length == 0) {
            $(this).append('<em class="removeIt"></em>');
        }
    }).on("mouseleave", ".outer-wrapper div, .outer-wrapper a", function() {
        if ($(this).is("div[ref]")) {
            $(this).replaceWith('<a href="' + $(this).attr("ref") + '" target="_blank"></a>');
        }
        $(this).find(".removeIt").remove();
    });
    $("#myPannel").click(function(e) {
        if ($(e.target).is("#myPannel")) {
            $("#myWidgets").hide();
        }
    });
    $(".ruler-btn").click(function() {
        $("#setup").parent().removeClass("on");
        var x_axis = y_axis = 0;
        x_axis = $("#myPannel").offset().left - $("#myCanvas").offset().left;
        y_axis = $(document).scrollTop();
        pickOutCanvas(x_axis, y_axis, {
            width: $(window).width(),
            height: $(window).height(),
            paddingTop: y_axis,
            paddingLeft: $("#myPannel").offset().left,
            setup: true
        });
    });
    $(".picker-btn").click(function() {
        pickColor($(this));
    });
    $(".edge").keyup(function() {
        if ($("#eq-edge").is(":checked")) {
            $(".edge").val($(this).val());
        }
    });
    $(".space").keyup(function() {
        if ($("#eq-space").is(":checked")) {
            $(".space").val($(this).val());
        }
    });
});

function loadImg(file) {
    $("#setup").parent().removeClass("on");
    $("#uploads-path").val(file.name);
    if ($("#dropbox").length > 0) {
        $("#dropbox").css("background-image", "url(resources/images/loading.gif)");
        $("#dropbox").children("h3, p").remove();
        if (isIE()) {
            if (!/\.(gif|jpg|jpeg|png)$/i.test(file.name)) {
                alert("请上传gif、jpeg、jpg、png格式的图片");
                return false;
            }
        } else {
            if (!/image\/\w+/.test(file.type)) {
                alert("请上传gif、jpeg、jpg、png格式的图片");
                return false;
            }
        }
    }

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) {
        image.onload = function() {
            canvasWidth = canvas.width = image.width;
            canvasHeight = canvas.height = image.height;
            context.clearRect(0, 0, canvasWidth, canvasHeight);
            context.drawImage(image, 0, 0);
            $("#welcome").slideUp("fast").remove();
            $("#main").height(canvasHeight);
            $("#myCanvas").show("fast", "linear", function() {
                adaptive(true);
            });
        };
        image.src = e.target.result;

    };
    $(window).resize(function() {
        adaptive(false);
    });
    $(".doing").removeClass("disabled");
}

function pickOutCanvas(x_axis, y_axis, opts) {
    var imageData = context.getImageData(x_axis, y_axis, opts.width, opts.height);
    var outCanvas = document.createElement('canvas');
    outCanvas.id = "outCanvas";
    if (opts.width != outCanvas.width) outCanvas.width = opts.width;
    if (opts.height != outCanvas.height) outCanvas.height = opts.height;
    var outctx = outCanvas.getContext('2d');
    outctx.clearRect(0, 0, outCanvas.width, outCanvas.height);
    outctx.putImageData(imageData, 0, 0);
    $("#main").append($(outCanvas));
    $(outCanvas).show().ruler(opts);
}

function pickOutImage(opts) {
    var outCanvas = document.createElement('canvas');
    outCanvas.id = "outCanvas";
    if (opts.width != outCanvas.width) outCanvas.width = opts.width;
    if (opts.height != outCanvas.height) outCanvas.height = opts.height;
    var outctx = outCanvas.getContext('2d');
    outctx.clearRect(0, 0, outCanvas.width, outCanvas.height);
    outctx.drawImage(image, 0, 0);
    $("#main").append($(outCanvas));
    $(outCanvas).show().ruler(opts);
}

function adaptive(reload) {
    var documentWidth = $(document).width();
    var width = (canvasWidth > documentWidth) ? documentWidth : canvasWidth;
    var height = canvasHeight;
    var sider = (documentWidth - canvasWidth) / 2;
    var mgl = Math.ceil(sider);
    var mgr = Math.floor(sider);
    var margin = {
        "margin-left": mgl,
        "margin-right": mgr
    };
    var setting = {
        "width": width,
        "height": height
    };
    $("#main").width(documentWidth);
    if (reload) {
        $("#myCanvas").animate(margin, "fast", "linear", function() {
            $("#wrapper-width").val(canvasWidth);
            $("#setup").parent().addClass("on");
        });
    } else {
        $("#myCanvas").css(margin);
    }
    if (sider > 0) {
        jQuery.extend(setting, margin);
    }
    $("#myPannel").css(setting);
    $("#myPicker").css(setting);
}

function setNavStatus($obj) {
    if ($obj.hasClass("on")) {
        $obj.removeClass("on");
    } else {
        $obj.siblings().each(function(i) {
            $(this).removeClass("on");
            if ($(this).children("a#ruler").length > 0) {
                loadRuler($obj);
            } else if ($(this).children("a#code").length > 0) {
                viewCode($obj);
            }
        });
        $obj.addClass("on");
    }
}

function pickColor($obj) {
    if ($obj.attr("for") == "body-bg-color") {
        $("#setup").parent().removeClass("on");
    }
    $("#myPannel").css("z-index", "-10");
    $("#myWidgets").css("z-index", "-9");
    $("#myPicker").css("z-index", "2000");
    var color = "#FFFFFF";
    var offset = $("#myPannel").offset();
    var picker = document.getElementById('pick-handler');
    var pickCtx = picker.getContext('2d');
    var pickData = pickCtx.createImageData(90, 90);
    $("#myPicker").bind("mouseenter", function() {
        $("#myPicker").css("cursor", "none");
        $("#color-picker").show();
    }).bind("mousemove", function(e) {
        var page_x = e.pageX - 45;
        var page_y = e.pageY - offset.top - 45;
        var x_axis = e.pageX - offset.left - 7;
        var y_axis = e.pageY - offset.top - 7;
        $("#color-picker").css({
            top: page_y,
            left: page_x
        });
        var imageData = context.getImageData(x_axis, y_axis, 15, 15);
        for (var i = 0; i < 15; i++) {
            var m = i * 2160;
            for (var j = 0; j < 15; j++) {
                var o = 60 * i + 4 * j;
                var n = j * 24 + m;
                for (var k = 0; k < 6; k++) {
                    var p = n + k * 4;
                    for (var l = 0; l < 6; l++) {
                        var q = p + l * 360;
                        pickData.data[q] = imageData.data[o];
                        pickData.data[q + 1] = imageData.data[o + 1];
                        pickData.data[q + 2] = imageData.data[o + 2];
                        pickData.data[q + 3] = 255;
                    }
                }
            }
        }
        pickCtx.clearRect(0, 0, 90, 90);
        pickCtx.putImageData(pickData, 0, 0);
        var pix = 448;
        color = "#" + rgbToHex("rgb(" + imageData.data[pix] + "," + imageData.data[pix + 1] + "," + imageData.data[pix + 2] + ")");
        $("#color-show").children("em").css("background-color", color);
        $("#color-show").children("span").text(color);
    }).bind("mouseout", function() {
        $("#color-picker").hide();
    }).bind("click", function(e) {
        if ($obj.attr("for") == "body-bg-color") {
            $("#body-bg-color").val(color).focus().select();
            $("#setup").parent().addClass("on");
        } else if ($obj.attr("for") == "section-bg-color") {
            $("#section-bg-color").val(color).focus().select();
        }
        return pickColorOff();
    });
    $(window).keydown(function(event) {
        if (event.keyCode == 27) {
            pickColorOff();
            return stopBubble(event);
        }
    });
}

function pickColorOff() {
    $("#myPannel").css("z-index", "9");
    $("#myWidgets").css("z-index", "10");
    $("#myPicker").css({
        "z-index": "-1",
        "cursor": "pointer"
    });
    $("#color-picker").fadeOut("fast", function() {
        $(this).css({
            "top": "-100px",
            "cursor": "-100px"
        });
    });
    $("#myPicker").unbind();
    return false;
}

function setData() {
    sectionWidth = $("#myPannel").width();
    wrapperWidth = parseInt($("#wrapper-width").val());
    wrapperMargin = (sectionWidth - wrapperWidth) / 2;
    sectionMarginBottom = parseInt($("#section-margin-bottom").val());
    pageBackgroundColor = HexToRgb($("#body-bg-color").val());
    $(".outer-section").not(".isplit").css('margin-bottom', sectionMarginBottom + 'px');
    $(".outer-wrapper").css('width', wrapperWidth + 'px');
    $("#setup").parent().removeClass("on");
}

//自动分段

function autoCreate() {
    $("#myPannel").empty();
    if (sectionMarginBottom == 0) {
        scanCanvas();
    } else {
        scanMargin();
    }
    if ($("#myPannel").children("section").length <= 1) {
        var per = 100;
        $("#myPannel").empty();
        if (sectionMarginBottom == 0) {
            var len = Math.floor($("#myPannel").height() / 100);
            var height = Math.floor($("#myPannel").height() / len);
            for (var i = 1; i <= len; i++) {
                if (i == len) {
                    per = $("#myPannel").height() - 100 * (i - 1);
                }
                $("#myPannel").append('<section class="outer-section" style="height:' + per + 'px;"><div class="outer-handler"><em>S' + i + '</em><span>height:' + per + 'px;</span></div><div class="outer-wrapper" style="width:' + wrapperWidth + 'px;height:' + per + 'px;margin-left:' + Math.ceil(wrapperMargin) + 'px;margin-right:' + Math.floor(wrapperMargin) + 'px;"></div><em class="removeIt"></em></section>');
            };
        } else {
            var len = Math.floor($("#myPannel").height() / (100 + sectionMarginBottom));
            var height = Math.floor($("#myPannel").height() / len);
            for (var i = 1; i <= len; i++) {
                if (i == len) {
                    per = $("#myPannel").height() - 100 * i;
                }
                $("#myPannel").append('<section class="outer-section" style="height:' + per + 'px;margin-bottom: ' + sectionMarginBottom + 'px;"><div class="outer-handler"><em>S' + i + '</em><span>height:' + per + 'px;</span></div><div class="outer-wrapper" style="width:' + wrapperWidth + 'px;height:' + per + 'px;margin-left:' + Math.ceil(wrapperMargin) + 'px;margin-right:' + Math.floor(wrapperMargin) + 'px;"></div><em class="removeIt"></em></section>');
            };
        }
    }
}

function scanMargin() {
    var len = 0;
    var cur = 0;
    var start = 0;
    var blank = 0;
    var section = 0;
    var row = canvasWidth * 4;
    var boundary = (canvasWidth - 1) * 4;

    $("#myPannel").empty();
    $("#myWidgets").hide();
    for (var i = 0; i < canvasHeight; i++) {
        imageData = context.getImageData(0, i, canvasWidth, 1);
        for (var k = 0; k < row; k += 4) {
            var red = imageData.data[k];
            var green = imageData.data[k + 1];
            var blue = imageData.data[k + 2];
            if (i == canvasHeight - 1) {
                len = len + 1;
                cur = section - blank;
                $("#myPannel").append('<section class="outer-section" style="height:' + cur + 'px;"><div class="outer-handler"><em>S' + len + '</em><span>height:' + cur + 'px;</span></div><div class="outer-wrapper" style="width:' + wrapperWidth + 'px;height:' + cur + 'px;margin-left:' + Math.ceil(wrapperMargin) + 'px;margin-right:' + Math.floor(wrapperMargin) + 'px;"></div><em class="removeIt"></em></section>');
                break;
            } else if (red == pageBackgroundColor[0] && green == pageBackgroundColor[1] && blue == pageBackgroundColor[2]) {
                if (k == boundary) { //检测边界
                    section++;
                    blank++;
                }
            } else {
                if (start == 1 && blank >= sectionMarginBottom) {
                    cur = section - blank;
                    if (cur >= 50) {
                        len = len + 1;
                        $("#myPannel").append('<section class="outer-section" style="height:' + cur + 'px;margin-bottom: ' + sectionMarginBottom + 'px;"><div class="outer-handler"><em>S' + len + '</em><span>height:' + cur + 'px;</span></div><div class="outer-wrapper" style="width:' + wrapperWidth + 'px;height:' + cur + 'px;margin-left:' + Math.ceil(wrapperMargin) + 'px;margin-right:' + Math.floor(wrapperMargin) + 'px;"></div><em class="removeIt"></em></section>');
                        section = blank - sectionMarginBottom;
                    }
                }
                if (start == 0) {
                    start = 1;
                }
                section++;
                blank = 0;
                break;
            }
        }
    }
}

function scanCanvas() {
    imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);
    for (var i = 0; i < length * 4; i += 4) {
        var myRed = imageData.data[i];
        var myGreen = imageData.data[i + 1];
        var myBlue = imageData.data[i + 2];
        myGray = parseInt((myRed + myGreen + myBlue) / 3);
        imageData.data[i] = myGray;
        imageData.data[i + 1] = myGray;
        imageData.data[i + 2] = myGray;
    }
    var step = 100;
    var minHeight = 20;
    var data = new Array();
    var gray = imageData.data[0];
    for (var i = 0; i < canvasWidth; i += step) {
        for (var k = 0; k < canvasHeight; k++) {
            if (typeof(data[k]) == 'undefined') {
                data[k] = new Array();
            }
            p = (i + k * canvasWidth) * 4;
            if (Math.abs(imageData.data[p] - gray) > 10) {
                data[k][i] = 1;
            } else {
                data[k][i] = 0;
            }
            gray = imageData.data[p];
        };
    }
    var counter = 0,
        len = 0,
        section = 0;
    for (var i = 0; i < canvasHeight; i++) {
        counter = 0;
        for (var k = 0; k < canvasWidth; k += step) {
            if (data[i][k] == 1) {
                counter++;
            }
            if ((counter * step / canvasWidth > 0.7 && section >= minHeight) || (canvasWidth <= k + step && i == canvasHeight - 1)) {
                if (section >= 50) {
                    len = len + 1;
                    $("#myPannel").append('<section class="outer-section" style="height:' + section + 'px;"><div class="outer-handler"><em>S' + len + '</em><span>height:' + section + 'px;</span></div><div class="outer-wrapper" style="width:' + wrapperWidth + 'px;height:' + section + 'px;margin-left:' + Math.ceil(wrapperMargin) + 'px;margin-right:' + Math.floor(wrapperMargin) + 'px;"></div><em class="removeIt"></em></section>');
                    section = 0;
                }
            }
        };
        section++;
    }
    return false;
}

function appendOuter() {
    var html = '';
    var len = $('.outer-section').length + 1;
    var spacing = '';
    if (sectionMarginBottom > 0) {
        spacing = 'margin-bottom: ' + sectionMarginBottom + 'px;';
    }
    if ($(".cur").length > 0) {
        var parent = $(".cur").parent();
        if (parent.next().length > 0) {
            var next = parent.next();
            var height = Math.floor((next.height() - sectionMarginBottom) / 2);
            html = '<section id="section-' + len + '" class="outer-section" style="height:' + height + 'px;' + spacing + '"><div class="outer-handler"><em>S' + len + '</em><span>height:' + height + 'px;</span></div><div class="outer-wrapper" style="width: ' + wrapperWidth + 'px;height:' + height + 'px;margin-left:' + Math.ceil(wrapperMargin) + 'px;margin-right:' + Math.floor(wrapperMargin) + 'px;"></div><em class="removeIt"></em></section>';
            height = next.height() - height - sectionMarginBottom;
            setHeight(next, height, false);
        } else {
            html = '<section id="section-' + len + '" class="outer-section" style="height:100px;' + spacing + '"><div class="outer-handler"><em>S' + len + '</em><span>height:100px;</span></div><div class="outer-wrapper" style="width: ' + wrapperWidth + 'px;margin-left:' + Math.ceil(wrapperMargin) + 'px;margin-right:' + Math.floor(wrapperMargin) + 'px;"></div><em class="removeIt"></em></section>';
        }
        parent.after(html);
    } else {
        html = '<section id="section-' + len + '" class="outer-section" style="height:100px;' + spacing + '"><div class="outer-handler"><em>S' + len + '</em><span>height:100px;</span></div><div class="outer-wrapper" style="width: ' + wrapperWidth + 'px;margin-left:' + Math.ceil(wrapperMargin) + 'px;margin-right:' + Math.floor(wrapperMargin) + 'px;"></div><em class="removeIt"></em></section>';
        $("#myPannel").append(html);
        var top = $("#section-" + len).offset().top - 45;
        if (top > $(document).scrollTop() + $(window).height()) {
            $("html,body").animate({
                scrollTop: top
            }, 1000);
        }
    }

}

function attchWidgets(wrapper) {
    $("#extra").hide();
    $("#myWidgets").find("li").removeClass("on");
    if (wrapper.find("a").length > 0) {
        $("#myWidgets").find("#linkurl").val(wrapper.find("a").attr("href"));
    }
    if (wrapper.hasClass("outer-banner")) {
        $("#myWidgets").find("#fullbanner").parent().addClass("on");
    }
    var offset = wrapper.offset();
    var top = (offset.top - 45) + "px";
    var left = offset.left + "px";
    $("#myWidgets").css({
        "top": top,
        "left": left
    }).show();
}

function domToCode() {

    var title = $("#page-title").val();
    var keywords = $("#page-keywords").val();
    var description = $("#page-description").val();

    var html = '';
    html += '<!DOCTYPE html>\r\n';
    html += '<html>\r\n';
    html += '<head lang="en">\r\n';
    html += '    <meta charset="UTF-8">\r\n';
    html += '    <title>' + title + '</title>\r\n';
    html += '    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\r\n';
    html += '    <meta name="viewport" content="width=device-width, initial-scale=1">\r\n';
    html += '    <meta name="renderer" content="webkit">\r\n';
    html += '    <meta name="searchtitle" content="' + title + '">\r\n';
    html += '    <meta name="title" content="' + title + '">\r\n';
    html += '    <meta name="description" content="' + description + '" />\r\n';
    html += '    <meta name="keywords" content="' + keywords + '" />\r\n';
    html += '    <link rel="shortcut icon" href="images/favicon.ico" />\r\n';
    html += getBootstrap($("#use-bootstrap").is(':checked'));
    html += '    <link rel="stylesheet" href="css/global.css" />\r\n';
    html += '</head>\r\n';
    html += '<body>\r\n';
    html += '<!-- Init Page Content Start -->\r\n';
    html += getBody($("#template:checked").val());
    html += '<!-- Init Page Content End -->\r\n';
    html += getJquery($("#use-jquery").is(':checked'));
    html += $("#add-script").val() + '\r\n';
    html += '</body>\r\n';
    html += '</html>';
    return html;
}

function domToCss() {
    var css = '';
    css += getStyle($("#template:checked").val());
    return css;
}

function viewCode($obj) {
    if ($obj.parent().hasClass("on")) {
        $("#html-code").val(domToCode());
        $("#css-code").val(domToCss());
        $("#code-handler").show();
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    } else {
        $("#code-handler").hide();
    }
}

function exportZip(projectName) {
    if (!JSZip.support.blob) {
        console.log("Your Browser didn't support One Key Export, pleace use Firefox or Chrome Browser");
        return;
    }

    var zip = new JSZip();
    zip.file("index.html", $("#html-code").val());
    zip.file("css/global.css", $("#css-code").val());
    zip.file("images/favicon.ico", icon, {
        base64: true
    });
    zip.folder("js");

    var x_axis = y_axis = width = height = 0;
    var temp = document.getElementById('tempCanvas');

    function cutImage(x_axis, y_axis, width, height, name) {
        imageData = context.getImageData(x_axis, y_axis, width, height);
        if (width != temp.width) temp.width = width;
        if (height != temp.height) temp.height = height;
        var ctx = temp.getContext('2d');
        ctx.clearRect(0, 0, temp.width, temp.height);
        ctx.putImageData(imageData, 0, 0);

        var imgData = temp.toDataURL("image/png").split(',')[1];
        zip.file("images/qd_" + name + ".png", imgData, {
            base64: true
        });
    }

    $(".outer-wrapper").each(function(i) {
        var counter = i + 1;
        var wrapper = $(this);
        var wrapperOffset = wrapper.offset();
        var cvsOffset = $("#myCanvas").offset();
        if (wrapper.children(".split-columns").length > 0) {
            wrapper.children(".split-columns").children("ul").each(function(i) {
                $(this).children("li").each(function(k) {
                    var offset = $(this).offset();
                    var x_axis = offset.left - cvsOffset.left;
                    var y_axis = offset.top - cvsOffset.top;
                    var width = $(this).outerWidth();
                    var height = $(this).outerHeight();
                    cutImage(x_axis, y_axis, width, height, 's' + counter + '_' + 'r' + i + '_' + 'c' + k);
                });
            });
        }
        if (wrapper.hasClass("ignore")) {
            return true;
        }

        x_axis = (cvsOffset.left > 0) ? Math.ceil(wrapperMargin) : Math.ceil(wrapperMargin) - cvsOffset.left;
        y_axis = wrapper.parent().position().top;
        width = wrapperWidth;
        height = wrapper.outerHeight(true);
        cutImage(x_axis, y_axis, width, height, 's' + counter);
        if (wrapper.hasClass("outer-banner")) {
            x_axis = 0;
            width = canvasWidth;
            cutImage(x_axis, y_axis, width, height, 's' + counter + '_bg')
        }
    });
    var content = zip.generate({
        type: "blob"
    });

    if (projectName.length == 0) {
        projectName = "myproject";
    }

    window.saveAs(content, projectName + ".zip");
    return true;
}

//绘制标尺

function loadRuler($obj) {
    if ($obj.parent().hasClass("on")) {
        var width = $(document).width();
        var height = $(document).height();
        if ($("#ruler-x").children("span").length == 0) {
            var scale = Math.floor(width / 50);
            for (var i = 0; i < scale; i++) {
                $("#ruler-x").append("<span>" + (50 * i) + "</span>");
            };
        }
        if ($("#ruler-y").children("span").length == 0) {
            var scale = Math.floor(height / 50);
            for (var i = 0; i < scale; i++) {
                $("#ruler-y").append("<span>" + (50 * i) + "</span>");
            };
        }
        $("#ruler-x").show();
        $("#ruler-y").show();
    } else {
        $("#ruler-x").hide();
        $("#ruler-y").hide();
    }
}

function fullBanner() {
    $("#extra").slideUp("fast");
    if ($(".cur").hasClass("outer-banner")) {
        $(".cur").removeClass("outer-banner");
    } else {
        $(".cur").addClass("outer-banner");
    }
    $("#myWidgets").css("left", $(".cur").offset().left);
}

function bgColor($obj) {
    $("#extra").children("div").hide();
    if ($obj.parent().hasClass("on")) {
        var section = $(".cur").parent();
        if (section.hasClass("section-bg-color")) {
            var bg = "#" + rgbToHex(section.css("background-color"));
            $("#section-bg-color").val(bg);
        }
        $("#extra").slideDown("fast");
        $("#extra").children("." + $obj.attr("id")).show();
    } else {
        $("#extra").children("div").hide();
        $("#extra").slideUp("fast");
    }
}

function setBgColor() {
    var color = $("#section-bg-color").val();
    var regex = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;
    if (regex.test(color)) {
        $(".cur").parent().css("background-color", color);
        $(".cur").parent().addClass("section-bg-color");
        $(".cur").parent().delay(300).fadeTo("fast", 0.5);
        $("#myWidgets").hide();
    } else {
        alert("颜色值设置不正确");
        $("#section-bg-color").focus();
    }
}

function setBgCancel() {
    $(".cur").parent().css({
        "background-color": "rgba(120,120,120,0.2)"
    });
    $(".cur").parent().removeClass("section-bg-color");
    $(".cur").parent().delay(300).fadeTo("fast", 1);
    $("#extra").children("div").hide();
    $("#extra").slideUp("fast");
    $("#bgcolor").parent().removeClass("on");
}

function splitRow() {
    $("#extra").slideUp("fast");
    var parent = $(".cur").parent();
    var height = parent.height();
    var harf = Math.ceil(height / 2);
    var before = $('<section class="outer-section isplit" style="height:0;"><div class="outer-handler"><em></em><span>height:' + harf + 'px;</span></div><div class="outer-wrapper" style="width: ' + wrapperWidth + 'px;margin-left:' + Math.ceil(wrapperMargin) + 'px;margin-right:' + Math.floor(wrapperMargin) + 'px;"></div><em class="removeIt"></em></section>');
    parent.before(before);
    before.animate({
        height: harf + "px"
    });
    before.children(".outer-wrapper").height(harf);
    setHeight(parent, height - harf, false);
    $(".outer-handler").each(function(i) {
        var len = i + 1;
        $(this).children("em").html('S' + len);
    });
    parent.children(".outer-wrapper").removeClass("cur");
    before.children(".outer-wrapper").addClass("cur");
}

function mergeDown($obj) {
    var next = $obj.next();
    if (next) {
        var nextHeight = next.height() + $obj.outerHeight(true);
        setHeight(next, nextHeight, false);
    }
    $obj.remove();
    $(".outer-handler").each(function(i) {
        var len = i + 1;
        $(this).children("em").html('S' + len);
    });
    next.children(".outer-wrapper").addClass("cur");
}

function splitColumn($obj) {
    $("#extra").children("div").hide();
    if ($obj.parent().hasClass("on")) {
        $("#extra").slideDown("fast");
        $("#extra").children("." + $obj.attr("id")).show();
    } else {
        $("#extra").children("div").hide();
        $("#extra").slideUp("fast");
    }
}

function doSplitColumn() {
    var html = '';
    var border = 'border:1px dashed #036;';
    var top = $("#top-edge").val();
    var bottom = $("#bottom-edge").val();
    var left = $("#left-edge").val();
    var right = $("#right-edge").val();
    var erow = $("#row-space").val();
    var ecolumn = $("#column-space").val();
    var frow = $("#few-row").children(":selected").val();
    var fcolumn = $("#few-column").children(":selected").val();
    var columns_width = wrapperWidth - left - right;
    var columns_height = $(".cur").height() - top - bottom;
    var width = (columns_width - ecolumn * (fcolumn - 1)) / fcolumn;
    var height = (columns_height - erow * (frow - 1)) / frow;
    var wyu = Math.floor(width);
    var hyu = Math.floor(height);

    wyu = (width > wyu) ? Math.ceil(1 / (width - wyu)) : 0;
    hyu = (height > hyu) ? Math.ceil(1 / (height - hyu)) : 0;
    if (top == bottom && left == right) {
        if (top == left) {
            html = '<div class="split-columns" style="height:' + columns_height + 'px;padding:' + top + 'px;">';
        } else {
            html = '<div class="split-columns" style="height:' + columns_height + 'px;padding:' + top + 'px ' + left + 'px;">';
        }
    } else {
        html = '<div class="split-columns" style="height:' + columns_height + 'px;padding:' + top + 'px ' + right + 'px ' + bottom + 'px ' + left + 'px;">';
    }
    for (var i = 0; i < frow; i++) {
        y = (i % hyu == hyu - 1) ? Math.ceil(height) : Math.floor(height);
        if (erow > 0 && i > 0) {
            html += '<ul style="width:100%;margin-top:' + erow + 'px;float:left;">';
        } else {
            html += '<ul style="width:100%;float:left;">';
        }
        for (var k = 0; k < fcolumn; k++) {
            x = (k % wyu == wyu - 1) ? Math.ceil(width) : Math.floor(width);
            if (ecolumn > 0 && k > 0) {
                html += '<li style="width:' + (x - 2) + 'px;height:' + (y - 2) + 'px;margin-left:' + ecolumn + 'px;' + border + 'float:left;"></li>';
            } else {
                html += '<li style="width:' + (x - 2) + 'px;height:' + (y - 2) + 'px;' + border + 'float:left;"></li>';
            }
        }
        html += '</ul>';
    };

    html += '</div>';
    $(".cur").html(html);
    $("#extra").children("div").hide();
    $("#extra").slideUp("fast");
    $("#columns").parent().removeClass("on");
}

function splitColumnCancel() {
    $("#extra").children("div").hide();
    $("#extra").slideUp("fast");
    $("#columns").parent().removeClass("on");
}

function addLink($obj) {
    $("#extra").children("div").hide();
    if ($obj.parent().hasClass("on")) {
        $("#extra").slideDown("fast");
        $("#extra").children("." + $obj.attr("id")).show();
    } else {
        $("#extra").children("div").hide();
        $("#extra").slideUp("fast");
    }
}

function ignore($obj) {
    $("#extra").slideUp("fast");
    if ($(".cur").hasClass("ignore")) {
        $(".cur").removeClass("ignore");
    } else {
        $(".cur").addClass("ignore");
    }
}

function setHeight($obj, height, resize) {
    var wrapper = $obj.children(".outer-wrapper");
    setColumnsHeight(wrapper, height);
    wrapper.height(height);
    $obj.children(".outer-handler").children("span").html('height:' + height + 'px;');
    $obj.height(height);
}

function setColumnsHeight(wrapper, height) {
    if (wrapper.children(".split-columns").length > 0) {
        var columns = wrapper.children(".split-columns");
        var len = columns.children("ul").length;
        var dif = wrapper.height() - height;
        var cli = 0;
        columns.children("ul").each(function(i) {
            cli += $(this).children("li:first").height();
        });
        var per = (height - (columns.height() - cli)) / len;
        if (len > 1) {
            columns.children("ul:even").children("li").height(Math.floor(per));
            columns.children("ul:odd").children("li").height(Math.ceil(per));
        } else {
            columns.children("ul").children("li").height(height);
        }
        columns.height(columns.height() - dif);
    }
    return false;
}

function isIE() {
    return /(msie\s|trident.*rv:)([\w.]+)/.test(navigator.userAgent.toLowerCase());
}

function HexToRgb(color) {
    var r = /^\#?[0-9a-fA-F]{6}$/;
    if (!r.test(color)) return window.alert("输入错误的hex颜色值");
    color = color.replace("#", "");
    var hxs = color.match(/../g);
    for (var i = 0; i < 3; i++) {
        hxs[i] = parseInt(hxs[i], 16);
    }
    return hxs;
}

function rgbToHex(rgb) {
    if (/^(rgb|RGB)/.test(rgb)) {
        var black = "000000";
        var rgba = rgb.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        var color = ((rgba[0] << 16) | (rgba[1] << 8) | rgba[2]).toString(16);
        var len = color.length;
        if (len < 6) {
            color = black.substring(0, 6 - len) + color;
        }
        return color.toUpperCase();
    }
}