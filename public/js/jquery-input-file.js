! function (e) {
    "use strict";
    var t = 0,
        i = function (t, i) {
            this.options = i, this.$elementFilestyle = [], this.$element = e(t)
        };
    i.prototype = {
        clear: function () {
            this.$element.val(""), this.$elementFilestyle.find(":text").val(""), this.$elementFilestyle.find(".badge").remove()
        },
        destroy: function () {
            this.$element.removeAttr("style").removeData("filestyle"), this.$elementFilestyle.remove()
        },
        disabled: function (e) {
            return e !== !0 && e !== !1 ? this.options.disabled : (this.options.disabled = e, this.$element.prop("disabled", this.options.disabled), this.$elementFilestyle.find("label").prop("disabled", this.options.disabled), this.options.disabled ? this.$elementFilestyle.find("label").css("opacity", "0.65") : this.$elementFilestyle.find("label").css("opacity", "1"), void 0)
        },
        dragdrop: function (e) {
            return e !== !0 && e !== !1 ? this.options.dragdrop : void(this.options.dragdrop = e)
        },
        buttonBefore: function (e) {
            if (e === !0) this.options.buttonBefore || (this.options.buttonBefore = e, this.options.input && (this.$elementFilestyle.remove(), this.constructor(), this.pushNameFiles()));
            else {
                if (e !== !1) return this.options.buttonBefore;
                this.options.buttonBefore && (this.options.buttonBefore = e, this.options.input && (this.$elementFilestyle.remove(), this.constructor(), this.pushNameFiles()))
            }
        },
        input: function (e) {
            if (e === !0) this.options.input || (this.options.input = e, this.options.buttonBefore ? this.$elementFilestyle.append(this.htmlInput()) : this.$elementFilestyle.prepend(this.htmlInput()), this.pushNameFiles(), this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn"));
            else {
                if (e !== !1) return this.options.input;
                this.options.input && (this.options.input = e, this.$elementFilestyle.find(":text").remove(), this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn"))
            }
        },
        size: function (e) {
            if (void 0 === e) return this.options.size;
            this.options.size = e;
            var t = this.$elementFilestyle.find("label"),
                i = this.$elementFilestyle.find("input");
            t.removeClass("btn-lg btn-sm"), i.removeClass("form-control-lg form-control-sm"), "nr" != this.options.size && (t.addClass("btn-" + this.options.size), i.addClass("form-control-" + this.options.size))
        },
        placeholder: function (e) {
            return void 0 === e ? this.options.placeholder : (this.options.placeholder = e, void this.$elementFilestyle.find("input").attr("placeholder", e))
        },
        text: function (e) {
            return void 0 === e ? this.options.text : (this.options.text = e, void this.$elementFilestyle.find("label .text").html(this.options.text))
        },
        btnClass: function (e) {
            return void 0 === e ? this.options.btnClass : (this.options.btnClass = e, void this.$elementFilestyle.find("label").attr({
                "class": "btn " + this.options.btnClass + " btn-" + this.options.size
            }))
        },
        badge: function (e) {
            if (e === !0) {
                this.options.badge = e;
                var t = this.pushNameFiles();
                this.$elementFilestyle.find("label").append(' <span class="badge ' + this.options.badgeName + '">' + t.length + "</span>")
            } else {
                if (e !== !1) return this.options.badge;
                this.options.badge = e, this.$elementFilestyle.find(".badge").remove()
            }
        },
        badgeName: function (e) {
            return void 0 === e ? this.options.badgeName : (this.options.badgeName = e, void this.$elementFilestyle.find(".badge").attr({
                "class": "badge " + this.options.badgeName
            }))
        },
        htmlIcon: function (e) {
            return void 0 !== e && (this.options.htmlIcon = e), this.options.htmlIcon
        },
        htmlInput: function () {
            return this.options.input ? '<input type="text" class="form-control ' + ("nr" == this.options.size ? "" : "form-control-" + this.options.size) + '" placeholder="' + this.options.placeholder + '" disabled > ' : ""
        },
        pushNameFiles: function () {
            var e = "",
                t = [];
            void 0 === this.$element[0].files ? t[0] = {
                name: this.$element[0] && this.$element[0].value
            } : t = this.$element[0].files;
            for (var i = 0; i < t.length; i++) e += t[i].name.split("\\").pop() + ", ";
            return "" !== e ? this.$elementFilestyle.find(":text").val(e.replace(/\, $/g, "")) : this.$elementFilestyle.find(":text").val(""), t
        },
        constructor: function () {
            var i = this,
                n = "",
                s = i.$element.attr("id"),
                l = "";
            "" !== s && s || (s = "filestyle-" + t, i.$element.attr({
                id: s
            }), t++), l = '<span class="group-span-filestyle ' + (i.options.input ? "input-group-btn" : "") + '"><label for="' + s + '" style="margin-bottom: 0;" class="btn ' + i.options.btnClass + " " + ("nr" == i.options.size ? "" : "btn-" + i.options.size) + '" ' + (i.options.disabled || i.$element.attr("disabled") ? ' disabled="true"' : "") + ">" + i.htmlIcon() + '<span class="buttonText">' + i.options.text + "</span></label></span>", n = i.options.buttonBefore ? l + i.htmlInput() : i.htmlInput() + l, i.$elementFilestyle = e('<div class="bootstrap-filestyle input-group"><div name="filedrag"></div>' + n + "</div>"), i.$elementFilestyle.find(".group-span-filestyle").attr("tabindex", "0").keypress(function (e) {
                return 13 === e.keyCode || 32 === e.charCode ? (i.$elementFilestyle.find("label").click(), !1) : void 0
            }), i.$element.css({
                position: "absolute",
                clip: "rect(0px 0px 0px 0px)"
            }).attr("tabindex", "-1").after(i.$elementFilestyle), i.$elementFilestyle.find(i.options.buttonBefore ? "label" : ":input").css({
                "border-top-left-radius": ".25rem",
                "border-bottom-left-radius": ".25rem"
            }), i.$elementFilestyle.find('[name="filedrag"]').css({
                position: "absolute",
                width: "100%",
                height: i.$elementFilestyle.height() + "px",
                "z-index": -1
            }), (i.options.disabled || i.$element.attr("disabled")) && (i.$element.attr("disabled", "true"), i.options.disabled ? i.$elementFilestyle.find("label").css("opacity", "0.65") : i.$elementFilestyle.find("label").css("opacity", "1")), i.$element.change(function () {
                var e = i.pushNameFiles();
                i.options.badge ? 0 == i.$elementFilestyle.find(".badge").length ? i.$elementFilestyle.find("label").append(' <span class="badge ' + i.options.badgeName + '">' + e.length + "</span>") : 0 == e.length ? i.$elementFilestyle.find(".badge").remove() : i.$elementFilestyle.find(".badge").html(e.length) : i.$elementFilestyle.find(".badge").remove(), i.options.onChange(e)
            }), window.navigator.userAgent.search(/firefox/i) > -1 && i.$elementFilestyle.find("label").click(function () {
                return i.$element.click(), !1
            }), e(document).on("dragover", function (t) {
                t.preventDefault(), t.stopPropagation(), i.options.dragdrop && e('[name="filedrag"]').css("z-index", "9")
            }).on("drop", function (t) {
                t.preventDefault(), t.stopPropagation(), i.options.dragdrop && e('[name="filedrag"]').css("z-index", "-1")
            }), i.$elementFilestyle.find('[name="filedrag"]').on("dragover", function (e) {
                e.preventDefault(), e.stopPropagation()
            }).on("dragenter", function (e) {
                e.preventDefault(), e.stopPropagation()
            }).on("drop", function (t) {
                if (t.originalEvent.dataTransfer && !i.options.disabled && i.options.dragdrop && t.originalEvent.dataTransfer.files.length) {
                    t.preventDefault(), t.stopPropagation(), i.$element[0].files = t.originalEvent.dataTransfer.files;
                    var n = i.pushNameFiles();
                    i.options.badge ? 0 == i.$elementFilestyle.find(".badge").length ? i.$elementFilestyle.find("label").append(' <span class="badge ' + i.options.badgeName + '">' + n.length + "</span>") : 0 == n.length ? i.$elementFilestyle.find(".badge").remove() : i.$elementFilestyle.find(".badge").html(n.length) : i.$elementFilestyle.find(".badge").remove(), e('[name="filedrag"]').css("z-index", "-1")
                }
            })
        }
    };
    var n = e.fn.filestyle;
    e.fn.filestyle = function (t, n) {
        var s = "",
            l = this.each(function () {
                if ("file" === e(this).attr("type")) {
                    var l = e(this),
                        o = l.data("filestyle"),
                        a = e.extend({}, e.fn.filestyle.defaults, t, "object" == typeof t && t);
                    o || (l.data("filestyle", o = new i(this, a)), o.constructor()), "string" == typeof t && (s = o[t](n))
                }
            });
        return void 0 !== typeof s ? s : l
    }, e.fn.filestyle.defaults = {
        text: "Selecionar arquivo",
        htmlIcon: "",
        btnClass: "btn btn-default",
        size: "nr",
        input: !0,
        badge: !1,
        badgeName: "badge-light",
        buttonBefore: !1,
        dragdrop: !0,
        disabled: !1,
        placeholder: "Selecione um arquivo",
        onChange: function () {}
    }, e.fn.filestyle.noConflict = function () {
        return e.fn.filestyle = n, this
    }, e(function () {
        e(".filestyle").each(function () {
            var t = e(this),
                i = {
                    input: "false" !== t.attr("data-input"),
                    htmlIcon: t.attr("data-icon"),
                    buttonBefore: "true" === t.attr("data-buttonBefore"),
                    disabled: "true" === t.attr("data-disabled"),
                    size: t.attr("data-size"),
                    text: t.attr("data-text"),
                    btnClass: t.attr("data-btnClass"),
                    badge: "true" === t.attr("data-badge"),
                    dragdrop: "false" !== t.attr("data-dragdrop"),
                    badgeName: t.attr("data-badgeName"),
                    placeholder: t.attr("data-placeholder")
                };
            t.filestyle(i)
        })
    })
}(window.jQuery);